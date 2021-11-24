export class Person {
  private name: string;
  private lastName: string;
  private age: number;

  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  get getName(): string {
    return this.name;
  }
}

export class Aluno extends Person {
  private matricula: string;
  constructor(name: string, lastName: string, age: number, matricula: string) {
    super(name, lastName, age);
    this.matricula = matricula;
  }
}

export class Cliente extends Person {}

const aluno = new Aluno('lucas', 'gomes', 12, '1233');
console.log(aluno);
