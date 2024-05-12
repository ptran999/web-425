/**
 * Title: person.class.ts
 * Author: Phuong Tran
 * Date: 3/24/2024
 * Description: Person class
 */

import { IPerson } from "./person.interface";

class Person implements IPerson {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let myName = new Person("Phuong", "Tran");
console.log(`My name is ${myName.firstName} ${myName.lastName}`);