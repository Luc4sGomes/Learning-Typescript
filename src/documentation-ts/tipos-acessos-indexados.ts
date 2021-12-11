//podemos usar um tipo de acesso indexado para pesquisar uma propriedade especifica em outro tipo

type Person = { age: number; name: string; alive: boolean };
type Age = Person['age'];
//type Age: number

//O tipo de indexação em si é um tipo, portant, podemos usar unioes keyof, ou outros tipos inteiramente

type I1 = Person['age' | 'name'];
//type I1 = string | number

type I2 = Person[keyof Person];
//type I2 = string | number | boolean

type AliveOrName = 'alive' | 'name';
type I3 = Person[AliveOrName];
//type I3 = string | boolean

// ========================= || ==================== //

//outro exemplo de indexação com um tipo arbitrario é usar number para obter o tipo dos elementos de uma matriz. podemos usar isso utilizando typeof para capturar convenientemente o tipo de elemento de um literal de matriz

const myArray = [
  { name: 'Alice', age: 16 },
  { name: 'Lucas', age: 20 },
  { name: 'Vic', age: 222 },
];

type Person2 = typeof myArray[number];
/*typeof Person2 = {
    name: string;
    age: number;
}*/

type Age2 = typeof myArray[number]['age'];
//type Age2 = number

//or
type Age3 = Person['age'];
//type Age2 = number;
