import { TestBed } from '@angular/core/testing';

import { ListStudiesService } from './list-studies.service';

describe('ListStudiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListStudiesService = TestBed.get(ListStudiesService);
    expect(service).toBeTruthy();
  });
});
