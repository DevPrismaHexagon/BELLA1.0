import { Component, OnInit } from '@angular/core';
import { banco } from 'src/models/banco.model';
import { ServiceBancosService } from '../service-bancos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bancos-editar',
  templateUrl: './bancos-editar.component.html',
  styleUrls: ['./bancos-editar.component.css']
})
export class BancosEditarComponent implements OnInit {

  title="Bancos";
  subtitle="Editar Banco";
  HelperId:any;
  FormBanco!: FormGroup;

  banco:banco;

  constructor(private ActiveRoute:ActivatedRoute, public form:FormBuilder, private servicebancosservice:ServiceBancosService, private router: Router) { 
    this.HelperId = ActiveRoute.snapshot.paramMap.get('id');
    let helper = this.servicebancosservice.GetBancoService(this.HelperId);
    this.FormBanco = this.form.group({
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
      this.FormBanco.setValue({
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
  UpdateBanco(){
    this.servicebancosservice.UpdateBancoService(this.FormBanco);
    this.router.navigateByUrl('bancos');
  }

}
