import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { article } from 'src/models/article.model';
import { article_category } from 'src/models/article_category.model';
import { brand } from 'src/models/brand.model';
import { unit } from 'src/models/unit.model';
import { BrandsService } from '../brands/brands.service';
import { UnitsService } from '../units/units.service';
import { ArticlesService } from './articles.service';

@Component({
  selector: 'app-edit-articles',
  templateUrl: './edit-articles.component.html',
  styleUrls: ['./edit-articles.component.css']
})
export class EditArticlesComponent implements OnInit {
  
  title="Articulos";
  subtitle="Editar Articulos";
  HelperId:any;
  FormArticle!: FormGroup;
  

  article:article;
  article_categories:article_category[]=[];
  brands:brand[]=[];
  units:unit[]=[];

  constructor(
    private ActiveRoute:ActivatedRoute, 
    public form:FormBuilder, 
    private ArticlesService:ArticlesService, 
    private BrandsService:BrandsService, 
    private UnitsService:UnitsService,
    private router: Router
    ){ 
    this.HelperId = ActiveRoute.snapshot.paramMap.get('id');
    let helper = this.ArticlesService.GetArticleService(this.HelperId);

    this.article_categories=this.ArticlesService.article_categories;
    this.brands=this.BrandsService.brands;
    this.units=this.UnitsService.units;
     
    this.FormArticle = this.form.group({
      id:['', Validators.required],
      name:['', Validators.required],
      slug:['', Validators.required],
      description:['', Validators.required],
      status:['', Validators.required],
      bar_code:[''],
      sku:[''],
      comments:[''],
      size:[''],
      weight:[''],
      made_in:[''],
      brand_id:['', Validators.required],
      category_id:['', Validators.required],
      unit_id:['', Validators.required],
    }); 

    if(helper != null){
      this.FormArticle.setValue({
        id:helper['id'],
        name:helper['name'],
        slug:helper['slug'],
        description:helper['description'],
        status:helper['status'],
        bar_code:helper['bar_code'],
        sku:helper['sku'],
        comments:helper['comments'],
        size:helper['size'],
        weight:helper['weight'],
        made_in:helper['made_in'],
        brand_id:helper['brand_id'],
        category_id:helper['category_id'],
        unit_id:helper['unit_id'],
      });
    }
  }
  
  ngOnInit(): void {
  
  }

  UpdateArticle(){
    this.ArticlesService.UpdateArticleService(this.FormArticle);
    this.router.navigateByUrl('articulos');
  }
}
