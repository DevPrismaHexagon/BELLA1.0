import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BancosCrearComponent } from './bancos-crear.component';

describe('BancosCrearComponent', () => {
  let component: BancosCrearComponent;
  let fixture: ComponentFixture<BancosCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BancosCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BancosCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
