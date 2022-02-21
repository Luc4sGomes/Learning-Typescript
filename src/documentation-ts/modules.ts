//os modulos sempre sao executados dentro do seu proprio escopo
//para usar uma variavel, classe interface de um modulo, voce precisa importa-la usando um dos formularios de importação

import { numberRegexp } from './modules-import';

export {}; // um modulo que nao export nada

//Modulos em typescript
//Há três coisas principais a serem consideradas ao escrever código baseado em módulo no TypeScript:

//Sintaxe : Qual sintaxe eu quero usar para importar e exportar coisas?
//Resolução do módulo : Qual é a relação entre os nomes dos módulos (ou caminhos) e os arquivos no disco?
//Destino de saída do módulo : como deve ser o meu módulo JavaScript emitido?

//Sintaxe do Módulo ES
//Um arquivo pode declarar uma exportação principal via export default:

export default function helloWorld() {
  //esse modulo esta sendo chamado no file modules-import.ts
  console.log('Hello, world!');
}

//Além da exportação padrão, você pode ter mais de uma exportação de variáveis ​​e funções através da exportomissão de default:

export const pi = 3.14;
export const squareTwo = 1.41;
export const phi = 1.61;

export class RandomNumberGenerator {}

export function absolute(num: number) {
  if (num < 0) return num * -1;
  return num;
}
//Estes podem ser usados ​​em outro arquivo através da import sintaxe:

//Sintaxe de importação adicional
//Uma importação pode ser renomeada usando um formato como import {old as new}:

//Você pode misturar e combinar a sintaxe acima em um único import:

//Sintaxe do módulo ES específico do TypeScript
//Os tipos podem ser exportados e importados usando a mesma sintaxe dos valores JavaScript:

export type Cat = { breed: string; yearOfBirt: number };

export interface Dog {
  breeds: string[];
  yearOfBirth: number;
}
//importando isso no outro arquivo

//exportar
//exportando uma declaração
/*Qualquer declaração (como uma variável, função, classe, alias de tipo ou interface) pode ser exportada adicionando a palavra- exportchave.*/

export interface StringValidator {
  //importando no outro arquivo
  isAcceptable(s: string): boolean;
}

/*Exportar extratos
As instruções de exportação são úteis quando as exportações precisam ser renomeadas para os consumidores, portanto, o exemplo acima pode ser escrito como:*/

class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}

export { ZipCodeValidator };
export { ZipCodeValidator as mainValidator };
