import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MainContainerComponent } from './shared/components/main-container/main-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MainContainerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'aecode-courses-frontend';

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
