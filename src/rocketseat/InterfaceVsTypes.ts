// interface vs types? qual a diferença?
//o objetivo dos dois é o mesmo, nos ajudar a criar tipagem
// o type é recomandado por ser mais simples
// as interfaces sao muito uteis para quem desenvolvem libs, e gostam de POO



//diferença na definicao:
type UsuarioType = {
    id: number;
    name: string;
}

interface UsuarioInterface {
    id: number;
    name: string;
}


//digamos que eu queira criar um terceiro tipo, baseado na uniao de dois tipos fazemos assim:

type UsuarioPaymentType = {
    method: string;
}

// nesta linha estamos criando um terceiro tipo baseado nos outros dois tipos.
type TAccount = UsuarioType & UsuarioPaymentType;


//com interface é um pouco diferente:
interface UsuarioPaymentInterface  {
    method: string;
}


//aqui estamos criando extendendo as outras duas interfaces
interface IAccount extends UsuarioInterface, UsuarioPaymentInterface {

}


//no final, servem pra mesma coisa, o que vai mudar é a forma de fazer :)

