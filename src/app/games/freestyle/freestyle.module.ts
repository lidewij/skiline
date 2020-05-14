import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FreestylePageRoutingModule } from './freestyle-routing.module';

import { FreestylePage } from './freestyle.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FreestylePageRoutingModule,
    ComponentsModule
  ],
  declarations: [FreestylePage]
})
export class FreestylePageModule {}
