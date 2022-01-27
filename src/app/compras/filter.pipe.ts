import { Pipe, PipeTransform } from '@angular/core';
import { compra } from 'src/models/compras.model';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(compras: compra[], search:string=""): compra[] {
    if(search.length === 0)
    {
      return compras;
    }else{
      let Filteredcompras = compras.filter( compra => compra.name.toUpperCase().includes(search.toUpperCase()) );
      return Filteredcompras;
    }

  }
}
