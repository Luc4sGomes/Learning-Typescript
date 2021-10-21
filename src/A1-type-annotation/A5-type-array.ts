//Tipo array: nos temos duas maneiras de criar arrays
//Array<Type>
//ou entao
//Type[]

//1)
export function multplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, value) => ac * value, 1);
}
const resultado = multplicaArgs(1, 2, 4);
console.log(resultado);

//2)
export function concatenaStrings(...args: string[]): string {
  return args.reduce((ac, value) => ac + value);
}

function soma(x: number[]): number {
  return x.length;
}
