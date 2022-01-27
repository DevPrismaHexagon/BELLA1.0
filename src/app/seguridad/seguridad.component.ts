import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NombrePaginaService } from '../controlador/nombre-pagina.service';
import { ModalService } from './modal/modal.service';
import { Usuarioss } from './usuario';
import { Usuario } from './usuarios.model';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.component.html',
  styleUrls: ['../tablas.component.css', './seguridad.component.css'],
  template:''
})
export class SeguridadComponent implements OnInit {
 

  filterPost = '';
  
  paginacion=[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
  numeros: Array<string | number>=[]
  determinarPaginacion(){
    let total=this.paginacion.length;
    let contador=0;
    for(let i=0; i<total; i++){
      let g=this.paginacion[i];
      if(contador>4){
        this.numeros.push('...')
        this.numeros.push(this.paginacion[total-1])
        break
      }
      this.numeros.push(g)
      contador++;
    }
  }

  abrirModal(id:number){
    
    this.usuario.setId(id)
    this.modalss.$modal.emit(true);
  }
  
  usuarios:Usuario[];
  constructor(private nombrePagina:NombrePaginaService,private modalss:ModalService, private usuario:UsuariosService) {
    this.usuario.getUsuarios$().subscribe(()=>{
      this.usuarios=this.usuario.usuarios;
    });
    this.ver_usuario()
    nombrePagina.setpagina('Usuario') 
   }
   actualizarUsuario(id:number, campo:string,e:Event){  
    let a = e.target as HTMLInputElement;
     this.usuario.actualizar_usuario(id,campo,a.value).subscribe();
   }

  ver_usuario(){
    this.usuario.ver_usuarios().subscribe(todos=>{
      this.usuario.armar_usuario(todos)  
   })   
  }
  buscar:string='';
  buscarUsuario(){
      this.usuario.buscar_usuarios(this.buscar).subscribe(todos =>{
        console.log(todos)
        this.usuario.armar_usuario(todos) 
      })
     
  }

   
  ngOnInit(): void {
    this.determinarPaginacion()
      
  }
}