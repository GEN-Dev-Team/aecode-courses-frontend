import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { ContentBlockedComponent } from './shared/components/content-blocked/content-blocked.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContentBlockedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'aecode-courses-frontend';
  isMobile = false;

  mobileMessage =
    'Nuestro sitio web no se encuentra disponible en version mobile. Por favor, usa un navegador web de escritorio.';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenSize();
      window.addEventListener('resize', () => this.checkScreenSize());
    }

    if (this.isMobile) {
      console.log('Mobile');
    }
  }

  checkScreenSize(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;
    }
  }
}
