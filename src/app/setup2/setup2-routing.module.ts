import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Setup2Page } from './setup2.page';

const routes: Routes = [
  {
    path: '',
    component: Setup2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Setup2PageRoutingModule {}
