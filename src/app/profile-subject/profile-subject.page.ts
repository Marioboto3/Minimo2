import { Component, OnInit } from '@angular/core';
import {Subject} from '../Models/Subject';
import {ProfileSubjectService} from './profile-subject.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Student} from '../Models/Student';
import {resolveSanitizationFn} from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-profile-subject',
  templateUrl: './profile-subject.page.html',
  styleUrls: ['./profile-subject.page.scss'],
})
export class ProfileSubjectPage implements OnInit {

  subject: Subject;
  studentsTest: Student[];
  _id: string;

  constructor(private profileSubjectService: ProfileSubjectService,
              private route: ActivatedRoute,
              private router: Router) { }

  async ngOnInit() {
    this._id = this.route.snapshot.paramMap.get('id');
    await this.profileSubjectService.getSubject(this._id).subscribe(res => {
      console.log(res);
      const response: any = res;
      this.subject = response.subject;
      this.studentsTest = response.students.students;
    });
  }
  async changePage(id: string) {
      await this.router.navigateByUrl('/profile-student/' + `${id}`);
  }
  async changePageAdd(id: string) {
        await this.router.navigateByUrl('/add-user-subject/' + `${id}`);
  }
}
