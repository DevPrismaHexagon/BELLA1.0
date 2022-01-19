import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ControladorComponent } from './controlador/controlador.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { IniciarSessionComponent } from './iniciar-session/iniciar-session.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SeguridadComponent } from './seguridad/seguridad.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Error404Component } from './error404/error404.component';
import { ComprasComponent } from './compras/compras.component';
import { CrearComponent } from './compras/crear/crear.component';
import { EditarComponent } from './compras/editar/editar.component';
import { VentasComponent } from './ventas/ventas.component';
import { CrearVentaComponent } from './ventas/crear-venta/crear-venta.component';
import { EditarVentaComponent } from './ventas/editar-venta/editar-venta.component';
import { ActivosFijosComponent } from './activos-fijos/activos-fijos.component';

const rutas:Routes=[
  {path:'',component:ControladorComponent,
    children:[
      {path:'seguridad', component:SeguridadComponent},
      {path:'dashboard', component:DashboardComponent},
      {path:'compras', component:ComprasComponent},
      {path:'compras/crear', component: CrearComponent},
      {path:'compras/editar', component:EditarComponent},
      {path:'ventas', component:VentasComponent},
      {path:'ventas/crear', component: CrearVentaComponent},
      {path:'ventas/editar', component:EditarVentaComponent},
      {path:'activos', component:ActivosFijosComponent},
      {path:'ventas/crear', component: CrearVentaComponent},
      {path:'ventas/editar', component:EditarVentaComponent},

  ]  },
  {path:'login',
    component:LoginComponent,
    children:[
      {path:'iniciar',component:IniciarSessionComponent},
      {path:'registro',component:RegistroComponent}
    ]  
  },
  {path:'**', component:Error404Component}
 

]


@NgModule({
  declarations: [
    AppComponent,
    ControladorComponent,
    LoginComponent,
    RegistroComponent,
    IniciarSessionComponent,
    SeguridadComponent,
    DashboardComponent,
    Error404Component,
    ComprasComponent,
    CrearComponent,
    EditarComponent,
    VentasComponent,
    CrearVentaComponent,
    EditarVentaComponent,
    ActivosFijosComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    BrowserAnimationsModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }