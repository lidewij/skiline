import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../components/explore-container/explore-container.module';
import {NgCircleProgressModule} from 'ng-circle-progress';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        RouterModule.forChild([{path: '', component: Tab2Page}]),
        NgCircleProgressModule.forRoot({
            // set defaults here
            radius: 100,
            outerStrokeWidth: 6,
            innerStrokeWidth: 8,
            outerStrokeColor: '#75C4C4',
            innerStrokeColor: 'rgba(117,196,196,0.6)',
            animation: true,
            animationDuration: 900,
            titleFontSize: '11px',
            titleFontWeight: '800',
            showSubtitle: false
        })
    ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
