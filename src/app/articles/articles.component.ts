import { Component, OnInit } from '@angular/core';
import { article } from 'src/models/article.model';
import { ArticlesService } from './articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  title = 'Articulos';
  subtitle = 'listado de Articulos';

  search:string="";

  articles:article[]=[];

  constructor(private ArticleService:ArticlesService) {
    this.articles=this.ArticleService.articles;
  }

  ngOnInit(): void {
  }

  DeleteArticle(id:number){
    this.ArticleService.DeleteArticleService(id);
  }

  SearchArticle(search:string){
    this.search = search;
  }
}
