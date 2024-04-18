// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; //Tuple
// } = {
//   // const person = {
//   name: 'Lmao',
//   age: 20,
//   hobbies: ['Cooking', 'Game'],
//   role: [2, 'author'],
// };

// Enums

enum Role {
  ADMIN = 1,
  READ_ONLY,
  AUTHOR,
}
const person = {
  name: 'Lmao',
  age: 20,
  hobbies: ['Cooking', 'Game'],
  role: Role.ADMIN,
};

// person.role.push('admin');
// person.role[1] = 10;
// person.role = [0 ,'admin', 'user']
let favoriteActivities: string[];
favoriteActivities = ['Sport'];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // Only take type string declare
  // console.log(hobby.map());
}
if (person.role === Role.ADMIN) {
  console.log(`Is admin`);
}
