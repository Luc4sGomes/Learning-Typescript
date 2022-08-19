//Queue = Fila
//Like a a store Queue
//linear
//The first in is the first out FIFO

//Importants methods
// enqueue(): adicionar um elemento ao final da fila
// dequeue(): remover o primeiro elemento a entrar na fila

//Outros metodos podem ser implementados como o size() que pega o tamanho da fila, e o front() pra pegar o primeiro elemento da fila, entre outros...

//Passo 1: modelagem

class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(pessoa) {
    this.data.push(pessoa);
    console.log(`essa pessoa entrou na fila ${pessoa}`);
  }

  dequeue() {
    const pessoa = this.data.shift();
    console.log(`essa pessoa saiu da fila ${pessoa}`);
  }
}

const fila = new Queue();

fila.enqueue('lucas');
fila.enqueue('carla');
fila.enqueue('joao');

fila.dequeue();
fila.dequeue();
