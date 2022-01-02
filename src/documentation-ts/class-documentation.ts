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
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

class Point4 {
  //sobrecargas
  constructor(x: number, y: string);
  constructor(s: string);
  constructor(xs: any, y?: any) {
    //tbd
  }
}

//existem apenas algumas diferenças entre as assinaturas do construtor de classe e as assinaturas de funcao:

//os contrutores nao podem ter parametros de tipo, eles pertencem a declaração da classe externa sobre a qual aprenderemos mais tarde.

//construtores nao podem ter anotações de tipos de retorno - o tipo de instancia de classe é sempre o que é retornado

//=====================================================================//

//SuperChamadas
//Assim como no javascript se voce tiver uma classe base, precisara chamar super(); o corpo do construtor antes de usar qualquer this.membro;
class Base {
  k = 4;
}

class Derived extends Base {
  constructor() {
    super(); //o super deve ser chamado antes de acessar o "this" no construtor derivado da classe
    //imprime um valor errado em ES5 lança um erro de execao no ES6
    console.log(this.k);
  }
}
//esquecer de chamar o super é um erro facil de cometer em javascript, mas o Typescript dirá para voce quando for necessario.

//=======================================================================//

//Metodos
//Uma propriedade de funcao em uma classe é chamada de metodo. os metodos podem usar todas as anotações do mesmo tipo como funcoes e construtores:

class Point5 {
  x = 10;
  y = 11;

  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
}
//alem das anotacoes de tipo padrao, o TypeScript nao adiciona nada de novo aos metodos
//observe que dentro do corpo de um metodo, ainda é obrigatorio acessar os campos e outros metodos via "this" um nome nao qualificado em um corpo de metodo sempre se referira a algo no escopo global nao ao escopo da classe!

let x = 0;

class C {
  x = 'hello';

  m() {
    //isso esta tentando modificar "x" da linha 135 e nao a propriedade da classes
    x = 'world';
    //tipo "string" nao é assinavel para o tipo "number"
  }
}

//============================================================//
//Getter and Setters
//as classes tambem podem ter acessores

class C2 {
  _length = 0;
  get length() {
    return this._length;
  }

  set length(value) {
    this._length = value;
  }
}
//O Typescript tem algumas regras de inferencia especias para acessadores:
//1: se "get" existe, mas nao "set", a propriedade é automaticamente readOnly
//2: se o tipo do parametro setter nao for especificado, ele é inferido a partir do tipo do retorno do "getter"
//3: getters and setters devem ter a mesma visibilidade de membros

//desde Typescript 4.3 é possivel ter acessores com diferentes tipos de obtencao e configuração:

class Thing {
  _size: 0;

  get size(): number {
    return this._size;
  }

  set size(value: string | number | boolean) {
    const num = Number(value);

    //nao permitido NaN, Infinity etc...

    if (!Number.isFinite(num)) {
      this._size = 0;
      return;
    }
    this._size = num;
  }
}
