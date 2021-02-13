"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(name) {
        this.age = 30;
        this.name = name;
    }
    greet(phrases) {
        console.log(phrases + ' ' + this.name);
    }
}
let user1;
user1 = new Person('Max');
user1.greet('Hello, there!. I am');
