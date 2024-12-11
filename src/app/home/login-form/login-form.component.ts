import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { ILogin } from '../interface/Login';
import { UserService } from '../user.service';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { AuthService } from '../../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { BrowserService } from '../../core/services/browser.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  @Output() closeLoginForm = new EventEmitter<boolean>();
  @Output() userLoggedIn = new EventEmitter<boolean>();

  browserService: BrowserService = inject(BrowserService);
  toastService: ToastrService = inject(ToastrService);

  loginForm: FormGroup;
  signInForm: FormGroup;
  usersList: ILogin[] = [];
  login!: ILogin;
  isSignInForm: boolean = true;

  constructor(
    private fb: FormBuilder,
    private logInService: UserService,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: new FormControl(''),
      passwordHash: new FormControl(''),
    });

    this.signInForm = this.fb.group({
      userId: new FormControl(0),
      fullname: new FormControl(''),
      email: new FormControl(''),
      status: new FormControl('activo'),
      passwordHash: new FormControl(''),
    });
  }

  createUser() {
    const password = this.browserService.getElementById(
      'passwordHash'
    ) as HTMLInputElement;
    const passwordConfirm = this.browserService.getElementById(
      'passwordHashConfirm'
    ) as HTMLInputElement;

    if (password.value !== passwordConfirm.value) {
      this.toastService.error('Las contraseñas no coinciden', 'Error');
    } else {
      this.logInService
        .createUser(this.signInForm.value)
        .subscribe((response) => {});
      this.isSignInForm = false;
    }
  }

  logInUser() {
    this.logInService.logInUser(this.loginForm.value).subscribe(
      (response) => {
        this.authService.login(response); // Actualizar el estado de autenticación
        this.userLoggedIn.emit(true);
        this.closeModal();
        console.log(response);
      },
      (error) => {
        this.toastService.error('Credenciales incorrectas', 'Error');
      }
    );
  }

  closeModal() {
    this.closeLoginForm.emit(false);
  }

  logIn() {
    this.isSignInForm = false;
    this.loginForm.reset();
  }

  signIn() {
    this.isSignInForm = true;
    this.signInForm.reset();
  }

  hidePassword(isConfirm: boolean) {
    const passwordField = this.browserService.getElementById(
      isConfirm ? 'passwordHashConfirm' : 'passwordHash'
    ) as HTMLInputElement;

    if (passwordField.type === 'password') {
      passwordField.type = 'text';
    } else {
      passwordField.type = 'password';
    }
  }
}
