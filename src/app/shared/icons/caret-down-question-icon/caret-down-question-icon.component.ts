import { Component } from '@angular/core';

@Component({
  selector: 'app-caret-down-question-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="9"
      viewBox="0 0 13 9"
      fill="none"
      class="icon"
    >
      <path
        d="M7.39224 8.18503C6.99544 8.6219 6.30858 8.6219 5.91178 8.18503L0.677563 2.42235C0.0940062 1.77987 0.549862 0.75 1.4178 0.75L11.8862 0.750001C12.7542 0.750001 13.21 1.77988 12.6265 2.42235L7.39224 8.18503Z"
        fill="white"
      />
    </svg>
  `,
  styles: `
    .icon {
      display:flex;
      align-items: center;
      justify-content: center;
    }
  `,
})
export class CaretDownQuestionIconComponent {}
