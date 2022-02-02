//creating a decorator:

function simpleDecorator() {
  console.log('---hi I am a decorator, do you want use me? :)');
}

@simpleDecorator //using the decorator on the class "useDecorator"
class useDecorator {}

//exists 5 types of decorators that you can use:

@classDecorator //class decorator
class Bird {
  @propertyDecorator //property decorator
  name: string;

  @methodDecorator //method decorator
  fly(@parameterDecorator metters: number) {}

  @acessorDecorator //acessorDecorator
  get egg() {}
}

//avaliation
//time: the decorators avaliable just one time when apply, example:

function f(C) {
  console.log('apply decorator');
}

@f
class A {} //the output is "apply decorator of the console.log"


//you can apply several decorators one only destination
//for example

function f2(key: string) {
    console.log("evaluate:", key)/
    return function() {
        console.log("call: ", key);
    };
}

class C {
    @f2("outer method")
    @f("Inner Method")
    method() {

    }
}


//definition class decorators

//type annotations:

type ClassDecorator2 = <TFuntion extends Function>
(target: TFunction) => TFunction | void;


//@Params:

//target: O construtor da classe.
//@Returns:
//Se o decorador de classe retornar um valor, ele substituirá a declaração de //classe.
//Assim, é adequado para estender uma classe existente com algumas propriedades //ou métodos.
//
//Por exemplo, podemos adicionar um toStringmétodo para todas as classes para //substituir o toStringmétodo original.

type Constructor = {new (...args: any[]): any};

function toString<T extends Constructor>(BaseClass: T) {
    return class extends BaseClass {
        toString() {
            return JSON.stringify(this);
        }
    };
}

@toString
class C3 {
    public foo = "foo";
    public num =  23;
}
console.log(new C3().toString());


//property decorators
//type annotations:

type propertyDecorator2 = (target: Object, propertyKey: string | symbol) => void;

//@Params:

//target: a função construtora da classe para um membro estático ou o protótipo //da classe para um membro de instância.
//propertyKey: O nome da propriedade.
//@Returns:
//O valor de retorno será ignorado.

//Exceto sendo usados ​​para coletar informações, os decoradores de propriedades também podem ser usados ​​para adicionar alguns métodos ou propriedades à classe. Por exemplo, podemos escrever um decorador para adicionar a capacidade de ouvir alterações em algumas propriedades.

function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function observable(target: any, key: string): any {
    //prop -> onPropChange

    const targetKey =  "on" + capitalizeFirstLetter(key) + "change";

    target [targetKey] =
        function(fn: (prev: any, next: any) => void) {
            let prev = this[key];
            Reflect.defineProperty(this, key, {
                set(next) {
                    fn(prev, next);
                    prev = next;
                }
            })
        };
}

class C4 {
    @observable
    foo = -1;

    @observable
    bar = "bar";
}

const c4 =  new C4();

c4.onFooChange((prev, next) => console.log(`prev: ${prev}, next: ${next}`));
c4.onBarChange((prev, next) => console.log(`prev: ${prev}, next: ${next}`));

c4.foo = 100;
c4.foo = 3.14;
c4.bar =  "bax";
c4.bar = "sing";
