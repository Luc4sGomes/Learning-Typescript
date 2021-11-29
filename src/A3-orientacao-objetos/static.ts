export class Person {
  public name: string;
  public lastName: string;
  public age: number;

  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  static speaksHi(): void {
    console.log('hoi');
  }
}

const person = new Person('lucas', 'gomes', 30);
person.age = 10;
console.log(person);
