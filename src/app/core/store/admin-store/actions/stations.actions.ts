import { ICreateStation } from '@app/admin/models/create-station.model';
import { IStationList } from '@app/admin/models/station-list.model';
import { createAction, props } from '@ngrx/store';

export enum EStationActions {
  LoadStationList = '[Station] Load Station List',
  LoadStationSuccess = '[Station] Load Station Succsess',
  CreateNewStation = '[Station] Create New Station',
  DeleteStation = '[Station] Delete Station',
  DeleteStationIndicate = '[Station] Delete Station Indicate',
  DeleteStationIndicateSuccsess = '[Station] Delet Station Indicate Succsess',
}

export const StationsActions = {
  loadStationList: createAction(EStationActions.LoadStationList),
  loadStationsSuccess: createAction(EStationActions.LoadStationSuccess, props<{ stations: IStationList[] }>()),
  createNewStation: createAction(EStationActions.CreateNewStation, props<{ station: ICreateStation }>()),
  deleteStation: createAction(EStationActions.DeleteStation, props<{ idStation: number }>()),
  deleteStationIndicate: createAction(EStationActions.DeleteStationIndicate),
  deletStationIndicateSuccsess: createAction(EStationActions.DeleteStationIndicateSuccsess),
};
