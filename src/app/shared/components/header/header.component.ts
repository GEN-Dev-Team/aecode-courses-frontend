import { afterNextRender, Component, inject } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { LoginFormComponent } from '../../../home/login-form/login-form.component';
import { NotificationIconComponent } from '../../icons/notification-icon/notification-icon.component';
import { AuthService } from '../../../core/services/auth.service';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ZoomInDirective } from '../../directives/animations/zoom-in.directive';
import { UserService } from '../../../home/user.service';
import { AddBaseUrlPipe } from '../../../core/pipes/add-base-url.pipe';
import { IUserDetails } from '../../../home/interface/Login';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { environment } from '../../../../environment/environment';
import { ShoppingCartIconComponent } from '../../../courses/icons/shopping-cart-icon/shopping-cart-icon.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ButtonComponent,
    LoginFormComponent,
    NotificationIconComponent,
    ViewProfileComponent,
    ZoomInDirective,
    ShoppingCartIconComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  authService: AuthService = inject(AuthService);
  logInService: UserService = inject(UserService);
  userService: UserService = inject(UserService);
  route: Router = inject(Router);

  isUserLoggedIn = true;
  openLoginForm = false;
  showProfileMenu = false;
  userId: number = 0;
  userProfileImg: string = 'assets/images/login-view/user-profile-img.webp';
  userDetailsData!: Observable<IUserDetails>;
  base_url = environment.base;

  ngOnInit(): void {
    // this.setUser();
  }

  setUser() {
    if (this.authService.getUserDetails() !== null) {
      this.userId = this.authService.getUserDetails().userId;

      this.userService
        .getUserDetailsImgById(this.userId)
        .subscribe((response) => {
          if (response.profilepicture) {
            this.userProfileImg = this.base_url + response.profilepicture;
          } else {
            this.userProfileImg =
              'assets/images/login-view/user-profile-img.webp';
          }
        });

      this.authService.isLoggedIn$().subscribe((loggedInStatus) => {
        this.isUserLoggedIn = loggedInStatus;
      });

      if (this.isUserLoggedIn) {
        this.logInService.getUser(this.userId).subscribe((response) => {
          this.authService.setUserDetails(response);
        });
      }
    }
  }

  showProfileMenuHandler() {
    this.showProfileMenu = !this.showProfileMenu;
  }

  logout() {
    this.authService.logout();
  }

  redirectToCoursesView() {
    this.route.navigate(['/courses']);
  }

  redirectToCartView() {
    this.route.navigate(['/cart']);
  }
}
