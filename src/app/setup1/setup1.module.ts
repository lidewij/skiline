import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Setup1PageRoutingModule } from './setup1-routing.module';

import { Setup1Page } from './setup1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Setup1PageRoutingModule
  ],
  declarations: [Setup1Page]
})
export class Setup1PageModule {}
