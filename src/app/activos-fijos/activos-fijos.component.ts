import { Component, OnInit } from '@angular/core';
import { NombrePaginaService } from '../controlador/nombre-pagina.service';

@Component({
  selector: 'app-activos-fijos',
  templateUrl: './activos-fijos.component.html',
  styleUrls: ['./activos-fijos.component.css']
})
export class ActivosFijosComponent implements OnInit {

  constructor(private nombrePagina:NombrePaginaService) {
    nombrePagina.setpagina('Activos Fijos');
   }

  ngOnInit(): void {
  }

}
