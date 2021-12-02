interface Pessoa {
  nome: string;
}

interface Pessoa {
  sobrenome: string;
}

interface Pessoa {
  enderecos: string[];
}

const pessoaa: Pessoa = {
  nome: 'lucas',
  sobrenome: 'gomes',
  enderecos: ['2', '2'],
};

console.log(pessoaa);
