import { HttpInterceptorFn, HttpParams } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { exhaustMap, take } from 'rxjs';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  return authService.user.pipe(
    take(1),
    exhaustMap((user) => {
      console.log(user);
      if (!user) {
        return next(req);
      }
      const modifiedReq = req.clone({
        params: new HttpParams().set('auth', user?.token!),
      });
      return next(modifiedReq);
    })
  );
};
