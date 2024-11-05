import { Component } from '@angular/core';

@Component({
  selector: 'app-download-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill="none"
    >
      <path
        d="M9.54664 13.7144L8.80324 14.3832L9.54664 15.2095L10.29 14.3832L9.54664 13.7144ZM10.5466 1.50007C10.5466 0.947786 10.0989 0.500071 9.54664 0.500071C8.99436 0.500071 8.54664 0.947786 8.54664 1.50007L10.5466 1.50007ZM2.69801 7.59749L8.80324 14.3832L10.29 13.0455L4.1848 6.25979L2.69801 7.59749ZM10.29 14.3832L16.3953 7.59749L14.9085 6.25979L8.80324 13.0455L10.29 14.3832ZM10.5466 13.7144L10.5466 1.50007L8.54664 1.50007L8.54664 13.7144L10.5466 13.7144Z"
        fill="#381187"
      />
      <path
        d="M1 16.4286L1 17.7857C1 19.2848 2.09336 20.5 3.44209 20.5L15.6526 20.5C17.0013 20.5 18.0947 19.2848 18.0947 17.7857V16.4286"
        stroke="#381187"
        stroke-width="2"
      />
    </svg>
  `,
  styles: ``,
})
export class DownloadIconComponent {}