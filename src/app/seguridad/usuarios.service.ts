import { EventEmitter, Injectable } from '@angular/core';
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

  usuarios:Usuario[]=[];
  private usuarios$: Subject<Usuarioss[]>;
  urlPagina = environment.url;
  
  ver_usuarios(){
    let data={
      'opcion':1
    }
    let path=`${this.urlPagina}usuarios/usuarios.controlador.php`;
     return this.http.post<Usuarioss[]>(path,data);
  }
  buscar_usuarios(buscar: string){
    let data={
      'opcion':5,
      'buscar': buscar
    }
    let path=`${this.urlPagina}usuarios/usuarios.controlador.php`;
     return this.http.post<Usuarioss[]>(path,data);
  }
  agregar_usuarios(user:string, password:string, rol:number){
    let data={
      'opcion':2,
      'user': user,
      'password':password,
      'rol': rol
    }
    let path=`${this.urlPagina}usuarios/usuarios.controlador.php`;
     return this.http.post<Usuarioss[]>(path,data);
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
    let path=`${this.urlPagina}usuarios/usuarios.controlador.php`;
     return this.http.post<Usuarioss[]>(path,data);
  }
  actualizar_usuario(id:number, tipo:string, texto:any){
    let data={
      'opcion':4,
      'id': id,
      'tipo': tipo,
      'texto':texto
    }
    let path=`${this.urlPagina}usuarios/usuarios.controlador.php`;
     return this.http.post<Usuarioss[]>(path,data); 
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
