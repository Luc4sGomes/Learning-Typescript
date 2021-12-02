type Nome = {
  nome: string;
};

type TipoSobrenome = {
  sobrenome: string;
};

type TipoNomeCompleto = {
  nomeCompleto(): string;
};

export class Pessoa implements Nome, TipoNomeCompleto, TipoSobrenome {
  constructor(public nome: string, public sobrenome: string) {}

  public nomeCompleto(): string {
    return this.nome + ' | ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('lucas', 'gomes');
console.log(pessoa.nomeCompleto());
