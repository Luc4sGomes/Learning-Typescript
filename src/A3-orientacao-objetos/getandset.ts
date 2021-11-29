export class Person {
  public name: string;
  public lastName: string;
  private age: number;
  protected cpf: string;

  constructor(name: string, lastName: string, age: number, cpf: string) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.cpf = cpf;
  }

  get getAge(): number {
    return this.age;
  }

  set setCpf(cpf: string) {
    this.cpf = cpf;
  }

  get getCpf(): string {
    return this.cpf.replace(/\D/g, '');
  }

  getNameCompleted(): string {
    return this.name + ' ' + this.lastName;
  }
}

const person = new Person('lucas', 'gomes', 20, '000.000.000-52');
person.setCpf = '1111';
