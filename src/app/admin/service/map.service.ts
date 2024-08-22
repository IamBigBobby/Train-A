import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private map!: L.Map;

  private currentMarker!: L.Marker;

  public coordinates$ = new Subject<{ lat: number; lng: number; city: string }>();

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

  private async onMapClick(e: L.LeafletMouseEvent): Promise<void> {
    if (this.currentMarker) {
      this.map.removeLayer(this.currentMarker);
    }

    const marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(this.map);

    const cityName = await this.getCityName(e.latlng.lat, e.latlng.lng);
    marker.bindPopup(`${cityName}`).openPopup();

    this.currentMarker = marker;

    this.coordinates$.next({ lat: e.latlng.lat, lng: e.latlng.lng, city: cityName });

    // console.log('lat:', e.latlng.lat, 'lng:', e.latlng.lng, "city:", cityName);
  }

  // eslint-disable-next-line class-methods-use-this
  private async getCityName(lat: number, lng: number): Promise<string> {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=10&addressdetails=1`
    );
    const data = await response.json();
    return data.address.city || data.address.town || data.address.village || 'Unknown area';
  }
}
