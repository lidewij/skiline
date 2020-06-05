import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Setup2PageRoutingModule } from './setup2-routing.module';

import { Setup2Page } from './setup2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Setup2PageRoutingModule
  ],
  declarations: [Setup2Page]
})
export class Setup2PageModule {}
