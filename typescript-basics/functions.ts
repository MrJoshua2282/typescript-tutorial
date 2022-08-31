function add(n1: number, n2: number): number {
  return n1 + n2
}

function printResult(num: number): void { // void --> doesn't return anything
  console.log('Result: ' + num)
}

// function printResult(num: number): undefined { // undefined --> returns an undefined value
//   console.log('Result: ' + num)
//   return;
// }

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void): void => {

  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 5))

// let combinedValues: Function;
let combinedValues: (a: number, b: number) => number;

combinedValues = add;

addAndHandle(10, 20, (result) => {
  console.log(result)
})