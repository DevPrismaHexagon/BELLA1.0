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
  HelperId: number;

  helperArticle!:article;
  helperArticleDelete!:article;

  constructor(private ArticlesService:ArticlesService, private router: Router) {
  }

  ngOnInit(): void {
    this.GetArticles();
  }

  GetArticles(){
    this.ArticlesService.GetAllArticlesService().subscribe((articles:article[]) => { 
      this.articles = articles;
    });
    
  }
  
  DeleteArticle(id:number, index:number){
    console.log("id: "+id);
    console.log("index: "+index);
    
    this.ArticlesService.DeleteArticleService(id).subscribe( response => {
        /* this.articles.splice(index,1); 
        window.location.reload();  */
    });
  }

  SearchArticle(search:string){
    this.search = search;
  }
}
