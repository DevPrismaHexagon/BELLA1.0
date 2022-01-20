import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ControladorComponent } from './controlador/controlador.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { IniciarSessionComponent } from './iniciar-session/iniciar-session.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

// leopoldo's components
import { ArticlesComponent } from './inventory/articles/articles.component';
import { ArticlesService } from './inventory/articles/articles.service';
import { BrandsService } from './inventory/brands/brands.service';
import { EditArticlesComponent } from './inventory/articles/edit-articles.component';
import { ArticlesFilterPipe } from './inventory/articles/articles-filter.pipe';
import { BrandsComponent } from './inventory/brands/brands.component';
import { AddBrandsComponent } from './inventory/brands/add-brands.component';
import { EditBrandsComponent } from './inventory/brands/edit-brands.component';
import { BrandsFilterPipe } from './inventory/brands/brands-filter.pipe';
import { AddArticlesComponent } from './inventory/articles/add-articles.component';
import { UnitsComponent } from './inventory/units/units.component';
import { AddUnitsComponent } from './inventory/units/add-units.component';
import { EditUnitsComponent } from './inventory/units/edit-units.component';
import { ArticleCategoriesComponent } from './inventory/article-categories/article-categories.component';
import { UnitsService } from './inventory/units/units.service';
import { ArticleCategoriesService } from './inventory/article-categories/article-categories.service';
import { UnitsFilterPipe } from './inventory/units/units-filter.pipe';
import { ArticlecategoriesFilterPipe } from './inventory/article-categories/articlecategories-filter.pipe';
import { AddArticleCategoriesComponent } from './inventory/article-categories/add-article-categories.component';
import { EditArticleCategoriesComponent } from './inventory/article-categories/edit-article-categories.component';
import { ArticlecategoriesbyidFilterPipe } from './inventory/article-categories/articlecategoriesbyid-filter.pipe';

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
      {path: 'articulos', component: ArticlesComponent },
      {path: 'articulos/crear', component: AddArticlesComponent },
      {path: 'articulos/editar/:id', component: EditArticlesComponent },
      {path: 'marcas', component: BrandsComponent },
      {path: 'marcas/crear', component: AddBrandsComponent },
      {path: 'marcas/editar/:id', component: EditBrandsComponent },
      {path: 'unidades', component: UnitsComponent },
      {path: 'unidades/crear', component: AddUnitsComponent },
      {path: 'unidades/editar/:id', component: EditUnitsComponent },
      {path: 'categorias-articulo', component: ArticleCategoriesComponent },
      {path: 'categorias-articulo/crear', component: AddArticleCategoriesComponent },
      {path: 'categorias-articulo/editar/:id', component: EditArticleCategoriesComponent },

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
    ArticlesComponent,
    EditArticlesComponent,
    AddArticlesComponent,
    ArticlesFilterPipe,
    BrandsComponent,
    AddBrandsComponent,
    EditBrandsComponent,
    BrandsFilterPipe,
    BrandsFilterPipe,
    UnitsComponent,
    AddUnitsComponent,
    EditUnitsComponent,
    ArticleCategoriesComponent,
    UnitsFilterPipe,
    ArticlecategoriesFilterPipe,
    AddArticleCategoriesComponent,
    EditArticleCategoriesComponent,
    ArticlecategoriesbyidFilterPipe,
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [ArticlesService, BrandsService, UnitsService, ArticleCategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }