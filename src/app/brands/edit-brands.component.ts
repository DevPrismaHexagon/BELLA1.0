import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrandsService } from './brands.service';
import { brand } from 'src/models/brand.model';

@Component({
  selector: 'app-edit-brands',
  templateUrl: './edit-brands.component.html',
  styleUrls: ['./edit-brands.component.css']
})
export class EditBrandsComponent implements OnInit {

  title="Marcas";
  subtitle="Editar Marcas";
  HelperId:any;
  FormBrand!: FormGroup;

  brand:brand;

  constructor(private ActiveRoute:ActivatedRoute, public form:FormBuilder, private brandsservice:BrandsService, private router: Router) { 
    this.HelperId = ActiveRoute.snapshot.paramMap.get('id');
    let helper = this.brandsservice.GetBrandService(this.HelperId);

    this.FormBrand = this.form.group({
      id:['', Validators.required],
      name:['', Validators.required],
      description:['', Validators.required],
      status:['', Validators.required],
    }); 

    if(helper != null){
      this.FormBrand.setValue({
        id:helper['id'],
        name:helper['name'],
        description:helper['description'],
        status:helper['status'],
      });
    }
  }

  ngOnInit(): void {
  }

  UpdateBrand(){
    this.brandsservice.UpdateBrandService(this.FormBrand);
    this.router.navigateByUrl('marcas');
  }
}
