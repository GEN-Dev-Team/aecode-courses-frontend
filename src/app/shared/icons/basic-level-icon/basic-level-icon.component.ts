import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-level-icon',
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
        d="M3 17L3 10"
        stroke="url(#paint0_linear_2188_4005)"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 0C0.895431 0 0 0.895431 0 2V18C0 19.1046 0.895431 20 2 20H18C19.1046 20 20 19.1046 20 18V2C20 0.895431 19.1046 0 18 0H2ZM4 10C4 9.44771 3.55228 9 3 9C2.44772 9 2 9.44771 2 10L2 17C2 17.5523 2.44772 18 3 18C3.55229 18 4 17.5523 4 17L4 10ZM10 5C10.5523 5 11 5.44772 11 6L11 17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17L9 6C9 5.44772 9.44771 5 10 5ZM17 2C17.5523 2 18 2.44772 18 3V17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17V3C16 2.44772 16.4477 2 17 2Z"
        fill="#381187"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2188_4005"
          x1="3.08346"
          y1="16.4357"
          x2="3.52292"
          y2="11.8527"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#852FFF" />
          <stop offset="1" stop-color="#B664DB" />
        </linearGradient>
      </defs>
    </svg>
  `,
  styles: ``,
})
export class BasicLevelIconComponent {}
