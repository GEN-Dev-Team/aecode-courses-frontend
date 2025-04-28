import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const mobileAvailabilityGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    // Redirige a un componente específico si es móvil
    router.navigate(['/not-available-in-mobile']);
    return false;
  }

  return true; // Permite la navegación si no es móvil
};
