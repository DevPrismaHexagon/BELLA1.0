import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { unit } from 'src/models/unit.model';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  units:unit[]=[
    new unit(0,"litro", "unidad europea", 1),
    new unit(1,"kilo", "unidad europea", 1),
    new unit(2,"docena", "12", 1),
    new unit(3,"arroba", "46kg", 1),
  ];

  constructor() { }

  AddUnitService(unit:unit){
    this.units.push(unit);
  }

  DeleteUnitService(id:number){
    if(window.confirm("Desea borrar la unidad?")){
      for(let i = 0; i < this.units.length; ++i){
        if (this.units[i].id == id){
          this.units.splice(i,1);
        }
      }
    }
  }

  GetUnitService(id:number):unit | null{
    for(let i = 0; i < this.units.length; ++i){
      if (this.units[i].id == id){
        let helper = this.units[i];
        return helper;
      }
    }
    return null;
  }

  UpdateUnitService(form:FormGroup /* article:article */){
    for(let i = 0; i < this.units.length; ++i){
      if(this.units[i].id == form.get('id')!.value){
        this.units[i].id = form.get('id')!.value;
        this.units[i].name = form.get('name')!.value;
        this.units[i].description = form.get('description')!.value; 
        this.units[i].status = form.get('status')!.value; 
      } 
    }
  }
}
