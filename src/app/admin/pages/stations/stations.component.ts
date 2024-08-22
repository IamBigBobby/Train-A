import { AfterViewInit, Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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

  public stationForm: FormGroup = this.formBuilder.group({
    city: [{ value: '', disabled: true }],
    latitude: '',
    longitude: '',
    connections: this.formBuilder.array([new FormControl<string | null>(null)]),
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

  public onCoordinatesChange(): void {
    const lat = parseFloat(this.stationForm.value.latitude);
    const lng = parseFloat(this.stationForm.value.longitude);

    if (!Number.isNaN(lat) && !Number.isNaN(lng)) {
      this.mapService.getCityName(lat, lng).then((city) => {
        this.stationForm.patchValue({ city });
        this.mapService.updateMapMarker(lat, lng, city);
      });
    }
  }

  public onSelectChange(index: number): void {
    if (index === this.connections.length - 1) {
      this.connections.push(new FormControl<string | null>(null));
    }
  }

  get connections(): FormArray {
    return this.stationForm.get('connections') as FormArray;
  }
}
