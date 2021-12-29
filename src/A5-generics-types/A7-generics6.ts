//type predicate = predicado de tipos

export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function soma<Y>(...args: Y[]): number | null {
  const retorno = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0);

  return retorno;
}

console.log(soma(1, 2, 3));
console.log(soma('123'));
