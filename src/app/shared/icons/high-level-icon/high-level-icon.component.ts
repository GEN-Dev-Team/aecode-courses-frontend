import { Component } from '@angular/core';

@Component({
  selector: 'app-high-level-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      class="icon"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 0C0.895431 0 0 0.895431 0 2V18C0 19.1046 0.895431 20 2 20H18C19.1046 20 20 19.1046 20 18V2C20 0.895431 19.1046 0 18 0H2ZM4 10C4 9.44771 3.55228 9 3 9C2.44772 9 2 9.44771 2 10L2 17C2 17.5523 2.44772 18 3 18C3.55229 18 4 17.5523 4 17L4 10Z"
        fill="#381187"
      />
      <path
        d="M10 17L10 6"
        stroke="url(#paint0_linear_2188_4007)"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M3 17L3 10"
        stroke="url(#paint1_linear_2188_4007)"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M17 17L17 3"
        stroke="url(#paint2_linear_2188_4007)"
        stroke-width="2"
        stroke-linecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2188_4007"
          x1="10.0835"
          y1="16.1133"
          x2="11.1543"
          y2="9.00649"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#852FFF" />
          <stop offset="1" stop-color="#B664DB" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2188_4007"
          x1="3.08346"
          y1="16.4357"
          x2="3.52292"
          y2="11.8527"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#852FFF" />
          <stop offset="1" stop-color="#B664DB" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2188_4007"
          x1="17.0835"
          y1="15.8715"
          x2="18.7946"
          y2="6.94922"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#852FFF" />
          <stop offset="1" stop-color="#B664DB" />
        </linearGradient>
      </defs>
    </svg>
  `,
  styles: `
    .icon {
      display:flex;
      align-self:center;
    }
  `,
})
export class HighLevelIconComponent {}
