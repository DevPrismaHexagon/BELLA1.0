import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArticleCategoriesComponent } from './add-article-categories.component';

describe('AddArticleCategoriesComponent', () => {
  let component: AddArticleCategoriesComponent;
  let fixture: ComponentFixture<AddArticleCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddArticleCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArticleCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
