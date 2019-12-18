import { TestBed } from '@angular/core/testing';

import { ViewStudentsService } from './view-students.service';

describe('ViewStudentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewStudentsService = TestBed.get(ViewStudentsService);
    expect(service).toBeTruthy();
  });
});
