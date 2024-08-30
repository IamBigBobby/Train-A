import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ICreateAdmin } from '@app/admin/models/create-admin';
import { AdminService } from '@app/admin/service/admin.service';
import { RoutesActions } from '@app/core/store/admin-store/actions/routes.action';
import { selectRoutesArr } from '@app/core/store/admin-store/selectors/routes.selector';
import { Store } from '@ngrx/store';
import { TuiButton } from '@taiga-ui/core';
import { distinctUntilChanged, map, Observable, tap } from 'rxjs';
import { selectStationIdAndCity } from '@app/core/store/admin-store/selectors/stations.selectors';
import { IStation } from '@app/admin/models/station-list.model';
import { RouteCardComponent } from './components/route-card/route-card.component';
import { CreateRouteFormComponent } from './components/create-route-form/create-route-form.component';
import { selectCarriagesIdAndName } from '@app/core/store/admin-store/selectors/carriage.selectors';

@Component({
  selector: 'app-routes',
  standalone: true,
  imports: [TuiButton, CommonModule, RouteCardComponent, CreateRouteFormComponent],
  template: `
    @if (isRoutesCreateFormOpen) {
      @let carriagesArr = carriagesArr$ | async;
      @let stationArr = stationArr$ | async;
      @if (stationArr && carriagesArr) {
        <app-create-route-form
          [stationData]="stationArr"
          [carriagesData]="carriagesArr"
          (formClosed)="closeRoutesCreateForm()"
        ></app-create-route-form>
      }
    } @else {
      <button size="s" tuiButton (click)="openRoutesCreateForm()">Create</button>
    }
    @let routes = routesList$ | async;
    @if (routes) {
      @for (route of routes; track route.id) {
        <app-route-card [routeData]="route" [stationData]="getCitiesByIds(route.path)"></app-route-card>
      }
    }
  `,
  styleUrl: './routes.component.scss',
})
export class RoutesComponent implements OnInit {
  private adminService = inject(AdminService);

  private store = inject(Store);

  public routesList$ = this.store.select(selectRoutesArr);

  public stationArr$ = this.store.select(selectStationIdAndCity);

  public carriagesArr$ = this.store.select(selectCarriagesIdAndName);

  public cdr = inject(ChangeDetectorRef);

  isRoutesCreateFormOpen: boolean = false;

  // for developing
  readonly newAdmin: ICreateAdmin = {
    email: 'admin@admin.com',
    password: 'my-password',
  };

  constructor() {
    this.adminService
      .loginAdmin(this.newAdmin)
      .pipe(
        tap((response) => {
          this.adminService.token$.next(response.token);
        })
      )
      .subscribe();
  }

  ngOnInit(): void {
    this.store.dispatch(RoutesActions.loadRoutesList());
  }

  openRoutesCreateForm() {
    this.isRoutesCreateFormOpen = true;
  }

  closeRoutesCreateForm() {
    this.isRoutesCreateFormOpen = false;
  }

  getCitiesByIds(cityIds: number[]): Observable<Pick<IStation, 'id' | 'city'>[]> {
    return this.stationArr$.pipe(
      map((stations) => stations.filter((station) => cityIds.includes(station.id))),
      distinctUntilChanged()
    );
  }
}
