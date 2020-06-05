import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Setup1Page } from './setup1.page';

const routes: Routes = [
  {
    path: '',
    component: Setup1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Setup1PageRoutingModule {}
