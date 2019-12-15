import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'profile-subject/:id',
    loadChildren: () => import('./profile-subject/profile-subject.module').then( m => m.ProfileSubjectPageModule)
  },
  {
    path: 'profile-student/:id',
    loadChildren: () => import('./profile-student/profile-student.module').then(m => m.ProfileStudentPageModule)
  },
  {
    path: 'add-user',
    loadChildren: () => import('./add-user/add-user.module').then( m => m.AddUserPageModule)
  },
  {
    path: 'add-user-subject/:id',
    loadChildren: () => import('./add-user-subject/add-user-subject.module').then( m => m.AddUserSubjectPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
