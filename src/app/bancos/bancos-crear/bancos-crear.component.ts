import { Component, OnInit } from '@angular/core';
import { banco } from 'src/models/banco.model';
import { ServiceBancosService } from '../service-bancos.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bancos-crear',
  templateUrl: './bancos-crear.component.html',
  styleUrls: ['./bancos-crear.component.css']
})
export class BancosCrearComponent implements OnInit {

  title: string ="Agregar Banco";
  random_number:number = Math.floor(100*Math.random());
  FormBanco!: FormGroup;

  constructor(form:FormBuilder, private servicebancosservice:ServiceBancosService,private router: Router) {

    this.FormBanco = form.group({
      id:[''],
      name:[''],
      slug:[''],
      description:[''],
      status:[''],
      bar_code:[''],
      sku:[''],
      comments:[''],
      size:[''],
      weight:[''],
      made_in:[''],
      })
   }

  ngOnInit(): void {
   
  }
  SaveBanco(){
    let HelperBanco = new banco(
      this.random_number,
      this.FormBanco.get('name')!.value,
      this.FormBanco.get('slug')!.value, 
      this.FormBanco.get('description')!.value, 
      this.FormBanco.get('status')!.value, 
      this.FormBanco.get('bar_code')!.value,  
      this.FormBanco.get('sku')!.value,  
      this.FormBanco.get('comments')!.value,  
      this.FormBanco.get('size')!.value,  
      this.FormBanco.get('weight')!.value,  
      this.FormBanco.get('made_in')!.value,
      this.FormBanco.get('brand_id')!.value,
      this.FormBanco.get('category_id')!.value,
      this.FormBanco.get('unit_id')!.value,
    );
    this.servicebancosservice.AddBancoService(HelperBanco);
    this.router.navigateByUrl('bancos');
  }

}
