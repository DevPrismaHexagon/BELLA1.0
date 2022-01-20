import { TestBed } from '@angular/core/testing';

import { ArticleCategoriesServiceService } from './article-categories-service.service';

describe('ArticleCategoriesServiceService', () => {
  let service: ArticleCategoriesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleCategoriesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
