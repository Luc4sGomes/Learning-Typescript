//Iterable Interface

//Iterable é um tipo que podemos usar se quisermos incluir os tipos listados acima que são iteráveis. Aqui está um exemplo:

function toArray<X>(xs: Iterable<X>): X[] {
  return [...xs];
}

//for of afirmaçoes

//for..offaz um loop sobre um objeto iterável, invocando a Symbol.iteratorpropriedade no objeto. Aqui está um for..ofloop simples em uma matriz:

const someArray = [1, 'string', false];

for (const entry of someArray) {
  console.log(entry); //1, "string", false
}

//for of vs for in

//Ambas as instruções for..ofe for..initeram sobre listas; os valores iterados são diferentes, porém, for..inretorna uma lista de chaves no objeto que está sendo iterado, enquanto for..ofretorna uma lista de valores das propriedades numéricas do objeto que está sendo iterado.

const list = [4, 5, 6];

for (const i in list) {
  console.log(i); // 0, 1, 2
}

for (const i of list) {
  console.log(i); //4, 5, 6
}

//Outra distinção é que for..inopera em qualquer objeto; ele serve como uma maneira de inspecionar propriedades neste objeto. for..ofpor outro lado, está principalmente interessado em valores de objetos iteráveis. Objetos embutidos como Mape Setimplementam Symbol.iteratorpropriedades que permitem acesso a valores armazenados.

const pets = new Set(['cat', 'dog', 'hamster']);
pets['species'] = 'mammals';

for (const pet in pets) {
  console.log(pet); // "species"
}

for (const pet of pets) {
  console.log(pet); // "cat", "dog", "hamster"
}

//Geração de código
/*Segmentação ES5 e ES3
Ao direcionar um mecanismo compatível com ES5 ou ES3, os iteradores só são permitidos em valores do Arraytipo. É um erro usar for..ofloops em valores não Array, mesmo que esses valores não Array implementem a Symbol.iteratorpropriedade.

O compilador irá gerar um forloop simples para um for..ofloop, por exemplo:*/

const numbers = [1, 2, 3];

for (const num of numbers) {
  console.log(num);
}

//sera gerado como:

const numbers2 = [1, 2, 3];

for (let i = 0; i < numbers2.length; i++) {
  const num = numbers2[i];
  console.log(num);
}
