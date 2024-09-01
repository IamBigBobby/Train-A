import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(AuthService).getToken();

  if (!token) return next(req);

  const authReq = req.clone({
    headers: req.headers.append('Authorization', `Bearer ${token}`),
  });
  return next(authReq);
};
