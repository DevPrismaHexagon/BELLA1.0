import { Pipe, PipeTransform } from '@angular/core';
import { locacion } from 'src/models/locacion.model';

@Pipe({
  name: 'locationVentas'
})
export class LocationVentasPipe implements PipeTransform {

  transform(locaciones: locacion[], search:string=""): locacion[] {
    if(search.length === 0)
    {
      return locaciones;
    }else{
      let Filteredlocaciones = locaciones.filter( locacion => locacion.name.toUpperCase().includes(search.toUpperCase()) );
      return Filteredlocaciones;
    }

  }

}
