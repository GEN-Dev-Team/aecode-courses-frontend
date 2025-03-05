import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { LoginFormComponent } from '../../../home/login-form/login-form.component';
import { NotificationIconComponent } from '../../icons/notification-icon/notification-icon.component';
import { AuthService } from '../../../core/services/auth.service';
import { ZoomInDirective } from '../../directives/animations/zoom-in.directive';
import { UserService } from '../../../home/user.service';
import { IUserDetails } from '../../../home/interface/Login';
import { Observable } from 'rxjs';
import { environment } from '../../../../environment/environment';
import { ShoppingCartIconComponent } from '../../../courses/icons/shopping-cart-icon/shopping-cart-icon.component';
import { Router } from '@angular/router';
import { UserProfileButtonComponent } from './user-profile-button/user-profile-button.component';
import { ThemeService } from '../../../core/services/theme.service';
import { AsyncPipe } from '@angular/common';
import { AecodeIconComponent } from '../../../home/icons/aecode-icon/aecode-icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ButtonComponent,
    LoginFormComponent,
    NotificationIconComponent,
    ZoomInDirective,
    ShoppingCartIconComponent,
    UserProfileButtonComponent,
    AsyncPipe,
    AecodeIconComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  authService: AuthService = inject(AuthService);
  route: Router = inject(Router);
  themeService: ThemeService = inject(ThemeService);

  isUserLoggedIn = false;
  openLoginForm = false;

  openMobileMenu = false;

  ngOnInit(): void {
    if (this.authService.getUserDetails() !== null) {
      this.isUserLoggedIn = true;
    }
  }

  redirectToCoursesView() {
    this.route.navigate(['/training']);
  }

  redirectToCartView() {
    this.route.navigate(['/cart']);
  }
}
