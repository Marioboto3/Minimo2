import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewSubjectsService {

  PROFILESTUDENT_SERVER_ADDRESS = 'http://localhost:3000/';
  homeSubject = new BehaviorSubject(false);
  constructor(private httpClient: HttpClient) { }

  getSubjects() {
    return this.httpClient.get(`${this.PROFILESTUDENT_SERVER_ADDRESS}subject/get`);
  }
}
