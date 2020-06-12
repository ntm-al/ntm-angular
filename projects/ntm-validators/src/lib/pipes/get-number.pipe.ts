import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getNumber',
})
export class GetNumberPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value.replace(/[/ _)(.-]/g, '');
  }
}
