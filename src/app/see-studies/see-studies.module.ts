import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeeStudiesPageRoutingModule } from './see-studies-routing.module';

import { SeeStudiesPage } from './see-studies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeeStudiesPageRoutingModule
  ],
  declarations: [SeeStudiesPage]
})
export class SeeStudiesPageModule {}
