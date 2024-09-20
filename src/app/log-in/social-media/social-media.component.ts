import { Component, EventEmitter, Output } from '@angular/core';
import { TiktokIconComponent } from '../../shared/icons/tiktok-icon/tiktok-icon.component';
import { FacebookIconComponent } from '../../shared/icons/facebook-icon/facebook-icon.component';
import { WhatsappIconComponent } from '../../shared/icons/whatsapp-icon/whatsapp-icon.component';
import { InstagramIconComponent } from '../../shared/icons/instagram-icon/instagram-icon.component';
import { YoutubeIconComponent } from '../../shared/icons/youtube-icon/youtube-icon.component';
import { LinkedinIconComponent } from '../../shared/icons/linkedin-icon/linkedin-icon.component';
import { SendIconComponent } from '../../shared/icons/send-icon/send-icon.component';
import { RouterLink } from '@angular/router';
import { ModalComponent } from '../../shared/components/modal/modal.component';

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
    SendIconComponent,
    RouterLink,
    ModalComponent,
  ],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.css',
})
export class SocialMediaComponent {
  @Output() isOpen = new EventEmitter<boolean>();

  openModal() {
    this.isOpen.emit(true);
  }
}
