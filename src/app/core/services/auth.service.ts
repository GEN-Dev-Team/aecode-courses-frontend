import { inject, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICourse } from '../../courses/interface/Course';
import { isPlatformBrowser } from '@angular/common';
import { BrowserService } from './browser.service';
import { IModule } from '../../courses/interface/Module';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInStatus = new BehaviorSubject<boolean>(this.hasToken());

  browserService: BrowserService = inject(BrowserService);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  private hasToken(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem('user');
    }
    return false;
  }

  isLoggedIn$(): Observable<boolean> {
    return this.isLoggedInStatus.asObservable();
  }

  login(token: any): void {
    if (this.browserService.isBrowser()) {
      localStorage.setItem('user', JSON.stringify(token));
      this.isLoggedInStatus.next(true);
    }
  }

  logout(): void {
    if (this.browserService.isBrowser()) {
      localStorage.removeItem('user');
      this.isLoggedInStatus.next(false);
    }
  }

  getUserDetails(): any {
    if (this.browserService.isBrowser()) {
      return JSON.parse(localStorage.getItem('user') || '{}');
    }

    return null;
  }

  setUserDetails(user: any): void {
    if (this.browserService.isBrowser()) {
      this.logout();
      localStorage.setItem('user', JSON.stringify(user));
      this.isLoggedInStatus.next(true);
    }
  }

  hasAccesToCourse(courseId: number): boolean {
    if (this.browserService.isBrowser()) {
      const user = this.getUserDetails();
      if (user.usercourseaccess) {
        return user.usercourseaccess.some(
          (course: ICourse) => course.courseId === courseId
        );
      }
    }

    return false;
  }

  hasAccesToModule(moduleId: number): boolean {
    if (this.browserService.isBrowser()) {
      const user = this.getUserDetails();
      if (user.usermoduleaccess) {
        return user.usermoduleaccess.some(
          (module: IModule) => module.moduleId === moduleId
        );
      }
    }

    return false;
  }
}
