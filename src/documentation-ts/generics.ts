function identity<Type>(arg: Type): Type {
  return arg;
}

const output = identity<string>('foo');

function calcularAlgo<G>(arg: G): G {
  return arg;
}
// aqui definimos que o tipo do meu generico vai ser um numero o <number> é igual ao <Type> que vai na função, por isso nome de generico
const number = calcularAlgo<number>(1);

//o compilador define o valor de Typepara nós automaticamente com base no tipo de argumento que passamos:
const output2 = identity('foo2');

//trabalhando com variaves de tipos genericos:
function identity2<Type>(arg: Type[]): Type[] {
  console.log(arg.length);

  return arg;
}
const string = identity2<number>([1, 2]);
const string1 = identity2<string>(['1', '2']);

function logginIdentity<Type>(arr: Array<Type>): Array<Type> {
  //mesma coisa da funcao da linha 17
  console.log(arr.length);
  return arr;
}

//tipos genericos
