import { Component } from '@angular/core';
import { MessageIconComponent } from '../icons/message-icon/message-icon.component';
import { TiktokIconComponent } from '../icons/tiktok-icon/tiktok-icon.component';
import { ZoomInDirective } from '../../shared/directives/animations/zoom-in.directive';

@Component({
  selector: 'app-home-footer',
  standalone: true,
  imports: [MessageIconComponent, TiktokIconComponent, ZoomInDirective],
  templateUrl: './home-footer.component.html',
  styleUrl: './home-footer.component.css',
})
export class HomeFooterComponent {}
