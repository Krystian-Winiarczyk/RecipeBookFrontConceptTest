import { TestBed } from '@angular/core/testing';

import { RecipeGeneratorService } from './recipe-generator.service';

describe('RecipeGeneratorService', () => {
  let service: RecipeGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
