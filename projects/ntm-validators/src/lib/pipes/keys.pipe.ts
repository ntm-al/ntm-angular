import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
  transform(values, args: string[]): any {
    const data = [];
    if (typeof values.length == 'undefined') {
      for (const key in values) {
        if (values.hasOwnProperty(key)) {
          data.push({ key: key, value: values[key] });
        }
      }
    } else {
      for (let i = 0, max = values.length; i < max; i++) {
        for (const key in values[i]) {
          data.push({ key: key, value: values[i][key] });
        }
      }
    }
    return data;
  }
}
