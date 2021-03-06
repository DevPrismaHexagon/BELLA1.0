import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { article } from 'src/models/article.model';
import { ArticlesService } from './articles.service';

@Component({
  selector: 'app-add-articles',
  templateUrl: './add-articles.component.html',
  styleUrls: ['./add-articles.component.css']
})
export class AddArticlesComponent implements OnInit {

  title: string ="Agregar Articulo";
  random_number:number = Math.floor(100*Math.random());
  FormArticle!: FormGroup;

  constructor(form:FormBuilder, private articlesservice:ArticlesService, private router: Router) {
    this.FormArticle = form.group({
    id:[''],
    name:[''],
    slug:[''],
    description:[''],
    status:[''],
    bar_code:[''],
    sku:[''],
    comments:[''],
    size:[''],
    weight:[''],
    made_in:[''],
    brand_id:[''],
    category_id:[''],
    unit_id:[''],
    })
  }

  ngOnInit(): void {
  }

  SaveArticle(){
    let HelperArticle = new article(
      this.random_number,
      this.FormArticle.get('name')!.value,
      this.FormArticle.get('slug')!.value, 
      this.FormArticle.get('description')!.value, 
      this.FormArticle.get('status')!.value, 
      this.FormArticle.get('bar_code')!.value,  
      this.FormArticle.get('sku')!.value,  
      this.FormArticle.get('comments')!.value,  
      this.FormArticle.get('size')!.value,  
      this.FormArticle.get('weight')!.value,  
      this.FormArticle.get('made_in')!.value,
      this.FormArticle.get('brand_id')!.value,
      this.FormArticle.get('category_id')!.value,
      this.FormArticle.get('unit_id')!.value,
    );
    this.articlesservice.AddArticleService(HelperArticle);
    this.router.navigateByUrl('articulos');
  }
}