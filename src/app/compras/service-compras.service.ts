import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { compra } from 'src/models/compras.model';
@Injectable({
  providedIn: 'root'
})
export class ServiceComprasService {

  compras:compra[]=[
    new compra(0, "samsung sX", "samsung-sx", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new compra(1, "samsung sXI", "samsung-sxi", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 2, 1),
    new compra(2, "samsung sXII", "samsung-sxii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new compra(3, "samsung sXIII", "samsung-sxiii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 2, 1),
    new compra(4, "samsung sXIV", "samsung-sxiv", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new compra(5, "samsung sXV", "samsung-sxv", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 2, 1),
    new compra(6, "samsung sXVI", "samsung-sxvi", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new compra(7, "samsung sXVII", "samsung-sxvii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 2, 1),
    new compra(8, "samsung sXVIII", "samsung-sxviii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new compra(9, "samsung sXX", "samsung-sxx", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 2, 1),
    new compra(10, "samsung sX", "samsung-sx", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new compra(11, "samsung sXI", "samsung-sxi", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new compra(12, "samsung sXII", "samsung-sxii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new compra(13, "samsung sXIII", "samsung-sxiii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new compra(14, "samsung sXIV", "samsung-sxiv", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new compra(15, "samsung sXV", "samsung-sxv", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new compra(16, "samsung sXVI", "samsung-sxvi", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new compra(17, "samsung sXVII", "samsung-sxvii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new compra(18, "samsung sXVIII", "samsung-sxviii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new compra(19, "samsung sXX", "samsung-sxx", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new compra(20, "samsung sX", "samsung-sx", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1)
  ];
  constructor() { }
  AddCompraService(compra:compra){
    this.compras.push(compra);
  }

  DeleteCompraService(id:number){
    if(window.confirm("Desea borrar el Articulo?")){
      for(let i = 0; i < this.compras.length; ++i){
        if (this.compras[i].id == id){
          this.compras.splice(i,1);
        }
      }
    }
  }

  GetCompraService(id:number):compra | null{
    for(let i = 0; i < this.compras.length; ++i){
      if (this.compras[i].id == id){
        let helper = this.compras[i];
        return helper;
      }
    }
    return null;
  }

  UpdateCompraService(form:FormGroup){
    for(let i = 0; i < this.compras.length; ++i){
      if(this.compras[i].id == form.get('id')!.value){
        this.compras[i].id = form.get('id')!.value;
        this.compras[i].name = form.get('name')!.value;
        this.compras[i].slug = form.get('slug')!.value; 
        this.compras[i].description = form.get('description')!.value; 
        this.compras[i].status = form.get('status')!.value; 
        this.compras[i].bar_code = form.get('bar_code')!.value;  
        this.compras[i].sku = form.get('sku')!.value;  
        this.compras[i].comments = form.get('comments')!.value;  
        this.compras[i].size = form.get('size')!.value;  
        this.compras[i].weight = form.get('weight')!.value;  
        this.compras[i].made_in = form.get('made_in')!.value;
        this.compras[i].brand_id = form.get('brand_id')!.value;
        this.compras[i].category_id = form.get('category_id')!.value;
        this.compras[i].unit_id = form.get('unit_id')!.value;
      } 
    }
  }
}
