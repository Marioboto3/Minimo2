import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewSubjectsPageRoutingModule } from './view-subjects-routing.module';

import { ViewSubjectsPage } from './view-subjects.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewSubjectsPageRoutingModule
  ],
  declarations: [ViewSubjectsPage]
})
export class ViewSubjectsPageModule {}
