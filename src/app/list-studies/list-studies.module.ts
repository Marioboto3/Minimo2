import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListStudiesPageRoutingModule } from './list-studies-routing.module';

import { ListStudiesPage } from './list-studies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListStudiesPageRoutingModule
  ],
  declarations: [ListStudiesPage]
})
export class ListStudiesPageModule {}
