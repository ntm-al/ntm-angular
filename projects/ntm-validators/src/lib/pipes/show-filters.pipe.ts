import { Pipe, PipeTransform } from '@angular/core';
import { InfosService } from '../infos.service';
@Pipe({
  name: 'showFilters',
})
export class ShowFiltersPipe implements PipeTransform {
  bdInfo = null;
  constructor(private infosService: InfosService) {
    this.infosService.bdInfo.subscribe((info) => {
      this.bdInfo = info;
    });
  }
  transform(filter: any, args?: any): any {
    filter;
    if (filter.key == 'is_ebep') {
      return filter.value ? 'É aluno EBEP' : 'Não é aluno EBEP';
    }

    if (filter.key == 'is_pcd') {
      return filter.value ? 'É aluno PCD' : 'Não é aluno PCD';
    }

    if (filter.key == 'origin_id') {
      return filter.value == 1 ? 'Escola Particular' : 'Escola Pública';
    }

    if (filter.key == 'phase') {
      return 'Fases: ' + filter.value;
    }

    if (filter.key == 'unit_id') {
      const unitName = this.bdInfo.units.filter((unity: any) => {
        return unity.id === filter.value;
      });
      return 'Unidade: ' + unitName[0].description;
    }

    if (filter.key == 'age') {
      return `${filter.value['min'] || 10} a ${filter.value['max'] || 100} anos`;
    }

    if (filter.value.description) {
      return `${filter.value.description}`;
    }

    return filter.value;
  }
}
