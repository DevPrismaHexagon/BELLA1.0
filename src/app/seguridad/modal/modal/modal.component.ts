import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../usuarios.service';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private modalss:ModalService, private usuario:UsuariosService) { 

  }

  ngOnInit(): void {

  }
  closeModal(){
    this.modalss.$modal.emit(false)
    
  }
  eliminarUsuario(){
    this.usuario.eliminar_usuario().subscribe( e =>{
      this.usuario.armar_usuario(e);
    }
    );
    this.closeModal();
  }


}
