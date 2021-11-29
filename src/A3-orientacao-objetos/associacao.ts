export class Escritor {
  private name: string;
  private ferramenta: Ferramenta | null = null;
  constructor(name: string) {
    this.name = name;
  }

  set setFerramenta(ferramenta: Ferramenta | null) {
    this.ferramenta = ferramenta;
  }

  get getFerramenta(): Ferramenta | null {
    return this.ferramenta;
  }

  escrever(): void {
    if (this.ferramenta === null) {
      console.log('nao posso escrever sem ferramenta');
      return;
    }
    this.ferramenta.escrever();
  }
}

export abstract class Ferramenta {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }

  abstract escrever(): void;

  get getName(): string {
    return this.name;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.getName} is writting`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.getName} is writting`);
  }
}
