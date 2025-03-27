import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-input-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="29"
      viewBox="0 0 30 29"
      fill="none"
      class="icon"
    >
      <path
        d="M24.1935 28.75H5.80645C4.4654 28.75 3.17927 28.2173 2.231 27.269C1.28273 26.3207 0.75 25.0346 0.75 23.6935V5.30645C0.75 3.9654 1.28273 2.67927 2.231 1.731C3.17927 0.782731 4.4654 0.25 5.80645 0.25H24.1935C25.5346 0.25 26.8207 0.782731 27.769 1.731C28.7173 2.67927 29.25 3.9654 29.25 5.30645V23.6935C29.25 25.0346 28.7173 26.3207 27.769 27.269C26.8207 28.2173 25.5346 28.75 24.1935 28.75ZM5.80645 3.00806C5.19688 3.00806 4.61228 3.25022 4.18125 3.68125C3.75022 4.11228 3.50806 4.69688 3.50806 5.30645V23.6935C3.50806 24.3031 3.75022 24.8877 4.18125 25.3188C4.61228 25.7498 5.19688 25.9919 5.80645 25.9919H24.1935C24.8031 25.9919 25.3877 25.7498 25.8188 25.3188C26.2498 24.8877 26.4919 24.3031 26.4919 23.6935V5.30645C26.4919 4.69688 26.2498 4.11228 25.8188 3.68125C25.3877 3.25022 24.8031 3.00806 24.1935 3.00806H5.80645Z"
        fill="#381187"
      />
    </svg>
  `,
  styles: `
  .icon{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  `,
})
export class CartInputIconComponent {}
