import { Injectable } from '@angular/core';
import { banco } from 'src/models/banco.model';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ServiceBancosService {

  bancos:banco[]=[
    new banco(0, "samsung sX", "samsung-sx", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new banco(1, "samsung sXI", "samsung-sxi", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 2, 1),
    new banco(2, "samsung sXII", "samsung-sxii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new banco(3, "samsung sXIII", "samsung-sxiii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 2, 1),
    new banco(4, "samsung sXIV", "samsung-sxiv", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new banco(5, "samsung sXV", "samsung-sxv", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 2, 1),
    new banco(6, "samsung sXVI", "samsung-sxvi", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new banco(7, "samsung sXVII", "samsung-sxvii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 2, 1),
    new banco(8, "samsung sXVIII", "samsung-sxviii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new banco(9, "samsung sXX", "samsung-sxx", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 2, 1),
    new banco(10, "samsung sX", "samsung-sx", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1)
  ]

  constructor() { }
  AddBancoService(banco:banco){
    this.bancos.push(banco);
  }

  DeleteBancoService(id:number){
    if(window.confirm("Desea Borrar el Banco?")){
      for(let i = 0; i < this.bancos.length; ++i){
        if(this.bancos[i].id == id){
          this.bancos.splice(i,1);
        }
      }
    }
  }
  GetBancoService(id:number):banco | null{
    for(let i = 0; i < this.bancos.length; ++i){
      if (this.bancos[i].id == id){
        let helper = this.bancos[i];
        return helper;
      }
    }
    return null;
  }

  UpdateBancoService(form:FormGroup){
    for(let i = 0; i < this.bancos.length; ++i){
      if(this.bancos[i].id == form.get('id')!.value){
        this.bancos[i].id = form.get('id')!.value;
        this.bancos[i].name = form.get('name')!.value;
        this.bancos[i].slug = form.get('slug')!.value; 
        this.bancos[i].description = form.get('description')!.value; 
        this.bancos[i].status = form.get('status')!.value; 
        this.bancos[i].bar_code = form.get('bar_code')!.value;  
        this.bancos[i].sku = form.get('sku')!.value;  
        this.bancos[i].comments = form.get('comments')!.value;  
        this.bancos[i].size = form.get('size')!.value;  
        this.bancos[i].weight = form.get('weight')!.value;  
        this.bancos[i].made_in = form.get('made_in')!.value;
        this.bancos[i].brand_id = form.get('brand_id')!.value;
        this.bancos[i].category_id = form.get('category_id')!.value;
        this.bancos[i].unit_id = form.get('unit_id')!.value;
      } 
    }
  }

}
