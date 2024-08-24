import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ICreateAdmin } from '@app/admin/models/create-admin';
import { ICreateStation } from '@app/admin/models/create-station.model';
import { AdminService } from '@app/admin/service/admin.service';
import { MapService } from '@app/admin/service/map.service';
import { StationsActions } from '@app/core/store/admin-store/actions/stations.actions';
import { selectCityNames } from '@app/core/store/admin-store/selectors/stations.selectors';
import { Store } from '@ngrx/store';
import { TuiButton, TuiDataList } from '@taiga-ui/core';
import { TuiDataListWrapper } from '@taiga-ui/kit/components/data-list-wrapper';
import { TuiInputModule, TuiSelectModule } from '@taiga-ui/legacy';
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-stations',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TuiInputModule,
    TuiSelectModule,
    TuiDataListWrapper,
    TuiDataList,
    TuiButton,
    CommonModule,
  ],
  templateUrl: './stations.component.html',
  styleUrl: './stations.component.scss',
})
export class StationComponent implements AfterViewInit, OnInit {
  private adminService = inject(AdminService);

  private mapService = inject(MapService);

  private formBuilder = inject(FormBuilder);

  private store = inject(Store);

  public testItems$ = this.store.select(selectCityNames);

  public stationForm: FormGroup = this.formBuilder.group({
    city: [{ value: '', disabled: true }],
    latitude: '',
    longitude: '',
    connections: this.formBuilder.array([new FormControl<string | null>(null)]),
  });

  newAdmin: ICreateAdmin = {
    email: 'admin@admin.com',
    password: 'my-password',
  };

  ngOnInit(): void {
    this.store.dispatch(StationsActions.loadStationList());

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

  public createStation() {
    const connections = this.stationForm.get('connections')?.value.slice(0, -1);

    const newStation: ICreateStation = {
      city: this.stationForm.get('city')?.value,
      latitude: this.stationForm.get('latitude')?.value,
      longitude: this.stationForm.get('longitude')?.value,
      relations: connections,
    };

    this.adminService
      .loginAdmin(this.newAdmin)
      .pipe(
        concatMap((response) => {
          // console.log('get admin token', response);
          this.adminService.token$.next(response.token);
          return this.adminService.createNewStation(newStation);
        }),
        concatMap(() => {
          // console.log('new city id', response);
          return this.adminService.getStationList();
        })
      )
      .subscribe({
        next: () => {
          // console.log('fetch data', response);
        },
        error: (error) => console.error('error', error),
      });
    this.resetForm();
  }

  public resetForm() {
    this.stationForm.reset({
      city: '',
      latitude: '',
      longitude: '',
    });
    this.connections.clear();
    this.connections.push(new FormControl<string | null>(null));
  }

  get connections(): FormArray {
    return this.stationForm.get('connections') as FormArray;
  }

  // eslint-disable-next-line class-methods-use-this
  public getItemContent(item: { city: string; id: number }): string {
    return item.city;
  }
}
