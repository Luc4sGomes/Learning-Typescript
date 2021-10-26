//type utilities sao os utilitarios para se trabalhar com os tipos

type Todo = {
  title: string;
  descriptiom: string;
  completed: boolean;
};

const todo: Readonly<Todo> = {
  title: 'ver dark de novo',
  descriptiom: 'relembrar os detalhes',
  completed: false,
};

console.log(todo);

//todo.completed = true;
console.log(todo);

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo2: Todo = updateTodo(todo, { completed: true });

console.log(todo2);

//pick

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo3: TodoPreview = {
  title: 'fechar ghost of tsushima',
  completed: false,
};

//omit

type TodoPreview2 = Omit<Todo, 'description'>;

const todo4: TodoPreview = {
  title: 'fechar ghost of tsushima',
  completed: false,
};
