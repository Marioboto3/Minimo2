import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUserSubjectPage } from './add-user-subject.page';

const routes: Routes = [
  {
    path: '',
    component: AddUserSubjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddUserSubjectPageRoutingModule {}
