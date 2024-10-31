import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICourse } from '../../courses/interface/Course';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInStatus = new BehaviorSubject<boolean>(this.hasToken());

  constructor() {}

  // Método para verificar si hay token en el localStorage
  private hasToken(): boolean {
    return !!localStorage.getItem('user');
  }

  // Observable que el componente puede suscribirse para obtener el estado
  isLoggedIn$(): Observable<boolean> {
    return this.isLoggedInStatus.asObservable();
  }

  // Lógica de inicio de sesión
  login(token: any): void {
    localStorage.setItem('user', JSON.stringify(token));
    this.isLoggedInStatus.next(true); // Emitir que el usuario está loggeado
  }

  // Lógica de cierre de sesión
  logout(): void {
    localStorage.removeItem('user');
    this.isLoggedInStatus.next(false); // Emitir que el usuario ya no está loggeado
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
