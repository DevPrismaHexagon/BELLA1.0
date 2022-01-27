import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearLocationVentaComponent } from './crear-location-venta.component';

describe('CrearLocationVentaComponent', () => {
  let component: CrearLocationVentaComponent;
  let fixture: ComponentFixture<CrearLocationVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearLocationVentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearLocationVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
