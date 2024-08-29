import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICreateStationResponse, IStation } from '../models/station-list.model';
import { ICreateStation } from '../models/create-station.model';
import { IAdminToken, ICreateAdmin } from '../models/create-admin';
import { ICarriagesType } from '../models/create-new-carriage-type.model';
import { IRoutes } from '../models/routes.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private http = inject(HttpClient);

  public token$ = new BehaviorSubject('');

  getStationList(): Observable<IStation[]> {
    return this.http.get<IStation[]>(`/api/station`);
  }

  createNewStation(stationData: ICreateStation): Observable<ICreateStationResponse> {
    return this.http.post<ICreateStationResponse>(`/api/station`, stationData, {
      headers: {
        Authorization: `Bearer ${this.token$.value}`,
      },
    });
  }

  deleteStation(stationId: number): Observable<void> {
    return this.http.delete<void>(`/api/station/${stationId}`, {
      headers: {
        Authorization: `Bearer ${this.token$.value}`,
      },
    });
  }

  getCarriageList(): Observable<ICarriagesType[]> {
    return this.http.get<ICarriagesType[]>('/api/carriage');
  }

  createNewCarriageType(newCarriageType: ICarriagesType): Observable<Pick<ICarriagesType, 'code'>> {
    return this.http.post<ICarriagesType>('/api/carriage', newCarriageType, {
      headers: {
        Authorization: `Bearer ${this.token$.value}`,
      },
    });
  }

  updateCarriageType(
    carriageType: string,
    updateCarriageType: ICarriagesType
  ): Observable<Omit<ICarriagesType, 'code'>> {
    return this.http.put<Omit<ICarriagesType, 'code'>>(`/api/carriage/${carriageType}`, updateCarriageType, {
      headers: {
        Authorization: `Bearer ${this.token$.value}`,
      },
    });
  }

  getRoutes(): Observable<IRoutes> {
    return this.http.get<IRoutes>('/api/route');
  }

  createRoute(newRoute: IRoutes): Observable<IRoutes> {
    return this.http.post<IRoutes>('api/route', newRoute, {
      headers: {
        Authorization: `Bearer ${this.token$.value}`,
      },
    });
  }

  updRoutes(IdRoute: number, updRoute: IRoutes): Observable<IRoutes> {
    return this.http.put<IRoutes>(`/api/route/${IdRoute}`, updRoute, {
      headers: {
        Authorization: `Bearer ${this.token$.value}`,
      },
    });
  }

  deleteRoute(IdRoute: number): Observable<void> {
    return this.http.delete<void>(`/api/route/${IdRoute}`);
  }

  // it's for developing
  loginAdmin(admin: ICreateAdmin): Observable<IAdminToken> {
    return this.http.post<IAdminToken>(`/api/signin`, admin);
  }
}
