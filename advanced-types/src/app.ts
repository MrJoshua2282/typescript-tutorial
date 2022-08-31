// Type Guards
type Admin = {
  name: string;
  privileges: string[];
}

type Employee = {
  name: string;
  startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Joshua',
  privileges: ['I can access all'],
  startDate: new Date(),
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee): void {
  console.log('Name ' + emp.name);

  if ('privileges' in emp) {
    console.log('Privileges ' + emp.privileges.toString());
  } else if ('startDate' in emp) {
    console.log('startDate ' + emp.startDate.toString());
  }
}

printEmployeeInformation(e1)

// Function Overloads
type Combinable = string | number;
// type Numeric = number | boolean;

// type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;

function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const fetchData = {
  job: { title: 'CEO', description: 'description' }
}
// Optional Chaining
console.log(fetchData?.job?.title)

// Nullish Coalescing - if the default is null or undefined then perform something
const userInput = '';

const storedData = userInput ?? 'DEFAULT';

console.log('storedData', storedData)

function size(input: string | number) {
  if (typeof input === 'string') {
    return input.length;
  }
  return input;
}

class Car {
  drive(): void {
    console.log('Driving...')
  }
}

class Truck {
  drive(): void {
    console.log('Driving a truck...')
  }
  loadCargo(amount: number): void {
    console.log('Loading cargo ... ' + amount)
  }
}

type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle): void {
  vehicle.drive();

  // if ('loadCargo' in vehicle) {
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000)
  }
}

useVehicle(new Truck)

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}


interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal): void {
  switch (animal.type) {
    case 'bird':
      console.log('Flying');
      break;
    case 'horse':
      console.log('Running');
      break;
  }
}

// Type Casting
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

// Index Properties
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'not a valid email'
}

