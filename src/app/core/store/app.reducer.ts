import { ActionReducerMap } from '@ngrx/store';
import { userReducer } from '@core/store/user-store/reducers/user.reducer';
import { orderReducer } from '@core/store/order-store/reducers/order.reducer';
import { AppState } from './app-state';
import { stationsReducer } from './admin-store/reducers/stations.reducer';

export const appReducer: ActionReducerMap<AppState> = {
  stationState: stationsReducer,
  userState: userReducer,
  orderState: orderReducer,
};
