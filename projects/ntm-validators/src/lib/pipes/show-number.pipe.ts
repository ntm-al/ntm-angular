import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showNumber',
})
export class ShowNumberPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    value = value > 0 ? value : 0;
    return value;
  }
}
