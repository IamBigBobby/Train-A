import { AfterViewInit, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ICreateAdmin } from '@app/admin/models/create-admin';
import { ICreateStation } from '@app/admin/models/create-station.model';
import { AdminService } from '@app/admin/service/admin.service';
import { MapService } from '@app/admin/service/map.service';
import { TuiDataList } from '@taiga-ui/core';
import { TuiDataListWrapper } from '@taiga-ui/kit/components/data-list-wrapper';
import { TuiInputModule, TuiSelectModule } from '@taiga-ui/legacy';
// import { concatMap } from 'rxjs';

@Component({
  selector: 'app-stations',
  standalone: true,
  imports: [ReactiveFormsModule, TuiInputModule, TuiSelectModule, TuiDataListWrapper, TuiDataList],
  templateUrl: './stations.component.html',
  styleUrl: './stations.component.scss',
})
export class StationComponent implements AfterViewInit {
  private adminService = inject(AdminService);

  private mapService = inject(MapService);

  private formBuilder = inject(FormBuilder);

  protected items = ['Luke Skywalker', 'Leia Organa Solo', 'Darth Vader', 'Han Solo', 'Obi-Wan Kenobi', 'Yoda'];

  protected items1 = ['R2-D2', 'C-3PO', 'Chewbacca', 'Padmé Amidala', 'Mace Windu', 'Qui-Gon Jinn'];

  protected items2 = ['Lando Calrissian', 'Boba Fett', 'Palpatine', 'Anakin Skywalker', 'Ahsoka Tano', 'Rey Skywalker'];

  public stationForm: FormGroup = this.formBuilder.group({
    city: '',
    latitude: '',
    longitude: '',
    connect1: new FormControl<string | null>(null),
    connect2: new FormControl<string | null>(null),
    connect3: new FormControl<string | null>(null),
  });

  newStation: ICreateStation = {
    city: 'Kalisz',
    latitude: 51.76146548489399,
    longitude: 18.088936305166833,
    relations: [1, 2, 3, 4],
  };

  newAdmin: ICreateAdmin = {
    email: 'admin@admin.com',
    password: 'my-password',
  };

  constructor() {
    // this.adminService
    //   .loginAdmin(this.newAdmin)
    //   .pipe(
    //     concatMap((response) => {
    //       console.log('get admin token', response);
    //       this.adminService.token$.next(response.token);
    //       return this.adminService.createNewStation(this.newStation);
    //     }),
    //     concatMap((response) => {
    //       console.log('new city id', response);
    //       return this.adminService.getStationList();
    //     })
    //   )
    //   .subscribe({
    //     next: (response) => {
    //       console.log('fetch data', response);
    //     },
    //     error: (error) => console.error('error', error),
    //   });
    // this.adminService.getStationList().subscribe({
    //   next: (response) => {
    //     console.log("fetch data", response)
    //   },
    //   error: (error) => console.error("error", error),
    // })

    this.mapService.coordinates$.subscribe(({ lat, lng, city }) => {
      this.stationForm.patchValue({
        latitude: lat,
        longitude: lng,
        city,
      });
    });
  }

  ngAfterViewInit(): void {
    this.mapService.initMap('map', [54.526, 15.2551], 4);
  }
}
