//restricoes generics
// restricao nos generics usa-se extends
// K é no maximo uma chave de O
type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'RED',
  vacinas: ['vacina1', 'vacina2', 'vacina3'],
};

const vacinas = obterChave(animal, 'vacinas');
const cor = obterChave(animal, 'cor');

console.log(vacinas, cor);
