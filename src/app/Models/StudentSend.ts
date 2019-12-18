
export class StudentSend {
    name: string;
    address: string;
    phones: {
        description: string;
        number: string;
    }[];
    studies: {
        studies: string;
    }[];
    constructor( name = '', address = null, studies = [], phones = [] ) {
        this.name = name;
        this.address = address;
        this.studies = studies;
        this.phones = phones;
    }
}
