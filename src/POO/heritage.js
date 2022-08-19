class Veiculo {
  rodas = 4;

  mover(direcao) {
    console.log('movendo...');
  }

  virar(direcao) {
    console.log('virando...');
  }
}

class Moto extends Veiculo {
  constructor() {
    super(); //puxa atributos e metodos da classe pai
    this.rodas = 2;
  }
}
