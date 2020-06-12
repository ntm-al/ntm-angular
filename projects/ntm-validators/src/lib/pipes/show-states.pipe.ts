import { Pipe, PipeTransform } from '@angular/core';
import { InfosService } from '../infos.service';
@Pipe({
  name: 'showStates',
})
export class ShowStatesPipe implements PipeTransform {
  bdInfo = null;
  constructor(private infosService: InfosService) {
    this.infosService.bdInfo.subscribe((info) => {
      this.bdInfo = info;
    });
  }

  transform(value: string): string {
    const regional = this.bdInfo.regionals.filter((data) => data.sigla === value)[0];
    if (regional) {
      return value + ' - ' + regional.description;
    }
    return value;
  }
}
