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
