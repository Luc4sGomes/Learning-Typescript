//Type Alias vs Intefaces quando usar um e quando usar outro?

//Type Alias

//definição
type GameT = {
  title: string;
};

type DLCT = {
  extra: string;
};

//Interfaces
interface Game {
  title: string;
}

interface DLC {
  extra: string;
}

//intersection

type GameCollectionT = Game & DLCT;

//interface intersection

interface GameCollection extends Game, DLC {}

//implements

class CreateGameT implements GameCollection {
  title: string;
  extra: string;
}

class CreateGame implements GameCollection {
  title: string;
  extra: string;
}

//declarar função

type getSimilarsT = (title: string) => void;

//interface

interface getSimilars {
  (title: string): void;
}

// ======================== DIFERENÇAS ========================= //

//type alias permite declarar tipos primitivos
type IDT = string | number;

//com interface eu nao consigo fazer isso

//pode declarar tuplas normalmente
type TupleT = [number, string];

[1, 'foo'] as TupleT;

//eu nao consigo definir tuplas na inteface

//no type alias eu so consigo ter uma declaração por escopo
type JqueryT = { a: string };

//na interface pode ter multiplas declarações e ele une de mesmo nome

interface Jquery {
  a: string;
}

interface Jquery {
  b: string;
}

const $: Jquery = {
  a: 'foo',
  b: 'bar',
};

//vantagem da interface, quando tiver criando libs prefira inteface porque sao extensiveis
//quando estivermos trabalhando com interface
