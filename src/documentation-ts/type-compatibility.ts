//A compatibilidade de tipo no TypeScript é baseada na subtipagem estrutural. A tipagem estrutural é uma maneira de relacionar tipos com base apenas em seus membros. Isso está em contraste com a tipagem nominal. Considere o seguinte código:

interface Pet {
  name: string;
}

class Dog {
  name: string;
}

let pet: Pet;
//OK, por causa do tipo estrutural

pet = new Dog();

/*Começando
A regra básica para o sistema de tipos estruturais do TypeScript é que xé compatível com yif ytem pelo menos os mesmos membros que x. Por exemplo, considere o seguinte código envolvendo uma interface chamada Petque tem uma name propriedade:*/

interface Pet2 {
  name: string;
}

let pet2: Pet2;
//dogs inferred type is { name: string; owner: string; }

const dog = { name: 'lassie', owner: 'rudd weatherwax' };
pet2 = dog;

//Para verificar se dogpode ser atribuído a pet, o compilador verifica cada propriedade de petpara encontrar uma propriedade compatível correspondente em dog. Neste caso, dogdeve ter um membro chamado nameque seja uma string. Ele faz, então a atribuição é permitida.

//A mesma regra para atribuição é usada ao verificar argumentos de chamada de função:

interface Pet3 {
  name: string;
}

const dog3 = { name: 'lessie', owner: 'rudd' };

function greet(pet3: Pet) {
  console.log('hello ' + pet3.name);
}

greet(dog3); //ok

/*Observe que dogtem uma propriedade extra owner, mas isso não cria um erro. Somente membros do tipo de destino ( Petneste caso) são considerados na verificação de compatibilidade.

Este processo de comparação prossegue recursivamente, explorando o tipo de cada membro e sub-membro.*/

// =================================================== //

/*Comparando duas funções
Embora comparar tipos primitivos e tipos de objetos seja relativamente simples, a questão de quais tipos de funções devem ser consideradas compatíveis é um pouco mais complexa. Vamos começar com um exemplo básico de duas funções que diferem apenas em suas listas de parâmetros:*/

const x = (a: number) => 0;
const y = (b: number, s: string) => 0;

y = x; //ok
x = y; //error ?????
