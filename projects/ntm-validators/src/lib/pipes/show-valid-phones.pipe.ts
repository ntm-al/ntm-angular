import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'showValidPhones' })
export class ShowValidPhonesPipe implements PipeTransform {
  transform(value): any {
    let string = '',
      fields = ['cell_phone', 'home_phone', 'alternative_phone', 'phone'];
    if (value) {
      for (let i = fields.length - 1; i >= 0; i--) {
        if (value[fields[i]]) {
          string = string !== '' ? `${string} - ${value[fields[i]]}` : value[fields[i]];
          string = string.replace(/[()]/gi, '');
        }
      }
    }
    if (value['other_phone']) {
      string = value['other_phone'].replace(/[()]/gi, '');
    }

    return string;
  }
}
