//Até agora você descobriu que vartem alguns problemas, e é precisamente por isso que letas declarações foram introduzidas. Além da palavra-chave usada, letas instruções são escritas da mesma forma varque as instruções.

const hello = 'Hello';

//A principal diferença não está na sintaxe, mas na semântica, na qual nos aprofundaremos agora.

/*Escopo de bloco
Quando uma variável é declarada usando let, ela usa o que alguns chamam de escopo léxico ou escopo de bloco . Ao contrário das variáveis ​​declaradas com varcujos escopos vazam para a função que as contém, as variáveis ​​com escopo de bloco não são visíveis fora de seu bloco ou for-loop mais próximo.*/

function f(input: boolean) {
  const a = 100;

  if (input) {
    const b = a + 1; //continua funcionando
    return b;
  }

  return b; //error, b nao existe aqui
}

//Aqui, temos duas variáveis ​​locais ae b. aO escopo de 's é limitado ao corpo de fenquanto bo escopo de 's é limitado ao ifbloco da instrução que o contém.

/*As variáveis ​​declaradas em uma catchcláusula também têm regras de escopo semelhantes.*/

try {
  throw 'oh no!';
} catch (e) {
  console.log('error');
}

//error: "e" nao existe aqui
console.log(e);

/*Algo a ser observado é que você ainda pode capturar uma variável com escopo de bloco antes de ser declarada. O único problema é que é ilegal chamar essa função antes da declaração. Se for direcionado ao ES2015, um tempo de execução moderno gerará um erro; no entanto, agora o TypeScript é permissivo e não relatará isso como um erro.*/

function foo() {
  return a; //ok, captura a
}

foo();
let a;

/*Desestruturando
Outro recurso do ECMAScript 2015 que o TypeScript possui é a desestruturação. Para uma referência completa, veja o artigo na Mozilla Developer Network . Nesta seção, daremos uma breve visão geral.*/

/*Desestruturação de matriz
A forma mais simples de desestruturação é a atribuição de desestruturação de array:*/

const input = [1, 2];
const [first, second] = input;
console.log(first);
console.log(second);

//Isso cria duas novas variáveis ​​denominadas firste second. Isso é equivalente a usar a indexação, mas é muito mais conveniente:

first = input[0];
second = input[1];

//A desestruturação também funciona com variáveis ​​já declaradas:

[first, second] = [second, first];


//E com parâmetros para uma função:

function f([firstm second]: [number, number]) {
    console.log(first);
    console.log(second);
}

f([1, 2]);


//Você pode criar uma variável para os itens restantes em uma lista usando a sintaxe ...:

let [first, ...rest] = [1,2,3,4];
console.log(first); // output 1
console.log(rest); //output[2,3,4]


/*Desestruturação de tuplas
Tuplas podem ser desestruturadas como arrays; as variáveis ​​de desestruturação obtêm os tipos dos elementos de tupla correspondentes:*/

let tuple: [number, string, boolean] = [7, "lucas", true];

let [a, b, c] = tuple;


//É um erro desestruturar uma tupla além do alcance de seus elementos:

let[a, b, c, d] = tuple; //error, sem elemento no indice 3;


/*Desestruturação de objetos
Você também pode desestruturar objetos:*/

let objeto = {
    a: "foo",
    b: 12,
    c: "bar",
};

let { a, b } =  objeto;


/*Propagação
O operador spread é o oposto da desestruturação. Ele permite que você espalhe uma matriz em outra matriz ou um objeto em outro objeto. Por exemplo:*/

let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5];

/*Isso dá a BothPlus o valor [0, 1, 2, 3, 4, 5]. A propagação cria uma cópia superficial de firste second. Eles não são alterados pela propagação.*/
