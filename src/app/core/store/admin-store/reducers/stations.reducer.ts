import { createReducer, on } from '@ngrx/store';
import { initionalStationState, IStationState } from '../state/station-state';
import { StationsActions } from '../actions/stations.actions';
import { IStationList } from '@app/admin/models/station-list.model';

export const stationsReducer = createReducer(
  initionalStationState,
  on(StationsActions.loadStationsSuccess, (state, { stations }): IStationState => {
    return {
      ...state,
      stationList: stations,
    };
  }),
  on(StationsActions.createNewStation, (state, {station}): IStationState  => {
    return {
      ...state,
      stationList: [...state.stationList, station]
    }
  })
);
