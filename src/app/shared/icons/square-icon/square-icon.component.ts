import { Component } from '@angular/core';

@Component({
  selector: 'app-square-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      stroke="currentColor"
    >
      <path
        d="M15 1L1 15"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1 1L15 15"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `,
  styles: ``,
})
export class SquareIconComponent {}
