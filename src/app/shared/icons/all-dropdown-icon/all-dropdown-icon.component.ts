import { Component } from '@angular/core';

@Component({
  selector: 'app-all-dropdown-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      class="icon"
    >
      <path
        d="M11.6748 17.4999C11.2665 17.4999 10.8831 17.3083 10.5665 17.1416C10.3665 17.0416 10.1248 16.9166 9.99981 16.9166C9.87481 16.9166 9.62481 17.0416 9.43315 17.1416C9.03315 17.3499 8.53315 17.5999 7.99981 17.4583C7.44981 17.3166 7.14981 16.8333 6.89981 16.4499C6.79148 16.2749 6.64148 16.0416 6.54148 15.9833C6.44148 15.9249 6.17481 15.9166 5.94981 15.8999C5.49981 15.8749 4.94148 15.8499 4.54148 15.4583C4.14148 15.0499 4.11648 14.4916 4.09148 14.0416C4.08315 13.8249 4.06648 13.5499 4.00815 13.4499C3.95815 13.3583 3.71648 13.2083 3.54981 13.0999C3.16648 12.8499 2.69148 12.5416 2.54148 11.9999C2.39981 11.4666 2.64981 10.9666 2.85815 10.5666C2.95815 10.3666 3.08315 10.1249 3.08315 9.99993C3.08315 9.87493 2.95815 9.62493 2.85815 9.43327C2.64981 9.03327 2.39981 8.53327 2.54148 7.99994C2.68315 7.44994 3.16648 7.14994 3.54981 6.89994C3.72481 6.7916 3.95815 6.6416 4.01648 6.5416C4.07481 6.4416 4.08315 6.17494 4.09981 5.94994C4.12481 5.49994 4.14981 4.9416 4.54148 4.5416C4.94981 4.1416 5.50815 4.1166 5.95815 4.0916C6.17481 4.08327 6.44981 4.0666 6.54981 4.00827C6.64148 3.95827 6.79148 3.7166 6.89981 3.54994C7.14981 3.1666 7.45815 2.6916 7.99981 2.5416C8.53315 2.39994 9.03315 2.64994 9.43315 2.85827C9.63315 2.95827 9.87481 3.08327 9.99981 3.08327C10.1248 3.08327 10.3748 2.95827 10.5665 2.85827C10.9665 2.65827 11.4665 2.39994 11.9998 2.5416C12.5498 2.68327 12.8498 3.1666 13.0998 3.54994C13.2081 3.72494 13.3581 3.95827 13.4581 4.0166C13.5581 4.07494 13.8248 4.08327 14.0498 4.09994C14.4998 4.12494 15.0581 4.14994 15.4581 4.5416C15.8581 4.94994 15.8831 5.50827 15.9081 5.95827C15.9165 6.17494 15.9331 6.44994 15.9915 6.54994C16.0415 6.6416 16.2831 6.7916 16.4498 6.89994C16.8331 7.14994 17.3081 7.45827 17.4581 7.99994C17.5998 8.53327 17.3498 9.03327 17.1415 9.43327C17.0415 9.63327 16.9165 9.87493 16.9165 9.99993C16.9165 10.1249 17.0415 10.3749 17.1415 10.5666C17.3498 10.9666 17.5998 11.4666 17.4581 11.9999C17.3165 12.5499 16.8331 12.8499 16.4498 13.0999C16.2748 13.2083 16.0415 13.3583 15.9831 13.4583C15.9248 13.5583 15.9165 13.8249 15.8998 14.0499C15.8748 14.4999 15.8498 15.0583 15.4581 15.4583C15.0498 15.8583 14.4915 15.8833 14.0415 15.9083C13.8248 15.9166 13.5498 15.9333 13.4498 15.9916C13.3581 16.0416 13.2081 16.2833 13.0998 16.4499C12.8498 16.8333 12.5415 17.3083 11.9998 17.4583C11.8915 17.4916 11.7831 17.4999 11.6748 17.4999ZM8.33315 3.74994C8.33315 3.74994 8.33315 3.74994 8.32481 3.74994C8.24148 3.78327 8.04981 4.0666 7.95815 4.22494C7.75815 4.53327 7.53315 4.88327 7.17481 5.0916C6.80815 5.29994 6.39148 5.32494 6.01648 5.3416C5.83315 5.34994 5.49148 5.3666 5.41648 5.42494C5.36648 5.4916 5.34981 5.82494 5.34148 6.00827C5.32481 6.38327 5.29981 6.79994 5.09148 7.15827C4.88315 7.5166 4.53315 7.7416 4.22481 7.9416C4.06648 8.0416 3.78315 8.22493 3.74981 8.3166C3.74148 8.40827 3.88315 8.6916 3.96648 8.85827C4.13315 9.1916 4.33315 9.5666 4.33315 9.9916C4.33315 10.4166 4.14148 10.7916 3.96648 11.1249C3.88315 11.2916 3.73315 11.5749 3.74981 11.6666C3.78315 11.7499 4.06648 11.9416 4.22481 12.0333C4.53315 12.2333 4.88315 12.4583 5.09148 12.8166C5.29981 13.1833 5.32481 13.5999 5.34148 13.9749C5.34981 14.1583 5.36648 14.4999 5.42481 14.5749C5.49148 14.6249 5.82481 14.6416 6.00815 14.6499C6.38315 14.6666 6.79981 14.6916 7.15815 14.8999C7.51648 15.1083 7.74148 15.4583 7.94148 15.7666C8.04148 15.9249 8.22481 16.2083 8.31648 16.2416C8.39981 16.2666 8.69148 16.1083 8.85815 16.0249C9.19148 15.8583 9.56648 15.6583 9.99148 15.6583C10.4165 15.6583 10.7915 15.8499 11.1248 16.0249C11.2915 16.1083 11.5581 16.2666 11.6665 16.2416C11.7498 16.2083 11.9415 15.9249 12.0331 15.7666C12.2331 15.4583 12.4581 15.1083 12.8165 14.8999C13.1831 14.6916 13.5998 14.6666 13.9748 14.6499C14.1581 14.6416 14.4998 14.6249 14.5748 14.5666C14.6248 14.4999 14.6415 14.1666 14.6498 13.9833C14.6665 13.6083 14.6915 13.1916 14.8998 12.8333C15.1081 12.4749 15.4581 12.2499 15.7665 12.0499C15.9248 11.9499 16.2081 11.7666 16.2415 11.6749C16.2498 11.5833 16.1081 11.2999 16.0248 11.1333C15.8581 10.7999 15.6581 10.4249 15.6581 9.99993C15.6581 9.57493 15.8498 9.19994 16.0248 8.8666C16.1081 8.69994 16.2498 8.4166 16.2415 8.32493C16.2081 8.23327 15.9165 8.04994 15.7665 7.94993C15.4581 7.74994 15.1081 7.52494 14.8998 7.1666C14.6915 6.79994 14.6665 6.38327 14.6498 6.00827C14.6415 5.82494 14.6248 5.48327 14.5665 5.40827C14.4998 5.35827 14.1665 5.3416 13.9831 5.33327C13.6081 5.3166 13.1915 5.2916 12.8331 5.08327C12.4748 4.87494 12.2498 4.52494 12.0498 4.2166C11.9498 4.05827 11.7665 3.77494 11.6748 3.7416C11.5915 3.7166 11.2998 3.87494 11.1331 3.95827C10.7998 4.12494 10.4248 4.32494 9.99981 4.32494C9.57481 4.32494 9.19981 4.13327 8.86648 3.95827C8.69981 3.87494 8.43315 3.7416 8.33315 3.7416V3.74994ZM8.74148 12.9249C8.57481 12.9249 8.41648 12.8583 8.29981 12.7416L6.20815 10.6499C5.96648 10.4083 5.96648 10.0083 6.20815 9.7666C6.44981 9.52493 6.84981 9.52493 7.09148 9.7666L8.74148 11.4166L12.8998 7.25827C13.1415 7.0166 13.5415 7.0166 13.7831 7.25827C14.0248 7.49994 14.0248 7.89994 13.7831 8.1416L9.18315 12.7416C9.06648 12.8583 8.90815 12.9249 8.74148 12.9249Z"
        fill="black"
      />
    </svg>
  `,
  styles: `
  .icon {
      display: flex;
      justify-content: center;
      align-items: center;
    }`,
})
export class DropdownDropdownIconComponent {}
