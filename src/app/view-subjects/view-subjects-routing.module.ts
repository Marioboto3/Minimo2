import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewSubjectsPage } from './view-subjects.page';

const routes: Routes = [
  {
    path: '',
    component: ViewSubjectsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewSubjectsPageRoutingModule {}
