import { IStationList } from '@app/admin/models/station-list.model';
import { createAction, props } from '@ngrx/store';

export enum EStationActions {
  LoadStationList = '[Station] Load Station List',
  LoadStationSuccess = '[Station] Load Station Succsess',
  CreateNewStation = '[Station] Create New Station',
}

export const StationsActions = {
  loadStationList: createAction(EStationActions.LoadStationList),
  loadStationsSuccess: createAction(EStationActions.LoadStationSuccess, props<{ stations: IStationList[] }>()),
  createNewStation: createAction(EStationActions.CreateNewStation),
};
