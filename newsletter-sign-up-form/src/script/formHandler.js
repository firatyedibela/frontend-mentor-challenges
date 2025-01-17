import validateEmail from './validator';
import { shakeElement } from './utils';
import { renderError, renderSuccess } from './formRenderer';

export function handleSubmit(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;

  if (validateEmail(email)) {
    renderSuccess(email);
  } else {
    const errorMsg = document.querySelector('.error-msg');
    if (!errorMsg.classList.contains('hidden')) {
      shakeElement(errorMsg);
    }

    renderError();
  }
}
