//tipo de inferencia

/*No TypeScript, há vários lugares onde a inferência de tipo é usada para fornecer informações de tipo quando não há anotação de tipo explícita. Por exemplo, neste código*/

const xx = 3;
//let xx: number;

/*O tipo da xvariável é inferido como number. Esse tipo de inferência ocorre ao inicializar variáveis ​​e membros, definir valores padrão de parâmetros e determinar tipos de retorno de função.

Na maioria dos casos, a inferência de tipos é direta. Nas seções a seguir, exploraremos algumas nuances de como os tipos são inferidos.*/

/*Melhor tipo comum
Quando uma inferência de tipo é feita a partir de várias expressões, os tipos dessas expressões são usados ​​para calcular um “melhor tipo comum”. Por exemplo,*/

const xxx = [0, 1, null];
//let x: (number | null)[];

/*Para inferir o tipo de xno exemplo acima, devemos considerar o tipo de cada elemento do array. Aqui temos duas opções para o tipo de array: numbere null. O melhor algoritmo de tipo comum considera cada tipo de candidato e escolhe o tipo que é compatível com todos os outros candidatos.

Como o melhor tipo comum deve ser escolhido entre os tipos candidatos fornecidos, há alguns casos em que os tipos compartilham uma estrutura comum, mas nenhum tipo é o supertipo de todos os tipos candidatos. Por exemplo:*/

const zoo = [new Rhino(), new Elephant(), new Snake()];
//let zoo:(Rhino | Elephant | Snake)[];

let zoo: Animal[] = [new Rhino(), new Elephant(), new Snake()];
//let zoo: Animal[]
