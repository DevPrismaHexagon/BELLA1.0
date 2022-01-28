import { Component, OnInit } from '@angular/core';
import { Iarticle } from 'src/interfaces/articles';
import { article } from 'src/models/article.model';
import { ArticlesService } from './articles.service';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private ArticlesService:ArticlesService, private router: Router) {
    this.GetArticles();
    this.GetObserverArticles();
  }

  ngOnInit(): void {
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

  /*   
  DeleteArticle(id:number, index:number){

    this.ArticlesService.GetArticleService(id).subscribe( (article:article) => {
      this.helperArticle=article; 

      if(this.helperArticle != null){
        this.ArticlesService.SoftDeleteArticleService(this.helperArticle).subscribe( response => {
          this.articles.splice(index,1); 
          window.location.reload(); 
        });
      }
    } );
  } 
  */

  SearchArticle(search:string){
    this.search = search;
  }

}
