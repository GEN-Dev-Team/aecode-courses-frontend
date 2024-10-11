import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { LoginFormComponent } from '../../../log-in/login-form/login-form.component';
import { LanguageIconComponent } from '../../icons/language-icon/language-icon.component';
import { NotificationIconComponent } from '../../icons/notification-icon/notification-icon.component';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ButtonComponent,
    LoginFormComponent,
    LanguageIconComponent,
    NotificationIconComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isUserLoggedIn = false;
  openLoginForm = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.authService.isLoggedIn$().subscribe((loggedInStatus) => {
      this.isUserLoggedIn = loggedInStatus;
    });
  }

  changeLanguage() {
    // const languageBtn = document.querySelector(
    //   '#language-button'
    // ) as HTMLElement;
    // if (languageBtn.textContent === 'ES') {
    //   languageBtn.textContent = 'EN';
    // } else {
    //   languageBtn.textContent = 'ES';
    // }
    // this.change(languageBtn.textContent!.trim());
  }

  change = async (language: string) => {
    const requestJson = await fetch(`/assets/languages/${language}.json`);
    const texts = await requestJson.json();

    const textsToChange = Array.from(
      document.querySelectorAll('[data-section]')
    );

    for (const textToChange of textsToChange) {
      const section = textToChange.getAttribute('data-section');
      const value = textToChange.getAttribute('data-value');

      textToChange.innerHTML = texts[section!][value!];
    }
  };
}
