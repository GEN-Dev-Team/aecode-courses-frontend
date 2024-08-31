import { Component } from '@angular/core';

@Component({
  selector: 'app-youtube-icon',
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
      <g filter="url(#filter0_i_1795_134)">
        <path
          d="M17.6666 5.1535C17.4833 4.46451 16.9411 3.92096 16.2514 3.73468C15.0041 3.40039 10 3.40039 10 3.40039C10 3.40039 4.99841 3.40039 3.74865 3.73468C3.06141 3.91841 2.51925 4.46195 2.33344 5.1535C2 6.4039 2 9.01443 2 9.01443C2 9.01443 2 11.625 2.33344 12.8754C2.5167 13.5643 3.05886 14.1079 3.74865 14.2942C4.99841 14.6285 10 14.6285 10 14.6285C10 14.6285 15.0041 14.6285 16.2514 14.2942C16.9386 14.1104 17.4808 13.5669 17.6666 12.8754C18 11.625 18 9.01443 18 9.01443C18 9.01443 18 6.4039 17.6666 5.1535Z"
          fill="white"
        />
        <path
          d="M8.40153 11.4208L12.5581 9.01443L8.40153 6.60805V11.4208Z"
          fill="#FF0000"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_1795_134"
          x="0.800781"
          y="0.200195"
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
            result="effect1_innerShadow_1795_134"
          />
        </filter>
      </defs>
    </svg>
  `,
  styles: ``,
})
export class YoutubeIconComponent {}
