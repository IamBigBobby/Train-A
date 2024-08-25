import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ICreateAdmin } from '@app/admin/models/create-admin';
import { ICreateStation } from '@app/admin/models/create-station.model';
import { AdminService } from '@app/admin/service/admin.service';
import { MapService } from '@app/admin/service/map.service';
import { StationsActions } from '@app/core/store/admin-store/actions/stations.actions';
import { selectStationArr, selectStationIdAndCity } from '@app/core/store/admin-store/selectors/stations.selectors';
import { Store } from '@ngrx/store';
import { TuiLet } from '@taiga-ui/cdk/directives/let';
import { TuiContext, tuiPure, TuiStringHandler } from '@taiga-ui/cdk';
import { TuiButton, TuiDataList, TuiLoader } from '@taiga-ui/core';
import { TuiDataListWrapper } from '@taiga-ui/kit/components/data-list-wrapper';
import { TuiInputModule, TuiSelectModule } from '@taiga-ui/legacy';
import { IStationList } from '@app/admin/models/station-list.model';

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
    TuiLet,
    TuiLoader,
  ],
  templateUrl: './stations.component.html',
  styleUrl: './stations.component.scss',
})
export class StationComponent implements AfterViewInit, OnInit {
  readonly LAT_DEF = 54.526;

  readonly LNG_DEF = 15.2551;

  readonly SCALE_DEF = 4;

  private mapService = inject(MapService);

  private formBuilder = inject(FormBuilder);

  private store = inject(Store);

  public stations$ = this.store.select(selectStationArr);

  public stationsAndId$ = this.store.select(selectStationIdAndCity);

  public stationsAndId!: Pick<IStationList, 'id' | 'city'>[];

  public stationForm: FormGroup = this.formBuilder.group({
    city: [{ value: '', disabled: true }],
    latitude: '',
    longitude: '',
    connections: this.formBuilder.array([new FormControl<string | null>(null)]),
  });

  get connections(): FormArray {
    return this.stationForm.get('connections') as FormArray;
  }

  ngOnInit(): void {
    this.store.dispatch(StationsActions.loadStationList());

    this.mapService.coordinates$.subscribe(({ lat, lng, city }) => {
      this.stationForm.patchValue({
        latitude: lat,
        longitude: lng,
        city,
      });
    });

    this.stationsAndId$.subscribe((cities) => {
      this.stationsAndId = cities;
    });
  }

  ngAfterViewInit(): void {
    this.mapService.initMap('map', [this.LAT_DEF, this.LNG_DEF], this.SCALE_DEF);
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
    this.store.dispatch(StationsActions.createNewStation({ station: newStation }));
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

  public getCityNameById(id: number): string {
    const city = this.stationsAndId.find((station) => station.id === id);
    return city ? city.city : 'Unknown';
  }

  // eslint-disable-next-line class-methods-use-this
  @tuiPure
  protected stringify(items: { id: number; city: string }[]): TuiStringHandler<TuiContext<number>> {
    const map = new Map(items.map(({ id, city }) => [id, city] as [number, string]));

    return ({ $implicit }: TuiContext<number>) => map.get($implicit) || '';
  }
}
