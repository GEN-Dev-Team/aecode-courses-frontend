import { Component, HostListener, inject } from '@angular/core';
import { CommunityCollaboratorsComponent } from './sections/community-collaborators/community-collaborators.component';
import { CommunityHomeComponent } from './sections/community-home/community-home.component';
import { CommunityPartnersComponent } from './sections/community-partners/community-partners.component';
import { HomeFooterComponent } from '../home/home-footer/home-footer.component';
import { MainContainerComponent } from '../shared/components/main-container/main-container.component';
import { BrowserService } from '../core/services/browser.service';
import { ContentBlockedComponent } from '../shared/components/content-blocked/content-blocked.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { MessageBoxService } from '../core/services/message-box.service';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [
    CommunityCollaboratorsComponent,
    CommunityHomeComponent,
    CommunityPartnersComponent,
    HomeFooterComponent,
    MainContainerComponent,
    ContentBlockedComponent,
    HeaderComponent,
  ],
  templateUrl: './community.component.html',
  styleUrl: './community.component.scss',
})
export class CommunityComponent {
  browserService: BrowserService = inject(BrowserService);
  messageBoxService: MessageBoxService = inject(MessageBoxService);

  collabsButtonSelected: boolean = true;
  isMobile: boolean = false;
  mobileTitle: string = '¡Estamos trabajando en ello!';
  mobileMessage: string =
    'La versión móvil aún no está disponible, pero muy pronto podrás disfrutar de la mejor experiencia en cualquier dispositivo. Te recomendamos acceder desde una computadora por ahora. ¡Gracias por tu paciencia!';

  ngOnInit(): void {
    this.isMobile = this.browserService.isMobile();

    if (this.isMobile) {
      this.messageBoxService.showMessageBox(
        this.mobileTitle,
        this.mobileMessage,
        this.isMobile
      );
    }
  }

  @HostListener('window:resize', [])
  onResize() {
    this.isMobile = this.browserService.isMobile();
  }
}
