// function add(n1: number, n2: number, showResult: boolean) {
//   if (showResult) {
//     console.log('hiiiiii')
//     return n1 + n2;

//   }
// }

const number1: number = 5 // Explicitly state that this is of type
const number2 = 2.9
const showResult = true

// const result = add(number1, number2, showResult);

// console.log(result)

const person: object = {
  name: 'Joshua',
  age: 32
}
const person3: { // Explicitly state the object type
  name: string;
  age: number;
} = {
  name: 'Joshua',
  age: 32
}
const person2 = { // Lets TS infer the types, preferred
  name: 'Joshua',
  age: 32
}

const person4: { name: string, age: number, hobbies: string[], role: [number, string] } = {
  name: 'Joshua',
  age: 32,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
}

// enum Role {
//   ADMIN, READ_ONLY, AUTHOR
// }

enum Role {
  ADMIN = 'ADMIN', READ_ONLY = 9, AUTHOR = 't'
}
const person5 = {
  name: 'Joshua',
  age: 32,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
}