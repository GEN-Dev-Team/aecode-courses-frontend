import { Component } from '@angular/core';

@Component({
  selector: 'app-caret-down-icon',
  standalone: true,
  imports: [],
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 12 9">
      <path
        d="M6.6373 8.11035L11.7357 3.01194C12.0881 2.65955 12.0881 2.08973 11.7357 1.74109L10.8885 0.893856C10.5361 0.541466 9.96626 0.541466 9.61762 0.893856L6 4.50398L2.38613 0.890108C2.03374 0.537718 1.46392 0.537718 1.11528 0.890108L0.264292 1.73734C-0.0880978 2.08973 -0.0880978 2.65955 0.264292 3.0082L5.3627 8.1066C5.71509 8.46274 6.28491 8.46274 6.6373 8.11035Z"
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
export class CaretDownIconComponent {}
