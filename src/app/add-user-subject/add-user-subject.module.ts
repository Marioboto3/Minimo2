import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddUserSubjectPageRoutingModule } from './add-user-subject-routing.module';

import { AddUserSubjectPage } from './add-user-subject.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddUserSubjectPageRoutingModule
  ],
  declarations: [AddUserSubjectPage]
})
export class AddUserSubjectPageModule {}
