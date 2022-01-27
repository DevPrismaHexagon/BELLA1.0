import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearLocationComponent } from './crear-location.component';

describe('CrearLocationComponent', () => {
  let component: CrearLocationComponent;
  let fixture: ComponentFixture<CrearLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
