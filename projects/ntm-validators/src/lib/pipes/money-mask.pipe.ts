import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneyMask',
})
export class MoneyMaskPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return (value.toFixed(2) + '').replace('.', ',');
  }
}
