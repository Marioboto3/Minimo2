import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListStudiesService {

  HOME_SERVER_ADDRESS = 'http://localhost:3000/';
  homeSubject = new BehaviorSubject(false);
  constructor(private httpClient: HttpClient) {}
  getStudents(name: string) {
    return this.httpClient.get(`${this.HOME_SERVER_ADDRESS}student/getStudies/` + `${name}`);
  }
}
