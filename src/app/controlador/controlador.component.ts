import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../seguridad/modal/modal.service';
import { NombrePaginaService } from './nombre-pagina.service';

@Component({
  selector: 'app-controlador',
  templateUrl: './controlador.component.html',
  styleUrls: ['./controlador.component.css']
})
export class ControladorComponent implements OnInit {

  pagina:string;
  constructor(  private router:Router,private nombrePagina:NombrePaginaService, private modalss:ModalService) {
      this.pagina=this.nombrePagina.nombre;
   }

  imodal:boolean;
  ngOnInit(): void {

    this.modalss.$modal.subscribe((valor)=>(this.imodal = valor))

    var monitoreo=document.getElementById('monitoreo') as HTMLLIElement;
    monitoreo.addEventListener('click', (e)=>{
      this.pagina=this.nombrePagina.nombre;
      var hola=e.target as Element;      
      var padre = hola.parentElement as HTMLLIElement;
      var abuelo = padre.parentElement as HTMLLIElement;
      var holo = monitoreo.querySelectorAll(".activado");
      holo.forEach((e)=>{
        e.classList.remove('activado')
      })
      if(hola && hola.tagName=== 'LI'){
        if(abuelo.className==='despegable'){
            abuelo.classList.add('activado')
        }
            hola.classList.add('activado')
        
      }    
    })

    var modo=document.querySelector('#modo');
    modo?.addEventListener("click",()=>{
      document.body.classList.toggle("dark");
      modo?.classList.toggle("active");
    })
  }






}
