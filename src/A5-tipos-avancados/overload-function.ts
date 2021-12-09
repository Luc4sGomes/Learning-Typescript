//baseado nos parametros que a funcao receber eu faço ela se comportar de maneira diferente
// é meio que um polimorfismo misturado com sobrecarga de metodos
type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...arg: number[]): number;
};

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0) return args.reduce((s, v) => s + v, 0) + x + (y || 0);
  return x + (y || 0);
};

console.log(adder(1)); //overload 1
console.log(adder(1, 3)); //overload 2
console.log(adder(1, 2, 3)); //overload 3
