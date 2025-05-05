import { Component } from '@angular/core';

@Component({
  selector: 'app-caret-down-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 10"
      fill="currentColor"
      class="icon"
    >
      <path
        d="M7.30731 9.61014L1.08264 2.07998C0.651442 1.55834 1.02246 0.770272 1.69925 0.770272L13.3008 0.770272C13.9775 0.770272 14.3486 1.55834 13.9174 2.07998L7.69269 9.61014C7.5927 9.7311 7.4073 9.7311 7.30731 9.61014Z"
      />
    </svg>
  `,
  styles: `
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,
})
export class CaretDownIconComponent {}
