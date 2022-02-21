//isso entao é importado via:

import helloWorld from './modules';
import { pi, phi, absolute } from './modules';
import { pi as piNumber } from './modules';
import RandomNumberGenerator, { pi as pi2 } from './modules';
import { StringValidator } from './modules';

import { Cat, Dog } from './modules';
helloWorld();

//sendo usados aqui
console.log(pi);
const absPhi = absolute(phi);

//Você pode pegar todos os objetos exportados e colocá-los em um único namespace usando * as name:

import * as math from './modules';

console.log(math.pi);
const positivePhi = math.absolute(math.phi);

//Você pode importar um arquivo e não incluir nenhuma variável em seu módulo atual via import "./file":

import './modules'; //nesse caso o import nao faz nada
console.log('3.14');

type Animals = Cat | Dog;

export const numberRegexp = /^[0-9]+$/;

export class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string): boolean {
    return s.length === 5 && numberRegexp.test(s);
  }
}
