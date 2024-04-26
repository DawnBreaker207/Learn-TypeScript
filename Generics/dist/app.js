"use strict";
// const names: Array<string> = []; // string[]
// // names[0].split(' ');
// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done');
//   }, 2000);
// });
// promise.then((data) => {
//   data.split(' ');
// });
//! Generics Function
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: 'Anh', hobbies: ['Game'] }, { age: 20 });
const mergeObj2 = merge({ name: 'Anh' }, { age: 20 });
console.log(mergeObj.age);
function countAndDescribe(element) {
    let descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements';
    }
    return [element, descriptionText];
}
// console.log(countAndDescribe('Hello'));
console.log(countAndDescribe(['Lmao', 'Dafuk']));
function extractAndConvert(obj, key) {
    return 'Value ' + obj[key];
}
console.log(extractAndConvert({ name: 'Anh' }, 'name'));
//? Generic Classes
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Anh');
textStorage.addItem('Tung');
textStorage.removeItem('Anh');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUnit = date;
    return courseGoal;
}
const names = ['Tung', 'Anh'];
// names.push('Manu');
// names.pop()
