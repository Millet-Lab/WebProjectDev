import {maSuperFunc, mySuperFunc} from "./func/some-func";
import {Person} from './model/Person';

/* Displaying a message */
console.log('Hello World !');

/* Declaration and setting type to a variable */
const name:string  = 'Millet';
let job:string = 'Dev';

console.log(`my name is ${(name + job)}`);

/* use of an enum type */
enum Vehicle {
    AUDI = 'Ma voiture est une Audi',
    BMW = 'Ma voiture est une bmw',
    MERCEDES = 'Ma voiture est une Mercedes',
    TOYOTA = 'Ma voiture est une Toyota'
}

Object.keys(Vehicle).forEach(key=> {console.log(key);});

/* calling a function */
maSuperFunc();
mySuperFunc();

/* Class */
const unknownPeople: Person = new Person();
unknownPeople.walk();
const me: Person = new Person('Steve', 'Roger');
const mew: Person = new Person('Lily');
const mew2: Person = new Person(undefined, 'Jane');
console.log(unknownPeople.toString());
console.log(me.toString());
console.log(mew.toString());
console.log(mew2.toString());
console.log('\t');
mew2.setFirstname("Hermann Millet");
mew2.setLastname("NJIA FEUNKEU");
console.log(mew2.toString());