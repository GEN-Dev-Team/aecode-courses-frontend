import { Component, inject, signal } from '@angular/core';
import { LoginFormComponent } from '../../../home/login-form/login-form.component';
import { NotificationIconComponent } from '../../icons/notification-icon/notification-icon.component';
import { AuthService } from '../../../core/services/auth.service';
import { ZoomInDirective } from '../../directives/animations/zoom-in.directive';
import { ShoppingCartIconComponent } from '../../../courses/icons/shopping-cart-icon/shopping-cart-icon.component';
import { Router } from '@angular/router';
import { UserProfileButtonComponent } from './user-profile-button/user-profile-button.component';
import { ThemeService } from '../../../core/services/theme.service';
import { AsyncPipe } from '@angular/common';
import { AecodeIconComponent } from '../../../home/icons/aecode-icon/aecode-icon.component';
import { HeaderItemComponent } from './header-item/header-item.component';
import { HeaderService } from '../../../core/services/header.service';

export interface ICommunityHeaderItem {
  id: number;
  name: string;
  route: string;
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
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  authService: AuthService = inject(AuthService);
  themeService: ThemeService = inject(ThemeService);
  headerService: HeaderService = inject(HeaderService);

  isUserLoggedIn = false;
  openLoginForm = this.headerService.showLogInAccess;
  showMobileMenu = false;
  openMobileMenu = false;

  headerItemsList: ICommunityHeaderItem[] = [
    {
      id: 1,
      name: 'Inicio',
      route: '/',
    },
    {
      id: 2,
      name: 'Comunidad',
      route: '/community',
    },

    {
      id: 3,
      name: 'Training',
      route: '/training',
    },
    {
      id: 4,
      name: 'Live',
      route: '/live',
    },
    {
      id: 5,
      name: 'Shopping cart',
      route: '/shopping-cart',
    },
  ];

  headerIdSelected = 0;

  ngOnInit(): void {
    if (this.authService.getUserDetails()) {
      this.isUserLoggedIn = true;
    }
  }

  toggleMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }
}
