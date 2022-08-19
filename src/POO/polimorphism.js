class Atleta {
  peso;
  categoria;
  constructor(peso) {
    this.peso = peso;
  }

  definirCategoria() {
    if (this.peso <= 50) {
      this.categoria = 'infantil';
    } else if (this.peso <= 65) {
      this.categoria = 'juvenil';
    } else {
      this.categoria = 'adulto';
    }
  }
}

//usando o polimorfismo

class Lutador extends Atleta {
  constructor(peso) {
    super(peso);
  }

  definirCategoria() {
    //reformulando esse metodo que vem da classe pai
    if (this.peso <= 54) {
      this.categoria = 'pluma';
    } else if (this.peso <= 60) {
      this.categoria = 'meio leve';
    } else {
      this.categoria = 'pesado';
    }
  }
}
