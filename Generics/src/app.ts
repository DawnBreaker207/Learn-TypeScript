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
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: 'Anh', hobbies: ['Game'] }, { age: 20 });
const mergeObj2 = merge({ name: 'Anh' }, { age: 20 });
console.log(mergeObj.age);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value';
  if (element.length === 1) {
    descriptionText = 'Got 1 element';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements';
  }
  return [element, descriptionText];
}

// console.log(countAndDescribe('Hello'));
console.log(countAndDescribe(['Lmao', 'Dafuk']));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'Value ' + obj[key];
}

console.log(extractAndConvert({ name: 'Anh' }, 'name'));

//? Generic Classes

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Anh');
textStorage.addItem('Tung');
textStorage.removeItem('Anh');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const maxObj = { name: 'Tung' };
// objStorage.addItem(maxObj);
// objStorage.addItem({ name: 'Anh' });
// //..
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());

//? Utility Types
interface CourseGoal {
  title: string;
  description: string;
  completeUnit: Date;
}
function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUnit = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Tung', 'Anh'];
// names.push('Manu');
// names.pop()
