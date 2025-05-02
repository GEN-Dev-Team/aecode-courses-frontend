import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { BrowserService } from '../services/browser.service';

export const mobileAvailabilityGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const browserService = inject(BrowserService);

  if (browserService.isBrowser()) {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      // Redirige a un componente específico si es móvil
      router.navigate(['/not-available-in-mobile']);
      return false;
    }
  }

  return true;
};
