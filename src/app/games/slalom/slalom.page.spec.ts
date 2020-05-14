import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlalomPage } from './slalom.page';

describe('SlalomPage', () => {
  let component: SlalomPage;
  let fixture: ComponentFixture<SlalomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlalomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlalomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
