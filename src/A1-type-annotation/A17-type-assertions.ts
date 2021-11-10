//recomendado
const body = document.querySelector('body');
if (body) {
  body.style.background = 'red';
}

//recomendado
//Type assertion
const body3 = document.querySelector('body') as HTMLElement;
body3.style.background = 'red';

//recomendado
//HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = '';

//nao recomendado
//Non-null assertion(!)
const body2 = document.querySelector('body')!;
body2.style.background = 'red';
