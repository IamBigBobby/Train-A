import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStationList } from '../models/station-list.model';
// import { IStationList } from '../models/station-list.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private http = inject(HttpClient);

  getStationList(): Observable<IStationList[]> {
    return this.http.get<IStationList[]>(`/api/station`);
  }
}
