import { Component, OnInit } from '@angular/core';
import {ListStudiesService} from './list-studies.service';
import {ActivatedRoute} from '@angular/router';
import {Student} from '../Models/Student';

@Component({
  selector: 'app-list-studies',
  templateUrl: './list-studies.page.html',
  styleUrls: ['./list-studies.page.scss'],
})
export class ListStudiesPage implements OnInit {

  name: string;
  students: Student[];
  constructor(private listStudiesService: ListStudiesService,
              private route: ActivatedRoute) { }

  async ngOnInit() {
    this.getStudents();
  }

  async getStudents() {
    this.name = this.route.snapshot.paramMap.get('name');
    await this.listStudiesService.getStudents(this.name).subscribe(res => {
      console.log(res);
      this.students = res as Student [];
    });
  }
}
