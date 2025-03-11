import { Component } from '@angular/core';

@Component({
  selector: 'app-collabs-like-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="35"
      viewBox="0 0 34 35"
      fill="none"
      class="icon"
    >
      <path
        d="M9.60422 34.1222C9.54906 33.7818 9.67316 33.4482 9.68695 33.1146C9.81106 29.1389 9.82485 24.6729 9.68695 20.6971C9.64559 19.533 9.36979 19.4241 9.92138 18.2463C10.5695 16.8507 11.5141 16.3197 12.438 15.2032C14.1272 13.1608 15.5544 10.2743 16.6576 7.85754C17.1402 6.80232 18.0848 4.88251 18.333 3.8341C18.5399 2.95589 18.1055 1.86664 18.4709 0.940771C19.8085 0.899924 20.8979 1.6624 21.222 2.94908C21.9252 5.75392 20.0499 8.82425 19.6775 11.595C19.5121 12.8205 19.3742 15.0466 21.022 15.3257C22.0631 15.5027 24.5729 14.7335 25.8277 14.6109C27.7652 14.4271 32.8328 14.182 32.7501 17.1162C32.7294 17.8651 32.0882 18.5799 32.1434 19.1245C32.1847 19.5806 32.6329 19.9006 32.8811 20.2682C33.6671 21.4324 33.543 22.3038 32.7777 23.4271C32.6467 23.6177 32.3709 23.8219 32.2606 24.0398C31.8607 24.8567 32.495 25.3401 32.5846 26.0958C32.7087 27.1305 32.4743 27.9407 31.7641 28.7032C31.2401 29.2614 30.6679 29.3431 30.7023 30.2758C30.7299 31.0519 30.9988 31.331 30.6886 32.2024C29.744 34.8438 24.8004 34.8915 22.4975 34.8779C20.0361 34.8574 17.5539 34.6941 15.0856 34.6464L9.59732 34.1222H9.60422Z"
        fill="white"
      />
      <path
        d="M1.0408 19.2675L6.54286 19.2539C7.27371 19.4718 7.44608 19.9347 7.49434 20.6291C7.77703 24.7002 7.27371 29.0912 7.49434 33.1964C7.43229 34.0065 7.11513 34.5035 6.24638 34.5784C4.63989 34.7213 2.81276 34.4694 1.17869 34.5716C0.765005 34.5171 0.351317 34.1903 0.220315 33.7955L0.151367 20.3364C0.220315 19.8394 0.516792 19.3833 1.0408 19.2675Z"
        fill="white"
      />
    </svg>
  `,
  styles: `
    .icon{
      display:flex;
      align-items:center;
      justify-content:center;
    }
  `,
})
export class CollabsLikeIconComponent {}
