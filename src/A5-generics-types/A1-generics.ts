// é como se voce adicionasse parametros dentro do tipo
//deixa seu codigo poderoso

type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

export function meuFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
  const novoArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      novoArray.push(array[i]);
    }
  }
  return novoArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayFiltradoOriginal = array.filter((value) => value < 5);
console.log(arrayFiltradoOriginal);

const arrayFiltrado = meuFilter(array, (value) => value < 5);
console.log(arrayFiltrado);
console.log(arrayFiltrado);

//quando eu nao sei qual coisa eu vou receber geralmente eu informo
