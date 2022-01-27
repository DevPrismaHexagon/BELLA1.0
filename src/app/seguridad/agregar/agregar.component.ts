import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuarios.model';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor( private router:Router, private users:UsuariosService) { }
  usuario:string='';
  rol:number=0;
  password:string=''
  ngOnInit(): void {
  }
  agregarUsuario(){
    if(this.usuario!='' && this.rol!=0){
        this.users.agregar_usuarios(this.usuario, this.password, this.rol).subscribe(todos=>{
          this.router.navigate(['/usuarios'])
        })
      
    }
  }

}
