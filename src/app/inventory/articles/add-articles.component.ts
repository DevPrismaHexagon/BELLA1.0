import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { article } from 'src/models/article.model';
import { article_category } from 'src/models/article_category.model';
import { ArticlesService } from './articles.service';
import { brand } from 'src/models/brand.model';
import { unit } from 'src/models/unit.model';
import { BrandsService } from '../brands/brands.service';
import { UnitsService } from '../units/units.service';

@Component({
  selector: 'app-add-articles',
  templateUrl: './add-articles.component.html',
  styleUrls: ['./add-articles.component.css']
})
export class AddArticlesComponent implements OnInit {

  title: string ="Agregar Articulo";
  random_number:number = Math.floor(100*Math.random());
  FormArticle!: FormGroup;

  article_categories:article_category[]=[];
  brands:brand[]=[];
  units:unit[]=[];

  constructor(
    form:FormBuilder, 
    private ArticlesService:ArticlesService, 
    private BrandsService:BrandsService, 
    private UnitsService:UnitsService, 
    private router: Router) {

    this.article_categories=this.ArticlesService.article_categories;
    this.brands=this.BrandsService.brands;
    this.units=this.UnitsService.units;

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
      this.FormArticle.get('description')!.value,  
    );
    this.ArticlesService.AddArticleService(HelperArticle).subscribe();
    this.router.navigateByUrl('articulos');
  }
}