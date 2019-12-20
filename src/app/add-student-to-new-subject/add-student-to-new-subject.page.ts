import { Component, OnInit } from '@angular/core';
import {Student} from '../Models/Student';
import {AddStudentToNewSubjectService} from './add-student-to-new-subject.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-student-to-new-subject',
  templateUrl: './add-student-to-new-subject.page.html',
  styleUrls: ['./add-student-to-new-subject.page.scss'],
})
export class AddStudentToNewSubjectPage implements OnInit {
  students: Student[];
  studentsCheck: Student[];
  constructor(private service: AddStudentToNewSubjectService,
              private router: Router) { }

  async ngOnInit() {
      await this.getStudents();
  }
  async ionViewDidEnter() {
    await this.getStudents();
  }
    async getStudents() {
    await this.service.getStudents().subscribe(res => {
      console.log(res);
      this.students = res as Student[];
    });
  }
  async onClick(student: Student) {
  }
  async changePage(_id: string){
  }
}
