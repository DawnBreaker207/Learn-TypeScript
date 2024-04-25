// Intersection Types
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Admin, Employee {}
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Anh',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

// Function overloads
function add(n: string, b: string): string;
function add(a: number, b: number): number;
function add(a: number, b: string): number;
function add(a: string, b: number): number;
//
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add('Tung', 'Anh');
result.split(' ');

// Optional Chaining
const fetchedUserData = {
  id: 'u1',
  name: 'Anh',
  job: { title: 'Students', description: 'My own study' },
};

// Optional Chaining
console.log(fetchedUserData?.job?.title);

//Nullish Coalescing

const userInput = undefined;

const storedData = userInput ?? 'Default';

console.log(storedData);

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log('Name: ' + emp.name);
//   if ('privileges' in emp) {
//     console.log('Privileges: ' + emp.privileges);
//   }
//   if ('startDate' in emp) {
//     console.log('Date: ' + emp.startDate);
//   }
// }

// printEmployeeInformation(e1);
// printEmployeeInformation({ name: 'Anh', startDate: new Date() });

// Type Guards
// class Car {
//   drive() {
//     console.log(`Driving...`);
//   }
// }

// class Truck {
//   drive() {
//     console.log(`Driving a truck...`);
//   }

//   loadCargo(amount: number) {
//     console.log('Loading cargo... ' + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     // instanceof check type only work with classes
//     vehicle.loadCargo(1000);
//   }
// }
// useVehicle(v1);
// useVehicle(v2);

// // Discriminated Union

// interface Bird {
//   type: 'bird';
//   flyingSpeed: number;
// }

// interface Horse {
//   type: 'horse';
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case 'bird':
//       speed = animal.flyingSpeed;
//       break;

//     case 'horse':
//       speed = animal.runningSpeed;
//       break;
//   }
//   console.log('Moving at speed: ' + speed);
// }

// moveAnimal({ type: 'bird', flyingSpeed: 10 });
// moveAnimal({ type: 'horse', runningSpeed: 10 });

// // Type Casting

// // const userInputElement = <HTMLInputElement>(
// //   document.getElementById('user-input')
// // );
// // const userInputElement = document.getElementById(
// //   'user-input'
// // )! as HTMLInputElement;

// // userInputElement.value = 'Hi there';
// //? Exclamation mark (!): Tell TS the expression in front of will never be null
// const userInputElement = document.getElementById('user-input');

// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = 'Hi there';
// }

// // Index Types
// interface ErrorContainer {
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: 'Not a valid email!',
//   username: 'Must start with a capital character!',
// };
