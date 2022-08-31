"use strict";
// function add(n1: number, n2: number, showResult: boolean) {
//   if (showResult) {
//     console.log('hiiiiii')
//     return n1 + n2;
//   }
// }
const number1 = 5; // Explicitly state that this is of type
const number2 = 2.9;
const showResult = true;
// const result = add(number1, number2, showResult);
// console.log(result)
const person = {
    name: 'Joshua',
    age: 32
};
const person3 = {
    name: 'Joshua',
    age: 32
};
const person2 = {
    name: 'Joshua',
    age: 32
};
const person4 = {
    name: 'Joshua',
    age: 32,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
// enum Role {
//   ADMIN, READ_ONLY, AUTHOR
// }
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 9] = "READ_ONLY";
    Role["AUTHOR"] = "t";
})(Role || (Role = {}));
const person5 = {
    name: 'Joshua',
    age: 32,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
