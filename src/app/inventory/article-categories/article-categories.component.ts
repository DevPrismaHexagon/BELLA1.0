import { Component, OnInit } from '@angular/core';
import { article_category } from 'src/models/article_category.model';
import { ArticleCategoriesService } from './article-categories.service';
import { NombrePaginaService } from 'src/app/controlador/nombre-pagina.service';

@Component({
  selector: 'app-article-categories',
  templateUrl: './article-categories.component.html',
  styleUrls: ['./article-categories.component.css']
})
export class ArticleCategoriesComponent implements OnInit {
  title = 'Categorias de Articulos';
  subtitle = 'listado de Categorias';

  search:string="";

  article_categories:article_category[]=[];
  filteredList:article_category[]=[];

  constructor(private ArticleCategoryService:ArticleCategoriesService,private nombrePagina:NombrePaginaService) { 
    this.article_categories = this.ArticleCategoryService.article_categories;
    nombrePagina.setpagina('Categorias de articulos');
  }

  ngOnInit(): void {
    /* this.filterByArticleCategory("root"); */
  }

/*   filterByArticleCategory(id:number | string){
    if(typeof id === 'string')
    {
      this.filteredList = this.article_categories.filter(category => category.parent_id == "root");
    }else{
      this.filteredList = this.article_categories.filter(category => category.parent_id == id);
    }
  } */

  DeleteArticleCategory(id:number){
    this.ArticleCategoryService.DeleteArticleCategoryService(id);
  }

  SearchArticleCategory(search:string){
    this.search = search;
  }
}
