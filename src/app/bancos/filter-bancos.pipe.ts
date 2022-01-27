import { Pipe, PipeTransform } from '@angular/core';
import { banco } from 'src/models/banco.model';

@Pipe({
  name: 'filterBancos'
})
export class FilterBancosPipe implements PipeTransform {

  transform(bancos: banco[], search:string=""): banco[] {
    if(search.length === 0)
    {
      return bancos;
    }else{
      let Filteredbancos = bancos.filter( banco => banco.name.toUpperCase().includes(search.toUpperCase()) );
      return Filteredbancos;
    }

  }

}
