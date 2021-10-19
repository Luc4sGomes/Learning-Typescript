/* eslint-disable*/

//TIPOS PRIMITIVOS NO TYPESCRIPT

let nome: string = 'lucas'; //Tipo string pode ser qualquer string 'foo' "foo" `foo`
let idade: number = 18; // Tipo number qualquer numero 18, 1.8, hexadecimal, binario
let adulto: boolean = true; // Tipo boolean true or false

//Tipo enum server para criar um conjunto de chaves e valores
enum Colors {
    white = '#fff',
    black = '#000'
}

//Tipo any -> qualquer coisa, ou seja é uma contradição
let qualquerCoisa: any
qualquerCoisa = 'aqui poderia ser qualquer coisa -> true, number, string etc...';

//Tipo void server para funcoes quando voce nao retorna nada nelas
function printOi(): void {
    console.log('Oi');
}

//Tiponull | undefined


//Tipo never nunca vai retornar nada never = void? será?
function error(): never {
    throw new Error('erro lançado');
}

//Tipo arrays (types[]) podemos inferir tipos de arrays de 2 formas 1, 2:

//1
let arrayNumeros1: string[];
arrayNumeros1 = ['foo','bar'];

//2
let arrayDeNumeros: Array<number> = [1, 2, 3, 5, 6];
let arrayDeStrings: Array<string> = ['a', 'b'];


//objetos
let pessoa: object;
pessoa = {
    name: 'lucas',
    age: 20,
}

//funcoes
function soma(x: number,y: number) {
    return x + y;
}

const result = soma(2,2);
