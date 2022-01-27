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
  
  helperArticle:article;

  article_categories:article_category[]=[];
  brands:brand[]=[];
  units:unit[]=[];
  random_number:number = Math.floor(100*Math.random());

  constructor(
    private ActiveRoute:ActivatedRoute, 
    public form:FormBuilder, 
    private ArticlesService:ArticlesService, 
    private BrandsService:BrandsService, 
    private UnitsService:UnitsService,
    private router: Router
    ){ 

    this.article_categories=this.ArticlesService.article_categories;
    this.brands=this.BrandsService.brands;
    this.units=this.UnitsService.units;
     
    this.FormArticle = this.form.group({
      id:['', Validators.required],
      name:['', Validators.required],
      /* slug:['', Validators.required], */
      description:['', Validators.required],
      /* status:['', Validators.required],
      bar_code:[''],
      sku:[''],
      comments:[''],
      size:[''],
      weight:[''],
      made_in:[''],
      brand_id:['', Validators.required],
      category_id:['', Validators.required],
      unit_id:['', Validators.required], */
    }); 
  }
  /* 
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
 */
  ngOnInit(): void {
    /* window.addEventListener('load',()=>{
      this.agregar();
    }) */

    this.HelperId = this.ActiveRoute.snapshot.paramMap.get('id');

    this.ArticlesService.GetArticleService(this.HelperId).subscribe( (article:article) => {
      this.helperArticle=article; 

      if(this.helperArticle != null){
        this.FormArticle.setValue({
          id: this.helperArticle.id,
          name: this.helperArticle.name,
          description: this.helperArticle.description,
        });
      }
    } );
  }

  UpdateArticle(){
    let HelperArticle = new article(
      this.FormArticle.get('id')!.value,
      this.FormArticle.get('name')!.value,
      this.FormArticle.get('description')!.value,  
    );
    this.ArticlesService.UpdateArticleService(HelperArticle).subscribe();
    this.router.navigateByUrl('articulos');
  }
}
