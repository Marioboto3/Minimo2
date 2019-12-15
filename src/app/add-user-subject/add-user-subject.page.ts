import { Component, OnInit } from '@angular/core';
import {AddUserSubjectService} from './add-user-subject.service';
import {Student} from '../Models/Student';
import {ActivatedRoute} from '@angular/router';
import {Subject} from '../Models/Subject';

@Component({
  selector: 'app-add-user-subject',
  templateUrl: './add-user-subject.page.html',
  styleUrls: ['./add-user-subject.page.scss'],
})
export class AddUserSubjectPage implements OnInit {

  students: Student [];
  subject: Subject;
  stuTest: Student[];
  id: string;
  constructor(private addUserSubjectService: AddUserSubjectService,
              private route: ActivatedRoute) { }

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    await this.addUserSubjectService.getSubject(this.id).subscribe(res => {
      const response: any = res;
      console.log('res:', res);
      this.stuTest = response.st;
      this.subject = response.subject;
    });
  }
  async addUser(id: string) {
    await this.addUserSubjectService.addStudent(id, this.subject._id).subscribe(res =>{
      console.log(res);
    });
  }
}
