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
    this.SetPaginationCount();
  }

  paginationNumbers: Array<number | string> = [];
  amountByPage = 2;

  SetPaginationCount(){
    this.ArticlesService.Paginate().subscribe( total => {
      let counter = 1;
      let pages = Math.ceil(total/this.amountByPage);
      for (let index = 0; index < pages; index++) {
        if(counter > 4){
          this.paginationNumbers.push('...');
          this.paginationNumbers.push(pages);
          break;
        }
        this.paginationNumbers.push(counter);
        counter++;
      }
    });
  }

  GoToPage(number:any){
    let page = parseInt(number);
    this.ArticlesService.GetAllArticlesService(page).subscribe( articles => {
      this.ArticlesService.IterateArticlesService(articles);
    });
  }

  GetObserverArticles(){
    this.ArticlesService.GetAllArticlesService$().subscribe( articles => { 
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
    this.ArticlesService.SearchArticleService(search).subscribe( articles => 
      {
        this.ArticlesService.IterateArticlesService(articles);
      }
    );
  }

}
