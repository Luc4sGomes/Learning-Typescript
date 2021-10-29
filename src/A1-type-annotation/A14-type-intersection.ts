type TemNome = { name: string };

type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

type Pessoa = TemNome & TemSobrenome & TemIdade; //AND

const pessoa: Pessoa = {
  name: 'lucas',
  sobrenome: 'gomes',
  idade: 2,
};

export { pessoa };
