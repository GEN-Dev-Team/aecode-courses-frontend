import { Component } from '@angular/core';

@Component({
  selector: 'app-card-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="57"
      height="35"
      viewBox="0 0 57 35"
      class="icon"
    >
      <path
        d="M56.2369 13.6486C56.2369 14.4152 56.2369 15.0845 56.2369 15.7534C56.2369 21.2446 56.2383 26.7364 56.2359 32.2276C56.235 34.133 55.3694 34.9989 53.472 34.9989C36.5732 34.9998 19.6749 35.0003 2.77609 34.9998C0.991319 34.9998 0.0831071 34.1056 0.0816685 32.3264C0.0773528 26.3585 0.0792709 20.3907 0.0816685 14.4229C0.0816685 14.1779 0.10996 13.9329 0.127223 13.6481H56.2359L56.2369 13.6486ZM19.7559 25.1412C19.7746 21.9744 17.2408 19.4093 14.0822 19.3977C10.9562 19.3858 8.35484 21.9835 8.35579 25.1153C8.35675 28.2184 10.9083 30.7801 14.0132 30.7964C17.202 30.8132 19.7367 28.3167 19.7554 25.1412H19.7559ZM9.90225 19.7784C7.18001 18.9106 4.58149 19.7828 3.11416 22.0055C1.75951 24.0571 1.94796 26.9684 3.55484 28.8095C5.17849 30.6703 7.8475 31.3363 9.85142 30.3812C6.62425 27.4843 6.55376 22.8278 9.90225 19.7784ZM28.0598 23.7052C28.0598 23.7052 28.0598 23.7076 28.0598 23.709C27.0523 23.709 26.0439 23.6894 25.0369 23.7153C24.2087 23.7369 23.675 24.3065 23.6678 25.1057C23.6611 25.8776 24.2183 26.5182 25.0254 26.5302C27.0403 26.5604 29.0567 26.5623 31.0712 26.5292C31.929 26.5148 32.4618 25.8666 32.4205 25.0338C32.3802 24.2288 31.8557 23.7234 30.9988 23.709C30.0191 23.6923 29.0394 23.7052 28.0598 23.7052ZM38.6999 23.7038C37.7202 23.7038 36.7405 23.6923 35.7613 23.7071C34.8699 23.7206 34.3007 24.2643 34.2835 25.0827C34.2662 25.8901 34.8378 26.524 35.7029 26.535C37.6895 26.5604 39.6771 26.5594 41.6633 26.5249C42.5327 26.5096 43.0879 25.8671 43.0505 25.0573C43.0141 24.27 42.4665 23.7273 41.6379 23.71C40.6587 23.6899 39.679 23.7052 38.6994 23.7033L38.6999 23.7038ZM49.267 26.546V26.5484C50.2189 26.5484 51.1707 26.5661 52.1221 26.5431C53.0653 26.5206 53.6705 25.95 53.682 25.1268C53.6935 24.2748 53.0644 23.7081 52.0746 23.7047C50.2271 23.6975 48.3795 23.6971 46.5323 23.7038C45.4774 23.7076 44.9269 24.1895 44.913 25.0928C44.8991 25.9783 45.4808 26.524 46.4964 26.5422C47.4199 26.559 48.344 26.5455 49.2675 26.5455L49.267 26.546Z"
        fill="#381187"
      />
      <path
        d="M0.0991119 7.74586C0.0991119 6.13679 0.032938 4.59821 0.116375 3.0788C0.211799 1.33501 1.17851 0.0874537 2.34087 0.0174526C2.87266 -0.0146711 3.40541 0.00738399 3.93815 0.00738399C20.4169 0.00738399 36.8956 0.00738399 53.3743 0.00786345C55.3979 0.00786345 56.227 1.26261 56.2347 4.3369C56.2375 5.44062 56.2347 6.54385 56.2347 7.74634H0.0991119V7.74586Z"
        fill="#381187"
      />
    </svg>
  `,
  styles: `
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,
})
export class CardIconComponent {}
