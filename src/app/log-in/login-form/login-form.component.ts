import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { ILogin } from '../interface/Login';
import { UserService } from '../user.service';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { NgClass } from '@angular/common';
import { LocalStorageService } from '../../core/services/storage/local-storage.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent, NgClass],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  @Output() closeLoginForm = new EventEmitter<boolean>();
  @Output() userLoggedIn = new EventEmitter<boolean>();
  loginForm: FormGroup;
  signInForm: FormGroup;
  usersList: ILogin[] = [];
  login!: ILogin;
  isSignInForm: boolean = false;

  constructor(
    private fb: FormBuilder,
    private logInService: UserService,
    private localStorage: LocalStorageService
  ) {
    this.loginForm = this.fb.group({
      email: new FormControl(''),
      passwordHash: new FormControl(''),
    });

    this.signInForm = this.fb.group({
      userId: new FormControl(0),
      fullname: new FormControl(''),
      email: new FormControl(''),
      passwordHash: new FormControl(''),
    });
  }

  createUser() {
    console.log('signinForm:', this.signInForm.value);
    console.log('loginForm:', this.loginForm.value);
    const password = document.getElementById(
      'passwordHash'
    ) as HTMLInputElement;
    const passwordConfirm = document.getElementById(
      'passwordHashConfirm'
    ) as HTMLInputElement;

    if (password.value !== passwordConfirm.value) {
      console.log('Contraseñas incorrectas');
    } else {
      this.logInService
        .createUser(this.signInForm.value)
        .subscribe((response) => {
          this.isSignInForm = false;
          this.signInForm.reset();
        });
    }
  }

  logInUser() {
    console.log('loginForm:', this.loginForm.value);
    this.logInService.logInUser(this.loginForm.value).subscribe((response) => {
      console.log(response);
      this.localStorage.setItem('user', response);
      this.userLoggedIn.emit(true);
    });
  }

  closeModal() {
    this.closeLoginForm.emit(false);
  }

  logIn() {
    this.isSignInForm = false;
  }

  signIn() {
    this.isSignInForm = true;
  }
}
