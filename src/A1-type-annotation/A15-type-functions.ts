//quero simular uma funcao de map para treinar minha logica, fazendo um exercicio para mapear strings

type MapStringsCallback = (item: string) => string;

export function mapStrings(
  array: string[],
  callbackfn: MapStringsCallback,
): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callbackfn(item));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, (item) => {
  return item.toUpperCase();
});

console.log(abcMapped);
console.log(abc);
