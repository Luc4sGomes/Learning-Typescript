//dois operados lançados no ecma script 2020 que vao facilitar seu desenvolvimento

type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O titulo',
  texto: 'O texto',
  //data: new Date(),
};

console.log(documento.data?.toDateString() ?? 'não existe data 1'); //encadeamento opcional
console.log(undefined ?? 'ixi nao existe 2');
console.log(null ?? 'ixi nao existe 3');
console.log(false ?? 'ixi nao existe 3');
console.log(0 ?? 'ixi nao existe 3');
console.log('' ?? '6 ixi nao existe data');

//coalescencia nula checa se o valor que voce recebe no lado esquerdo do operador é um não valor (null ou undefined)
