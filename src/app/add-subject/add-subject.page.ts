import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AlertController} from '@ionic/angular';
import {AddSubjectService} from './add-subject.service';
import {Subject} from '../Models/Subject';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.page.html',
  styleUrls: ['./add-subject.page.scss'],
})
export class AddSubjectPage implements OnInit {

  addSubject: FormGroup;
  subject: Subject;
  constructor(private formBuilder: FormBuilder,
              private addSubjectService: AddSubjectService,
              private router: Router) {
    this.addSubject = this.formBuilder.group({
      name: new FormControl()});
  }
  ngOnInit() {
    this.subject = new Subject();
  }
  ionViewDidEnter() {
    this.subject = new Subject();
  }
  async create() {
    this.subject.name = this.addSubject.controls.name.value;
    console.log('name: ', this.subject.name);
    this.addSubjectService.addSubject(this.subject).subscribe(res => {
        console.log(res);
        this.router.navigateByUrl('/home');

    });
  }
  async addStudent() {
    await this.router.navigateByUrl('/add-student-to-new-subject');
  }
}
