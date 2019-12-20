import { Component, OnInit } from '@angular/core';
import {ViewStudentsService} from './view-students.service';
import {Student} from '../Models/Student';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.page.html',
  styleUrls: ['./view-students.page.scss'],
})
export class ViewStudentsPage implements OnInit {

  students: Student[];
  constructor(private viewStudentsService: ViewStudentsService,
              private router: Router,
  ) { }

  async ngOnInit() {
    await this.getStudents();
  }
  async ionViewDidEnter() {
    await this.getStudents();
   }
  async getStudents() {
    await this.viewStudentsService.getStudents().subscribe(res => {
        console.log(res);
        this.students = res as Student[];
    });
  }
  async changePage(_id: string){
    await this.router.navigateByUrl('/profile-student/' + `${_id}`);
  }
}
