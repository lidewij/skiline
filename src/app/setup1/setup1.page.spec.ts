import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Setup1Page } from './setup1.page';

describe('Setup1Page', () => {
  let component: Setup1Page;
  let fixture: ComponentFixture<Setup1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Setup1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Setup1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
