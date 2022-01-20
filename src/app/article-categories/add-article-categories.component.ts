import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { article_category } from 'src/models/article_category.model';
import { ArticleCategoriesService } from './article-categories.service';

@Component({
  selector: 'app-add-article-categories',
  templateUrl: './add-article-categories.component.html',
  styleUrls: ['./add-article-categories.component.css']
})
export class AddArticleCategoriesComponent implements OnInit {

  title: string ="Categorias";
  subtitle: string ="Agregar Categoria";
  random_number:number = Math.floor(100*Math.random());
  FormArticleCategory!: FormGroup;

  article_categories:article_category[]=[];

  constructor(
    form:FormBuilder,
    private ArticleCategoriesService:ArticleCategoriesService, 
    private router: Router
  ){ 
    this.article_categories=this.ArticleCategoriesService.article_categories;

    this.FormArticleCategory = form.group({
      id:[''],
      name:[''],
      description:[''],
      status:[''],
      parent_id:[''],
      })
  }

  ngOnInit(): void {
  }

  SaveArticleCategory(){
    let HelperArticleCategory = new article_category(
      this.random_number,
      this.FormArticleCategory.get('name')!.value,
      this.FormArticleCategory.get('description')!.value, 
      this.FormArticleCategory.get('status')!.value, 
      this.FormArticleCategory.get('parent_id')!.value | 0,
    );
    this.ArticleCategoriesService.AddArticleCategoryService(HelperArticleCategory);
    this.router.navigateByUrl('categorias-articulo');
  }
}
