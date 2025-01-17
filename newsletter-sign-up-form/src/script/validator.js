import Validator from 'validatorjs';
import en from 'validatorjs/src/lang/en';

Validator.setMessages('en', en);

function validateEmail(emailInput) {
  const validation = new Validator(
    { email: emailInput },
    { email: 'required|email' }
  );

  return validation.passes();
}

export default validateEmail;
