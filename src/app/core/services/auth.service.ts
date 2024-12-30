import { inject, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICourse } from '../../courses/interface/Course';
import { isPlatformBrowser } from '@angular/common';
import { BrowserService } from './browser.service';
import { IModule } from '../../courses/interface/Module';
import {
  ICoureAccess,
  IModuleAccess,
} from '../../courses/interface/CourseProgress';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInStatus = new BehaviorSubject<boolean>(this.hasToken());
  private accessToCourse = new BehaviorSubject<boolean>(false);
  private accessToModule = new BehaviorSubject<boolean>(false);

  accessToCourse$ = this.accessToCourse.asObservable();
  accessToModule$ = this.accessToModule.asObservable();

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
