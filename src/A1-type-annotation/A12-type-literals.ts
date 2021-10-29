let x = 10; // eslint-disable-line
x = 0b1010;
const y = 10;
const a = 100 as const;

const person = {
  name: 'lucas' as const,
  lastName: 'gomes',
};

function escolhaCor(cor: 'red' | 'blue' | 'green') {
  return cor;
}

console.log(escolhaCor);

export default 1;
