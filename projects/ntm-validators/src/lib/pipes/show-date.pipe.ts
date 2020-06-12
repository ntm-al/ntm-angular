import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showDate',
})
export class ShowDatePipe implements PipeTransform {
  transform(value: string): any {
    if (typeof value !== 'string') {
      return '';
    }
    const explode = value.split(' '),
      explodeDate = explode[0].split('-');
    return explodeDate[2] + '/' + explodeDate[1] + '/' + explodeDate[0];
  }
}
