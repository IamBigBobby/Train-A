import { inject, Injectable } from '@angular/core';
import { AdminService } from '@app/admin/service/admin.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, switchMap } from 'rxjs';
import { IStationList } from '@app/admin/models/station-list.model';
import { StationsActions } from '../actions/stations.actions';

@Injectable({
  providedIn: 'root',
})
export class StationEffectService {
  private actions$ = inject(Actions);

  private adminService = inject(AdminService);

  loadStations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StationsActions.loadStationList),
      switchMap(() =>
        this.adminService.getStationList().pipe(
          map((stations: IStationList[]) => StationsActions.loadStationsSuccess({ stations })),
          catchError((error) => {
            console.error('Error loading stations:', error);
            return EMPTY;
          })
        )
      )
    )
  );

  createStation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StationsActions.createNewStation),
      switchMap(({ station }) =>
        this.adminService.createNewStation(station).pipe(
          switchMap(() => this.adminService.getStationList()),
          map((stations: IStationList[]) => StationsActions.loadStationsSuccess({ stations })),
          catchError((error) => {
            console.error('Error creating station:', error);
            return EMPTY;
          })
        )
      )
    )
  );

  deleteStation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StationsActions.deleteStation),
      switchMap(({ idStation }) =>
        this.adminService.deleteStation(idStation).pipe(
          switchMap(() => this.adminService.getStationList()),
          map((stations: IStationList[]) => StationsActions.loadStationsSuccess({ stations })),
          catchError((error) => {
            console.error('Error deleting station:', error);
            return EMPTY;
          })
        )
      )
    )
  );
}
