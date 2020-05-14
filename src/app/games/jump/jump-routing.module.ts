import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JumpPage } from './jump.page';

const routes: Routes = [
  {
    path: '',
    component: JumpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JumpPageRoutingModule {}
