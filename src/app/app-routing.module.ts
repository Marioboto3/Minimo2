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
  {
    path: 'view-subjects',
    loadChildren: () => import('./view-subjects/view-subjects.module').then( m => m.ViewSubjectsPageModule)
  },
  {
    path: 'view-students',
    loadChildren: () => import('./view-students/view-students.module').then( m => m.ViewStudentsPageModule)
  },
  {
    path: 'add-subject',
    loadChildren: () => import('./add-subject/add-subject.module').then( m => m.AddSubjectPageModule)
  },
  {
    path: 'add-student-to-new-subject',
    loadChildren: () => import('./add-student-to-new-subject/add-student-to-new-subject.module').then( m => m.AddStudentToNewSubjectPageModule)
  },
  {
    path: 'see-studies',
    loadChildren: () => import('./see-studies/see-studies.module').then( m => m.SeeStudiesPageModule)
  },
  {
    path: 'list-studies/:name',
    loadChildren: () => import('./list-studies/list-studies.module').then( m => m.ListStudiesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
