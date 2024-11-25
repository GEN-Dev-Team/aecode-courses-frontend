import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
    >
      <path
        d="M7.77202 15.75H10.2266C10.3893 15.75 10.5454 15.6853 10.6605 15.5703C10.7755 15.4552 10.8402 15.2991 10.8402 15.1364V7.97707L14.3993 3.23182C14.4677 3.14065 14.5093 3.03224 14.5195 2.91874C14.5298 2.80525 14.5082 2.69114 14.4572 2.58921C14.4063 2.48728 14.3279 2.40156 14.231 2.34165C14.134 2.28173 14.0223 2.25 13.9084 2.25H4.0902C3.97624 2.25 3.86453 2.28173 3.76759 2.34165C3.67065 2.40156 3.59231 2.48728 3.54135 2.58921C3.49038 2.69114 3.46881 2.80525 3.47904 2.91874C3.48928 3.03224 3.53091 3.14065 3.59929 3.23182L7.15838 7.97707V15.1364C7.15838 15.2991 7.22303 15.4552 7.33811 15.5703C7.45319 15.6853 7.60927 15.75 7.77202 15.75ZM5.31747 3.47727H12.6811L9.73565 7.40455C9.65599 7.51076 9.61293 7.63995 9.61293 7.77273V14.5227H8.38565V7.77273C8.38565 7.63995 8.34259 7.51076 8.26293 7.40455L5.31747 3.47727Z"
      />
    </svg>
  `,
  styles: ``,
})
export class FilterIconComponent {}