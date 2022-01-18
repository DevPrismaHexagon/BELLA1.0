import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguridadCrearUsuarioComponent } from './seguridad-crear-usuario.component';

describe('SeguridadCrearUsuarioComponent', () => {
  let component: SeguridadCrearUsuarioComponent;
  let fixture: ComponentFixture<SeguridadCrearUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguridadCrearUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguridadCrearUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
