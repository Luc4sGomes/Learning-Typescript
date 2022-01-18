function decorator(
  classPrototype: any,
  nameMethod: string | symbol,
  index: number, //posicao do parametro no metodo
): any {
  console.log(classPrototype);
  console.log(nameMethod);
  console.log(index);
}

export class UmaPessoa {
  name: string;
  lastName: string;
  age: number;

  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  method(@decorator message: string): string {
    return `${this.name} and ${this.lastName}: ${message}`;
  }

  get nameComplete(): string {
    return this.name + ' ' + this.lastName;
  }

  set nameComplete(value: string) {
    const words = value.split(/\s+/g);
    const firstName = words.shift();
    if (!firstName) return;
    this.name = firstName;
    this.lastName = words.join(' ');
  }
}

const person = new UmaPessoa('lucas', 'gomes', 20);

const method = person.method('ola mundo');
console.log(method);
