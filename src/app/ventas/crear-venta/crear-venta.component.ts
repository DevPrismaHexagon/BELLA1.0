import { venta } from './../../../models/ventas.model';
import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-venta',
  templateUrl: './crear-venta.component.html',
  styleUrls: ['./crear-venta.component.css']
})
export class CrearVentaComponent implements OnInit {

  title: string ="Agregar Venta";
  random_number:number = Math.floor(100*Math.random());
  FormVenta!: FormGroup;
  constructor(form:FormBuilder, private serviceservice:ServiceService,private router: Router) {

    this.FormVenta = form.group({
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
  SaveVenta(){
    let HelperVenta = new venta(
      this.random_number,
      this.FormVenta.get('name')!.value,
      this.FormVenta.get('slug')!.value, 
      this.FormVenta.get('description')!.value, 
      this.FormVenta.get('status')!.value, 
      this.FormVenta.get('bar_code')!.value,  
      this.FormVenta.get('sku')!.value,  
      this.FormVenta.get('comments')!.value,  
      this.FormVenta.get('size')!.value,  
      this.FormVenta.get('weight')!.value,  
      this.FormVenta.get('made_in')!.value,
      this.FormVenta.get('brand_id')!.value,
      this.FormVenta.get('category_id')!.value,
      this.FormVenta.get('unit_id')!.value,
    );
    this.serviceservice.AddVentaService(HelperVenta);
    this.router.navigateByUrl('ventas');
  }

}
