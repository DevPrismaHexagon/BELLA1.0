import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-controlador',
  templateUrl: './controlador.component.html',
  styleUrls: ['./controlador.component.css']
})
export class ControladorComponent implements OnInit {

  constructor(  private router:Router) {
  
   }

  ngOnInit(): void {
    this.router.navigate(['/dashboard'])
    var monitoreo=document.getElementById('monitoreo') as HTMLLIElement;
    monitoreo.addEventListener('click', (e)=>{
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
