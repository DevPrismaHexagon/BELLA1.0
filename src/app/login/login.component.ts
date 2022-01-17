import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  iniciarSession=true;
  texToBotonRegistro="Registrarse"

  cambiarCuadroPanel(){
    this.iniciarSession=!this.iniciarSession;
    if(this.texToBotonRegistro==="Registrarse"){
      this.texToBotonRegistro="Iniciar Seccion"
    }else{
      this.texToBotonRegistro="Registrarse"
    }
  }
  
  constructor( private router:Router) {
    
   }

  ngOnInit(): void {
    this.router.navigate(['/login/iniciar'])
  }

}
