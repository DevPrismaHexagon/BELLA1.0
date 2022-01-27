
import { ServiceService } from '../location/service.service';
import { Component, OnInit } from '@angular/core';
import { locacion } from 'src/models/locacion.model';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  title = 'Locacion';
  subtitle = 'listado de Locaciones';

  search:string="";

  locaciones:locacion[]=[];

  constructor(private serviceService:ServiceService) {
    this.locaciones=this.serviceService.locaciones;
  }

  ngOnInit(): void {
  }
  BorrarLocacion(id:number){
    this.serviceService.DeleteLocacioneservice(id);
  }

  searchlocacion(search:string){
    this.search = search;
  }

}
