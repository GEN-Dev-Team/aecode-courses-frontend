import { Component } from '@angular/core';

@Component({
  selector: 'app-search-tool-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
    >
      <circle
        cx="20"
        cy="20"
        r="17.5"
        fill="url(#paint0_linear_1351_21595)"
        stroke="url(#paint1_linear_1351_21595)"
        stroke-width="5"
      />
      <path
        d="M20.2408 9.01335C20.7123 14.9309 25.9847 19.6556 32 20.3867C26.8072 20.9974 22.3717 24.4367 20.7193 29.2016C20.4889 29.8658 20.4 30.5425 20.239 31.2191C20.1818 31.4594 20.3465 31.4881 19.9204 31.4513C19.2437 25.6122 14.0363 20.9575 8 20.3867C12.3482 19.8582 16.2493 17.5077 18.3926 13.8132C19.3186 12.217 19.5854 11.0136 19.9245 9.2464C19.9733 8.99209 19.8206 8.98021 20.2408 9.01335Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1351_21595"
          x1="20"
          y1="0"
          x2="20"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#33A3DC" />
          <stop offset="1" stop-color="#7837DD" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1351_21595"
          x1="20"
          y1="0"
          x2="20"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#33A3DC" />
          <stop offset="1" stop-color="#7837DD" />
        </linearGradient>
      </defs>
    </svg>
  `,
  styles: ``,
})
export class SearchToolIconComponent {}
