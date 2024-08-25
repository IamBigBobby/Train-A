import { inject, Injectable } from '@angular/core';
import { AdminService } from '@app/admin/service/admin.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, EMPTY, map, switchMap } from 'rxjs';
import { IStationList } from '@app/admin/models/station-list.model';
import { ICreateAdmin } from '@app/admin/models/create-admin';
import { Store } from '@ngrx/store';
import { StationsActions } from '../actions/stations.actions';

@Injectable({
  providedIn: 'root',
})
export class StationEffectService {
  private actions$ = inject(Actions);

  private adminService = inject(AdminService);

  private store = inject(Store);

  readonly newAdmin: ICreateAdmin = {
    email: 'admin@admin.com',
    password: 'my-password',
  };

  loadStations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StationsActions.loadStationList),
      switchMap(() =>
        this.adminService.getStationList().pipe(
          map((stations: IStationList[]) => StationsActions.loadStationsSuccess({ stations })),
          catchError((error) => {
            console.error('Error loading videos:', error);
            return EMPTY;
          })
        )
      )
    )
  );

  createStation$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StationsActions.createNewStation),
      switchMap(({ station }) =>
        this.adminService.loginAdmin(this.newAdmin).pipe(
          concatMap((response) => {
            this.adminService.token$.next(response.token);
            return this.adminService.createNewStation(station);
          }),
          concatMap(() => {
            return this.adminService.getStationList();
          }),
          map(() => StationsActions.loadStationList()),
          catchError((error) => {
            if(error.status === 400){
              alert('Error adding station: Incorrect data!');
            } else {
              console.error('Error loading videos:', error);
            }
            return EMPTY;
          })
        )
      )
    );
  });

  deleteStation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StationsActions.deleteStation),
      switchMap(({ idStation }) => {
        this.store.dispatch(StationsActions.deleteStationIndicate());
        return this.adminService.deleteStation(idStation).pipe(
          switchMap(() => this.adminService.getStationList()),
          map((stations: IStationList[]) => {
            this.store.dispatch(StationsActions.deletStationIndicateSuccsess());
            return StationsActions.loadStationsSuccess({ stations });
          }),
          catchError((error) => {
            console.error('Error deleting station:', error);
            return EMPTY;
          })
        );
      })
    )
  );
}
