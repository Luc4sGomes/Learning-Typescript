//Tipo void: quer dizer que uma função ou metodo nao retorna nada

function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const person = {
  name: 'lucas',
  lastName: 'gomes',

  //dizendo que a funcao nao retorna nada
  showName(): void {
    console.log(this.name + ' ' + this.lastName);
  },
};
noReturn('lucas', 'foo', 'bar');
person.showName();

export { person };
