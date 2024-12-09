import { Component } from '@angular/core';

@Component({
  selector: 'app-check-get-free-form-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      class="icon"
    >
      <path
        d="M3.30588 11.5118C3.50588 11.3118 3.77647 11.2059 4.05882 11.2059C4.34118 11.2059 4.61176 11.3118 4.81176 11.5118L9.34118 16.0412L19.1765 5.71177C19.3647 5.51177 19.6353 5.38235 19.9176 5.38235C20.2 5.38235 20.4706 5.47647 20.6706 5.67647C20.8706 5.86471 20.9882 6.1353 21 6.41765C21 6.7 20.9059 6.97059 20.7059 7.17059L10.1176 18.2882C10.0235 18.3941 9.90588 18.4765 9.77647 18.5235C9.64706 18.5824 9.50588 18.6059 9.36471 18.6176H9.35294C9.07059 18.6176 8.8 18.5118 8.6 18.3118L3.30588 13.0176C3.10588 12.8176 3 12.5471 3 12.2647C3 11.9824 3.10588 11.7118 3.30588 11.5118Z"
        fill="black"
      />
    </svg>
  `,
  styles: `
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `,
})
export class CheckGetFreeFormIconComponent {}
