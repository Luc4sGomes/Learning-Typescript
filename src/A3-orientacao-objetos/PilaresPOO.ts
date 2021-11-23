//pilares do POO

//1 abstração
export class Pessoa {
  private name: string;
  private lastName: string;

  constructor(name: string, lastName: string) {
    this.name = name;
    this.lastName = lastName;
  }
}

//2 encapsulamento
export class RemoteControl {
  constructor(private powerStatus = false) {}

  public turnOn(): void {
    this.powerStatus = true;
  }

  public turnOff(): void {
    this.powerStatus = false;
  }
}

//3 Herença

export abstract class Animal {
  constructor(public name: string) {}
  abstract makeNoise(): void;
}

//polimofirsmo

export class Dog extends Animal {
  makeNoise(): void {
    console.log(`${this.name} is making auau`);
  }
}

export class Cat extends Animal {
  makeNoise(): void {
    console.log(`${this.name} is making miau`);
  }
}
