import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { article_category } from 'src/models/article_category.model';
import { ArticleCategoriesService } from './article-categories.service';

@Component({
  selector: 'app-edit-article-categories',
  templateUrl: './edit-article-categories.component.html',
  styleUrls: ['./edit-article-categories.component.css']
})
export class EditArticleCategoriesComponent implements OnInit {

  title="Categorias";
  subtitle="Editar Categorias";
  HelperId:any;
  FormArticleCategory!: FormGroup;

  article_categories:article_category[]=[];

  constructor(
    private ActiveRoute:ActivatedRoute, 
    public form:FormBuilder, 
    private ArticleCategoriesService:ArticleCategoriesService,
    private router: Router
  ){ 
    this.HelperId = ActiveRoute.snapshot.paramMap.get('id');
    let helper = this.ArticleCategoriesService.GetArticleCategoryService(this.HelperId);

    this.article_categories=this.ArticleCategoriesService.article_categories;

    this.FormArticleCategory = this.form.group({
      id:['', Validators.required],
      name:['', Validators.required],
      description:['', Validators.required],
      status:['', Validators.required],
      parent_id:['', Validators.required],
    }); 

    if(helper != null){
      this.FormArticleCategory.setValue({
        id:helper['id'],
        name:helper['name'],
        description:helper['description'],
        status:helper['status'],
        parent_id:helper['parent_id'],
      });
    }
  }

  ngOnInit(): void {
  }

  UpdateArticleCategory(){
    this.ArticleCategoriesService.UpdateArticleCategoryService(this.FormArticleCategory);
    this.router.navigateByUrl('categorias-articulo');
  }
}
