import { Component } from '@angular/core';
import { CommunityHeaderComponent } from './sections/community-header/community-header.component';
import { CommunityCollaboratorsComponent } from './sections/community-collaborators/community-collaborators.component';
import { CommunityHomeComponent } from './sections/community-home/community-home.component';
import { CommunityPartnersComponent } from './sections/community-partners/community-partners.component';
import { HomeFooterComponent } from '../home/home-footer/home-footer.component';
import { MainContainerComponent } from '../shared/components/main-container/main-container.component';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [
    CommunityHeaderComponent,
    CommunityCollaboratorsComponent,
    CommunityHomeComponent,
    CommunityPartnersComponent,
    HomeFooterComponent,
    MainContainerComponent,
  ],
  templateUrl: './community.component.html',
  styleUrl: './community.component.scss',
})
export class CommunityComponent {
  collabsButtonSelected: boolean = true;
}
