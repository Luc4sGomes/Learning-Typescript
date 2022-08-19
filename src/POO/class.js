//orientado a objetos

class Poligono {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }

  get area() {
    return this.#calcularArea();
  }

  #calcularArea() {
    //isso é um hash, dizendo que esse metodo so vai ser visivel dentro da classe poligono
    return this.altura * this.largura;
  }
}

let poligono = new Poligono(10, 10);
console.log(poligono.area);

//estrutural

let height = 10;
let width = 10;

function calcularArea() {
  return height * width;
}

let area = calcularArea();
console.log(area);
