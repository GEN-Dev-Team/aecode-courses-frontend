import { Component } from '@angular/core';

@Component({
  selector: 'app-stop-watch-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      class="icon"
    >
      <path
        d="M14.6431 6.5625C9.21494 6.5625 4.79932 10.9781 4.79932 16.4062C4.79932 21.8344 9.21494 26.25 14.6431 26.25C20.0712 26.25 24.4868 21.8344 24.4868 16.4062C24.4868 10.9781 20.0712 6.5625 14.6431 6.5625ZM14.6431 24.1406C10.3821 24.1406 6.90869 20.6672 6.90869 16.4062C6.90869 12.1453 10.3821 8.67188 14.6431 8.67188C18.904 8.67188 22.3774 12.1453 22.3774 16.4062C22.3774 20.6672 18.904 24.1406 14.6431 24.1406ZM10.0728 4.80469C10.0728 4.22813 10.5509 3.75 11.1274 3.75H18.1587C18.7353 3.75 19.2134 4.22813 19.2134 4.80469C19.2134 5.38125 18.7353 5.85938 18.1587 5.85938H11.1274C10.5509 5.85938 10.0728 5.38125 10.0728 4.80469ZM15.6978 12.1875V16.4062C15.6978 16.9828 15.2196 17.4609 14.6431 17.4609C14.0665 17.4609 13.5884 16.9828 13.5884 16.4062V12.1875C13.5884 11.6109 14.0665 11.1328 14.6431 11.1328C15.2196 11.1328 15.6978 11.6109 15.6978 12.1875ZM24.8946 9.75469C24.6837 9.96563 24.4165 10.0641 24.1493 10.0641C23.8821 10.0641 23.6149 9.96563 23.404 9.75469L21.2946 7.64531C20.8868 7.2375 20.8868 6.5625 21.2946 6.15469C21.7024 5.74688 22.3774 5.74688 22.7853 6.15469L24.8946 8.26406C25.3024 8.67188 25.3024 9.34688 24.8946 9.75469Z"
        fill="#381187"
      />
    </svg>
  `,
  styles: `
  .icon{
    display: flex;
    justify-content: center;
    align-items: center;
  }`,
})
export class StopWatchIconComponent {}
