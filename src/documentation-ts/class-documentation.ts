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

//E se Derived não seguir Base o contrato de?

class Base3 {
  greet() {
    console.log('hello world');
  }
}

class Derived3 extends Base3 {
  //fazer esse parametro requirido
  greet(name: string) {
    console.log(`Hello, ${name.toUpperCase()}`);
  }
}

//Se compilássemos este código apesar do erro, este exemplo travaria:
const b3: Base3 = new Derived3();
//crasharia aqui porque o "name" vai ser undefined
b3.greet();

//Ordem de Inicialização

//A ordem de inicialização das classes JavaScript pode ser surpreendente em alguns casos. Vamos considerar este código:

class Base4 {
  name = 'base';
  constructor() {
    console.log('my name is ' + this.name);
  }
}

class Derived4 extends Base4 {
  name = 'derived';
}

//prints "base", not "derived"
const d4 = new Derived4();

//O que aconteceu aqui?

//A ordem de inicialização da classe, conforme definida pelo JavaScript, é:

//Os campos da classe base são inicializados
//O construtor da classe base é executado
//Os campos da classe derivada são inicializados
//O construtor da classe derivada é executado
//Isso significa que o construtor da classe base viu seu próprio valor namedurante seu próprio construtor, porque as //inicializações do campo da classe derivada ainda não foram executadas.

// ================================================= //

//herdando tipos integrados

//No ES2015, os construtores que retornam um objeto substituem implicitamente o valor de thispara qualquer chamador de super(...). É necessário que o código do construtor gerado capture qualquer valor de retorno potencial de super(...)e substitua-o por this.

//Como resultado, a criação de subclasses Error, Arraye outros podem não funcionar mais conforme o esperado. Isto é devido ao fato de que funções construtoras para Error, Arraye os como o uso ECMAScript 6 de new.targetajustar a cadeia de protótipos; entretanto, não há como garantir um valor new.targetao invocar um construtor no ECMAScript 5. Outros compiladores de nível inferior geralmente têm a mesma limitação por padrão.

//Para uma subclasse como a seguinte:

class MsgError extends Error {
  constructor(m: string) {
    super(m);
  }
  sayHello() {
    return 'hello ' + this.message;
  }
}

//você pode descobrir que:

//os métodos podem estar undefinedem objetos retornados pela construção dessas subclasses, portanto, a chamada sayHelloresultará em um erro.
//instanceofserá dividido entre as instâncias da subclasse e suas instâncias, portanto (new MsgError()) instanceof MsgError, retornará false.

//Como recomendação, você pode ajustar manualmente o protótipo imediatamente após qualquer super(...)chamada.

class MsgError2 extends Error {
  constructor(m: string) {
    super(m);

    //altera o prototipo explicito

    Object.setPrototypeOf(this, MsgError.prototype);
  }

  sayHello() {
    return 'hello ' + this.message;
  }
}

// ================================================================== //
//Visibilidade do membro

//Você pode usar o TypeScript para controlar se determinados métodos ou propriedades são visíveis para o código fora da classe.

//1. public
// A visibilidade padrão dos membros da classe é public. Um publicmembro pode ser acessado em qualquer lugar:

class Greeter2 {
  public greet() {
    console.log('hi!');
  }
}

const g2 = new Greeter2();
g2.greet();

//Como publicjá é o modificador de visibilidade padrão, você nunca precisa escrevê-lo em um membro da classe, mas pode optar por fazê-lo por motivos de estilo / legibilidade.

//2. protected
//protected os membros são visíveis apenas para as subclasses da classe em que foram declarados.

class Greeter3 {
  public greet() {
    console.log('hello, ' + this.getName());
  }

  protected getName() {
    return 'hi';
  }
}

class SpecialGreeter extends Greeter3 {
  public howdy() {
    //ok para acessar o membro protected aqui
    console.log('howdy, ' + this.getName());
  }
}

const g3 = new SpecialGreeter();
g3.greet();
g3.getName(); //Property 'getName' is protected and only accessible within class 'Greeter' and its subclasses

//exposicao de protected membros

//As classes derivadas precisam seguir seus contratos de classe base, mas podem optar por expor um subtipo de classe base com mais recursos. Isso inclui tornar os protectedmembros public:

class Base5 {
  protected m = 10;
}

class Derived5 extends Base5 {
  //No modifier, so default is "public"
  m = 15;
}
const d2 = new Derived5();
console.log(d2.m); //ok

//protectedAcesso de hierarquia cruzada

//Diferentes linguagens OOP discordam sobre se é legal acessar um protectedmembro por meio de uma referência de classe base:

