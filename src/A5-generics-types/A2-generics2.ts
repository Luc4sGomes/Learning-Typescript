type meuTipo = number;

const arrayNumbers: Array<number> = [1, 2, 3, 4, 56];

console.log(arrayNumbers);

async function promiseAsync() {
  return 1;
}

function minhaPromisse(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

promiseAsync().then((resultado) => console.log(resultado + 1));
promiseAsync().then((resultado) => console.log(resultado + 1));
