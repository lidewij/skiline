import { Component } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Setup1Page} from '../setup1/setup1.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public modalController: ModalController) {}

   async tabChange(event) {
     if (event.tab === 'tab3') {
       const modal = await this.modalController.create({
         component: Setup1Page,
       });
       await modal.present();
     }
   }
}