class Base6 {
  protected x = 1;
}

class Derived6 extends Base6 {
  protected x: number = 5;

}

class Derived6_2 extends Base6 {
    f1(other: Derived6_2) {
        other.x = 10;
    }
}

f2(other: Base6) {
    other.x = 10;
    //Property 'x' is protected and only accessible through an instance of class 'Derived2'. This is an instance of class 'Base'.
}


//private

//private é semelhante ao protected, mas nao permite acesso ao membro de subclasses:

class Base7 {
    private x = 0;
}

const b7 = new Base7();
//nao consegue acessar de fora da classe
console.log(b7.x);

//Como os private membros não são visíveis para as classes derivadas, uma classe derivada não pode aumentar sua visibilidade:

class Base8 {
    private x = 0;
}

class Derived8 extends Base8 {
    x = 1;
}

// privateAcesso entre instâncias

//Diferentes linguagens OOP discordam sobre se diferentes instâncias da mesma classe podem acessar os privatemembros umas das outras . Embora linguagens como Java, C #, C ++, Swift e PHP permitam isso, Ruby não.

//O TypeScript permite privateacesso entre instâncias :

class A {
    private x = 10;

    public sameAs(other: A) {
        //sem erro
        return other.x === this.x;
    }
}


//ressalvas

//Como outros aspectos do sistema de tipo do TypeScript, privatee protected são aplicados apenas durante a verificação de tipo .

//Isso significa que as construções de tempo de execução do JavaScript, como inuma pesquisa de propriedade simples, ainda podem acessar um membro privateou protected:

class MySafe {
    private secretKey = 12345;
}

//em um arquivo javascript
const s = new MySafe();
//vai printar 12345;
console.log(s.secretKey);

//privatetambém permite o acesso usando a notação de colchetes durante a verificação de tipo. Isso torna os privatecampos -declarados potencialmente mais fáceis de acessar para coisas como testes de unidade, com a desvantagem de que esses campos são soft private e não impõem estritamente a privacidade

class Mysafe2 {
    private secretKey = 123;
}
const s2 = new Mysafe2();

//nao permitido durante a checagem de tipos
console.log(s2.secretKey);

//OK
console.log(s2["secretKey"]);

//Ao contrário dos TypeScripts private, os campos privados do JavaScript ( #) permanecem privados após a compilação e não fornecem as hachuras de escape mencionadas anteriormente, como acesso à notação de colchetes, tornando-os totalmente privados .

class Dog2 {
    #barkAmount = 0;
    personality = "happy";

    constructor() {}
}


// ===================================== //

//Membros estáticos

//As classes podem ter staticmembros. Esses membros não estão associados a uma instância específica da classe. Eles podem ser acessados ​​por meio do próprio objeto construtor de classe:

class MyClass2 {
    static x = 0; //declarando um atributo estatico
    static printX() { //declarando um metodo estatico
        console.log(MyClass2.x);
    }
}
console.log(MyClass2.x); //usando o atributo fora da classe sem precisar de uma instancia
MyClass2.printX(); //usando o metodo estatico da classe sem precisar de uma instancia da classe


//Membros estáticos também pode usar os mesmos public, protectede privatede visibilidade modificadores:

class Base9 {
    static getGreeting() {
        return "hello world";
    }
}

class Derived9 extends Base9 {
    myGreeting = Derived9.getGreeting();
}

//Nomes estáticos especiais

//Geralmente não é seguro / possível sobrescrever propriedades do Function protótipo. Como as classes são funções que podem ser chamadas com new, certos staticnomes não podem ser usados. Propriedades de função como name, lengthe callnão são válidas para definir como static membros:

class S {
    static name = "s!";
}

//Por que não há classes estáticas?

//TypeScript (e JavaScript) não tem uma construção chamada static classda mesma forma que C # e Java.

//Essas construções só existem porque essas linguagens forçam todos os dados e funções a estarem dentro de uma classe; como essa restrição não existe no TypeScript, não há necessidade delas. Uma classe com apenas uma única instância normalmente é representada apenas como um objeto normal em JavaScript / TypeScript.

//Por exemplo, não precisamos de uma sintaxe de "classe estática" no TypeScript porque um objeto regular (ou mesmo uma função de nível superior) fará o trabalho tão bem:

class MyStaticClass {
    static doSomething() {}
}

//alternativa 1
function doSomething() {

}
//alternativa 2
const myHelperObject = {
    doSomething(){},
}

//blocos estaticos nas classes

class Foo {
    static #count = 0;

    get count() {
        return Foo.#count;
    }

