import { Component } from '@angular/core';

@Component({
  selector: 'app-link-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M8.57895 1H3C1.89543 1 1 1.89543 1 3V17C1 18.1046 1.89543 19 3 19H17C18.1046 19 19 18.1046 19 17V11.4211M12.5082 1H19M19 1V7.3M19 1L6.16393 13.6"
        stroke="#381187"
        stroke-width="2"
      />
    </svg>
  `,
  styles: ``,
})
export class LinkIconComponent {}
