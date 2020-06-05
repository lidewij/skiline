import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import {Setup1Page} from '../setup1/setup1.page';
import {Setup1PageModule} from '../setup1/setup1.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
      Setup1PageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
