import { Component } from '@angular/core';

@Component({
  selector: 'app-message-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      class="icon"
    >
      <path
        d="M16.8182 3.86377H3.18182C3.00099 3.86377 2.82757 3.9356 2.6997 4.06347C2.57183 4.19134 2.5 4.36476 2.5 4.54559V15.4547C2.5 15.6355 2.57183 15.8089 2.6997 15.9368C2.82757 16.0647 3.00099 16.1365 3.18182 16.1365H16.8182C16.999 16.1365 17.1724 16.0647 17.3003 15.9368C17.4282 15.8089 17.5 15.6355 17.5 15.4547V4.54559C17.5 4.36476 17.4282 4.19134 17.3003 4.06347C17.1724 3.9356 16.999 3.86377 16.8182 3.86377ZM16.1364 14.7729H3.86364V8.27991L9.74636 10.6335C9.90929 10.6981 10.0907 10.6981 10.2536 10.6335L16.1364 8.27991V14.7729ZM16.1364 6.81127L10 9.26582L3.86364 6.81127V5.22741H16.1364V6.81127Z"
      />
    </svg>
  `,
  styles: `
  .icon{
    display:flex;
    align-items:center;
    justify-content:center;
  }`,
})
export class MessageIconComponent {}
