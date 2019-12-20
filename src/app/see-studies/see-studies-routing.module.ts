import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeeStudiesPage } from './see-studies.page';

const routes: Routes = [
  {
    path: '',
    component: SeeStudiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeeStudiesPageRoutingModule {}
