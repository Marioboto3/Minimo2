import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileSubjectPage } from './profile-subject.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileSubjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileSubjectPageRoutingModule {}
