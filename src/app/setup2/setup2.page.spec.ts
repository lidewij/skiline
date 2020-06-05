import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Setup2Page } from './setup2.page';

describe('Setup2Page', () => {
  let component: Setup2Page;
  let fixture: ComponentFixture<Setup2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Setup2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Setup2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
