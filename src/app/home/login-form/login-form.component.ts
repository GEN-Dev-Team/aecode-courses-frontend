import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ILogin } from '../interface/Login';
import { UserService } from '../../user-profile/services/user.service';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { AuthService } from '../../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { BrowserService } from '../../core/services/browser.service';
import { SquareIconComponent } from '../../shared/icons/square-icon/square-icon.component';
import { AsyncPipe } from '@angular/common';
import { ThemeService } from '../../core/services/theme.service';
import { FormEyeIconComponent } from '../icons/form-eye-icon/form-eye-icon.component';
import { MessageBoxService } from '../../core/services/message-box.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonComponent,
    SquareIconComponent,
    AsyncPipe,
    FormEyeIconComponent,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  @Output() closeLoginForm = new EventEmitter<boolean>();

  browserService: BrowserService = inject(BrowserService);
  toastService: ToastrService = inject(ToastrService);
  themeService: ThemeService = inject(ThemeService);
  messageBoxService: MessageBoxService = inject(MessageBoxService);

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
      email: new FormControl('', [Validators.email, Validators.required]),
      passwordHash: new FormControl('', [Validators.required]),
    });

    this.signInForm = this.fb.group({
      fullname: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-ZÀ-ÿ\s]+$/),
      ]),
      email: new FormControl('', [Validators.email, Validators.required]),
      passwordHash: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  createUser() {
    if (this.signInForm.invalid) {
      this.showFormValidationErrors(this.signInForm);
      return;
    }

    const password = this.browserService.getElementById(
      'passwordHash'
    ) as HTMLInputElement;
    const passwordConfirm = this.browserService.getElementById(
      'passwordHashConfirm'
    ) as HTMLInputElement;

    if (password.value !== passwordConfirm.value) {
      this.toastService.error('Las contraseñas no coinciden', 'Error');
    } else {
      this.logInService.createUser(this.signInForm.value).subscribe(() => {});
      this.toastService.success('Usuario creado con éxito', 'Éxito');
      this.loginForm.patchValue({ email: this.signInForm.value.email });
      this.signInForm.reset();
      this.isSignInForm = false;
    }
  }

  logInUser() {
    if (this.loginForm.invalid) {
      this.showFormValidationErrors(this.loginForm);
      return;
    }

    this.logInService.logInUser(this.loginForm.value).subscribe(
      (response) => {
        this.authService.login(response);
        this.loginForm.reset();
        this.closeModal();
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

  showUserDataPolicies() {
    this.messageBoxService.showTermsModal.set(true);
    this.messageBoxService.termsMessage.set('userData');
  }

  showPrivacyPolicies() {
    this.messageBoxService.showTermsModal.set(true);
    this.messageBoxService.termsMessage.set('privacy');
  }

  showFormValidationErrors(form: FormGroup) {
    Object.keys(form.controls).forEach((key) => {
      const control = form.get(key);
      if (control && control.invalid) {
        if (control.errors?.['required']) {
          this.toastService.error(
            `El campo "${this.formatKey(key)}" es obligatorio`,
            'Error'
          );
        }
        if (control.errors?.['email']) {
          this.toastService.error('Ingresa un correo válido', 'Error');
        }
        if (control.errors?.['minlength']) {
          const requiredLength = control.errors['minlength'].requiredLength;
          this.toastService.error(
            `El campo "${this.formatKey(
              key
            )}" debe tener al menos ${requiredLength} caracteres`,
            'Error'
          );
        }

        if (control.errors?.['pattern']) {
          this.toastService.error(
            `El campo "${this.formatKey(key)}" contiene caracteres inválidos`,
            'Error'
          );
        }
      }
    });
  }

  formatKey(key: string): string {
    const map: { [key: string]: string } = {
      email: 'Correo electrónico',
      passwordHash: 'Contraseña',
      fullname: 'Nombre completo',
    };
    return map[key] || key;
  }
}
