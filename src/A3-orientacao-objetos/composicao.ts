export class Carro {
  private motor: Motor;

  constructor() {
    this.motor = new Motor();
  }

  ligar(): void {
    this.motor.ligar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  parar(): void {
    this.motor.parar();
  }
  desligar(): void {
    this.motor.desligar();
  }
}

export class Motor {
  ligar(): void {
    console.log('motor esta ligado');
  }

  acelerar(): void {
    console.log('motor esta acelerando');
  }

  parar(): void {
    console.log('motor esta parando');
  }
  desligar(): void {
    console.log('motor esta desligando');
  }
}

const carro = new Carro();
carro.ligar();
carro.desligar();
carro.parar();
carro.acelerar();
