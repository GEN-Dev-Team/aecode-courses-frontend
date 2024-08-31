import { Component } from '@angular/core';

@Component({
  selector: 'app-linkedin-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
    >
      <g filter="url(#filter0_i_1795_111)">
        <path
          d="M5.47915 17.062V7.16859H2.19366V17.062H5.47949H5.47915ZM3.83709 5.81805C4.98257 5.81805 5.69571 5.05835 5.69571 4.10895C5.67426 3.13791 4.98257 2.39941 3.85887 2.39941C2.73441 2.39941 2 3.13791 2 4.10886C2 5.05827 2.71288 5.81796 3.81556 5.81796H3.83683L3.83709 5.81805ZM7.29771 17.062H10.5829V11.5377C10.5829 11.2424 10.6044 10.9463 10.6912 10.7354C10.9286 10.1444 11.4692 9.53258 12.377 9.53258C13.5655 9.53258 14.0413 10.4397 14.0413 11.7699V17.062H17.3264V11.3894C17.3264 8.35071 15.7058 6.93665 13.5442 6.93665C11.7721 6.93665 10.9938 7.92803 10.5613 8.60326H10.5832V7.16893H7.29788C7.34077 8.09705 7.29763 17.0623 7.29763 17.0623L7.29771 17.062Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_1795_111"
          x="0.800781"
          y="0.799805"
          width="18"
          height="18.5"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.5" />
          <feGaussianBlur stdDeviation="1.25" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1795_111"
          />
        </filter>
      </defs>
    </svg>
  `,
  styles: ``,
})
export class LinkedinIconComponent {}
