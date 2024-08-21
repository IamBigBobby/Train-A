import { Injectable } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private map!: L.Map;

  private currentMarker: L.Marker | undefined;

  public initMap(mapId: string, center: [number, number], zoom: number): void {
    this.map = L.map(mapId, {
      center,
      zoom,
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    });

    tiles.addTo(this.map);

    this.map.on('click', (e: L.LeafletMouseEvent) => {
      this.onMapClick(e);
    });
  }

  private onMapClick(e: L.LeafletMouseEvent): void {
    if (this.currentMarker) {
      this.map.removeLayer(this.currentMarker);
    }

    const marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(this.map);

    this.getCityName(e.latlng.lat, e.latlng.lng).then((cityName) => {
      marker.bindPopup(`${cityName}`).openPopup();
    });

    this.currentMarker = marker;

    // console.log('Широта:', e.latlng.lat, 'Долгота:', e.latlng.lng);
  }

  // eslint-disable-next-line class-methods-use-this
  private async getCityName(lat: number, lng: number): Promise<string> {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=10&addressdetails=1`
    );
    const data = await response.json();
    return data.address.city || data.address.town || data.address.village || 'Неизвестный город';
  }
}
