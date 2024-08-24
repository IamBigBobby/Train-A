import { IStationList } from '@app/admin/models/station-list.model';

export interface IStationState {
  stationList: IStationList[];
}

export const initionalStationState: IStationState = {
  stationList: [],
};
