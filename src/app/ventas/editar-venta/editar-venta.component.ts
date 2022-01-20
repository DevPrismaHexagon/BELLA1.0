import { Component, OnInit } from '@angular/core';
import { venta } from './../../../models/ventas.model';
import { ServiceService } from './../service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-venta',
  templateUrl: './editar-venta.component.html',
  styleUrls: ['./editar-venta.component.css']
})
export class EditarVentaComponent implements OnInit {
  title="Ventas";
  subtitle="Editar Venta";
  HelperId:any;
  FormVenta!: FormGroup;

  venta:venta;

  constructor(private ActiveRoute:ActivatedRoute, public form:FormBuilder, private serviceservice:ServiceService, private router: Router) { 
    this.HelperId = ActiveRoute.snapshot.paramMap.get('id');
    let helper = this.serviceservice.GetVentaService(this.HelperId);

    this.FormVenta = this.form.group({
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
      this.FormVenta.setValue({
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
  UpdateVenta(){
    this.serviceservice.UpdateVentaService(this.FormVenta);
    this.router.navigateByUrl('ventas');
  }

}
