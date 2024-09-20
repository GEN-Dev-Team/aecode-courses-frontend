import { Component } from '@angular/core';

@Component({
  selector: 'app-acc-created-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="76"
      height="76"
      viewBox="0 0 76 76"
      fill="none"
    >
      <circle cx="38" cy="38" r="38" fill="#EEF3F8" />
      <path
        d="M13.5789 52.5466C13.5789 51.2688 13.5629 49.9909 13.5885 48.7131C13.5981 48.2776 13.4636 47.9701 13.153 47.6627C11.4076 45.9429 9.67818 44.2071 7.94879 42.4745C5.36111 39.8836 5.3483 36.1558 7.92317 33.5585C9.63014 31.8388 11.3371 30.119 13.0729 28.428C13.4508 28.0597 13.5917 27.685 13.5885 27.1694C13.5693 24.7739 13.5789 22.3752 13.5821 19.9796C13.5917 16.2326 16.2274 13.5969 19.9744 13.5905C22.3988 13.5873 24.8231 13.5777 27.2443 13.5969C27.7087 13.6001 28.0353 13.4656 28.362 13.1325C30.0017 11.4576 31.667 9.81148 33.3228 8.15255C36.1731 5.29265 39.7695 5.27984 42.6422 8.13013C44.3236 9.79867 46.0017 11.4736 47.6639 13.1614C47.9681 13.472 48.2788 13.5969 48.7143 13.5937C51.1387 13.5745 53.563 13.5777 55.9842 13.5873C59.792 13.6001 62.4021 16.2134 62.4117 20.0245C62.4181 22.42 62.4245 24.8187 62.4021 27.2143C62.3957 27.7107 62.5526 28.0597 62.8985 28.4024C64.5895 30.0645 66.2612 31.7427 67.9362 33.4208C70.6583 36.1494 70.6936 39.7683 68.0066 42.5033C66.3637 44.1751 64.708 45.834 63.0298 47.4673C62.5718 47.9125 62.3925 48.3608 62.4021 49.0013C62.4405 51.3424 62.4181 53.6867 62.4149 56.031C62.4053 59.778 59.7792 62.4041 56.0194 62.4169C53.595 62.4265 51.1707 62.4297 48.7496 62.4105C48.2884 62.4073 47.9617 62.5482 47.6383 62.8781C45.8993 64.6427 44.1475 66.3913 42.3828 68.1271C39.9072 70.5675 36.2851 70.6411 33.7679 68.252C31.9136 66.4938 30.1298 64.6587 28.3332 62.8428C28.0257 62.5322 27.7151 62.4105 27.2827 62.4137C24.8071 62.4297 22.3283 62.4233 19.8527 62.4137C16.2723 62.4041 13.6077 59.7332 13.5885 56.1399C13.5821 54.9421 13.5885 53.7443 13.5885 52.5466H13.5789ZM51.6639 56.2968C51.6639 56.2968 51.6639 56.2904 51.6639 56.2872C52.9417 56.2872 54.2227 56.2456 55.4974 56.3032C56.1603 56.3352 56.2948 56.1014 56.2884 55.4962C56.2628 53.1006 56.2884 50.7019 56.282 48.3064C56.2788 46.4809 56.9193 44.9341 58.2164 43.6498C59.8817 42.0005 61.5118 40.316 63.2028 38.6955C63.7376 38.1831 63.8112 37.8916 63.2316 37.3408C61.515 35.7075 59.8689 34.0005 58.1875 32.332C56.8937 31.0445 56.2724 29.4849 56.2724 27.6658C56.2724 25.2703 56.2564 22.8716 56.2884 20.476C56.2948 19.8836 56.1251 19.7106 55.5294 19.7202C53.1595 19.7555 50.7896 19.7266 48.4197 19.7362C46.4757 19.7427 44.852 19.0541 43.4941 17.6546C41.8608 15.9732 40.1699 14.3495 38.5365 12.6682C38.1362 12.255 37.9088 12.191 37.4733 12.6394C35.8048 14.3591 34.0818 16.0277 32.4036 17.7378C31.081 19.0861 29.4861 19.7362 27.6062 19.733C25.2107 19.7266 22.8119 19.7491 20.4164 19.7202C19.8463 19.7138 19.699 19.8964 19.7022 20.444C19.7278 22.8684 19.7086 25.2895 19.7086 27.7139C19.7086 29.5361 19.0649 31.0862 17.7711 32.3704C16.0705 34.0581 14.3924 35.7715 12.6758 37.4433C12.2434 37.866 12.1794 38.1062 12.6534 38.561C14.2835 40.1302 15.8335 41.7827 17.4764 43.3392C19.0489 44.8284 19.7663 46.609 19.7246 48.7611C19.683 51.0254 19.7343 53.2896 19.6958 55.5506C19.6862 56.1591 19.8784 56.3096 20.4644 56.3032C22.8343 56.2712 25.2042 56.3032 27.5742 56.2872C29.4573 56.2776 31.0521 56.9149 32.378 58.26C34.0594 59.9669 35.7791 61.6387 37.4509 63.3553C37.8544 63.7684 38.0754 63.826 38.5109 63.3777C40.1955 61.6355 41.9345 59.9445 43.6414 58.2279C44.8616 56.9982 46.3252 56.332 48.061 56.3096C49.2588 56.2936 50.4565 56.3096 51.6575 56.3096L51.6639 56.2968Z"
        fill="#381187"
      />
      <path
        d="M52.5799 31.115C52.5895 31.8388 52.2885 32.5305 51.7184 33.1038C46.7704 38.0582 41.8289 43.0189 36.8617 47.9541C35.4173 49.3889 33.4605 49.3696 32.013 47.9413C29.5854 45.549 27.1771 43.1374 24.7848 40.7131C23.5198 39.4321 23.5262 37.5682 24.7496 36.3512C25.9665 35.1406 27.8176 35.1502 29.1147 36.4184C30.732 38.0005 32.346 39.589 33.9089 41.2223C34.3797 41.7155 34.6039 41.597 35.0138 41.1839C39.1067 37.0686 43.206 32.9597 47.3277 28.8732C48.977 27.2367 51.5551 27.7587 52.3877 29.8532C52.5383 30.2311 52.5927 30.6218 52.5831 31.1182L52.5799 31.115Z"
        fill="#381187"
      />
    </svg>
  `,
  styles: ``,
})
export class AccCreatedIconComponent {}
