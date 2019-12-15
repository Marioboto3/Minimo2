import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileSubjectPage } from './profile-subject.page';

describe('ProfileSubjectPage', () => {
  let component: ProfileSubjectPage;
  let fixture: ComponentFixture<ProfileSubjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSubjectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileSubjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
