/*Junto com as hierarquias OO tradicionais, outra maneira popular de construir classes a partir de componentes reutilizáveis  é construí-los combinando classes parciais mais simples. Você pode estar familiarizado com a ideia de mixins ou traits para linguagens como Scala, e o padrão também alcançou alguma popularidade na comunidade JavaScript.*/

//Como funciona um Mixin?
/*O padrão depende do uso de genéricos com herança de classe para estender uma classe base. O melhor suporte a mixin do TypeScript é feito por meio do padrão de expressão de classe. Você pode ler mais sobre como esse padrão funciona em JavaScript aqui .

Para começar, precisaremos de uma classe que terá os mixins aplicados em cima de:*/

class Sprite {
  name = '';
  x = 0;
  y = 0;

  constructor(name: string) {
    this.name = name;
  }
}

//Então você precisa de um tipo e uma função de fábrica que retorne uma expressão de classe estendendo a classe base

type Constructor = new (...args: any[]) => {};

function Scale<TBase extends Constructor>(Base: TBase) {
  return class Scaling extends Base {
    _scale = 1;

    setScale(scale: number) {
      this._scale = scale;
    }

    get scale(): number {
      return this.scale;
    }
  };
}

//Com tudo isso configurado, você pode criar uma classe que representa a classe base com mixins aplicados:

const EightBitSprite = Scale(Sprite);

const flappySprite = new EightBitSprite('bird');
flappySprite.setScale(0.8);
console.log(flappySprite.scale);

/*Mixins restritos
No formulário acima, os mixins não têm conhecimento subjacente da classe, o que pode dificultar a criação do design desejado.

Para modelar isso, modificamos o tipo de construtor original para aceitar um argumento genérico.*/

//Isso permite a criação de classes que só funcionam com classes base restritas:

type Positionable = GConstructor<{ setPos: (x: number, y: number) => void }>;
type Spritable = GConstructor<Sprite>;
type Loggable = GConstructor<{ print: () => void }>;

//Então você pode criar mixins que só funcionam quando você tem uma base específica para construir:

function Jumpable<TBase extends Positionable>(Base: TBase) {
  return class Jumpable extends Base {
    jump() {
      this.setPos(0, 20);
    }
  };
}

/*Padrão alternativo
Versões anteriores deste documento recomendavam uma maneira de escrever mixins onde você criava as hierarquias de tempo de execução e de tipo separadamente e as mesclava no final:*/

class Jumpable2 {
  jump() {}
}

class Duckable {
  duck() {}
}

//including the base
class Sprite2 {
  x = 0;
  y = 0;
}

interface Sprite2 extends Jumpable2, Duckable {}

applyMixins(Sprite, [Jumpable2, Duckable]);

const player = new Sprite2();
player.jump();
console.log(player.x, player.y);

/*Restrições
O padrão mixin é suportado nativamente dentro do compilador TypeScript por análise de fluxo de código. Existem alguns casos em que você pode atingir as bordas do suporte nativo.

Decoradores e Mixins#4881
Você não pode usar decoradores para fornecer mixins por meio de análise de fluxo de código:*/

const Pausable = (target: typeof Player) => {
  return class Pausable extends target {
    shouldFreeze = false;
  };
};

@Pausable
class Player {
  x = 0;
  y = 0;
}

//a class player nao tem o decorador
const player2 = new Player();
//player.shouldFreeze nao funciona!

/*Mixins de propriedades estáticas#17829
Mais uma pegadinha do que uma restrição. O padrão de expressão de classe cria singletons, portanto, eles não podem ser mapeados no sistema de tipos para oferecer suporte a diferentes tipos de variáveis.

Você pode contornar isso usando funções para retornar suas classes que diferem com base em um genérico:*/

function base<T>() {
  class Base {
    static prop: T;
  }

  return Base;
}

function derived<T>() {
  class Derived extends base<T>() {
    static anotherProp: T;
  }

  return Derived;
}

class Spec extends derived<string>() {}

Spec.prop; //string
Spec.anotherProp; //string;
