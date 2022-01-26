import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ArticlesService } from './articles.service';
import { article } from 'src/models/article.model';
import { article_category } from 'src/models/article_category.model';

@Component({
  selector: 'app-edit-articles',
  templateUrl: './edit-articles.component.html',
  styleUrls: ['./edit-articles.component.css']
})
export class EditArticlesComponent implements OnInit {
  
  title="Editar Articulos";
  HelperId:any;
  FormArticle!: FormGroup; //no borrar, util luego para carga de datos
  
  
/*   HelperName:String="";
  HelperSlug:String="";
  HelperDescription:String="";
  HelperStatus:number=0;
  HelperBar_code:String="";
  HelperSku:String="";
  HelperComments:String="";
  HelperSize:String="";
  HelperWeight:String="";
  HelperMade_in:String="";  */

  article:article;
  article_categories:article_category[]=[];

  constructor(private ActiveRoute:ActivatedRoute, public form:FormBuilder, private articlesservice:ArticlesService, private router: Router){ 
    this.HelperId = ActiveRoute.snapshot.paramMap.get('id');
    let helper = this.articlesservice.GetArticleService(this.HelperId);

    this.article_categories=this.articlesservice.article_categories;

    console.log("logro entrar al constructor");
    console.log("helper: "+JSON.stringify(helper)); 
     
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
      console.log("entro al formgroup");

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
    console.log("salio del formgroup");
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
    console.log(this.HelperId);
    console.log(this.FormArticle.value);
    /* 
    if(helper != null){
      console.log("logro entrar 2");
      let HelperArticle = new article(
        helper.id,
        helper.name, 
        helper.slug, 
        helper.description, 
        helper.status,  
        helper.bar_code,  
        helper.sku,  
        helper.comments,  
        helper.size,  
        helper.weight,  
        helper.made_in,
        1,
        1,
        1,
      );
      console.log("helper: "+JSON.stringify(helper));
      console.log("helper article: "+JSON.stringify(HelperArticle));
 */
      // this.articlesservice.UpdateArticleService(HelperArticle);
      /* 
      this.HelperName = HelperArticle.name;
      this.HelperSlug = HelperArticle.slug;
      this.HelperDescription = HelperArticle.description;
      this.HelperStatus = HelperArticle.status;
      this.HelperBar_code = HelperArticle.bar_code;
      this.HelperSku = HelperArticle.sku;
      this.HelperComments = HelperArticle.comments;
      this.HelperSize = HelperArticle.size;
      this.HelperWeight = HelperArticle.weight;
      this.HelperMade_in = HelperArticle.made_in;
      console.log("logro entrar 3");

      console.log("helper: "+this.HelperName);
      console.log("helper: "+this.HelperSlug);
      console.log("helper: "+helper);
    }

    console.log(JSON.stringify(this.HelperArticle));
     */

    this.articlesservice.UpdateArticleService(this.FormArticle);
    this.router.navigateByUrl('articulos');
  }
}
