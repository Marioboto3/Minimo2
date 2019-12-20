import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeeStudiesPage } from './see-studies.page';

describe('SeeStudiesPage', () => {
  let component: SeeStudiesPage;
  let fixture: ComponentFixture<SeeStudiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeStudiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeeStudiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
