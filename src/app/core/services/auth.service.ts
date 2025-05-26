import { inject, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { BrowserService } from './browser.service';
import {
  ICoureAccess,
  IModuleAccess,
} from '../../courses/interface/CourseProgress';
import { ManageUserDataService } from '../../user-profile/services/manage-user-data.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  manageUserDataService = inject(ManageUserDataService);
  router = inject(Router);

  isLoggedInStatus = new BehaviorSubject<boolean>(this.hasToken());
  private accessToCourse = new BehaviorSubject<boolean>(false);
  private accessToModule = new BehaviorSubject<boolean>(false);

  accessToCourse$ = this.accessToCourse.asObservable();
  accessToModule$ = this.accessToModule.asObservable();

  browserService: BrowserService = inject(BrowserService);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  hasToken(): boolean {
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
      this.manageUserDataService.setUserDataInfo(token.userId);
      localStorage.setItem('user', JSON.stringify(token));
      this.isLoggedInStatus.next(true);
    }
  }

  logout(): void {
    if (this.browserService.isBrowser()) {
      this.manageUserDataService.clearUserDataInfo;
      localStorage.removeItem('user');
      this.isLoggedInStatus.next(false);
      this.router.navigate(['/']);
    }
  }

  getUserDetails(): any {
    if (this.browserService.isBrowser()) {
      const user = localStorage.getItem('user');
      if (user === null) return {};
      return JSON.parse(user);
    }
  }

  setUserDetails(user: any): void {
    if (this.browserService.isBrowser()) {
      this.manageUserDataService.setUserDataInfo(user.userId);
      this.logout();
      localStorage.setItem('user', JSON.stringify(user));
      this.isLoggedInStatus.next(true);
    }
  }

  setAccessToCourse(courseId: number): void {
    if (this.browserService.isBrowser()) {
      const user = this.getUserDetails();

      if (user.usercourseaccess) {
        user.usercourseaccess.forEach((element: ICoureAccess) => {
          if (element.courseId == courseId) {
            this.accessToCourse.next(true);
            return;
          }
        });
      }
    }
  }

  getAccessToCourse(): boolean {
    return this.accessToCourse.getValue();
  }

  setAccessToModule(moduelId: number): void {
    if (this.getAccessToCourse()) {
      this.accessToModule.next(true);
      return;
    } else {
      const user = this.getUserDetails();
      if (user.usermoduleaccess) {
        user.usermoduleaccess.forEach((element: IModuleAccess) => {
          if (element.moduleId == moduelId) {
            this.accessToModule.next(true);
            return;
          } else {
            this.accessToModule.next(false);
            return;
          }
        });
      }
    }
  }

  getAccessToModule(): boolean {
    return this.accessToModule.getValue();
  }
}
