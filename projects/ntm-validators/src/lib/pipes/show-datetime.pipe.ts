import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showDatetime',
})
export class ShowDatetimePipe implements PipeTransform {
  transform(value: string): any {
    if (typeof value !== 'string') {
      return '';
    }
    const explode = value.split(' '),
      explodeDate = explode[0].split('-');
    return explodeDate[2] + '/' + explodeDate[1] + ' às ' + explode[1].substring(0, 5);
  }
}
