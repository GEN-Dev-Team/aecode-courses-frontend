import { Component } from '@angular/core';

@Component({
  selector: 'app-tiktok-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="22"
      viewBox="0 0 23 22"
      fill="none"
      class="icon"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.75 0C1.64543 0 0.75 0.89543 0.75 2V20C0.75 21.1046 1.64543 22 2.75 22H20.75C21.8546 22 22.75 21.1046 22.75 20V2C22.75 0.895431 21.8546 0 20.75 0H2.75ZM19.72 6.34021C17.6442 6.12648 16.0407 4.70519 15.2059 3H12.1611V14.1279C12.1611 14.6942 11.3493 15.591 10.8281 15.8609C8.27598 17.1828 5.61653 14.4508 7.22758 12.2312C7.59901 11.7192 8.51362 11.1305 9.19009 11.1305H10.5131V8.34276C8.7857 8.2424 7.27001 8.50259 5.8976 9.50666C2.79183 11.7796 3.10685 16.3539 6.50418 18.2305C10.3613 20.3608 15.1036 17.8133 15.2084 13.7115L15.2069 7.32104C16.3008 8.31303 17.6981 8.83248 19.1993 9.04063L19.75 6.45776L19.72 6.34021Z"
        fill="#9198A1"
      />
    </svg>
  `,
  styles: `
    .icon{ 
      display: flex;
      align-items: center;
      justify-content:center;
    }
  `,
})
export class TiktokIconComponent {}
