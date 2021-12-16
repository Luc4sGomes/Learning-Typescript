//os tipos condicionais ajudam a descrever a relacao entre os tipos de entradas e saidas

interface Animal {
  live(): void;
}

interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;
// type Example1 = number;

type Example2 = RegExp extends Animal ? number : string;
//type Example2 = string;

//os tipos condicionais assumem uma forma que se parece um pouco com expressoes condicionais
//(condition ? trueExpression : falseExpression) em javascript

//quando o tipo a esquerda do extends for atribuivel ao da direita, voce obterá o tipo na primeira ramificação (a ramificação "verdadeira") caso contrario, voce obterá o tipo no ultimo ramo(o ramo "falso");

type Example3 = RegExp extends Dog ? string : boolean;
//type Example3: boolean pois caiu no campo falso.

//o poder dos tipos condicionais é usando-os com genericos

interface IdLabel {
  id: number;
}

interface NameLabel {
  name: string;
}

function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
  throw 'unimplemented';
}
/*Essas sobrecargas para createLabel descrevem uma única função JavaScript que faz uma escolha com base nos tipos de suas entradas. Observe algumas coisas:

1. Se uma biblioteca tiver que fazer o mesmo tipo de escolha repetidamente em sua API, isso se torna complicado.

2. Temos que criar três sobrecargas: uma para cada caso quando tivermos certeza do tipo (uma para stringe outra para number), e uma para o caso mais geral (tomando a string | number). Para cada novo tipo que createLabelpode lidar, o número de sobrecargas cresce exponencialmente.*/

//em vez disso podemos codificar essa logica em um tipo condicional:

type NameOrId2<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

//podemos entao usar esse tipo de condiconal para simplicar nossas sobrecargas em uma unica funcao sem sobrecargas

function createLabel2<T extends number | string>(idOrName: T): NameOrId2<T> {
  throw 'unimplemented';
}

const a = createLabel2('typescript');
//let a: Namelabel

const b = createLabel2(2.8);
//let b: IdLabel

const c = createLabel2(Math.random() ? 'hello' : 42);
//let c: NameLabel | IdLabel

//Restricoes de tipo condicional
//frequentemente as verificacoes em um tipo condicional nos fornecem algumas informacoes novas. assim como o estreitamento com protetores de tipo pode nos fornecer um tipo mais especifico o verdadeiro ramo de um tipo condicional restringirá ainda mais os genericos pelo tipo que verificamos.

//por exemplo:

//type MessageOf<T> = T['message'];
//type "message" cannot be used to index type 'T'

//neste exemplo, erros de typescript porque T nao sabe que uma propriedade foi chamada message. poderiamos restringir T e o TypeScript nao reclamaria mais:

type MessageOf2<T extends { message: unknown }> = T['message'];

interface Email {
  message: string;
}

type EmailMessageContents = MessageOf2<Email>;
//type EmailMessageContents = string;

//no entanto, e se quisessemos MessageOf usar qualquer tipo e, por default algo como never se uma message propriedade nao estivesse disponivel?
//podemos fazer isso removendo a restricao e introduzindo um tipo condicional:

type MessageOf3<T> = T extends { message: unknown } ? T['message'] : never;

interface Email {
  message: string;
}

interface Dog {
  bark(): void;
}

type EmailMessageContents2 = MessageOf3<Email>;

type DogMessageContents = MessageOf3<Dog>;
