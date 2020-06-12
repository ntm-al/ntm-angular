import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showDecimal',
})
export class ShowDecimalPipe implements PipeTransform {
  transform(value: string): any {
    if (typeof value !== 'string') {
      return '';
    }

    return value.replace('.', ',');
  }
}
