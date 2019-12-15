import { Component, OnInit } from '@angular/core';
import {ProfileSubjectService} from '../profile-subject/profile-subject.service';
import {ActivatedRoute} from '@angular/router';
import {ProfileStudentService} from './profile-student.service';
import {Student} from '../Models/Student';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.page.html',
  styleUrls: ['./profile-student.page.scss'],
})
export class ProfileStudentPage implements OnInit {

  _id: string;
  student: Student;
  constructor(private profileStudentService: ProfileStudentService, private route: ActivatedRoute) { }

  async ngOnInit() {
    this._id = this.route.snapshot.paramMap.get('id');
    console.log('id: ', this._id);
    await this.profileStudentService.getStudent(this._id).subscribe(res => {
      console.log(res);
      this.student = res as Student;
    });
  }

}
