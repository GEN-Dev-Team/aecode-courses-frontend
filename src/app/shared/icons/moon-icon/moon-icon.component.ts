import { Component } from '@angular/core';

@Component({
  selector: 'app-moon-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="13"
      viewBox="0 0 15 13"
      class="icon"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.1948 9.87405C7.20569 9.87405 3.86121 7.10932 3.00542 3.42837C2.59348 4.23019 2.36789 5.13929 2.36789 6.09771C2.36789 9.09519 4.8799 11.5864 8.00438 11.5864C9.53032 11.5864 10.9433 10.9157 11.943 9.83812C11.6952 9.86196 11.4456 9.87405 11.1948 9.87405ZM11.1948 8.46784C12.4498 8.46784 13.6409 8.10155 14.6618 7.4767C14.0237 10.601 11.2587 12.9926 8.00438 12.9926C4.09074 12.9926 0.985352 9.84683 0.985352 6.09771C0.985352 3.49056 2.32535 1.24971 4.34598 0C4.23963 0.51712 4.17582 1.03424 4.17582 1.57291C4.17582 5.32203 7.28121 8.46784 11.1948 8.46784Z"
      />
    </svg>
  `,
  styles: `.icon{
    display:flex;
    align-self: center;
  }`,
})
export class MoonIconComponent {}
