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
  HelperRefresh: string | null;

  constructor(private ArticleService:ArticlesService, private router: Router) {
  }

  ngOnInit(): void {
    this.GetArticles();
  }

  GetArticles(){
    this.ArticleService.GetAllArticlesService().subscribe((articles:article[]) => { 
      this.articles = articles;
    });
    
  }
  

  DeleteArticle(id:number, index:number){
    this.ArticleService.DeleteArticleService(id).subscribe( response => {
      this.articles.splice(index,1);
    });
  }

  SearchArticle(search:string){
    this.search = search;
  }
}
