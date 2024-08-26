import { Routes } from '@angular/router';

export const TrainRoutes: Routes = [
  {
    path: 'admin',
    loadComponent: () => import('./admin.component').then((m) => m.AdminComponent),
  },
  {
    path: 'station',
    loadComponent: () => import('./pages/stations/stations.component').then((m) => m.StationComponent),
  },
];
