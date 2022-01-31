import {  Injectable, OnInit } from '@angular/core';
import { Usuario } from './usuarios.model';
import { HttpClient } from '@angular/common/http';
import { Usuarioss } from './usuario';
import { environment } from 'src/environments/environment.prod';
import { Observable, Subject } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http : HttpClient) { 
    this.usuarios$ = new Subject();
  }
  BaseUrl:string = 'http://localhost4200/BELLA1.0/BellaDev1.0/usuario/usuario.controlador.php';

  usuarios:Usuario[]=[];
  private usuarios$: Subject<Usuarioss[]>;
  // urlPagina = environment.url;
  
  ver_usuarios(empezar:number=1){
    let data={
      'opcion':1,
      'empezar':empezar,
    }
    
    // let path=`${this.urlPagina}/usuario/usuario.controlador.php`;
     return this.http.post<Usuarioss[]>(this.BaseUrl,data);
  }
  buscar_usuarios(buscar: string){
    let data={
      'opcion':5,
      'buscar': buscar
    }
    // let path=`${this.urlPagina}usuario/usuario.controlador.php`;
     return this.http.post<Usuarioss[]>(this.BaseUrl,data);
  }
  agregar_usuarios(user:string, password:string, rol:number){
    let data={
      'opcion':2,
      'user': user,
      'password':password,
      'rol': rol
    }
    // let path=`${this.urlPagina}usuario/usuario.controlador.php`;
     return this.http.post<Usuarioss[]>(this.BaseUrl,data);
  }

  $id:number;
  setId(id:number){
    this.$id=id;
  }
  eliminar_usuario(){
    let data={
      'opcion':3,
      'id': this.$id
    }
    // let path=`${this.urlPagina}usuario/usuario.controlador.php`;
     return this.http.post<Usuarioss[]>(this.BaseUrl,data);
  }
  actualizar_usuario(id:number, tipo:string, texto:any){
    let data={
      'opcion':4,
      'id': id,
      'tipo': tipo,
      'texto':texto
    }
    // let path=`${this.urlPagina}usuario/usuario.controlador.php`;
     return this.http.post<Usuarioss[]>(this.BaseUrl,data); 
  }
  paginacion_usuario(){
    let data={
      'opcion':6,
    }
    // let path=`${this.urlPagina}usuario/usuario.controlador.php`;
     return this.http.post<number>(this.BaseUrl,data); 
  }
  
  getUsuarios$(): Observable<Usuarioss[]> {
    return this.usuarios$.asObservable();
  }

  armar_usuario(usuario:Array<Usuarioss>){
    this.usuarios=[];
    usuario.forEach(e=>{
      let nuevoUsuario=new Usuario(e.id, e.user,e.password, e.rol,e.estado);
      this.usuarios.push(nuevoUsuario);
    })
    this.usuarios$.next(this.usuarios);
    
  }
  

  

  
}
