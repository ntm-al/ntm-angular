/* eslint-disable @typescript-eslint/indent */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToMonth',
})
export class NumberToMonthPipe implements PipeTransform {
  transform(monthNumber: string): string {
    if (monthNumber != null && monthNumber !== undefined) {
      let monthString: string;

      switch (monthNumber) {
        case '1' || '01':
          monthString = 'Jan';
          break;

        case '2' || '02':
          monthString = 'Fev';
          break;

        case '3' || '03':
          monthString = 'Mar';
          break;

        case '4' || '04':
          monthString = 'Abr';
          break;

        case '5' || '05':
          monthString = 'Mai';
          break;

        case '6' || '06':
          monthString = 'Jun';
          break;

        case '7' || '07':
          monthString = 'Jul';
          break;

        case '8' || '08':
          monthString = 'Ago';
          break;

        case '9' || '09':
          monthString = 'Set';
          break;

        case '10':
          monthString = 'Out';
          break;

        case '11':
          monthString = 'Nov';
          break;

        case '12':
          monthString = 'Dez';
          break;

        default:
          monthString = '-';
      }

      return monthString;
    }
    return monthNumber;
  }
}
