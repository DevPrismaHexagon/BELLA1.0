import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.component.html',
  styleUrls: ['./seguridad.component.css'],
  template:''
})
export class SeguridadComponent implements OnInit {


  usuario="";
  password="";
  
  agregarLabel(e:Event){
    let a= e.target as Element;
    let r = e.target as HTMLInputElement;
    let b= a.parentElement as HTMLDivElement;
    let c = b.querySelector("label") as Element
    if(r.value==""){
        c.classList.toggle("label")
    }
  }

  agregar(){
    let a = document.getElementById('form') as Element;
    let b = a.querySelectorAll('input');
    b.forEach((e)=>{
      if(e.value!=""){
        let c=e.parentElement as HTMLDivElement;
        let d=c.querySelector('label') as HTMLLabelElement;
        d.classList.add('label')
      }
    })    
  }

  filterPost = '';
  posts = [
    {
      "id": 1,
      "estado":"activo",
      "nombre": "Christian",
      "rol": "Administrador",
      "correo": "christiandmoraless@gmail.com"
    },
    {
      "id": 2,
      "estado":"activo",
      "nombre": "Josue",
      "rol": "Administrador",
      "correo": "christiandmoraless@gmail.com"
    },
    {
      "id": 3,
      "estado":"activo",
      "nombre": "Jose",
      "rol": "Administrador",
      "correo": "christiandmoraless@gmail.com"
    },
    {
      "id": 4,
      "estado":"activo",
      "nombre": "Post One",
      "rol": "Administrador",
      "correo": "christiandmoraless@gmail.com"
    },
    {
      "id": 5,
      "estado":"activo",
      "nombre": "Post One",
      "rol": "Administrador",
      "correo": "christiandmoraless@gmail.com"
    },
    {
      "id": 6,
      "estado":"activo",
      "nombre": "Post One",
      "rol": "Administrador",
      "correo": "christiandmoraless@gmail.com"
    },
    {
      "id": 6,
      "estado":"activo",
      "nombre": "Post One",
      "rol": "Administrador",
      "correo": "christiandmoraless@gmail.com"
    }
  ];

  constructor() { }
  ngOnInit(): void {
    window.addEventListener('load',()=>{
      this.agregar();
    })
  }
}