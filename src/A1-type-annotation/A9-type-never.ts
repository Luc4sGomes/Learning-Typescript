//type never: quer dizer que aquela funcao ou aquele metodo nunca retorna nada (laço infinito, ou um erro)

export function criaErro(): never {
  throw new Error('erro qualquer');
}

criaErro();
