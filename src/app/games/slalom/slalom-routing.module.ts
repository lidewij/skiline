import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlalomPage } from './slalom.page';

const routes: Routes = [
  {
    path: '',
    component: SlalomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlalomPageRoutingModule {}
