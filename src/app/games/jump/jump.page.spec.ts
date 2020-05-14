import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JumpPage } from './jump.page';

describe('JumpPage', () => {
  let component: JumpPage;
  let fixture: ComponentFixture<JumpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JumpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
