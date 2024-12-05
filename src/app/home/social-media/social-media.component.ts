import { Component, EventEmitter, inject, Output } from '@angular/core';
import { TiktokIconComponent } from '../../shared/icons/tiktok-icon/tiktok-icon.component';
import { FacebookIconComponent } from '../../shared/icons/facebook-icon/facebook-icon.component';
import { WhatsappIconComponent } from '../../shared/icons/whatsapp-icon/whatsapp-icon.component';
import { InstagramIconComponent } from '../../shared/icons/instagram-icon/instagram-icon.component';
import { YoutubeIconComponent } from '../../shared/icons/youtube-icon/youtube-icon.component';
import { LinkedinIconComponent } from '../../shared/icons/linkedin-icon/linkedin-icon.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [
    TiktokIconComponent,
    FacebookIconComponent,
    WhatsappIconComponent,
    InstagramIconComponent,
    YoutubeIconComponent,
    LinkedinIconComponent,
  ],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.css',
})
export class SocialMediaComponent {
  @Output() isOpen = new EventEmitter<boolean>();

  router: Router = inject(Router);

  openModal() {
    this.isOpen.emit(true);
  }

  redirectToCourses() {
    this.router.navigate(['/courses']);
  }
}
