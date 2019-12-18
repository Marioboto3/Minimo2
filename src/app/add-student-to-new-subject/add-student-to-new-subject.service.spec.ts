import { TestBed } from '@angular/core/testing';

import { AddStudentToNewSubjectService } from './add-student-to-new-subject.service';

describe('AddStudentToNewSubjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddStudentToNewSubjectService = TestBed.get(AddStudentToNewSubjectService);
    expect(service).toBeTruthy();
  });
});
