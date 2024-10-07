import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInStatus: boolean = false;

  constructor() {
    const token = localStorage.getItem('user');
    this.isLoggedInStatus = !!token;
  }

  isLoggedIn(): boolean {
    return this.isLoggedInStatus;
  }
  login(token: string): void {
    localStorage.setItem('user', token);
    this.isLoggedInStatus = true;
  }

  logout(): void {
    localStorage.removeItem('user');
    this.isLoggedInStatus = false;
  }
}
