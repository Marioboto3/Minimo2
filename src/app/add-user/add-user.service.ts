import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import {Student} from '../Models/Student';
import {StudentSend} from '../Models/StudentSend';

@Injectable({
    providedIn: 'root'
})
export class AddUserService {

    ADDUSER_SERVER_ADDRESS = 'http://localhost:3000/';
    homeSubject = new BehaviorSubject(false);
    constructor(private httpClient: HttpClient) {}

    stud: StudentSend;
    addStudent(student: Student) {
        console.log('studiente: ', student);
        this.stud = new StudentSend(student.name, student.address, student.studies, student.phones);
        console.log('stud:', this.stud);
        return this.httpClient.post(`${this.ADDUSER_SERVER_ADDRESS}student/add`, this.stud);
    }
}
