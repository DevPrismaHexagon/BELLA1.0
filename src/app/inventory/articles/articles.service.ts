import { Injectable, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { article } from 'src/models/article.model';
import { article_category } from 'src/models/article_category.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Iarticle } from 'src/interfaces/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService implements OnInit {

  articles:article[]=[];

  // por ahora se traeran las categorias por aqui
  article_categories:article_category[]=[
    new article_category(0,"camisas", "camisas de todas las tallas", 0, "root"),
    new article_category(1,"camisas manga larga", "camisas de vestir", 0, 1),
    new article_category(2,"camisas manga corta", "camisas casuales", 0, 1),
    new article_category(3,"pantalones", "pantalones de todas las tallas", 0, "root"),
  ];

  GetAllArticlesBaseUrl:string = 'http://localhost/belladev1.0/articles/read.php';
  AddArticlesBaseUrl:string = 'http://localhost/belladev1.0/articles/create.php';

  constructor(private httpClient:HttpClient) {
  }

  ngOnInit(): void {
    this.GetAllArticlesService();
  }

  AddArticleService(article:article):Observable<any>{
    const body = JSON.stringify(article);
    console.log(body);
    let algo = this.httpClient.post(this.AddArticlesBaseUrl+"?insertar", body);
    console.log(algo);
    return algo;
  }

  GetAllArticlesService(){
    return this.httpClient.get<Iarticle[]>(this.GetAllArticlesBaseUrl);
  }

  DeleteArticleService(id:number):Observable<any> {
    console.log("id de entrada en servicio: "+id);
    
    let url = this.GetAllArticlesBaseUrl+"?borrar="+id;
    console.log("URL completa: "+url);
    
    return this.httpClient.get(url);
  }

  GetArticleService(id:number):article | null{
     for(let i = 0; i < this.articles.length; ++i){
      if (this.articles[i].id == id){
        let helper = this.articles[i];
        return helper;
      }
    }
    return null; 
  }

  UpdateArticleService(form:FormGroup /* article:article */){
/*     for(let i = 0; i < this.articles.length; ++i){
      if(this.articles[i].id == form.get('id')!.value){
        this.articles[i].id = form.get('id')!.value;
        this.articles[i].name = form.get('name')!.value;
        this.articles[i].slug = form.get('slug')!.value; 
        this.articles[i].description = form.get('description')!.value; 
        this.articles[i].status = form.get('status')!.value; 
        this.articles[i].bar_code = form.get('bar_code')!.value;  
        this.articles[i].sku = form.get('sku')!.value;  
        this.articles[i].comments = form.get('comments')!.value;  
        this.articles[i].size = form.get('size')!.value;  
        this.articles[i].weight = form.get('weight')!.value;  
        this.articles[i].made_in = form.get('made_in')!.value;
        this.articles[i].brand_id = form.get('brand_id')!.value;
        this.articles[i].category_id = form.get('category_id')!.value;
        this.articles[i].unit_id = form.get('unit_id')!.value;
      } 
    } */
  }
}
