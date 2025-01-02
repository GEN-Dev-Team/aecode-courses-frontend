import { Component } from '@angular/core';

@Component({
  selector: 'app-camera-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 35 35"
      fill="none"
      class="camera-icon"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.60101 11.5942C6.14833 11.5942 4.9707 12.7719 4.9707 14.2245V22.6594C4.9707 25.4879 4.9707 26.9021 5.84938 27.7808C6.72806 28.6594 8.14227 28.6594 10.9707 28.6594H24.5153C27.3437 28.6594 28.758 28.6594 29.6366 27.7808C30.5153 26.9021 30.5153 25.4879 30.5153 22.6594V14.2245C30.5153 12.7719 29.3377 11.5942 27.885 11.5942C26.8879 11.5942 25.9766 11.0305 25.5314 10.1383L24.3657 7.80196C23.9841 7.03725 23.7933 6.6549 23.4908 6.39317C23.33 6.25408 23.148 6.14152 22.9517 6.05972C22.5824 5.90582 22.1551 5.90582 21.3005 5.90582H14.1855C13.3309 5.90582 12.9036 5.90582 12.5343 6.05972C12.338 6.14152 12.1561 6.25408 11.9953 6.39317C11.6927 6.65489 11.5019 7.03725 11.1203 7.80195L11.1203 7.80196L9.9546 10.1383C9.50944 11.0305 8.59808 11.5942 7.60101 11.5942ZM21.4196 18.7047C21.4196 20.7457 19.7696 22.3931 17.743 22.3931C15.7164 22.3931 14.0664 20.7457 14.0664 18.7047C14.0664 16.6638 15.7164 15.0163 17.743 15.0163C19.7696 15.0163 21.4196 16.6638 21.4196 18.7047ZM23.4196 18.7047C23.4196 21.8464 20.8781 24.3931 17.743 24.3931C14.6079 24.3931 12.0664 21.8464 12.0664 18.7047C12.0664 15.5631 14.6079 13.0163 17.743 13.0163C20.8781 13.0163 23.4196 15.5631 23.4196 18.7047Z"
        fill="#3E2C80"
      />
    </svg>
  `,
  styles: `.camera-icon{
    display:flex;
    align-items:center;
    justify-content:center;
  }`,
})
export class CameraIconComponent {}
