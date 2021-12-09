//como utilizar chaves de tipos, isso ajuda a manter o codigo mais limpo e evita que voce fique repetindo trechos do seu codigo que são iguais

type Veiculo = {
  marca: string;
  ano: string;
};

type Car = {
  brand: Veiculo['marca'];
  year: Veiculo['ano'];
  name: string;
};

const carro: Car = {
  brand: 'ford',
  year: '2020',
  name: 'name',
};

interface Veic {
  marca: string;
  ano: string;
}

class carro1 implements Veic {
  marca: string;
  ano: string;
  constructor(marca: string, ano: string) {
    this.marca = marca;
    this.ano = ano;
  }
}

class Evento {
  private data: string;
  private hora: string;

  constructor(data: string, hora: string) {
    this.data = data;
    this.hora = hora;
  }
}

class EventoEspecifico extends Evento {}

const ev = new EventoEspecifico('a', 'b');
