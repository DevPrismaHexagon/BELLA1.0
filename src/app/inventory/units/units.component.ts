import { Component, OnInit } from '@angular/core';
import { unit } from 'src/models/unit.model';
import { UnitsService } from './units.service';
import { NombrePaginaService } from 'src/app/controlador/nombre-pagina.service';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {
  title = 'Unidades';
  subtitle = 'listado de Unidades';

  search:string="";

  units:unit[]=[];

  constructor(private UnitsService:UnitsService,private nombrePagina:NombrePaginaService) {
    this.units = this.UnitsService.units;
    nombrePagina.setpagina('Unidades');
  }

  ngOnInit(): void {
  }

  DeleteUnit(id:number){
    this.UnitsService.DeleteUnitService(id);
  }

  SearchUnit(search:string){
    this.search = search;
  }

}
