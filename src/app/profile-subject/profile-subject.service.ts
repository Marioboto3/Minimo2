import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class ProfileSubjectService {

    PROFILESUBJECT_SERVER_ADDRESS = 'http://localhost:3000/';
    homeSubject = new BehaviorSubject(false);
    constructor(private httpClient: HttpClient) {}

    getSubject(id: string) {
        return this.httpClient.get(`${this.PROFILESUBJECT_SERVER_ADDRESS}subject/get/` + `${id}`);
    }
}
