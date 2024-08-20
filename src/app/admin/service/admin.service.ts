import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
// import { IStationList } from '../models/station-list.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private apiUrl = 'http://localhost:4200';

  private http = inject(HttpClient);

  getStationList() {
    return this.http.get(`/api/station`);
  }
}
