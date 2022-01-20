import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { unit } from 'src/models/unit.model';
import { UnitsService } from './units.service';

@Component({
  selector: 'app-edit-units',
  templateUrl: './edit-units.component.html',
  styleUrls: ['./edit-units.component.css']
})
export class EditUnitsComponent implements OnInit {

  title="Unidades";
  subtitle="Editar Unidades";
  HelperId:any;
  FormUnit!: FormGroup;

  units:unit[]=[];

  constructor(
    private ActiveRoute:ActivatedRoute, 
    public form:FormBuilder, 
    private UnitsService:UnitsService,
    private router: Router
  ){
    this.HelperId = ActiveRoute.snapshot.paramMap.get('id');
    let helper = this.UnitsService.GetUnitService(this.HelperId);

    this.FormUnit = this.form.group({
      id:['', Validators.required],
      name:['', Validators.required],
      description:['', Validators.required],
      status:['', Validators.required],
    }); 

    if(helper != null){
      this.FormUnit.setValue({
        id:helper['id'],
        name:helper['name'],
        description:helper['description'],
        status:helper['status'],
      });
    }
  }

  ngOnInit(): void {
  }

  UpdateUnit(){
    this.UnitsService.UpdateUnitService(this.FormUnit);
    this.router.navigateByUrl('unidades');
  }
}
