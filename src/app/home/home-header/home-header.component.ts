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
import { AsyncPipe } from '@angular/common';
import { ThemeService } from '../../core/services/theme.service';
import { HomeCommunityIconComponent } from '../icons/home-community-icon/home-community-icon.component';

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
    AsyncPipe,
    HomeCommunityIconComponent,
  ],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.css',
})
export class HomeHeaderComponent {
  route: Router = inject(Router);
  authService: AuthService = inject(AuthService);
  browserService: BrowserService = inject(BrowserService);
  themeService: ThemeService = inject(ThemeService);

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

  redirectToComunnity() {
    this.route.navigate(['/community']);
  }

  toggleMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }
}
