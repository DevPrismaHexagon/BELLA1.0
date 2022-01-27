import { Pipe, PipeTransform } from '@angular/core';
import { venta } from 'src/models/ventas.model';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(ventas: venta[], search:string=""): venta[] {
    if(search.length === 0)
    {
      return ventas;
    }else{
      let Filteredventas = ventas.filter( venta => venta.name.toUpperCase().includes(search.toUpperCase()) );
      return Filteredventas;
    }

  }

}
