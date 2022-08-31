// Classes can have multiple interfaces separated by a comma



interface Named {
  readonly name: string;
  outputName?: string;
}
interface Greetable extends Named {
  name: string;
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}`)
  }
}

const user1 = new Person('Joshua');
user1.greet('Hi there')