    static {
        try {
            const lastInstances = loadLastInstances();
            Foo.#count += lastInstances.length;
        }
        catch{

        }
    }
}


//Classes Genéricas


//As classes, assim como as interfaces, podem ser genéricas. Quando uma classe genérica é instanciada com new, seus parâmetros de tipo são inferidos da mesma maneira que em uma chamada de função:

class Box<Type> {
    contents: Type;
    constructor(value: Type) {
        this.contents = value;
    }
}
const bBox = new Box("hello");

//As classes podem usar restrições e padrões genéricos da mesma forma que as interfaces.

//Parâmetros de tipo em membros estáticos
//Este código não é legal e pode não ser óbvio por que:

class Box2<Type> {
    static defaultValue: Type;
}

//Lembre-se de que os tipos são sempre totalmente apagados! Em tempo de execução, há apenas um Box.defaultValue slot de propriedade. Isso significa que a configuração Box<string>.defaultValue(se isso fosse possível) também mudaria Box<number>.defaultValue- não é bom. Os staticmembros de uma classe genérica nunca podem se referir aos parâmetros de tipo da classe.

// ============================== //

//this

//É importante lembrar que o TypeScript não altera o comportamento de tempo de execução do JavaScript e que o JavaScript é famoso por ter alguns comportamentos de tempo de execução peculiares.

//O manuseio do JavaScript thisé realmente incomum:

class MyClass3 {
    name = "myClass";
    getName() {
        return this.name;
    }
}
const c3 = new MyClass3();
const obj = {
    name: "obj",
    getName: c3.getName,
}

//imprime "obj" nao "myclass";
console.log(obj.getName());


//Resumindo, por padrão, o valor de thisdentro de uma função depende de como a função foi chamada . Neste exemplo, como a função foi chamada por meio da objreferência, seu valor de thisera objem vez da instância da classe.

//Isso raramente é o que você deseja que aconteça! O TypeScript fornece algumas maneiras de atenuar ou prevenir esse tipo de erro.


//Funções de seta

//Se você tem uma função que muitas vezes será chamada de uma maneira que perde seu this contexto, pode fazer sentido usar uma propriedade de função de seta em vez de uma definição de método:

class MyClass5 {
    name = "my class";
    getName = () => {
        return this.name;
    };
}

const c1 = new MyClass5();
const g1 = c1.getName;

//imprime "my class" ao inves de crashar
console.log(g1());

//Isso tem algumas compensações:


/*O thisvalor é garantido como correto em tempo de execução, mesmo para código não verificado com TypeScript
Isso usará mais memória, pois cada instância de classe terá sua própria cópia de cada função definida dessa maneira
Você não pode usar super.getNameem uma classe derivada, porque não há entrada na cadeia de protótipos para buscar o método da classe base de*/

//this parametros

//Em uma definição de método ou função, um parâmetro inicial chamado thistem um significado especial no TypeScript. Esses parâmetros são apagados durante a compilação:

//Typescript input with 'this' parameter

function fn(this: string, x: number) {

}
//Javascript output
function fn1(x) {

}


//O TypeScript verifica se a chamada de uma função com um thisparâmetro é feita com um contexto correto. Em vez de usar uma função de seta, podemos adicionar um thisparâmetro às definições de método para impor estaticamente que o método seja chamado corretamente:

class MyClass6 {
    name = "my class";
    getName(this: MyClass) {
        return this.name;
    }
}

const c2 = new MyClass6();
//ok
c2.getName();

//error, deve crashar
const g4 = c2.getName;
console.log(g4);


class Box3 {
    contents: string = "";
    set(value: string) {
        this.contents = value;
        return this;
    }
}

class ClearableBox extends Box3 {
    clear() {
        this.contents = "";
    }
}

const a = new ClearableBox();
const b6 = a.set("hello");


//Você também pode usar thisem uma anotação de tipo de parâmetro:

class Box4 {
    content: string = "";
    sameAs(other: this) {
        return other.content === this.content;
    }
}

//Relacionamentos entre classes
//Na maioria dos casos, as classes no TypeScript são comparadas estruturalmente, da mesma forma que os outros tipos.

//Por exemplo, essas duas classes podem ser usadas no lugar uma da outra porque são idênticas:

class Point6 {
    x = 0;
    y = 0;
}

class Point7 {
    x = 0;
    y = 0;
}

//ok
const p: Point6 = new Point7();

//Da mesma forma, relacionamentos de subtipos entre classes existem mesmo se não houver herança explícita:

class Person {
    name: string;
    age: number;
}

class Employee {
    name: string;
    age: number;
    salary: number;
}

//ok

const p: Person = new Employee();
