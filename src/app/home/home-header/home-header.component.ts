import { Component, inject } from '@angular/core';
import { BookIconComponent } from '../../courses/icons/book-icon/book-icon.component';
import { SyncCourseIconComponent } from '../../shared/icons/sync-course-icon/sync-course-icon.component';
import { AecodeIconComponent } from '../icons/aecode-icon/aecode-icon.component';
import { ZoomInDirective } from '../../shared/directives/animations/zoom-in.directive';
import { Router } from '@angular/router';
import { LoginFormComponent } from '../login-form/login-form.component';
import { UserProfileButtonComponent } from '../../shared/components/header/user-profile-button/user-profile-button.component';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [
    BookIconComponent,
    SyncCourseIconComponent,
    AecodeIconComponent,
    ZoomInDirective,
    LoginFormComponent,
    UserProfileButtonComponent,
  ],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.css',
})
export class HomeHeaderComponent {
  route: Router = inject(Router);
  authService: AuthService = inject(AuthService);

  openLoginForm = false;
  isUserLoggedIn = false;

  ngOnInit(): void {
    if (this.authService.getUserDetails() !== null) {
      this.isUserLoggedIn = true;
    }
  }
  redirectToCoursesView() {
    this.route.navigate(['/courses']);
  }
}
