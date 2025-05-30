import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';
import { ILogin } from '../../../../home/interface/Login';
import { ThemeService } from '../../../../core/services/theme.service';
import { AsyncPipe } from '@angular/common';
import { ProfileMenuIconComponent } from '../icons/profile-menu-icon/profile-menu-icon.component';
import { ManagementMenuIconComponent } from '../icons/management-menu-icon/management-menu-icon.component';
import { LogoutMenuIconComponent } from '../icons/logout-menu-icon/logout-menu-icon.component';
import { ManageUserDataService } from '../../../../user-profile/services/manage-user-data.service';
import { sign } from 'crypto';

@Component({
  selector: 'app-view-profile',
  standalone: true,
  imports: [
    AsyncPipe,
    ProfileMenuIconComponent,
    ManagementMenuIconComponent,
    LogoutMenuIconComponent,
  ],
  templateUrl: './view-profile.component.html',
  styleUrl: './view-profile.component.css',
})
export class ViewProfileComponent {
  @Output() isClosed = new EventEmitter<boolean>();

  authService: AuthService = inject(AuthService);
  route: Router = inject(Router);
  themeService: ThemeService = inject(ThemeService);
  manageUserDataService = inject(ManageUserDataService);

  userData = this.manageUserDataService.userDataInfo;

  closeModal() {
    this.isClosed.emit(false);
  }

  logOut() {
    this.authService.logout('home');
    this.closeModal();
  }

  redirectToAdminView() {
    this.route.navigate(['/admin-panel']);
  }

  redirectToProfile() {
    this.route.navigate([`/profile/${this.userData().userId}`]);
  }
}
