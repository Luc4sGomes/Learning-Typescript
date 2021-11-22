import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement; //afirmando que os campos existem e sao desse tipo.
const userName = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  hideErrorMessages(form);
  checkForEmptyFields(userName, email, password, password2);
  checkEmail(email);
  checkEqualPasswords(password, password2);
  if (shouldSendForm(this)) console.log('form enviado');
});

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessage(input, 'Email invalido');
}

function checkEqualPasswords(
  password: HTMLInputElement,
  password2: HTMLInputElement,
) {
  if (password.value !== password2.value) {
    showErrorMessage(password, 'Senhas nao batem');
    showErrorMessage(password2, 'Senhas nao batem');
  }
}

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) {
      showErrorMessage(input, 'este Campo nao pode estar vazio');
    }
  });
}

function hideErrorMessages(form: HTMLFormElement): void {
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach((item) => {
    item.classList.remove(SHOW_ERROR_MESSAGES);
  });
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = document.querySelector('.form-fields') as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;

  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

function shouldSendForm(form: HTMLFormElement): boolean {
  let send = true;
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
    .forEach(() => (send = false));
  return send;
}
