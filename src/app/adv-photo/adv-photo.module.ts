import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvPhotoPageRoutingModule } from './adv-photo-routing.module';

import { AdvPhotoPage } from './adv-photo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvPhotoPageRoutingModule
  ],
  declarations: [AdvPhotoPage]
})
export class AdvPhotoPageModule {}
