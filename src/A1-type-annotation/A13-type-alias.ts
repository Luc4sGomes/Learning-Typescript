//Type alias seria basicamente voce criar um apelido para um tipo para faciliar e deixar seu codigo mais organizado

type Idade = number; //tipo criado por nos, inciam-se com letras maiusculas
type Pessoa = {
  name: string;
  age: Idade;
  salario: number;
  corPreferida?: string;
};
type CorRGB = 'red' | 'green' | 'blue';
type corCMYK = 'ciano' | 'magenta' | 'amarelo' | 'preto';
type corPreferida = CorRGB | corCMYK;

const person: Pessoa = {
  age: 20,
  name: 'lucas',
  salario: 2000,
};

export function setCorPreferida(pessoa: Pessoa, cor: corPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}
