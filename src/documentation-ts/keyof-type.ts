//o keyof operator pega um tipo de objeto e produz uma string ou união literal numérica de suas chaves. O seguinte tipo P abaixo é do mesmo tipo que "x" | "y"

type Point = { x: number; y: number };
type P = keyof Point;

//se o tipo tiver uma assinatura de indice string ou number, keyof retornará esses tipos em seu lugar:

type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;
//type A = number

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;
//type M = string | number;

//obs: note que neste ultimo exemplo M é string | number, isso ocorre pois as chaves do objeto javascript são sempre coagidas para uma string, portanto, obj[0] é sempre igual a obj["0"]

// keyof os tipos tornam-se especialmente úteis quando combinados com os tipos mapeados.
