import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarLocationComponent } from './editar-location.component';

describe('EditarLocationComponent', () => {
  let component: EditarLocationComponent;
  let fixture: ComponentFixture<EditarLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
