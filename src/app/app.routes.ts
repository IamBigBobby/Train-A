import { Routes } from '@angular/router';
import { SignUpComponent } from './auth/pages/sign-up/sign-up.component';
import { SignInComponent } from './auth/pages/sign-in/sign-in.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./train/train.routes').then((m) => m.TrainRoutes),
  },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent },
  {
    path: '',
    loadChildren: () => import('./train/train.routes').then((m) => m.TrainRoutes),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.routes').then((m) => m.AdminRoutes),
  },
];
