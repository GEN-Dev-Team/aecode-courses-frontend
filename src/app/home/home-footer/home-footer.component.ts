import { Component, Input } from '@angular/core';
import { MessageIconComponent } from '../icons/message-icon/message-icon.component';
import { TiktokIconComponent } from '../icons/tiktok-icon/tiktok-icon.component';
import { ZoomInDirective } from '../../shared/directives/animations/zoom-in.directive';
import { LinkedinIconComponent } from '../../shared/icons/linkedin-icon/linkedin-icon.component';
import { FacebookIconComponent } from '../../shared/icons/facebook-icon/facebook-icon.component';
import { YoutubeIconComponent } from '../../shared/icons/youtube-icon/youtube-icon.component';
import { InstagramIconComponent } from '../../shared/icons/instagram-icon/instagram-icon.component';

@Component({
  selector: 'app-home-footer',
  standalone: true,
  imports: [
    MessageIconComponent,
    TiktokIconComponent,
    ZoomInDirective,
    LinkedinIconComponent,
    FacebookIconComponent,
    YoutubeIconComponent,
    InstagramIconComponent,
  ],
  templateUrl: './home-footer.component.html',
  styleUrl: './home-footer.component.css',
})
export class HomeFooterComponent {
  @Input() isCourseFooter: boolean = false;
}
