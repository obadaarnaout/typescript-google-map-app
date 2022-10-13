import faker from 'faker';
import {Markable} from './markable';

export class User implements Markable {
    name: string;
    location:{
        latitude: number;
        longitude: number;
    };

    constructor(){
        this.name = faker.name.firstName();
        this.location = {
            latitude: parseFloat(faker.address.latitude()),
            longitude: parseFloat(faker.address.longitude())
        };
    }

    showContent() : string{
        return `${this.name} ${this.location.latitude} ${this.location.longitude}`;
    }
}