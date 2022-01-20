import { Component, OnInit } from '@angular/core';
import { brand } from 'src/models/brand.model';
import { BrandsService } from './brands.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  title = 'Marcas';
  subtitle = 'listado de Marcas';

  search:string="";

  brands:brand[]=[];

  constructor(private BrandsService:BrandsService) { 
    this.brands=this.BrandsService.brands;    
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