import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddStudentToNewSubjectPage } from './add-student-to-new-subject.page';

describe('AddStudentToNewSubjectPage', () => {
  let component: AddStudentToNewSubjectPage;
  let fixture: ComponentFixture<AddStudentToNewSubjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStudentToNewSubjectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddStudentToNewSubjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
