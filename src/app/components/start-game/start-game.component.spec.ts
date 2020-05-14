import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StartGameComponent } from './start-game.component';

describe('StartGameComponent', () => {
  let component: StartGameComponent;
  let fixture: ComponentFixture<StartGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartGameComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StartGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
