import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';
import { ILogin } from '../../../../home/interface/Login';
import { ThemeService } from '../../../../core/services/theme.service';
import { AsyncPipe } from '@angular/common';
import { ProfileMenuIconComponent } from '../icons/profile-menu-icon/profile-menu-icon.component';
import { ManagementMenuIconComponent } from '../icons/management-menu-icon/management-menu-icon.component';
import { LogoutMenuIconComponent } from '../icons/logout-menu-icon/logout-menu-icon.component';

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

  userData!: ILogin;

  ngOnInit(): void {
    if (this.authService.getUserDetails() !== null) {
      this.userData = this.authService.getUserDetails();
    } else {
      return;
    }
  }
  closeModal() {
    this.isClosed.emit(false);
  }

  logOut() {
    this.authService.logout();
    this.closeModal();
  }

  redirectToAdminView() {
    this.route.navigate(['/admin-panel']);
  }

  redirectToProfile() {
    this.route.navigate([`/profile/${this.userData.userId}`]);
  }
}
