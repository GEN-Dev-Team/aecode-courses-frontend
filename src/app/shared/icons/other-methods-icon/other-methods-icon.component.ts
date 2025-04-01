import { Component } from '@angular/core';

@Component({
  selector: 'app-other-methods-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      class="icon"
    >
      <path
        d="M13.1172 21.635C13.1172 23.5162 14.5609 25.0329 16.3547 25.0329H20.0151C21.5755 25.0329 22.8443 23.7058 22.8443 22.0725C22.8443 20.2933 22.0714 19.6662 20.9193 19.2579L15.0422 17.2162C13.8901 16.8079 13.1172 16.1808 13.1172 14.4016C13.1172 12.7683 14.3859 11.4412 15.9464 11.4412H19.6068C21.4005 11.4412 22.8443 12.9579 22.8443 14.8391"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.9707 9.4873V26.9873"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22.3451 32.8207H13.5951C6.30339 32.8207 3.38672 29.904 3.38672 22.6123V13.8623C3.38672 6.57066 6.30339 3.65399 13.5951 3.65399H22.3451C29.6367 3.65399 32.5534 6.57066 32.5534 13.8623V22.6123C32.5534 29.904 29.6367 32.8207 22.3451 32.8207Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `,
  styles: `
    .icon {
      display:flex;
      justify-content: center;
      align-items: center;
    }
  `,
})
export class OtherMethodsIconComponent {}
