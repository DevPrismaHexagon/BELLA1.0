import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarLocationVentaComponent } from './editar-location-venta.component';

describe('EditarLocationVentaComponent', () => {
  let component: EditarLocationVentaComponent;
  let fixture: ComponentFixture<EditarLocationVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarLocationVentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarLocationVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
