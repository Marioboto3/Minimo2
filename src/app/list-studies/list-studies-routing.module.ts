import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListStudiesPage } from './list-studies.page';

const routes: Routes = [
  {
    path: '',
    component: ListStudiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListStudiesPageRoutingModule {}
