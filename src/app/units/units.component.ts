import { Component, OnInit } from '@angular/core';
import { unit } from 'src/models/unit.model';
import { UnitsService } from './units.service';

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

  constructor(private UnitsService:UnitsService) {
    this.units = this.UnitsService.units;
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
