// type AddFn = (a: number, b: number) => number;

// Custom type of Function
interface AddFn {
  (a: number, b: number): number;
}
let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  // Optional properties
  outputName?: string;
}

interface Greetable extends Named {
  // readonly name: string;
  greet(phrase: string): void;
}
// Use interface to check type object

class Person implements Greetable {
  name?: string;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }
  greet(n: string = '') {
    if (this.name) {
      console.log(n + ' ' + this.name);
    } else {
      console.log('Hi');
    }
  }
}

let user1: Greetable;
user1 = new Person('Anh');
// user1 = new Person();
// user1.name = 'Tung';

user1.greet("Hi there - I'm ");
console.log(user1);
