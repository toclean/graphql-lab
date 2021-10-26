import { Resolver } from "./resolver";

export class Person implements Resolver {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // resolve(): () => Person {
    //     return () => new Person(this.name, this.age);
    // }
}