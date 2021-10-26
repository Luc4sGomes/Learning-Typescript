//Criando classes usando js
abstract class UserAccount {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetais(): void {
    console.log(`${this.name} e idade ${this.age}`);
  }
}

//extendo a classe para outra
class CharAccount extends UserAccount {
  public nickname: string;
  public level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age);

    this.nickname = nickname;
    this.level = level;
  }

  get getLevel() {
    return this.level;
  }
  set setLevel(level: number) {
    this.level = level;
  }

  logCharDetais(): void {
    console.log(`the player ${this.name}`);
  }
}

const jon = new CharAccount('jon', 13, 'jonmaster', 9);
const will = new UserAccount('foo', 1);

console.log(jon.logDetais());
jon.setLevel = 399;
