import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUnitsComponent } from './edit-units.component';

describe('EditUnitsComponent', () => {
  let component: EditUnitsComponent;
  let fixture: ComponentFixture<EditUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUnitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
