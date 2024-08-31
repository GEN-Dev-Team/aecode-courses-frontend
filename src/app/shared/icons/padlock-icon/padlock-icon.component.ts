import { Component } from '@angular/core';

@Component({
  selector: 'app-padlock-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16 8V7C16 4.79086 14.2091 3 12 3V3C9.79086 3 8 4.79086 8 7V8"
        stroke="#381187"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M3 13C3 10.1716 3 8.75736 3.87868 7.87868C4.75736 7 6.17157 7 9 7H15C17.8284 7 19.2426 7 20.1213 7.87868C21 8.75736 21 10.1716 21 13V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V13Z"
        fill="#381187"
      />
    </svg>
  `,
  styles: ``,
})
export class PadlockIconComponent {}