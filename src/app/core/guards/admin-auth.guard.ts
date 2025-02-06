import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const adminAuthGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const authService: AuthService = inject(AuthService);

  const user = authService.getUserDetails();
  const role = user.rol;

  if (role === 'admin' && user.rol !== null) {
    return true;
  } else {
    return false;
  }
};
