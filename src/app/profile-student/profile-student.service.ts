import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class ProfileStudentService {

    PROFILESTUDENT_SERVER_ADDRESS = 'http://localhost:3000/';
    homeSubject = new BehaviorSubject(false);
    constructor(private httpClient: HttpClient) {}
    getStudent(id: string) {
        return this.httpClient.get(`${this.PROFILESTUDENT_SERVER_ADDRESS}student/get/` + `${id}`);
    }
}
