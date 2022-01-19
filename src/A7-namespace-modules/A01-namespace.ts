//namespace criar qualquer coisa dentro de um escopo

/*eslint-disable @typescript-eslint/no-namespace*/
namespace MeuNameSpace {
  export const nameOfNamespace = 'lucas';

  export class PersonOfNameSpace {
    constructor(public name: string) {}
  }

  const PersonOfNameSpace = new PersonOfNamespace('lucas');
  console.log(PersonOfNameSpace);

  export namespace OutroNamespace {
    export const nameOfNamespace = 'nome de outro namespace';
  }
}

const pessoa = new MeuNameSpace.PersonOfNameSpace('Lucas');
console.log(pessoa);
