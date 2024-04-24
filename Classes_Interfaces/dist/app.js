"use strict";
// type AddFn = (a: number, b: number) => number;
let add;
add = (n1, n2) => {
    return n1 + n2;
};
// Use interface to check type object
class Person {
    constructor(n) {
        if (n) {
            this.name = n;
        }
    }
    greet(n = '') {
        if (this.name) {
            console.log(n + ' ' + this.name);
        }
        else {
            console.log('Hi');
        }
    }
}
let user1;
user1 = new Person('Anh');
// user1 = new Person();
// user1.name = 'Tung';
user1.greet("Hi there - I'm ");
console.log(user1);
//# sourceMappingURL=app.js.map