import { Injectable, OnInit } from '@angular/core';
import { article } from 'src/models/article.model';
import { article_category } from 'src/models/article_category.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer, Subject, throwError } from 'rxjs';
import { Iarticle } from 'src/interfaces/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService implements OnInit {

  helperArticle:article;

  articles:article[]=[];
  articles$:Subject<article[]>;

  BaseUrl:string = 'http://localhost/BELLA1.0/belladev1.0/articles/class/articles.controller.php';

  // por ahora se traeran las categorias por aqui
  article_categories:article_category[]=[
    new article_category(0,"camisas", "camisas de todas las tallas", 0, "root"),
    new article_category(1,"camisas manga larga", "camisas de vestir", 0, 1),
    new article_category(2,"camisas manga corta", "camisas casuales", 0, 1),
    new article_category(3,"pantalones", "pantalones de todas las tallas", 0, "root"),
  ]; 

  constructor(private httpClient:HttpClient) {
    this.articles$ = new Subject();
  }

  ngOnInit(): void {
    //this.GetAllArticlesService();
  }

  // halfway done
  AddArticleService(article:article){
    this.articles.push(article);
    this.articles$.next(this.articles);

    return this.httpClient.post(this.BaseUrl, article, {responseType: 'text'});
  }

  // observable
  GetAllArticlesService$():Observable<article[]>{
    console.log("entro en get observable");
    return this.articles$.asObservable();
  }

  // non observable
   GetAllArticlesService(){
     let data = { 
      'option':1
    };
    return this.httpClient.post<Iarticle[]>(this.BaseUrl, data);
  }

  IterateArticlesService(articles:Iarticle[]){
    articles.forEach( e => {
      
      let newArticle = new article(e.id, e.name,e.description);
      
      this.articles.push(newArticle);
    })
    this.articles$.next(this.articles);
  }

  GetArticleService(id:number):Observable<any> {
    let url = this.BaseUrl+"?id="+id;
    return this.httpClient.get(url);
  }

/*   
  UpdateArticleService(article:article){
    console.log("entro a update article service");
    return this.httpClient.put(this.UpdateArticleBaseUrl, article, {responseType: 'text'} );
  }



  SoftDeleteArticleService(article:article) {
    console.log("id: "+article.id);
    console.log("entro a delete article service");
    return this.httpClient.put(this.DeleteArticleBaseUrl, article, {responseType: 'text'} );
  }
   */
}
