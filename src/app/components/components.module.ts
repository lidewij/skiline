import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StartGameComponent} from './start-game/start-game.component';
import {IonicModule} from '@ionic/angular';



@NgModule({
  declarations: [StartGameComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
      StartGameComponent
  ]
})
export class ComponentsModule { }
