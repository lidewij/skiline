import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../components/explore-container/explore-container.module';
import {SliderComponentComponent} from '../components/slider-component/slider-component.component';
import {NgCircleProgressModule} from 'ng-circle-progress';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 6,
      innerStrokeWidth: 8,
      outerStrokeColor: '#AC5D9C',
      innerStrokeColor: 'rgba(172,93,156,0.63)',
      animation: true,
      animationDuration: 900,
      titleFontSize: '11px',
      titleFontWeight: '800',
      showSubtitle: false
    })
  ],
  declarations: [Tab1Page, SliderComponentComponent]
})
export class Tab1PageModule {}
