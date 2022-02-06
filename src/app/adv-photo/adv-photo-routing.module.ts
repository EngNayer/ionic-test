import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvPhotoPage } from './adv-photo.page';

const routes: Routes = [
  {
    path: '',
    component: AdvPhotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvPhotoPageRoutingModule {}
