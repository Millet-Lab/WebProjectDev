import {Mammal} from './interface/mammal.interface';
/*import {MammalType} from './enum/mammal-type';

export class Person implements Mammal{
    readonly type: MammalType = MammalType.HUMANOID;
    private firstname: string;
    private lastname: string;

    constructor(firstname: string = 'Jane', lastname: string = 'Doe') {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    setFirstname(firstname: string): void {
        this.firstname = firstname;
    }

    setLastname(lastname: string): void {
        this.lastname = lastname;
    }

    toString():string{
        return `Hello I'm ${this.firstname} ${this.lastname}`;
    }

    walk(): void {
        console.log(`I'm walking with two feets`);
    }
}*/

export interface Person extends Mammal {
    firstname: string;
    lastname: string;
}