import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlalomPageRoutingModule } from './slalom-routing.module';

import { SlalomPage } from './slalom.page';
import {StartGameComponent} from '../../components/start-game/start-game.component';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlalomPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SlalomPage]
})
export class SlalomPageModule {}
