export class Empresa {
  //criando uma empresa
  public readonly name: string;
  private readonly colaboradores: Colaborador[] = []; //lista de colaboradores
  protected readonly CNPJ: string;

  constructor(name: string, CNPJ: string) {
    this.name = name;
    this.CNPJ = CNPJ;
  }

  adicionaColab(colab: Colaborador): void {
    //adiciona um colaborador na lista de colaboradores
    this.colaboradores.push(colab);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}
export class Colaborador {
  //criando um colaborador
  constructor(public readonly name: string, public readonly lastName: string) {}
}

const colab1 = new Colaborador('lucas', 'gomes');
const colab2 = new Colaborador('lucas', 'gomes');
const colab23 = new Colaborador('lucas', 'gomes');
const colab24 = new Colaborador('lucas', 'gomes');
