import { TestBed } from '@angular/core/testing';

import { ViewSubjectsService } from './view-subjects.service';

describe('ViewSubjectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewSubjectsService = TestBed.get(ViewSubjectsService);
    expect(service).toBeTruthy();
  });
});
