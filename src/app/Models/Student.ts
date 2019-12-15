
export class Student {
    _id: string;
    name: string;
    address: string;
    phones: {
        description: string;
        number: string;
    }[];
    studies: {
        studies: string;
    }[];
    constructor(_id = '', name = '', address = null, studies = [], phones = [] ) {
        this._id = _id;
        this.name = name;
        this.address = address;
        this.studies = studies;
        this.phones = phones;
    }
}
