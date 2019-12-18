import { Component, OnInit } from '@angular/core';
import {Subject} from '../Models/Subject';
import {Student} from '../Models/Student';
import {ViewSubjectsService} from './view-subjects.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-subjects',
  templateUrl: './view-subjects.page.html',
  styleUrls: ['./view-subjects.page.scss'],
})
export class ViewSubjectsPage implements OnInit {

  subjects: Subject[];
  constructor(private viewSubjectService: ViewSubjectsService,
              private router: Router) { }

  async ngOnInit() {
    await this.getSubjects();
  }

  async getSubjects() {
    await this.viewSubjectService.getSubjects().subscribe(res => {
      console.log(res);
      this.subjects = res as Subject[];
    });
  }
  async changePage(_id: string){
    await this.router.navigateByUrl('/profile-subject/' + `${_id}`);
  }
}
