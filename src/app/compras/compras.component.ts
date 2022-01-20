import { Component, OnInit } from '@angular/core';
import { ServiceComprasService } from './service-compras.service';
import { compra } from 'src/models/compras.model';
@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {


 title = 'Compras';
  subtitle = 'listado de Compras';

  search:string="";

  compras:compra[]=[];

  constructor(private ServiceComprasService:ServiceComprasService) {
    this.compras=this.ServiceComprasService.compras;
  }

  ngOnInit(): void {
  }

  BorrarCompra(id:number){
    this.ServiceComprasService.DeleteCompraService(id);
  }

  searcharticle(search:string){
    this.search = search;
  }

}
