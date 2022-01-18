//um decorator nada mais é que um objeto "impostor" ele simplesmente finge ser seu objeto, mas no meio do caminho ele pode decorar seu objeto

//Veremos aqui decorators de classes

@decorator
export class Animal {
  private cor: string;
  public name: string;
  constructor(name: string, cor: string) {
    this.cor = cor;
    this.name = name;
  }
}
function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    cor: string;
    constructor(...args: any[]) {
      super(...args);
      this.cor = args[0].split('');
      this.name = args[1].split('');
    }
  };
}

const animal = new Animal('azul', 'lucas');
console.log(animal);

//o decorador de class ele so recebe a classe, é chamado na criação em si.
