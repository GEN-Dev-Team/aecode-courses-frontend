import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICourse } from '../../courses/interface/Course';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInStatus = new BehaviorSubject<boolean>(this.hasToken());

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
    localStorage.setItem('user', JSON.stringify(token));
    this.isLoggedInStatus.next(true);
  }

  logout(): void {
    localStorage.removeItem('user');
    this.isLoggedInStatus.next(false);
  }

  getUserDetails(): any {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }

  setUserDetails(user: any): void {
    this.logout();
    localStorage.setItem('user', JSON.stringify(user));
    this.isLoggedInStatus.next(true);
  }

  hasAccesToCourse(courseId: number): boolean {
    const user = this.getUserDetails();
    return user.usercourseaccess.some(
      (course: ICourse) => course.courseId === courseId
    );
  }
}
