import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';
import { ILogin } from '../../../../home/interface/Login';

@Component({
  selector: 'app-view-profile',
  standalone: true,
  imports: [],
  templateUrl: './view-profile.component.html',
  styleUrl: './view-profile.component.css',
})
export class ViewProfileComponent {
  @Output() isClosed = new EventEmitter<boolean>();
  @Input() profileImgUrl: string =
    'assets/images/login-view/user-profile-img.webp';

  authService: AuthService = inject(AuthService);
  route: Router = inject(Router);

  userData!: ILogin;

  ngOnInit(): void {
    this.userData = this.authService.getUserDetails();
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
