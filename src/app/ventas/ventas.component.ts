import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';
import { venta } from 'src/models/ventas.model';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  title = 'Ventas';
  subtitle = 'listado de Ventas';

  search:string="";

  ventas:venta[]=[];

  constructor(private ServiceService:ServiceService) {
    this.ventas=this.ServiceService.ventas;
  }

  ngOnInit(): void {
  }
  BorrarVenta(id:number){
    this.ServiceService.DeleteVentaService(id);
  }

  searchventa(search:string){
    this.search = search;
  }
}
