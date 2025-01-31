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
      fill="none"
      class="icon"
    >
      <path
        d="M16.8182 3.86365H3.18182C3.00099 3.86365 2.82757 3.93548 2.6997 4.06335C2.57183 4.19121 2.5 4.36464 2.5 4.54547V15.4546C2.5 15.6354 2.57183 15.8088 2.6997 15.9367C2.82757 16.0645 3.00099 16.1364 3.18182 16.1364H16.8182C16.999 16.1364 17.1724 16.0645 17.3003 15.9367C17.4282 15.8088 17.5 15.6354 17.5 15.4546V4.54547C17.5 4.36464 17.4282 4.19121 17.3003 4.06335C17.1724 3.93548 16.999 3.86365 16.8182 3.86365ZM16.1364 14.7727H3.86364V8.27978L9.74636 10.6334C9.90929 10.698 10.0907 10.698 10.2536 10.6334L16.1364 8.27978V14.7727ZM16.1364 6.81115L10 9.26569L3.86364 6.81115V5.22728H16.1364V6.81115Z"
        fill="#9198A1"
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
