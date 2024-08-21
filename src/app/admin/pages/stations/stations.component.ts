import { AfterViewInit, Component, inject } from '@angular/core';
import { ICreateAdmin } from '@app/admin/models/create-admin';
import { ICreateStation } from '@app/admin/models/create-station.model';
import { AdminService } from '@app/admin/service/admin.service';
import { MapService } from '@app/admin/service/map.service';
// import { concatMap } from 'rxjs';

@Component({
  selector: 'app-stations',
  standalone: true,
  imports: [],
  templateUrl: './stations.component.html',
  styleUrl: './stations.component.scss',
})
export class StationComponent implements AfterViewInit {
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
