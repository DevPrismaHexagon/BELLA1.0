import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { article_category } from 'src/models/article_category.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleCategoriesService {

  article_categories:article_category[]=[
    new article_category(0,"camisas", "camisas de todas las tallas", 0, "root"),
    new article_category(1,"camisas manga larga", "camisas de vestir", 0, 1),
    new article_category(2,"camisas manga corta", "camisas casuales", 0, 1),
    new article_category(3,"pantalones", "pantalones de todas las tallas", 0, "root"),
  ];

  constructor() { }

  AddArticleCategoryService(article_category:article_category){
    if(article_category.parent_id == null || article_category.parent_id == ""){
      article_category.parent_id = "root";
    }
    this.article_categories.push(article_category);
  }

  DeleteArticleCategoryService(id:number){
    if(window.confirm("Desea borrar la Categoria?")){
      for(let i = 0; i < this.article_categories.length; ++i){
        if (this.article_categories[i].id == id){
          this.article_categories.splice(i,1);
        }
      }
    }
  }

  GetArticleCategoryService(id:number):article_category | null{
    for(let i = 0; i < this.article_categories.length; ++i){
      if (this.article_categories[i].id == id){
        let helper = this.article_categories[i];
        return helper;
      }
    }
    return null;
  }

  UpdateArticleCategoryService(form:FormGroup){
    for(let i = 0; i < this.article_categories.length; ++i){
      if(this.article_categories[i].id == form.get('id')!.value){
        this.article_categories[i].id = form.get('id')!.value;
        this.article_categories[i].name = form.get('name')!.value;
        this.article_categories[i].description = form.get('description')!.value; 
        this.article_categories[i].status = form.get('status')!.value; 

        if(form.get('parent_id')!.value == "none"){
          this.article_categories[i].parent_id = "root";
        }else{
          this.article_categories[i].parent_id = form.get('parent_id')!.value;
        }
      } 
    }
  }
}
