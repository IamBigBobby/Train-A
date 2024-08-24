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
            console.error('Error loading videos:', error);
            return EMPTY;
          })
        )
      )
    )
  );
}
