//O TypeScript fornece vários tipos de utilitários para facilitar transformações de tipos comuns. Esses utilitários estão disponíveis globalmente.

//partial<Type>

//Constrói um tipo com todas as propriedades Type definidas como opcionais. Este utilitário retornará um tipo que representa todos os subconjuntos de um determinado tipo.

//exemplo:

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: 'organize desk',
  description: 'clear clutter',
};

const todo2 = updateTodo(todo1, {
  description: 'throw out trash',
});

// =============================== //

//required<Type>

//Constrói um tipo que consiste em todas as propriedades de Typeset to required. O oposto de Partial.

interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };

const obj2: Required<Props> = { a: 5 };

// =========================== //

//readonly<Type>

//Constrói um tipo com todas as propriedades Typedefinidas como readonly, o que significa que as propriedades do tipo construído não podem ser reatribuídas.

interface Todo2 {
  description: string;
}

const todo: Readonly<Todo2> = {
  description: 'delete inactive users',
};

//todo.description = 'hello'; essa linha vai dar erro pois o tipo faz com que o parametro seja readonly

//Este utilitário é útil para representar expressões de atribuição que falharão em tempo de execução (ou seja, ao tentar reatribuir propriedades de um objeto congelado ).

// ========================== //

//record<Keys, Type>

//Constrói um tipo de objeto cujas chaves de propriedade são Keyse cujos valores de propriedade são Type. Este utilitário pode ser usado para mapear as propriedades de um tipo para outro tipo.

//exemplo:

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = 'miffy' | 'boris' | 'morded';

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: 'persian' },
  boris: { age: 5, breed: 'maine coon' },
  morded: { age: 16, breed: 'british shorthair' },
};

cats.boris;

// ====================== //

//Pick<Type, Keys>

//Constrói um tipo escolhendo o conjunto de propriedades Keys(literal de string ou união de literais de string) de Type.

interface Todoo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todoo, 'title' | 'completed'>;

const todoo: TodoPreview = {
  title: 'clean room',
  completed: false,
};

todoo;

// ==================== //
//Omit<Type, Keys>

//Constrói um tipo selecionando todas as propriedades Typee removendo Keys(literal de string ou união de literais de string).

//ex:

interface Todooo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPrevieww = Omit<Todooo, 'description'>;

const todooo: TodoPrevieww = {
  title: 'clean room',
  completed: false,
  createdAt: 11111111,
};

todooo;

// ======================== //

//Exclude<UnionType, ExcludedMembers>

//Constrói um tipo excluindo de UnionTypetodos os membros da união que podem ser atribuídos a ExcludedMembers.

type T0 = Exclude<'a' | 'b' | 'c', 'a'>;

type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;
