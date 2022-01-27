import { Component, OnInit } from '@angular/core';
import { compra } from './../../../models/compras.model';
import { ServiceComprasService } from './../service-compras.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  title="Compras";
  subtitle="Editar Compra";
  HelperId:any;
  FormCompra!: FormGroup;

  compra:compra;

  constructor(private ActiveRoute:ActivatedRoute, public form:FormBuilder, private servicecomprasservice:ServiceComprasService, private router: Router) { 
    this.HelperId = ActiveRoute.snapshot.paramMap.get('id');
    let helper = this.servicecomprasservice.GetCompraService(this.HelperId);

    this.FormCompra = this.form.group({
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
      this.FormCompra.setValue({
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
  UpdateCompra(){
    this.servicecomprasservice.UpdateCompraService(this.FormCompra);
    this.router.navigateByUrl('compras');
  }
}
