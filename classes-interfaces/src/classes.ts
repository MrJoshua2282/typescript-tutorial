// private - can only be accessed/altered from within the class they are defined, not inherited classes
// protected - can be accessed/altered within the class or any class that extends this class
// public - the default value and is adjustable anywhere
// readonly - cannot be changed
// static - Neither static methods nor static properties can be called on instances of the class. Instead, they're called on the class itself. Static methods are often utility functions, such as functions to create or clone objects, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.
// abstract - abstract method is a method that can only be declared but has no implementation to it. Abstract classes need to be inherited and require subclasses to provide implementations for the method declared in the abstract class.
// singleton - where you only ever have one object based on a class

abstract class Department {
  static fiscalYear = 2022;
  protected employees: string[] = [];
  // private readonly id: string;
  // public name: string;

  constructor(protected readonly id: string, public name: string) {
    // this.name = name;
    // console.log(Department.fiscalYear)
  }

  static createEmployee(name: string) {
    return { name: name }
  }

  // describe(this: Department) {
  //   console.log('Department: ' + this.name + ' with id ' + this.id)
  // }
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee)
  }
  printEmployees() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe(this: ITDepartment): void {
    console.log('ITDepartment: ' + this.name + ' with id ' + this.id)
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.reports = reports;
    this.lastReport = reports[0]
  }

  static getInstance() {
    if (this.instance) {
      return this.instance
    }
    this.instance = new AccountingDepartment('007', []);
    return this.instance
  }

  describe(this: AccountingDepartment): void {
    console.log('AccountingDepartment: ' + this.name + ' with id ' + this.id)
  }

  get mostRecentReport(): string {
    if (this.lastReport) {
      console.log('this.lastReport', this.lastReport)
      return this.lastReport
    }
    console.log('No report')
    return 'No value'
  }

  set mostRecentReport(value: string) {
    this.addReport(value)
  }

  addEmployee(name: string) {
    if (name === 'Josh') {
      return;
    }
    this.employees.push(name)
  }

  addReport(text: string) {
    this.reports.push(text)
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports)
  }
}

const employee1 = Department.createEmployee('James');
console.log('employee1', employee1, Department.fiscalYear)

// const accounting = new AccountingDepartment('007', []);
const accounting = AccountingDepartment.getInstance();

accounting.mostRecentReport = 'This is a report'
accounting.mostRecentReport;
accounting.addReport('something happened')
accounting.printReports()
accounting.addEmployee('Josh')
accounting.addEmployee('Akeem')
accounting.printEmployees()

// accounting.describe()
// accounting.addEmployee('Joshua')
// accounting.addEmployee('Gandhi')

console.log(accounting)