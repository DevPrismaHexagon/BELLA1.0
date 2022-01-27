import { compra } from './../../../models/compras.model';
import { ServiceComprasService } from './../service-compras.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  title: string ="Agregar Compra";
  random_number:number = Math.floor(100*Math.random());
  FormCompra!: FormGroup;
  constructor(form:FormBuilder, private servicecomprasservice:ServiceComprasService,private router: Router) {

    this.FormCompra = form.group({
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
  SaveCompra(){
    let HelperCompra = new compra(
      this.random_number,
      this.FormCompra.get('name')!.value,
      this.FormCompra.get('slug')!.value, 
      this.FormCompra.get('description')!.value, 
      this.FormCompra.get('status')!.value, 
      this.FormCompra.get('bar_code')!.value,  
      this.FormCompra.get('sku')!.value,  
      this.FormCompra.get('comments')!.value,  
      this.FormCompra.get('size')!.value,  
      this.FormCompra.get('weight')!.value,  
      this.FormCompra.get('made_in')!.value,
      this.FormCompra.get('brand_id')!.value,
      this.FormCompra.get('category_id')!.value,
      this.FormCompra.get('unit_id')!.value,
    );
    this.servicecomprasservice.AddCompraService(HelperCompra);
    this.router.navigateByUrl('compras');
  }
}
