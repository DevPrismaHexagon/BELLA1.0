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
export class SeguridadComponent implements OnInit  {
 

  
  numeros: Array<string | number>=[]
  cantidadPagina=2;
  determinarPaginacion(){  
    this.usuario.paginacion_usuario().subscribe(total=>{
      let contador=1;
      let paginas=Math.ceil(total/this.cantidadPagina);
      for(let i=0; i<paginas; i++){
        if(contador>4){
          this.numeros.push('...')
          this.numeros.push(paginas)
          break
        }
        this.numeros.push(contador)
        contador++;
      }
    })
  }

  abrirModal(id:number){
    
    this.usuario.setId(id)
    this.modalss.$modal.emit(true);
  }
  
  usuarios:Usuario[];
  constructor(private nombrePagina:NombrePaginaService,private modalss:ModalService, private usuario:UsuariosService ) {
    
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
        this.usuario.armar_usuario(todos) 
      })
  }
  ir_pagina(empezar:any){
    console.log(parseInt(empezar))
    this.usuario.ver_usuarios(parseInt(empezar)).subscribe(todos=>{
    this.usuario.armar_usuario(todos)  
   })  
  }
  ngOnInit(): void {
    this.determinarPaginacion()   
  }
}