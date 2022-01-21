
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { locacion } from 'src/models/locacion.model';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  locaciones:locacion[]=[
    new locacion(0, "samsung sX", "samsung-sx", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new locacion(1, "samsung sXI", "samsung-sxi", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 2, 1),
    new locacion(2, "samsung sXII", "samsung-sxii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new locacion(3, "samsung sXIII", "samsung-sxiii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 2, 1),
    new locacion(4, "samsung sXIV", "samsung-sxiv", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new locacion(5, "samsung sXV", "samsung-sxv", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 2, 1),
    new locacion(6, "samsung sXVI", "samsung-sxvi", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new locacion(7, "samsung sXVII", "samsung-sxvii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 2, 1),
    new locacion(8, "samsung sXVIII", "samsung-sxviii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new locacion(9, "samsung sXX", "samsung-sxx", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 2, 1),
    new locacion(10, "samsung sX", "samsung-sx", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new locacion(11, "samsung sXI", "samsung-sxi", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new locacion(12, "samsung sXII", "samsung-sxii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new locacion(13, "samsung sXIII", "samsung-sxiii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new locacion(14, "samsung sXIV", "samsung-sxiv", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new locacion(15, "samsung sXV", "samsung-sxv", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new locacion(16, "samsung sXVI", "samsung-sxvi", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new locacion(17, "samsung sXVII", "samsung-sxvii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new locacion(18, "samsung sXVIII", "samsung-sxviii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new locacion(19, "samsung sXX", "samsung-sxx", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new locacion(20, "samsung sX", "samsung-sx", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1)
    ];
  constructor() { }
  AddLocacionService(locacion:locacion){
    this.locaciones.push(locacion);
  }

  DeleteLocacioneservice(id:number){
    if(window.confirm("Desea borrar el Articulo?")){
      for(let i = 0; i < this.locaciones.length; ++i){
        if (this.locaciones[i].id == id){
          this.locaciones.splice(i,1);
        }
      }
    }
  }

  GetLocacioneservice(id:number):locacion | null{
    for(let i = 0; i < this.locaciones.length; ++i){
      if (this.locaciones[i].id == id){
        let helper = this.locaciones[i];
        return helper;
      }
    }
    return null;
  }

  UpdateLocacioneservice(form:FormGroup){
    for(let i = 0; i < this.locaciones.length; ++i){
      if(this.locaciones[i].id == form.get('id')!.value){
        this.locaciones[i].id = form.get('id')!.value;
        this.locaciones[i].name = form.get('name')!.value;
        this.locaciones[i].slug = form.get('slug')!.value; 
        this.locaciones[i].description = form.get('description')!.value; 
        this.locaciones[i].status = form.get('status')!.value; 
        this.locaciones[i].bar_code = form.get('bar_code')!.value;  
        this.locaciones[i].sku = form.get('sku')!.value;  
        this.locaciones[i].comments = form.get('comments')!.value;  
        this.locaciones[i].size = form.get('size')!.value;  
        this.locaciones[i].weight = form.get('weight')!.value;  
        this.locaciones[i].made_in = form.get('made_in')!.value;
        this.locaciones[i].brand_id = form.get('brand_id')!.value;
        this.locaciones[i].category_id = form.get('category_id')!.value;
        this.locaciones[i].unit_id = form.get('unit_id')!.value;
      } 
    }
  }
}
