import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArticleCategoriesComponent } from './edit-article-categories.component';

describe('EditArticleCategoriesComponent', () => {
  let component: EditArticleCategoriesComponent;
  let fixture: ComponentFixture<EditArticleCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditArticleCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditArticleCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
