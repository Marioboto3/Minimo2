import {Student} from './Student';

export class Subject {
    name: string;
    students: Student[];
    _id: string;
    constructor(name = '', students = [], _id = '') {
        this.name = name;
        this.students = students;
        this._id = _id;
    }
}
