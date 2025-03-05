import { Component, inject } from '@angular/core';
import { BookIconComponent } from '../../courses/icons/book-icon/book-icon.component';
import { SyncCourseIconComponent } from '../../shared/icons/sync-course-icon/sync-course-icon.component';
import { AecodeIconComponent } from '../icons/aecode-icon/aecode-icon.component';
import { ZoomInDirective } from '../../shared/directives/animations/zoom-in.directive';
import { Router } from '@angular/router';
import { LoginFormComponent } from '../login-form/login-form.component';
import { UserProfileButtonComponent } from '../../shared/components/header/user-profile-button/user-profile-button.component';
import { AuthService } from '../../core/services/auth.service';
import { BurgerIconComponent } from '../../shared/icons/burger-icon/burger-icon.component';
import { AboutUsMobileIconComponent } from '../../shared/icons/about-us-mobile-icon/about-us-mobile-icon.component';
import { ShamanaiMobileIconComponent } from '../../shared/icons/shamanai-mobile-icon/shamanai-mobile-icon.component';
import { BrowserService } from '../../core/services/browser.service';

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
    BurgerIconComponent,
    AboutUsMobileIconComponent,
    ShamanaiMobileIconComponent,
  ],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.css',
})
export class HomeHeaderComponent {
  route: Router = inject(Router);
  authService: AuthService = inject(AuthService);
  browserService: BrowserService = inject(BrowserService);

  openLoginForm = false;
  isUserLoggedIn = false;
  showMobileMenu = false;

  ngOnInit(): void {
    if (this.authService.getUserDetails() !== null) {
      this.isUserLoggedIn = true;
    }
  }
  redirectToCoursesView() {
    this.route.navigate(['/training']);
  }

  toggleMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }
}
