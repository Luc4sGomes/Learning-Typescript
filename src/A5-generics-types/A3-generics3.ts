//como utilizar generics com interfaces e type alias

interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

type PessoaProtocolo2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno: PessoaProtocolo<string, number> = {
  nome: 'lucas',
  sobrenome: 'gomes',
  idade: 20,
};

const aluno2: PessoaProtocolo<number, number> = {
  nome: 123,
  sobrenome: 456,
  idade: 10,
};

const aluno3: PessoaProtocolo = {
  nome: 'lucas',
  sobrenome: 'gomes',
  idade: 10,
};

console.log(aluno);
