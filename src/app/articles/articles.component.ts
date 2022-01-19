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

/*   HelperName:String="";
  HelperSlug:String="";
  HelperDescription:String="";
  HelperStatus:number=0;
  HelperBar_code:String="";
  HelperSku:String="";
  HelperComments:String="";
  HelperSize:String="";
  HelperWeight:String="";
  HelperMade_in:String=""; */

  articles:article[]=[];

  constructor(private ArticulosServicio:ArticlesService) {
    this.articles=this.ArticulosServicio.articles;
  }

  ngOnInit(): void {
  }

  BorrarArticulo(id:number){
    this.ArticulosServicio.DeleteArticleService(id);
  }

  GuardarArticulo(){
/*     let HelperArticle = new article(
    this.HelperName, 
    this.HelperSlug, 
    this.HelperDescription, 
    this.HelperStatus,  
    this.HelperBar_code,  
    this.HelperSku,  
    this.HelperComments,  
    this.HelperSize,  
    this.HelperWeight,  
    this.HelperMade_in);
    this.ArticulosServicio.AgregarArticuloServicio(HelperArticle); */
  }

}
