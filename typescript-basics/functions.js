"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
// function printResult(num: number): undefined { // undefined --> returns an undefined value
//   console.log('Result: ' + num)
//   return;
// }
const addAndHandle = (n1, n2, cb) => {
    const result = n1 + n2;
    cb(result);
};
printResult(add(5, 5));
// let combinedValues: Function;
let combinedValues;
combinedValues = add;
addAndHandle(10, 20, (result) => {
    console.log(result);
});
