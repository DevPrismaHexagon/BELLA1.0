import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { brand } from 'src/models/brand.model';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  brands:brand[] = [
    new brand(0,"toyota", "empresa japonesa", 1),
    new brand(1,"samsung", "empresa coreana", 1),
    new brand(2,"nikon", "empresa japones", 1),
    new brand(3,"apple", "empresa americana", 1),
  ];

  constructor() { }

  AddBrandService(brand:brand){
    this.brands.push(brand);
  }

  GetBrandService(id:number):brand | null{
    for(let i = 0; i < this.brands.length; ++i){
      if (this.brands[i].id == id){
        let helper = this.brands[i];
        return helper;
      }
    }
    return null;
  }

  UpdateBrandService(form:FormGroup /* article:article */){
    for(let i = 0; i < this.brands.length; ++i){
      if(this.brands[i].id == form.get('id')!.value){
        this.brands[i].id = form.get('id')!.value;
        this.brands[i].name = form.get('name')!.value;
        this.brands[i].description = form.get('description')!.value; 
        this.brands[i].status = form.get('status')!.value; 
      } 
    }
  }
}
