export abstract class Personagem {
  protected abstract emoji: string;

  protected name: string;
  protected atk: number;
  protected life: number;

  constructor(name: string, atk: number, life: number) {
    this.name = name;
    this.atk = atk;
    this.life = life;
  }

  atacar(personagem: Personagem): void {
    this.bordao();
    console.log(`${this.name} is attacking`);
    personagem.perderVida(this.atk);
  }

  perderVida(forcaAtaque: number): void {
    this.life -= forcaAtaque;
    console.log(`${this.name} agora tem ${this.life} de vida`);
  }

  abstract bordao(): void;
}

export class Guerreira extends Personagem {
  protected emoji = ':)';
  bordao(): void {
    console.log('guerreira ao ataqueee');
  }
}

export class Monstro extends Personagem {
  protected emoji = ':(';
  bordao(): void {
    console.log('monsterrr');
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 1000, 100);

guerreira.atacar(monstro);
