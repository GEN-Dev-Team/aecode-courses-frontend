import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { DeviceService } from './core/services/device.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'aecode-courses-frontend';
  // isMobile = this.deviceService.isMobileDevice();

  constructor(private deviceService: DeviceService, private router: Router) {
    // if (this.isMobile) {
    //   this.router.navigate(['no-mobile']);
    // }
  }
}
