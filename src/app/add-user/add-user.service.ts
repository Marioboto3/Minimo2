import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import {Student} from '../Models/Student';

@Injectable({
    providedIn: 'root'
})
export class AddUserService {

    ADDUSER_SERVER_ADDRESS = 'http://localhost:3000/';
    homeSubject = new BehaviorSubject(false);
    constructor(private httpClient: HttpClient) {}

    addStudent(student: Student) {
        return this.httpClient.post(`${this.ADDUSER_SERVER_ADDRESS}student/add`, student);
    }
}
