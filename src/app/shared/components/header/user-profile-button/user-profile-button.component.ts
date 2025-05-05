import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { environment } from '../../../../../environments/environment';
=======
import { environment } from '../../../../../environment/environment';
>>>>>>> 6a701c4410546401dfde04eeed2211f8cd751a74
import { AuthService } from '../../../../core/services/auth.service';
import { IUserDetails } from '../../../../home/interface/Login';
import { UserService } from '../../../../home/user.service';
import { Router } from '@angular/router';
import { ViewProfileComponent } from '../view-profile/view-profile.component';
import { ThemeService } from '../../../../core/services/theme.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-user-profile-button',
  standalone: true,
  imports: [ViewProfileComponent, AsyncPipe],
  templateUrl: './user-profile-button.component.html',
  styleUrl: './user-profile-button.component.scss',
})
export class UserProfileButtonComponent {
  @Output() sendIsUserLoggedIn = new EventEmitter<boolean>();
  @Input() isHomeView: boolean = false;
  authService: AuthService = inject(AuthService);
  logInService: UserService = inject(UserService);
  userService: UserService = inject(UserService);
  route: Router = inject(Router);
  themeService: ThemeService = inject(ThemeService);

  isUserLoggedIn = false;
  openLoginForm = false;
  showProfileMenu = false;
  userId: number = 0;
  userProfileImg: string = '';
  userFirstLetterName: string = '';
  userDetailsData!: Observable<IUserDetails>;
  base_url = environment.base;

  ngOnInit(): void {
    this.setUser();
  }

  setUser() {
    if (this.authService.hasToken()) {
      const userData = this.authService.getUserDetails();
      this.userId = userData.userId;
      this.userFirstLetterName = userData.fullname.charAt(0).toUpperCase();

      this.userService
        .getUserDetailsImgById(this.userId)
        .subscribe((response) => {
          if (response.profilepicture) {
            this.userProfileImg = this.base_url + response.profilepicture;
          } else {
            this.userProfileImg = '';
          }
        });

      this.authService.isLoggedIn$().subscribe((loggedInStatus) => {
        this.isUserLoggedIn = loggedInStatus;
        this.sendIsUserLoggedIn.emit(this.isUserLoggedIn);
      });

      if (this.isUserLoggedIn) {
        this.logInService.getUser(this.userId).subscribe((response) => {
          this.authService.setUserDetails(response);
        });
      }
    } else {
      return;
    }
  }

  showProfileMenuHandler() {
    this.showProfileMenu = !this.showProfileMenu;
  }

  logout() {
    this.authService.logout();
  }
}
