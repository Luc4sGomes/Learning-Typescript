//javascript já tem um typeof operador que voce pode usar em um contexto de expressão

//prints "string"
console.log(typeof 'Hello world');

//o TypeScript adiciona um typeof operador que voce pode usar em um contexto de tipo para se referir ao tipo de uma variavel ou propriedade

const s = 'hello';
let n: typeof s;
//let n: string

/*isso não é muito util para tipos basicos mas combinado com outros operadores de tipo, voce pode usar typeof para expressar muitos padroes de maneira conveniente
//por exemplo, vamos começar examinando o tipo predefinido ReturnType<T>. ele pega um tipo de funcao e produz seu tipo de retorno*/

type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;
//type K = boolean

//se tentarmos usar ReturnType em um nome de funcao receberemos um erro instrusivo
function f() {
  return { x: 10, y: 3 };
}

//type P = ReturnType<f>;
//f refere-se como um valor mas está sendo usando como um tipo aqui

//lembre-se  de que valores e tipos não são a mesma coisa. Para nos referirmos ao tipo que o valorf possui, usamos typeof:

type Q = ReturnType<typeof f>;
/* type Q = {
    x: number;
    y: number;
}*/
