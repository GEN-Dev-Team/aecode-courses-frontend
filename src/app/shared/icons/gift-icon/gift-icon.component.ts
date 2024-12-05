import { Component } from '@angular/core';

@Component({
  selector: 'app-gift-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="19"
      viewBox="0 0 15 19"
      fill="none"
      class="icon"
    >
      <path
        d="M6.00259 9.52826V18.4423L5.94527 18.4999H1.85418C1.42697 18.4999 0.879272 17.9084 0.879272 17.4838V9.52826H6.00248H6.00259Z"
        fill="white"
      />
      <path
        d="M13.611 9.52826V17.6755C13.611 17.989 12.9822 18.4999 12.6743 18.4999H8.526V9.52826H13.611Z"
        fill="white"
      />
      <path d="M5.96442 4.81238H0V8.56973H5.96442V4.81238Z" fill="white" />
      <path d="M14.3757 4.81238H8.526V8.56973H14.3757V4.81238Z" fill="white" />
      <path
        d="M7.0349 3.73847L6.47951 3.24143C4.98886 1.97957 3.62141 1.66878 1.71114 2.02355C1.66097 2.03289 1.63627 2.09577 1.6445 1.99499L2.63892 0.538313C4.65819 0.22111 6.43812 1.9319 7.0349 3.73857V3.73847Z"
        fill="white"
      />
      <path
        d="M12.7312 2.05187C11.0306 1.51216 9.20796 2.10899 7.89609 3.24152L7.3407 3.73855C7.93618 1.93068 9.71957 0.224565 11.7367 0.538292L12.7312 2.05187Z"
        fill="white"
      />
      <path
        d="M3.81445 2.17567C4.38414 3.25162 5.58312 3.75441 6.72889 3.94955C6.68425 4.01634 6.62423 4.00179 6.55857 4.00884C5.34259 4.13916 3.33924 4.00352 2.36997 3.18342C2.20376 3.04279 1.71175 2.51394 1.87027 2.29838C2.08913 2.00062 3.4568 2.07522 3.81445 2.17578V2.17567Z"
        fill="white"
      />
      <path
        d="M7.64673 3.93101C8.65718 3.79711 9.58571 3.3989 10.2661 2.62745C10.3625 2.51831 10.467 2.30297 10.5515 2.22348C10.714 2.07069 11.6244 2.06808 11.8709 2.09078C12.0067 2.10326 12.4966 2.20567 12.5354 2.34749C12.4757 2.85126 11.9701 3.26533 11.5473 3.49033C10.5751 4.00767 8.86098 4.13777 7.77913 4.00854C7.72181 4.0017 7.66146 4.00105 7.64684 3.93079L7.64673 3.93101Z"
        fill="white"
      />
    </svg>
  `,
  styles: `
    .icon {
      display: flex;
      align-self: center;
    }
  `,
})
export class GiftIconComponent {}
