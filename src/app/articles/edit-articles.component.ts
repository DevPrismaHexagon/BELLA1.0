import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ArticlesService } from './articles.service';
import { article } from 'src/models/article.model';
import { article_category } from 'src/models/article_category.model';
import { brand } from 'src/models/brand.model';
import { unit } from 'src/models/unit.model';

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

  constructor(private ActiveRoute:ActivatedRoute, public form:FormBuilder, private articlesservice:ArticlesService, private router: Router){ 
    this.HelperId = ActiveRoute.snapshot.paramMap.get('id');
    let helper = this.articlesservice.GetArticleService(this.HelperId);

    this.article_categories=this.articlesservice.article_categories;
    this.brands=this.articlesservice.brands;
    this.units=this.articlesservice.units;
     
    this.FormArticle = this.form.group({
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
  agregarLabel(e:Event){
    let a= e.target as Element;
    let r = e.target as HTMLInputElement;
    let b= a.parentElement as HTMLDivElement;
    let c = b.querySelector("label") as Element
    if(r.value==""){
        c.classList.toggle("label")
    }
  }

  agregar(){
    let a = document.getElementById('form') as Element;
    let b = a.querySelectorAll('input');
    b.forEach((e)=>{
      if(e.value!=""){
        let c=e.parentElement as HTMLDivElement;
        let d=c.querySelector('label') as HTMLLabelElement;
        d.classList.add('label')
      }
    })    
  }

  ngOnInit(): void {
    window.addEventListener('load',()=>{
      this.agregar();
    })
  }

  UpdateArticle(){
    this.articlesservice.UpdateArticleService(this.FormArticle);
    this.router.navigateByUrl('articulos');
  }
}
