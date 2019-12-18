import {Student} from './Student';

export class SubjectSend {
    name: string;
    students: Student[];
    constructor(name = '', students = [], ) {
        this.name = name;
        this.students = students;
    }
}
