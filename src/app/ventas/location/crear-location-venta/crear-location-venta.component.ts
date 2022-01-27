import { ServiceService } from '../../location/service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { locacion } from 'src/models/locacion.model';

@Component({
  selector: 'app-crear-location-venta',
  templateUrl: './crear-location-venta.component.html',
  styleUrls: ['./crear-location-venta.component.css']
})
export class CrearLocationVentaComponent implements OnInit {

  title: string ="Agregar Venta";
  random_number:number = Math.floor(100*Math.random());
  FormLocacion!: FormGroup;
  constructor(form:FormBuilder, private serviceservice:ServiceService,private router: Router) {

    this.FormLocacion = form.group({
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
  SaveLocacion(){
    let HelperCompra = new locacion(
      this.random_number,
      this.FormLocacion.get('name')!.value,
      this.FormLocacion.get('slug')!.value, 
      this.FormLocacion.get('description')!.value, 
      this.FormLocacion.get('status')!.value, 
      this.FormLocacion.get('bar_code')!.value,  
      this.FormLocacion.get('sku')!.value,  
      this.FormLocacion.get('comments')!.value,  
      this.FormLocacion.get('size')!.value,  
      this.FormLocacion.get('weight')!.value,  
      this.FormLocacion.get('made_in')!.value,
      this.FormLocacion.get('brand_id')!.value,
      this.FormLocacion.get('category_id')!.value,
      this.FormLocacion.get('unit_id')!.value,
    );
    this.serviceservice.AddLocacionService(HelperCompra);
    this.router.navigateByUrl('ventas/location');
  }

}
