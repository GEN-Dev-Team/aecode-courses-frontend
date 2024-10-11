import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MainContainerComponent } from './shared/components/main-container/main-container.component';
import { DeviceService } from './core/services/device.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MainContainerComponent,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'aecode-courses-frontend';
  isMobile = this.deviceService.isMobileDevice();

  constructor(private deviceService: DeviceService, private router: Router) {
    if (this.isMobile) {
      this.router.navigate(['no-mobile']);
    }
  }
}
