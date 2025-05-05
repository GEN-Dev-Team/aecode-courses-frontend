import { Pipe, PipeTransform } from '@angular/core';
<<<<<<< HEAD
import { environment } from '../../../environments/environment';
=======
import { environment } from '../../../environment/environment';
>>>>>>> 6a701c4410546401dfde04eeed2211f8cd751a74

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
