//um decorator nada mais é que um objeto "impostor" ele simplesmente finge ser seu objeto, mas no meio do caminho ele pode decorar seu objeto

//Veremos aqui decorators de classes
export class Animal {
  private cor: string;
  constructor(cor: string) {
    this.cor = cor;
  }
  function decorator<T extends new () => any>(target: T):T {
     return class extends target{};
  }
}

const AnimalDecorated = decorator(Animal);
const animal = new AnimalDecorated('azul');
console.log(animal);
