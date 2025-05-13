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

  transform(value: any, isCard: boolean = true): string {
    if (!value) return '';
    else if (isCard) {
      const date = value;

      const monthId = Number(date[1]) - 1;

      const formatedDate = date[2] + ' DE ' + this.monthList[monthId];

      return formatedDate.toUpperCase();
    } else {
      const date = value.split('-');

      const monthId = Number(date[1]) - 1;

      const formatedDate = date[2] + ' DE ' + this.monthList[monthId];

      return formatedDate.toUpperCase();
      return formatedDate.toUpperCase();
    }
  }
}
