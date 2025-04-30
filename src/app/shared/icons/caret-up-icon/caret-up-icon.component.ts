import { Component } from '@angular/core';

@Component({
  selector: 'app-caret-up-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="10"
      viewBox="0 0 15 10"
      class="icon"
      fill="currentColor"
    >
      <path
        d="M7.69269 1.00878L13.9174 8.53895C14.3486 9.06059 13.9775 9.84865 13.3008 9.84865L1.69925 9.84865C1.02246 9.84865 0.651442 9.06058 1.08264 8.53895L7.30731 1.00878C7.4073 0.887825 7.5927 0.887825 7.69269 1.00878Z"
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
export class CaretUpIconComponent {}
