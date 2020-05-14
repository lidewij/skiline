import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FreestylePage } from './freestyle.page';

describe('FreestylePage', () => {
  let component: FreestylePage;
  let fixture: ComponentFixture<FreestylePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreestylePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FreestylePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
