export function add(a: unknown, b: unknown): string | number {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(add(1, 5));
console.log(add('a', 'b'));

//isso é um tipo de type guard pois estamos fazendo a soma dos dois tipos com segurança
//ou a concatenação quando for tipo string, porém existem casos mais complexos
//tipo:

type Pessoa = {
  nome: string;
  tipo: 'pessoa';
};

type Animal = {
  cor: string;
  tipo: 'animal';
};

type PessoaOuAnimal = Pessoa | Animal; //isso em algum momento vai ser uma pessoa ou animal

export class Aluno implements Pessoa {
  tipo: 'pessoa' = 'pessoa';
  constructor(public nome: string) {}
}

function mostraNome(obj: PessoaOuAnimal): void {
  switch (obj.tipo) {
    case 'pessoa':
      console.log(obj.nome);
      return;

    case 'animal':
      console.log('isso é um animal', obj.cor);
      return;
  }
}

mostraNome(new Aluno('lucas'));
mostraNome({ tipo: 'animal', cor: 'rosa' });
