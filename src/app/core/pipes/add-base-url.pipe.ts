import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../environment/environment';

@Pipe({
  name: 'addBaseUrl',
  standalone: true,
})
export class AddBaseUrlPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    } else {
      return `${environment.base}${value}`;
    }
  }
}
