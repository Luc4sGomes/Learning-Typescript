//o typescript oferece suporte total para a palavra chave class introduzida no es2015

//como acontece com outros recursos da linguagem Javascript, Typescript adiciona anotações de tipos e outra sintaxe para permitir que voce expresse relacionamentos entre classes.

//Membros da classe

//aqui esta a classe mais basica:

export class Point {
  //esta classe sem nada, não é muito util, entao iremos adicionar membros a ela
  //campos
  //uma declaração de campo cria uma propriedade publica gravavel em uma classe

  x: number;
  y: number;

  //como acontece em outros locais, a anotação de tipos é opcional, mas sera implicita "Any" caso nao seja especificada
}
const p1 = new Point();
p1.x = 0;
p1.y = 1;

//os campos tambem podem ter inicializadores, eles serao executados automaticamente quando a classe for instanciada
export class Point2 {
  x = 0;
  y = 1;
}

const p2 = new Point();
console.log(`${p2.x} and ${p2.y}`);

//==================================================================//

//A strictPropertyInitialization configuração controla se os campos de classe precisam ser inicializados no construtor

class BadGreeter {
  name: string; //propriedade nome nao tem inicializador e nao definida no constructor
}

//basicamente ficaria assim:
class GoodGreeter {
  name: string;

  constructor() {
    this.name = 'hello';
  }
}

//ReadOnly

//os campos podem ser prefixados com o readonly modificador. isso evita atribuições ao campo fora do construtor.

class Greeter {
  readonly name: string = 'world';

  constructor(otherName?: string) {
    if (otherName !== undefined) {
      this.name = otherName;
    }
  }

  err() {
    this.name = 'not ok'; //nao pode assinar o name porque ele é uma proprieade readonly
  }
}

const g = new Greeter();
g.name = 'also is not ok'; //ainda nao funciona por causa da propriedade que é readonly na linha 54

//=======================================================================//

//Construtores
//os construtores de classes sao muito semelhantes as funcoes. voce pode adicionar parametros com anotacoes de tipo, valores padrao e sobrecargas

class Point3 {
    x: number;
    y: number;

    //assinatura normal por padrao
    constructor(x = 0; y = 0) {
        this.x = x;
        this.y = y;
    }
}
