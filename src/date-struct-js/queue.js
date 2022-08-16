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

  enqueue(item) {
    this.data.push(item);
    console.log(`item chegou na fila ${item}`);
  }

  dequeue() {
    const item = this.data.shift();
    console.log(`item saiu da fila ${item}`);
  }
}

const fila = new Queue();

fila.enqueue('Lucas');
fila.enqueue('Carla');
fila.enqueue('Max');

fila.dequeue();
fila.dequeue();
