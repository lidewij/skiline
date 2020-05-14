import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JumpPageRoutingModule } from './jump-routing.module';

import { JumpPage } from './jump.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JumpPageRoutingModule,
    ComponentsModule
  ],
  declarations: [JumpPage]
})
export class JumpPageModule {}
