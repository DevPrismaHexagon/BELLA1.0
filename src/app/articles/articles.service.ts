import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { article } from 'src/models/article.model';
import { article_category } from 'src/models/article_category.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  articles:article[]=[
    new article(0, "samsung sX", "samsung-sx", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(1, "samsung sXI", "samsung-sxi", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 2, 1),
    new article(2, "samsung sXII", "samsung-sxii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(3, "samsung sXIII", "samsung-sxiii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 2, 1),
    new article(4, "samsung sXIV", "samsung-sxiv", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(5, "samsung sXV", "samsung-sxv", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 2, 1),
    new article(6, "samsung sXVI", "samsung-sxvi", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(7, "samsung sXVII", "samsung-sxvii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 2, 1),
    new article(8, "samsung sXVIII", "samsung-sxviii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(9, "samsung sXX", "samsung-sxx", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 2, 1),
    new article(10, "samsung sX", "samsung-sx", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(11, "samsung sXI", "samsung-sxi", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(12, "samsung sXII", "samsung-sxii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(13, "samsung sXIII", "samsung-sxiii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(14, "samsung sXIV", "samsung-sxiv", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(15, "samsung sXV", "samsung-sxv", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(16, "samsung sXVI", "samsung-sxvi", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(17, "samsung sXVII", "samsung-sxvii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(18, "samsung sXVIII", "samsung-sxviii", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(19, "samsung sXX", "samsung-sxx", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
    new article(20, "samsung sX", "samsung-sx", "asasf", 1, "asasas", "asasas", "asasasa", "asasas", "assasas", "asasasas", 1, 1, 1),
  ];

  // por ahora se traeran las categorias por aqui
  article_categories:article_category[]=[
    new article_category(0,"camisas", "camisas de todas las tallas", 1),
    new article_category(1,"pantalones", "pantalones de todas las tallas", 1),
    new article_category(2,"televisores", "televisores de todss los tamaños", 1),
    new article_category(3,"camaras", "camaras de todo tipo", 1),
  ];

  constructor() { }

  AddArticleService(article:article){
    this.articles.push(article);
  }

  DeleteArticleService(id:number){
    if(window.confirm("Desea borrar el Articulo?")){
      for(let i = 0; i < this.articles.length; ++i){
        if (this.articles[i].id == id){
          this.articles.splice(i,1);
        }
      }
    }
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
    for(let i = 0; i < this.articles.length; ++i){
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
    }
  }
}
