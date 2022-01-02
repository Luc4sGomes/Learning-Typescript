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
// =================================================================== //
//Assinaturas de indice
//as classes podem declarar assinaturasa de indice; estes funcionam da mesma forma que as assianturas de indice para outros tipos de objetos

class MyClass {
  [s: string]: boolean | ((s: string) => boolean);

  check(s: string) {
    return this[s] as boolean;
  }
}

//Como o tipo de assinatura de índice também precisa capturar os tipos de métodos, não é fácil usar esses tipos de maneira útil. Geralmente, é melhor armazenar os dados indexados em outro lugar, em vez de na própria instância da classe.

// =================================================================== //
//Herança de classe
// Como outras linguagens com recursos orientados a objetos, as classes em JavaScript podem herdar de classes base.

//implements Cláusulas

//Você pode usar uma implements cláusula para verificar se uma classe satisfaz uma determinada interface. Um erro será emitido se uma classe falhar em implementá-lo corretamente:
interface Pingable {
  ping(): void;
}

class Sonar implements Pingable {
  ping() {
    console.log('Ping!');
  }
}

class Ball implements Pingable {
  ping(): void {
    //tne
  }
  pong() {
    console.log('pong!');
  }
}

//As classes também podem implementar várias interfaces, por exemplo class C implements A, B {...}

//Cuidados
//É importante entender que uma implementscláusula é apenas uma verificação de que a classe pode ser tratada como o tipo de interface. Isso não muda o tipo da classe ou seus métodos em tudo . Uma fonte comum de erro é presumir que uma implementscláusula mudará o tipo de classe - não muda!

interface Checkable {
  check(name: string): boolean;
}

class NameChacker implements Checkable {
  check(s) {
    //tipo any
    return s.toLowerCase() === 'ok';
  }
}

//Neste exemplo, talvez esperássemos que so tipo de fosse influenciado pelo name: stringparâmetro de check. Não é - as implementscláusulas não mudam a forma como o corpo da classe é verificado ou seu tipo inferido.

//Da mesma forma, implementar uma interface com uma propriedade opcional não cria essa propriedade:
interface A {
  x: number;
  y?: number;
}

class B implements A {
  x = 0;
}
const b = new B();
C.y = 10;

// ===================================================================== //

// extends Cláusulas
// As classes podem ser extendde uma classe base. Uma classe derivada tem todas as propriedades e métodos de sua classe base e também define membros adicionais.

class Animal {
  move() {
    console.log('moving along');
  }
}

class Dog extends Animal {
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log('woof!');
    }
  }
}
const poodle = new Dog();
poodle.move(); //metodo da classe base
poodle.woof(2); //metodo da classe derivada

//Métodos de substituição

//Uma classe derivada também pode substituir um campo ou propriedade da classe base. Você pode usar a super.sintaxe para acessar os métodos da classe base. Observe que, como as classes JavaScript são um objeto de pesquisa simples, não há noção de um “supercampo”.

//O TypeScript impõe que uma classe derivada seja sempre um subtipo de sua classe base.

//Por exemplo, esta é uma maneira legal de substituir um método:

class Base2 {
  greet() {
    console.log('hello, world');
  }
}

class Derived2 extends Base2 {
  greet(name?: string) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }
}

const d = new Derived2();
d.greet();
d.greet('reader');

//É importante que uma classe derivada siga seu contrato de classe base. Lembre-se de que é muito comum (e sempre legal!) Referir-se a uma instância de classe derivada por meio de uma referência de classe base:

//Alias the derived instance through a base
const b2: Base2 = d;
//no problem
b2.greet();
