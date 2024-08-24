import { createSelector } from '@ngrx/store';
import { IStationList } from '@app/admin/models/station-list.model';
import { AppState } from '../../app-state';

export const selectAppState = (state: AppState) => state;

export const selectStationArr = createSelector(selectAppState, (state: AppState) => state.stationState.stationList);

export const selectStationIdAndCity = createSelector(selectStationArr, (stationList: IStationList[]) =>
  stationList.map(({ id, city }) => ({ id, city }))
);

