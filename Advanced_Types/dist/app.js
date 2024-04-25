"use strict";
const e1 = {
    name: 'Anh',
    privileges: ['create-server'],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Date: ' + emp.startDate);
    }
}
printEmployeeInformation(e1);
// printEmployeeInformation({ name: 'Anh', startDate: new Date() });
// Type Guards
class Car {
    drive() {
        console.log(`Driving...`);
    }
}
class Truck {
    drive() {
        console.log(`Driving a truck...`);
    }
    loadCargo(amount) {
        console.log('Loading cargo... ' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        // instanceof check type only work with classes
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving at speed: ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
moveAnimal({ type: 'horse', runningSpeed: 10 });
// Type Casting
// const userInputElement = <HTMLInputElement>(
//   document.getElementById('user-input')
// );
// const userInputElement = document.getElementById(
//   'user-input'
// )! as HTMLInputElement;
// userInputElement.value = 'Hi there';
//? Exclamation mark (!): Tell TS the expression in front of will never be null
const userInputElement = document.getElementById('user-input');
if (userInputElement) {
    userInputElement.value = 'Hi there';
}
const errorBag = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!',
};
