import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileStudentPage } from './profile-student.page';

describe('ProfileStudentPage', () => {
  let component: ProfileStudentPage;
  let fixture: ComponentFixture<ProfileStudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileStudentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
