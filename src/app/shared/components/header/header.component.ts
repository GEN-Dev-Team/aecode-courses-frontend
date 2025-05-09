import { Component, inject, signal } from '@angular/core';
import { LoginFormComponent } from '../../../home/login-form/login-form.component';
import { NotificationIconComponent } from '../../icons/notification-icon/notification-icon.component';
import { AuthService } from '../../../core/services/auth.service';
import { ZoomInDirective } from '../../directives/animations/zoom-in.directive';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProfileButtonComponent } from './user-profile-button/user-profile-button.component';
import { ThemeService } from '../../../core/services/theme.service';
import { AsyncPipe, Location } from '@angular/common';
import { AecodeIconComponent } from '../../../home/icons/aecode-icon/aecode-icon.component';
import { HeaderItemComponent } from './header-item/header-item.component';
import { HeaderService } from '../../../core/services/header.service';
import { BrowserService } from '../../../core/services/browser.service';
import { BurgerIconComponent } from '../../icons/burger-icon/burger-icon.component';
import { ManageUserDataService } from '../../../user-profile/services/manage-user-data.service';

export interface ICommunityHeaderItem {
  id: number;
  name: string;
  route: string;
  colorCode: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    LoginFormComponent,
    NotificationIconComponent,
    ZoomInDirective,
    UserProfileButtonComponent,
    AsyncPipe,
    AecodeIconComponent,
    HeaderItemComponent,
    BurgerIconComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  authService: AuthService = inject(AuthService);
  themeService: ThemeService = inject(ThemeService);
  headerService: HeaderService = inject(HeaderService);
  route: Router = inject(Router);
  location: Location = inject(Location);
  browserService: BrowserService = inject(BrowserService);
  manageUserDataService = inject(ManageUserDataService);

  isUserLoggedIn = false;
  openLoginForm = this.headerService.showLogInAccess;
  showMobileMenu = false;
  openMobileMenu = false;
  isMobile = this.browserService.isMobile();

  headerItemsList: ICommunityHeaderItem[] = [
    {
      id: 1,
      name: 'AI',
      route: '/aecode-chat',
      colorCode: '#7837DD',
    },
    {
      id: 2,
      name: 'Inicio',
      route: '/home',
      colorCode: '#7837DD',
    },
    {
      id: 3,
      name: 'Comunidad',
      route: '/community',
      colorCode: '#4A3AC1',
    },

    {
      id: 4,
      name: 'Training',
      route: '/training',
      colorCode: '#4A3AC1',
    },
    {
      id: 5,
      name: 'Live',
      route: '/live',
      colorCode: '#3D813F',
    },
  ];

  shopCartItem: ICommunityHeaderItem = {
    id: 6,
    name: 'Shopping cart',
    route: '/shopping-cart',
    colorCode: '#4A3AC1',
  };

  headerItemSelected: ICommunityHeaderItem = this.headerItemsList[1];

  ngOnInit(): void {
    this.authService.isLoggedInStatus.subscribe((isLoggedIn) => {
      this.isUserLoggedIn = isLoggedIn;
    });

    if (this.authService.hasToken()) {
      this.manageUserDataService.setUserDataInfo(
        this.authService.getUserDetails().userId
      );
    }

    if (this.browserService.isBrowser()) {
      const currentUrl = this.location.path();
      const startRoute = currentUrl.split('/')[1];

      this.headerItemsList.forEach((item) => {
        if (item.route === `/${startRoute}`) {
          this.headerItemSelected = item;
        }
      });

      if (this.headerItemSelected.id === 2) {
        this.themeService.setMode('dark');
      }
    }
  }

  toggleMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  setHeaderItemSelected(item: ICommunityHeaderItem) {
    this.headerItemSelected = item;

    if (this.showMobileMenu) {
      this.showMobileMenu = false;
    }
  }
}
