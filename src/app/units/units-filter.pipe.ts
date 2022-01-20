import { Pipe, PipeTransform } from '@angular/core';
import { unit } from 'src/models/unit.model';

@Pipe({
  name: 'unitsFilter'
})
export class UnitsFilterPipe implements PipeTransform {

  transform(units: unit[], search:string=""): unit[] {
    if(search.length === 0)
    {
      return units;
    }else{
      let FilteredUnits = units.filter( unit => unit.name.toUpperCase().includes(search.toUpperCase()) );
      return FilteredUnits;
    }
  }

}
