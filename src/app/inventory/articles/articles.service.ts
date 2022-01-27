import { Injectable, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { article } from 'src/models/article.model';
import { article_category } from 'src/models/article_category.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, Observer, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Iarticle } from 'src/interfaces/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService implements OnInit {

  helperArticle:article;
  articles:article[]=[];

  // por ahora se traeran las categorias por aqui
  article_categories:article_category[]=[
    new article_category(0,"camisas", "camisas de todas las tallas", 0, "root"),
    new article_category(1,"camisas manga larga", "camisas de vestir", 0, 1),
    new article_category(2,"camisas manga corta", "camisas casuales", 0, 1),
    new article_category(3,"pantalones", "pantalones de todas las tallas", 0, "root"),
  ];

<<<<<<< HEAD
  GetAllArticlesBaseUrl:string = 'http://localhost/belladev1.0/articles/read.php';
  AddArticlesBaseUrl:string = 'http://localhost/belladev1.0/articles/create.php';
  UpdateArticleBaseUrl:string = 'http://localhost/belladev1.0/articles/update.php';
  GetArticleBaseUrl:string = 'http://localhost/belladev1.0/articles/single_read.php';
  DeleteArticleBaseUrl:string = 'http://localhost/belladev1.0/articles/delete.php';
=======
  GetAllArticlesBaseUrl:string = 'http://localhost/BELLA1.0/belladev1.0/articles/read.php';
  AddArticlesBaseUrl:string = 'http://localhost/BELLA1.0/belladev1.0/articles/create.php';
  UpdateArticlesBaseUrl:string = 'http://localhost/BELLA1.0/belladev1.0/articles/update.php';
  GetArticleBaseUrl:string = 'http://localhost/BELLA1.0/belladev1.0/articles/single_read.php';
>>>>>>> 3d3ff4f0d15fd7df7e9504b9d08242b2a5f4cd10

  constructor(private httpClient:HttpClient) {
  }

  ngOnInit(): void {
    this.GetAllArticlesService();
  }

  // done
  GetAllArticlesService(){
    return this.httpClient.get<article[]>(this.GetAllArticlesBaseUrl);
  }

  // halfway done
  AddArticleService(article:article){
    return this.httpClient.post(this.AddArticlesBaseUrl, article, {responseType: 'text'});
  }

  // in progress
  UpdateArticleService(article:article){
    console.log("entro a update article service");
    return this.httpClient.put(this.UpdateArticleBaseUrl, article, {responseType: 'text'} );
  }

  GetArticleService(id:number):Observable<any> {
    let url = this.GetArticleBaseUrl+"?id="+id;
    return this.httpClient.get(url);
  }

  // in progress
  DeleteArticleService(id:number) {
    console.log("id: "+id);
    return this.httpClient.put(this.DeleteArticleBaseUrl, id);
  }
}
