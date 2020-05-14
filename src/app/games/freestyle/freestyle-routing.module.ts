import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FreestylePage } from './freestyle.page';

const routes: Routes = [
  {
    path: '',
    component: FreestylePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FreestylePageRoutingModule {}
