import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.services';
import { Observable } from 'rxjs';

export const authGuard: CanActivateFn = (
  route,
  state
): boolean | Promise<boolean> | Observable<boolean> => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAuthenticated().then((isLoggnedIn) => {
    if (isLoggnedIn) {
      return true;
    } else {
      return router.navigate(['/']);
    }
  });
};
