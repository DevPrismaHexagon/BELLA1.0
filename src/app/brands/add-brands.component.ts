import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { brand } from 'src/models/brand.model';
import { BrandsService } from './brands.service';

@Component({
  selector: 'app-add-brands',
  templateUrl: './add-brands.component.html',
  styleUrls: ['./add-brands.component.css']
})
export class AddBrandsComponent implements OnInit {

  title: string ="Agregar Marca";
  random_number:number = Math.floor(100*Math.random());
  FormBrand!: FormGroup;

  constructor(form:FormBuilder, private brandsservice:BrandsService, private router: Router) {
    this.FormBrand = form.group({
      id:['', Validators.required],
      name:['', Validators.required],
      description:['', Validators.required],
      status:['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  SaveBrand(){
    let HelperBrand = new brand(
      this.random_number,
      this.FormBrand.get('name')!.value,
      this.FormBrand.get('description')!.value, 
      this.FormBrand.get('status')!.value, 
    );
    this.brandsservice.AddBrandService(HelperBrand);
    this.router.navigateByUrl('marcas');
  }
}
