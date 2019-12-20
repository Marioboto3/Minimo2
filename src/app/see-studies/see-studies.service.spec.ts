import { TestBed } from '@angular/core/testing';

import { SeeStudiesService } from './see-studies.service';

describe('SeeStudiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeeStudiesService = TestBed.get(SeeStudiesService);
    expect(service).toBeTruthy();
  });
});
