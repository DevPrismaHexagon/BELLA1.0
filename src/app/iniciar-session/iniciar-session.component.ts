import { InterpolationConfig } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iniciar-session',
  templateUrl: './iniciar-session.component.html',
  styleUrls: ['./iniciar-session.component.css']
})
export class IniciarSessionComponent implements OnInit {

  agregarLabel(e:Event){
    let a= e.target as Element;
    let b= a.parentElement as HTMLDivElement;
 
  }
  

  constructor() { 
  }

  ngOnInit(): void {
    
    
    

  }

}
