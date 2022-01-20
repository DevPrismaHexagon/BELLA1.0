import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { unit } from 'src/models/unit.model';
import { UnitsService } from './units.service';

@Component({
  selector: 'app-add-units',
  templateUrl: './add-units.component.html',
  styleUrls: ['./add-units.component.css']
})
export class AddUnitsComponent implements OnInit {
  title: string ="Agregar Unidad";
  random_number:number = Math.floor(100*Math.random());
  FormUnit!: FormGroup;

  constructor( 
    form:FormBuilder, 
    private UnitsService:UnitsService, 
    private router: Router    
  ){ 

    this.FormUnit = form.group({
    id:[''],
    name:[''],
    description:[''],
    status:[''],
    })
  }

  ngOnInit(): void {
  }

  SaveUnit(){
    let HelperUnit = new unit(
      this.random_number,
      this.FormUnit.get('name')!.value,
      this.FormUnit.get('description')!.value, 
      this.FormUnit.get('status')!.value, 
    );
    this.UnitsService.AddUnitService(HelperUnit);
    this.router.navigateByUrl('unidades');
  }
}
