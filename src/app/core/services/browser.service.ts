import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class BrowserService {
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  navigateAndScroll(route: string, scrollPosition: number = 0): void {
    this.router.navigate([route]).then(() => {
      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo(0, scrollPosition);
      }
    });
  }
}
