//interfaces em 99% sao identicos a type Alias;
//interfaces esta relacionada diretamente com objetos;

interface Nome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto(): string;
}

interface TipoPessoa2 extends TipoNomeCompleto, TipoSobrenome, Nome {}

export class Pessoa implements TipoPessoa2 {
  constructor(public nome: string, public sobrenome: string) {}

  public nomeCompleto(): string {
    return this.nome + ' | ' + this.sobrenome;
  }
}

const pessoaObj: TipoPessoa2 = {
  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  },
  nome: 'lucas',
  sobrenome: 'gomes',
};

const pessoa = new Pessoa('lucas', 'gomes');
console.log(pessoa.nomeCompleto());
console.log(pessoaObj.nomeCompleto());
