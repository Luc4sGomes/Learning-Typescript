//o que é um generic? quando a gente esta escrevendo um codigo na maioria das vezes a gente pensa na reutilização dessa parte do meu codigo

function useState<S extends number | string = string>() {
  //nessa linha estamos definindo nosso generic que é "S" e quais os tipos possiveis dele e que o tipo padrao é string (string = string)
  let state: S;

  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState;
  }

  return { getState, setState };
}

const newState = useState();

newState.setState('foo'); //aqui ele passou
console.log(newState.getState());

//newState.setState(2); //e aqui ele deu erro
console.log(newState.getState());

//entao resumindo, o generic define tipos para suas funcoes, quando o seu codigo verificar qual o primeiro tipo que chega nela, ele toma esse como padrao e nao permite o resto, como no exemplo acima, como string esta definido como padrao na linha 3, ele recusa a linha 23 e so aceita a linha 20;
