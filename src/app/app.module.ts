import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ControladorComponent } from './controlador/controlador.component';
import { LoginComponent } from './login/login.component';
// import { RegistroComponent } from './registro/registro.component';
import { IniciarSessionComponent } from './iniciar-session/iniciar-session.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ComprasComponent } from './compras/compras.component';


const rutas:Routes=[
  {path:'',component:ControladorComponent,
    children:[
      {path:'compras',component:ComprasComponent}
    ]
  },

  {path:'login',
    component:LoginComponent,
    children:[
      {path:'iniciar',component:IniciarSessionComponent}
      {path:'registro',component:RegistroComponent}
     ]
  }

]


@NgModule({
  declarations: [
    AppComponent,
    ControladorComponent,
    LoginComponent,
    // RegistroComponent,
    IniciarSessionComponent,
    ComprasComponent
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
