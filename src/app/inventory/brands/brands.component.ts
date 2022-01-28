import { Component, OnInit } from '@angular/core';
import { brand } from 'src/models/brand.model';
import { BrandsService } from './brands.service';
import { NombrePaginaService } from 'src/app/controlador/nombre-pagina.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  title = 'Marcas';
  subtitle = 'Gestión de Marcas';

  search:string="";

  brands:brand[]=[];

  constructor(private BrandsService:BrandsService,private nombrePagina:NombrePaginaService) { 
    this.brands=this.BrandsService.brands;    
    nombrePagina.setpagina('Marcas'); 
  }

  ngOnInit(): void {
  }

  BorrarMarca(id:number){

  }
  searchbrand(search:string){
    this.search = search;
  }

  DeleteBrand(id:number){
    this.BrandsService.DeleteBrandService(id);
  }
}
