import { Component } from '@angular/core';

@Component({
  selector: 'app-level-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      class="icon"
    >
      <rect y="0.5" width="20" height="20" rx="2" fill="#381187" />
      <path
        d="M3.33333 18C3.11232 18 2.90036 17.9122 2.74408 17.7559C2.5878 17.5996 2.5 17.3877 2.5 17.1667V10.5C2.5 10.279 2.5878 10.067 2.74408 9.91074C2.90036 9.75446 3.11232 9.66667 3.33333 9.66667C3.55435 9.66667 3.76631 9.75446 3.92259 9.91074C4.07887 10.067 4.16667 10.279 4.16667 10.5V17.1667C4.16667 17.3877 4.07887 17.5996 3.92259 17.7559C3.76631 17.9122 3.55435 18 3.33333 18ZM10.8333 17.1667V7.16667C10.8333 6.94565 10.7455 6.73369 10.5893 6.57741C10.433 6.42113 10.221 6.33333 10 6.33333C9.77899 6.33333 9.56702 6.42113 9.41074 6.57741C9.25446 6.73369 9.16667 6.94565 9.16667 7.16667V17.1667C9.16667 17.3877 9.25446 17.5996 9.41074 17.7559C9.56702 17.9122 9.77899 18 10 18C10.221 18 10.433 17.9122 10.5893 17.7559C10.7455 17.5996 10.8333 17.3877 10.8333 17.1667ZM17.5 17.1667V3.83333C17.5 3.61232 17.4122 3.40036 17.2559 3.24408C17.0996 3.0878 16.8877 3 16.6667 3C16.4457 3 16.2337 3.0878 16.0774 3.24408C15.9211 3.40036 15.8333 3.61232 15.8333 3.83333V17.1667C15.8333 17.3877 15.9211 17.5996 16.0774 17.7559C16.2337 17.9122 16.4457 18 16.6667 18C16.8877 18 17.0996 17.9122 17.2559 17.7559C17.4122 17.5996 17.5 17.3877 17.5 17.1667Z"
        fill="white"
      />
    </svg>
  `,
  styles: `
    .icon {
      display:flex;
      align-self:center;
    }
  `,
})
export class LevelIconComponent {}
