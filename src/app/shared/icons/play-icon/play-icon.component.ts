import { Component } from '@angular/core';

@Component({
  selector: 'app-play-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="47"
      viewBox="0 0 30 47"
      fill="none"
      class="icon"
    >
      <path
        d="M30 23.5L0.750002 46.4497L0.750004 0.550326L30 23.5Z"
        fill="white"
      />
    </svg>
  `,
  styles: `
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `,
})
export class PlayIconComponent {}
