import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateStationResponse, IStation } from '../models/station-list.model';
import { ICreateStation } from '../models/create-station.model';
import { ICarriage } from '../models/create-new-carriage-type.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private http = inject(HttpClient);

  getStationList(): Observable<IStation[]> {
    return this.http.get<IStation[]>(`/api/station`);
  }

  createNewStation(stationData: ICreateStation): Observable<ICreateStationResponse> {
    return this.http.post<ICreateStationResponse>(`/api/station`, stationData);
  }

  deleteStation(stationId: number): Observable<void> {
    return this.http.delete<void>(`/api/station/${stationId}`);
  }

  getCarriageList(): Observable<ICarriage[]> {
    return this.http.get<ICarriage[]>('/api/carriage');
  }

  createNewCarriageType(newCarriageType: ICarriage): Observable<Pick<ICarriage, 'code'>> {
    return this.http.post<ICarriage>('/api/carriage', newCarriageType);
  }

  updateCarriageType(carriageType: string, updateCarriageType: ICarriage): Observable<Omit<ICarriage, 'code'>> {
    return this.http.put<Omit<ICarriage, 'code'>>(`/api/carriage/${carriageType}`, updateCarriageType);
  }
}
