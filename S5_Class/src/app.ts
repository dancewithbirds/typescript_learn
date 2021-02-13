// type AddFn = (a:number, b: number) => number;
interface AddFn {
    (a: number, b:number): number;
}

let add: AddFn;
add = (n1:number, n2:number) => {
    return n1 + n2;
}


interface Named {
    readonly name: string;
    outputName?: string;
}

interface Greetable extends Named {
    greet(phrases: string): void;
}

class Person implements Greetable {
    name: string;
    age = 30;

    constructor(name: string) {
        this.name = name;
    }

    greet(phrases: string) {
        console.log(phrases + ' ' + this.name);
    }
}

let user1: Greetable;

user1 = new Person('Max');

user1.greet('Hello, there!. I am');