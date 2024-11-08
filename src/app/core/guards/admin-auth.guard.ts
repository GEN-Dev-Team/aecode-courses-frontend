import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminAuthGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);

  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const role = user.role;

  if (role === 'admin') {
    return true;
  } else {
    return false;
  }
};
