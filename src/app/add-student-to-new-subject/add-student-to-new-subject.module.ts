import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddStudentToNewSubjectPageRoutingModule } from './add-student-to-new-subject-routing.module';

import { AddStudentToNewSubjectPage } from './add-student-to-new-subject.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddStudentToNewSubjectPageRoutingModule
  ],
  declarations: [AddStudentToNewSubjectPage]
})
export class AddStudentToNewSubjectPageModule {}
