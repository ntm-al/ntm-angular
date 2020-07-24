import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstAndLastName',
})
export class FirstAndLastNamePipe implements PipeTransform {
  transform(name: string): string {
    let array: string[];

    if (name != null && name !== undefined) {
      array = name.split(' ');

      if (array.length > 1) {
        return array[0] + ' ' + array[array.length - 1];
      }
      return array[0];
    }
    return name;
  }
}
