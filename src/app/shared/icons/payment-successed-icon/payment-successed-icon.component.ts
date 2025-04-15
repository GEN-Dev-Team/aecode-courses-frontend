import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-successed-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="53"
      height="53"
      viewBox="0 0 53 53"
      class="icon"
      fill="currentColor"
    >
      <path
        d="M22.0182 36.1303C21.4565 36.0874 20.9341 35.8262 20.5627 35.4026L11.8303 26.6702C11.6358 26.2628 11.5723 25.8052 11.6486 25.3602C11.725 24.9152 11.9374 24.5049 12.2566 24.1857C12.5758 23.8664 12.9862 23.654 13.4311 23.5777C13.8761 23.5014 14.3338 23.5648 14.7411 23.7594L21.9308 30.9491L46.76 6.29456C47.1674 6.1 47.6251 6.03652 48.07 6.11286C48.515 6.1892 48.9253 6.40161 49.2445 6.72084C49.5638 7.04007 49.7762 7.45041 49.8525 7.89536C49.9289 8.34031 49.8654 8.79799 49.6708 9.20537L23.4736 35.4026C23.1022 35.8262 22.5798 36.0874 22.0182 36.1303Z"
      />
      <path
        d="M26.3842 52.8674C21.702 52.8599 17.1075 51.5977 13.0786 49.2121C9.04981 46.8266 5.73394 43.4049 3.47612 39.3031C1.75986 36.2467 0.69914 32.8662 0.361556 29.3772C-0.171179 24.2602 0.814506 19.0997 3.19565 14.5393C5.57679 9.97887 9.24799 6.2205 13.7513 3.73301C16.8077 2.01675 20.1881 0.956029 23.6771 0.618444C27.153 0.244546 30.6687 0.581257 34.0105 1.60812C34.3087 1.66771 34.5912 1.78895 34.8399 1.96408C35.0885 2.13921 35.2978 2.36436 35.4544 2.6251C35.6109 2.88584 35.7113 3.17641 35.749 3.4782C35.7867 3.77998 35.761 4.08631 35.6734 4.37756C35.5858 4.66881 35.4383 4.93855 35.2404 5.16948C35.0425 5.40042 34.7986 5.58745 34.5242 5.7186C34.2498 5.84975 33.951 5.92212 33.647 5.93107C33.343 5.94002 33.0405 5.88535 32.7588 5.77057C29.9313 4.92039 26.9625 4.64329 24.0264 4.95555C21.1243 5.25271 18.3124 6.13392 15.7597 7.54616C13.3005 8.9029 11.1261 10.7214 9.35595 12.902C7.53338 15.1235 6.17238 17.6862 5.35268 20.4402C4.53298 23.1942 4.27105 26.0841 4.58223 28.9406C4.87939 31.8427 5.7606 34.6546 7.17284 37.2073C8.52958 39.6665 10.3481 41.8409 12.5287 43.6111C14.7501 45.4336 17.3129 46.7946 20.0669 47.6143C22.8209 48.434 25.7108 48.696 28.5673 48.3848C31.4694 48.0876 34.2813 47.2064 36.834 45.7942C39.2932 44.4374 41.4676 42.6189 43.2377 40.4383C45.0603 38.2169 46.4213 35.6541 47.241 32.9001C48.0607 30.1461 48.3226 27.2562 48.0115 24.3997C47.9828 24.0997 48.0135 23.7969 48.1019 23.5087C48.1902 23.2205 48.3344 22.9525 48.5263 22.7201C48.7183 22.4876 48.9541 22.2952 49.2203 22.1539C49.4866 22.0126 49.7781 21.9251 50.0781 21.8964C50.3782 21.8678 50.681 21.8985 50.9692 21.9868C51.2574 22.0752 51.5254 22.2194 51.7578 22.4113C51.9903 22.6032 52.1826 22.8391 52.324 23.1053C52.4653 23.3716 52.5528 23.663 52.5814 23.9631C53.1115 29.0831 52.1214 34.2458 49.7349 38.8066C47.3485 43.3673 43.6713 47.1239 39.1626 49.6073C36.0737 51.3938 32.6411 52.505 29.0912 52.8674C28.1889 52.8674 27.2574 52.8674 26.3842 52.8674Z"
      />
    </svg>
  `,
  styles: `
    .icon {
      display:flex;
      justify-content: center;
      align-items: center;
    }
  `,
})
export class PaymentSuccessedIconComponent {}
