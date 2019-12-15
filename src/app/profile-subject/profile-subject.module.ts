import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileSubjectPageRoutingModule } from './profile-subject-routing.module';

import { ProfileSubjectPage } from './profile-subject.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileSubjectPageRoutingModule
  ],
  declarations: [ProfileSubjectPage]
})
export class ProfileSubjectPageModule {}
