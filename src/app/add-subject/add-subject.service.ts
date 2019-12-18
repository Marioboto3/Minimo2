import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Student} from '../Models/Student';
import {StudentSend} from '../Models/StudentSend';
import {SubjectSend} from '../Models/SubjectSend';
import {Subject} from '../Models/Subject';

@Injectable({
  providedIn: 'root'
})
export class AddSubjectService {

  ADDSUBJECT_SERVER_ADDRESS = 'http://localhost:3000/';
  homeSubject = new BehaviorSubject(false);
  constructor(private httpClient: HttpClient) { }

  subj: SubjectSend;

  addSubject(subject: Subject) {
    console.log('subject: ', subject);
    this.subj = new SubjectSend(subject.name, subject.students);
    console.log('subj:', this.subj);
    return this.httpClient.post(`${this.ADDSUBJECT_SERVER_ADDRESS}subject/add`, this.subj);
  }
}
