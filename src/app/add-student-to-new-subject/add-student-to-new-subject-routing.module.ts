import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddStudentToNewSubjectPage } from './add-student-to-new-subject.page';

const routes: Routes = [
  {
    path: '',
    component: AddStudentToNewSubjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddStudentToNewSubjectPageRoutingModule {}
