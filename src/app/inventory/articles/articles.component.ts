import { Component, OnInit } from '@angular/core';
import { Iarticle } from 'src/interfaces/articles';
import { article } from 'src/models/article.model';
import { ArticlesService } from './articles.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NombrePaginaService } from 'src/app/controlador/nombre-pagina.service';
import { ThisReceiver } from '@angular/compiler';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  title = 'Artículos';
  subtitle = 'Gestión de Artículos';

  search:string="";

  articles:article[]=[];
  
  HelperId: number;

  helperArticle:article;
  helperArticleDelete:article;

  constructor(private ArticlesService:ArticlesService, private router: Router,private nombrePagina:NombrePaginaService) {
    nombrePagina.setpagina('Articulos');
    this.GetArticles();
    this.GetObserverArticles();
  }

  ngOnInit(): void {
    
    this.GetObserverArticles();
    this.GetArticles();
  }

  GetObserverArticles(){
    this.ArticlesService.GetAllArticlesService$().subscribe( (articles) => { 
      this.articles = articles;
    });
  }
  
  GetArticles(){
    this.ArticlesService.GetAllArticlesService().subscribe( articles => 
      {
        this.ArticlesService.IterateArticlesService(articles);
      }
    );
  }

  DeleteArticle(id:number, index:number){
    if(window.confirm("Desea eliminar el Articulo?")){
      this.ArticlesService.SoftDeleteArticleService(id, index).subscribe();
    }
  } 

  SearchArticle(search:string){
    this.search = search;
  }

}
