import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';
import { venta } from 'src/models/ventas.model';
import { NombrePaginaService } from '../controlador/nombre-pagina.service';

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

  constructor(private ServiceService:ServiceService,private nombrePagina:NombrePaginaService) {
    this.ventas=this.ServiceService.ventas;
    nombrePagina.setpagina('Ventas');
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
