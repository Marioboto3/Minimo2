import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListStudiesPage } from './list-studies.page';

describe('ListStudiesPage', () => {
  let component: ListStudiesPage;
  let fixture: ComponentFixture<ListStudiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStudiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListStudiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
