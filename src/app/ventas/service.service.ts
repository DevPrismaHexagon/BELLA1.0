import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { venta } from 'src/models/ventas.model';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  ventas:venta[]=[
    new venta(0, "samsung sX", "samsung-sx", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new venta(1, "samsung sXI", "samsung-sxi", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 2, 1),
    new venta(2, "samsung sXII", "samsung-sxii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new venta(3, "samsung sXIII", "samsung-sxiii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 2, 1),
    new venta(4, "samsung sXIV", "samsung-sxiv", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new venta(5, "samsung sXV", "samsung-sxv", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 2, 1),
    new venta(6, "samsung sXVI", "samsung-sxvi", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new venta(7, "samsung sXVII", "samsung-sxvii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 2, 1),
    new venta(8, "samsung sXVIII", "samsung-sxviii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new venta(9, "samsung sXX", "samsung-sxx", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 2, 1),
    new venta(10, "samsung sX", "samsung-sx", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new venta(11, "samsung sXI", "samsung-sxi", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new venta(12, "samsung sXII", "samsung-sxii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new venta(13, "samsung sXIII", "samsung-sxiii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new venta(14, "samsung sXIV", "samsung-sxiv", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new venta(15, "samsung sXV", "samsung-sxv", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new venta(16, "samsung sXVI", "samsung-sxvi", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new venta(17, "samsung sXVII", "samsung-sxvii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new venta(18, "samsung sXVIII", "samsung-sxviii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new venta(19, "samsung sXX", "samsung-sxx", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new venta(20, "samsung sX", "samsung-sx", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1)
  ]
  constructor() { }
  AddVentaService(venta:venta){
    this.ventas.push(venta);
  }

  DeleteVentaService(id:number){
    if(window.confirm("Desea borrar el Articulo?")){
      for(let i = 0; i < this.ventas.length; ++i){
        if (this.ventas[i].id == id){
          this.ventas.splice(i,1);
        }
      }
    }
  }

  GetVentaService(id:number):venta | null{
    for(let i = 0; i < this.ventas.length; ++i){
      if (this.ventas[i].id == id){
        let helper = this.ventas[i];
        return helper;
      }
    }
    return null;
  }

  UpdateVentaService(form:FormGroup){
    for(let i = 0; i < this.ventas.length; ++i){
      if(this.ventas[i].id == form.get('id')!.value){
        this.ventas[i].id = form.get('id')!.value;
        this.ventas[i].name = form.get('name')!.value;
        this.ventas[i].slug = form.get('slug')!.value; 
        this.ventas[i].description = form.get('description')!.value; 
        this.ventas[i].status = form.get('status')!.value; 
        this.ventas[i].bar_code = form.get('bar_code')!.value;  
        this.ventas[i].sku = form.get('sku')!.value;  
        this.ventas[i].comments = form.get('comments')!.value;  
        this.ventas[i].size = form.get('size')!.value;  
        this.ventas[i].weight = form.get('weight')!.value;  
        this.ventas[i].made_in = form.get('made_in')!.value;
        this.ventas[i].brand_id = form.get('brand_id')!.value;
        this.ventas[i].category_id = form.get('category_id')!.value;
        this.ventas[i].unit_id = form.get('unit_id')!.value;
      } 
    }
  }
}
