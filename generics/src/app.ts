// Generics
// const names: Array<string> = [];

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done!')
//   }, 2000)
// })

function merge<T extends object, U>(a: T, b: U) {
  return { ...a, ...b }
}

const mergeObj = merge({ name: 'Joshua', hobbies: ['Sports'] }, { age: 30 })

interface Lengthy {
  length: number;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  return [element, 'Got it!']
}

// keyof constraint
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key]
}

class DataStorage<T extends string> {
  private data: T[] = [];

  addItem(item: T): void {
    this.data.push(item)
  }

  removeItem(item: T): void {
    this.data.splice(this.data.indexOf(item), 1)
  }

  getItems(): T[] {
    return this.data;
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Joshua')
textStorage.addItem('Joe')
textStorage.addItem('X')
textStorage.addItem('Akeem')
console.log(textStorage.getItems())

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, description: string, completeUntil: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = completeUntil;

  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Jesus', 'Gandhi'];
// names.push('Vishnu');