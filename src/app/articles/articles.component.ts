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

  constructor(private ArticulosServicio:ArticlesService) {
    this.articles=this.ArticulosServicio.articles;
  }

  ngOnInit(): void {
  }

  BorrarArticulo(id:number){
    this.ArticulosServicio.DeleteArticleService(id);
  }

  searcharticle(search:string){
    this.search = search;
  }
}
