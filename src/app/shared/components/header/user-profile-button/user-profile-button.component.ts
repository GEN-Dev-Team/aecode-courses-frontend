import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { AuthService } from '../../../../core/services/auth.service';
import { IUserDetails } from '../../../../home/interface/Login';
import { UserService } from '../../../../user-profile/services/user.service';
import { Router } from '@angular/router';
import { ViewProfileComponent } from '../view-profile/view-profile.component';
import { ThemeService } from '../../../../core/services/theme.service';
import { AsyncPipe } from '@angular/common';
import { ManageUserDataService } from '../../../../user-profile/services/manage-user-data.service';

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
  manageUserDataService = inject(ManageUserDataService);

  isUserLoggedIn = false;
  openLoginForm = false;
  showProfileMenu = false;
  userFirstLetterName: string = '';
  userDetailsData = this.manageUserDataService.userDataInfo;
  base_url = environment.base;

  showProfileMenuHandler() {
    this.showProfileMenu = !this.showProfileMenu;
  }

  ngOnInit(): void {
    this.authService.isLoggedInStatus.subscribe((res) => {
      this.isUserLoggedIn = res;
    });
  }
}
