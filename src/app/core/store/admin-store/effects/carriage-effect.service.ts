import { inject, Injectable } from '@angular/core';
import { AdminService } from '@app/admin/service/admin.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap, map } from 'rxjs';
import { ICarriage } from '@app/admin/models/create-new-carriage-type.model';
import { CarriageActions } from '../actions/carriage.actions';

@Injectable({
  providedIn: 'root',
})
export class CarriageEffectService {
  private actions$ = inject(Actions);

  private adminService = inject(AdminService);

  private store = inject(Store);

  loadCarriages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CarriageActions.loadCarriagesList),
      switchMap(() =>
        this.adminService
          .getCarriageList()
          .pipe(map((carriages: ICarriage[]) => CarriageActions.loadCarriagesListSuccsess({ carriageList: carriages })))
      )
    )
  );

  createCarriages$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CarriageActions.createNewCarriageType),
        switchMap(({ newCarriages }) => this.adminService.createNewCarriageType(newCarriages))
      ),
    { dispatch: false }
  );

  updCarriages$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CarriageActions.updCarriageTypeSuccsess),
        switchMap(({ code, updatedCarriage }) => this.adminService.updateCarriageType(code, updatedCarriage))
      ),
    { dispatch: false }
  );
}
