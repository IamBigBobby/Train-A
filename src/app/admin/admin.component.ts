import { AfterViewInit, Component, inject } from '@angular/core';
// import { concatMap } from 'rxjs';
import { AdminService } from './service/admin.service';
import { ICreateStation } from './models/create-station.model';
import { ICreateAdmin } from './models/create-admin';
import { MapService } from './service/map.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent implements AfterViewInit {
  private adminService = inject(AdminService);

  private mapService = inject(MapService);

  newStation: ICreateStation = {
    city: 'Birmingham',
    latitude: 52.4862,
    longitude: -1.8904,
    relations: [4, 7, 9, 14, 21],
  };

  newAdmin: ICreateAdmin = {
    email: 'admin@admin.com',
    password: 'my-password',
  };

  // constructor() {
  //   this.adminService
  //     .loginAdmin(this.newAdmin)
  //     .pipe(
  //       concatMap((response) => {
  //         console.log('get admin token', response);
  //         this.adminService.token$.next(response.token);
  //         return this.adminService.createNewStation(this.newStation);
  //       }),
  //       concatMap((response) => {
  //         console.log('new city id', response);
  //         return this.adminService.getStationList();
  //       })
  //     )
  //     .subscribe({
  //       next: (response) => {
  //         console.log('fetch data', response);
  //       },
  //       error: (error) => console.error('error', error),
  //     });
  // }

  ngAfterViewInit(): void {
    this.mapService.initMap('map', [54.526, 15.2551], 4);
  }
}
