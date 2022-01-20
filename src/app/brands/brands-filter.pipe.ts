import { Pipe, PipeTransform } from '@angular/core';
import { brand } from 'src/models/brand.model';

@Pipe({
  name: 'brandsFilter'
})
export class BrandsFilterPipe implements PipeTransform {

  transform(brands:brand[], search:string=""): brand[] {
    if(search.length === 0)
    {
      return brands;
    }else{
      let FilteredBrands = brands.filter( brand => brand.name.toUpperCase().includes(search.toUpperCase()) );
      return FilteredBrands;
    }
  }

}
