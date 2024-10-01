import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { LoginFormComponent } from '../../../log-in/login-form/login-form.component';
import { LanguageIconComponent } from '../../icons/language-icon/language-icon.component';
import { NotificationIconComponent } from '../../icons/notification-icon/notification-icon.component';

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
  openLoginForm = true;

  changeLanguage() {
    const languageBtn = document.querySelector(
      '#language-button'
    ) as HTMLElement;

    if (languageBtn.textContent === 'ES') {
      languageBtn.textContent = 'EN';
    } else {
      languageBtn.textContent = 'ES';
    }

    this.change(languageBtn.textContent!.trim());
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
