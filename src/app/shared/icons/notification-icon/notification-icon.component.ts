import { Component } from '@angular/core';

@Component({
  selector: 'app-notification-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 26"
      fill="none"
      class="icon"
    >
      <path
        d="M11 25.5C12.7345 25.5 14.1414 24.1011 14.1414 22.375H7.85863C7.85863 24.1011 9.26554 25.5 11 25.5ZM21.5772 18.1899C20.6284 17.1763 18.8532 15.6514 18.8532 10.6562C18.8532 6.8623 16.1778 3.8252 12.5704 3.08008V2.0625C12.5704 1.19971 11.8672 0.5 11 0.5C10.1328 0.5 9.42956 1.19971 9.42956 2.0625V3.08008C5.82216 3.8252 3.14681 6.8623 3.14681 10.6562C3.14681 15.6514 1.37159 17.1763 0.422845 18.1899C0.128203 18.5049 -0.0024214 18.8813 3.3952e-05 19.25C0.00543572 20.0508 0.637443 20.8125 1.57637 20.8125H20.4236C21.3626 20.8125 21.9951 20.0508 22 19.25C22.0024 18.8813 21.8718 18.5044 21.5772 18.1899Z"
        fill="#381187"
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
export class NotificationIconComponent {}
