import faker from 'faker';
import {Markable} from './markable';

export class Company implements Markable {
    companyName: string;
    catchPhrase: string;
    location:{
        latitude: number;
        longitude: number;
    };
    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            latitude: parseFloat(faker.address.latitude()),
            longitude: parseFloat(faker.address.longitude())
        };
    }

    showContent() : string{
        return `${this.companyName} ${this.location.latitude} ${this.location.longitude}`;
    }
}