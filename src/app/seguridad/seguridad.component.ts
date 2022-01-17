import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.component.html',
  styleUrls: ['./seguridad.component.css'],
  template:''
})
export class SeguridadComponent implements OnInit {

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
  }
}