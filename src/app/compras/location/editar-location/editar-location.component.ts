import { ServiceService } from '../../location/service.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { locacion } from 'src/models/locacion.model';

@Component({
  selector: 'app-editar-location',
  templateUrl: './editar-location.component.html',
  styleUrls: ['./editar-location.component.css']
})
export class EditarLocationComponent implements OnInit {

  title="Locacion";
  subtitle="Editar Locacion";
  HelperId:any;
  FormLocacion!: FormGroup;

  locacion:locacion;
  constructor(private ActiveRoute:ActivatedRoute, public form:FormBuilder, private ServiceService:ServiceService, private router: Router) { 
    this.HelperId = ActiveRoute.snapshot.paramMap.get('id');
    let helper = this.ServiceService.GetLocacioneservice(this.HelperId);

    this.FormLocacion = this.form.group({
      id:['', Validators.required],
      name:['', Validators.required],
      slug:['', Validators.required],
      description:['', Validators.required],
      status:['', Validators.required],
      bar_code:[''],
      sku:[''],
      comments:[''],
      size:[''],
      weight:[''],
      made_in:[''],
      brand_id:['', Validators.required],
      category_id:['', Validators.required],
      unit_id:['', Validators.required],
    }); 
    if(helper != null){
      this.FormLocacion.setValue({
        id:helper['id'],
        name:helper['name'],
        slug:helper['slug'],
        description:helper['description'],
        status:helper['status'],
        bar_code:helper['bar_code'],
        sku:helper['sku'],
        comments:helper['comments'],
        size:helper['size'],
        weight:helper['weight'],
        made_in:helper['made_in'],
        brand_id:helper['brand_id'],
        category_id:helper['category_id'],
        unit_id:helper['unit_id'],
      });
    }
  }

  ngOnInit(): void {
  }
  UpdateLocacion(){
    this.ServiceService.UpdateLocacioneservice(this.FormLocacion);
    this.router.navigateByUrl('compras/location');
  }
}
