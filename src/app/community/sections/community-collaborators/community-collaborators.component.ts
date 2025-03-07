import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommunityInstagramIconComponent } from '../../icons/community-instagram-icon/community-instagram-icon.component';
import { CommunityLinkedinIconComponent } from '../../icons/community-linkedin-icon/community-linkedin-icon.component';
import { CommunityYoutubeIconComponent } from '../../icons/community-youtube-icon/community-youtube-icon.component';
import { CommunityFacebookIconComponent } from '../../icons/community-facebook-icon/community-facebook-icon.component';
import { ZoomInDirective } from '../../../shared/directives/animations/zoom-in.directive';

@Component({
  selector: 'app-community-collaborators',
  standalone: true,
  imports: [
    CommunityInstagramIconComponent,
    CommunityLinkedinIconComponent,
    CommunityYoutubeIconComponent,
    CommunityFacebookIconComponent,
    ZoomInDirective,
  ],
  templateUrl: './community-collaborators.component.html',
  styleUrl: './community-collaborators.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CommunityCollaboratorsComponent {
  collabsButtonSelected: boolean = true;
}
