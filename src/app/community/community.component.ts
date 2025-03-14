import { Component, HostListener, inject } from '@angular/core';
import { CommunityHeaderComponent } from './sections/community-header/community-header.component';
import { CommunityCollaboratorsComponent } from './sections/community-collaborators/community-collaborators.component';
import { CommunityHomeComponent } from './sections/community-home/community-home.component';
import { CommunityPartnersComponent } from './sections/community-partners/community-partners.component';
import { HomeFooterComponent } from '../home/home-footer/home-footer.component';
import { MainContainerComponent } from '../shared/components/main-container/main-container.component';
import { BrowserService } from '../core/services/browser.service';
import { ContentBlockedComponent } from '../shared/components/content-blocked/content-blocked.component';

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
    ContentBlockedComponent,
  ],
  templateUrl: './community.component.html',
  styleUrl: './community.component.scss',
})
export class CommunityComponent {
  browserService: BrowserService = inject(BrowserService);

  collabsButtonSelected: boolean = true;
  isMobile: boolean = false;
  mobileTitle: string = '¡Estamos trabajando en ello!';
  mobileMessage: string =
    'La versión móvil aún no está disponible, pero muy pronto podrás disfrutar de la mejor experiencia en cualquier dispositivo. Te recomendamos acceder desde una computadora por ahora. ¡Gracias por tu paciencia!';

  ngOnInit(): void {
    this.isMobile = this.browserService.isMobile();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.isMobile = this.browserService.isMobile();
  }
}
