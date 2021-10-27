//@Component
//@Selector
//@useState("foo");

//isso é um decorator, uma função como qualquer outra a unica diferença é que ela recebe alguns parametros por default baseado em qual tipo de decorator a gente ta trabalhando!!!

//Factory
function Logger(prefix: string) {
  return (target) => {
    console.log(`${prefix} - ${target}target`);
  };
}

@Logger('awesome')
class Foo {}

//Class decorator

//Property decorator anota uma propriedade da nossa classe para alguma coisa

function minLength(length: number) {
  return (target: any, key: string) => {
    console.log(target);
    console.log(key);
  };
}
class Movie {
  //validacao -- se for menor que 5 - error
  @minLength(5)
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

const movie = new Movie('interestelar');
console.log(movie);

//acessor decorator

//os decorators são declarações que a gente sempre tem iniciados com o @
//o decorator ele trabalha em cima dessas partes anotadas para que a gente consiga adicionar coisas novas

function setAPIVersion(apiVersion: string) {
  return (constructor) => {
    return class extends constructor {
      version = apiVersion;
    };
  };
}

//decorator - anotar a versao da API
@setAPIVersion('1.0.0')
class API {}

console.log(new API());

//Method decorator é um decorator que a gente passa em cima de um metodo

function delay(ms: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    console.log(target);
    console.log(key);
    console.log(descriptor);
  };
}

class Greeter {
  greeting: string;

  constructor(g: string) {
    this.greeting = g;
  }

  @delay(1000)
  greet() {
    console.log(`Hello ${this.greeting}`);
  }
}

const pessoinha = new Greeter('lucas');
pessoinha.greet();
