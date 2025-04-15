import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
  standalone: true,
})
export class DateFormatPipe implements PipeTransform {
  monthList = [
    'ENERO',
    'FEBRERO',
    'MARZO',
    'ABRIL',
    'MAYO',
    'JUNIO',
    'JULIO',
    'AGOSTO',
    'SEPTIEMBRE',
    'OCTUBRE',
    'NOVIEMBRE',
    'DICIEMBRE',
  ];

  transform(value: any, format: 'upper' | 'lower' = 'upper'): string {
    if (!value) return '';
    else {
      const date = value;

      const monthId = Number(date[1]) - 1;

      const formatedDate = date[2] + ' DE ' + this.monthList[monthId];

      return format === 'lower'
        ? formatedDate.toLowerCase()
        : `${formatedDate}`;
    }
  }
}
