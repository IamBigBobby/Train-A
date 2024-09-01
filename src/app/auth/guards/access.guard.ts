import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const canActiveAuth = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isAuth = authService.isAuthenticated();

  if (isAuth) {
    return router.createUrlTree(['/']);
  }

  return true;
};

export const canActive = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isAuth = authService.isAuthenticated();

  if (isAuth) {
    return true;
  }

  return router.createUrlTree(['/signin']);
};

export const canActiveAdmin = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isAuth = authService.isAuthenticated();
  const isAdmin = authService.isAdmin();

  if (isAuth && isAdmin) {
    return true;
  }

  return router.createUrlTree(['/']);
};
