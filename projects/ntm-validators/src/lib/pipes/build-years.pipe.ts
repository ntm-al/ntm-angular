import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buildYears',
})
export class BuildYearsPipe implements PipeTransform {
  transform(firstYear = 2017, args?: any): any {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = firstYear; i <= currentYear; i++) {
      years.push(i);
    }
    return years;
  }
}
