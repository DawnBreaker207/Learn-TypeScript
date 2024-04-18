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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Lmao',
    age: 20,
    hobbies: ['Cooking', 'Game'],
    role: Role.ADMIN,
};
// person.role.push('admin');
// person.role[1] = 10;
// person.role = [0 ,'admin', 'user']
var favoriteActivities;
favoriteActivities = ['Sport'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // Only take type string declare
    // console.log(hobby.map());
}
if (person.role === Role.ADMIN) {
    console.log("Is admin");
}
