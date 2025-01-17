import { handleSubmit } from './formHandler';
import succesIcon from '/assets/images/icon-success.svg';

export function renderForm() {
  document.body.innerHTML = `
    <article class="card">
        <div class="img-half">
          <picture>
            <source
              srcset="./assets/images/illustration-sign-up-desktop.svg"
              media="(min-width: 1024px)"
            />
            <img src="./assets/images/illustration-sign-up-mobile.svg" alt="" />
          </picture>
        </div>
        <div class="text-half">
          <div class="info">
            <h2 class="title">Stay updated!</h2>
            <span class="join-text">
              Join 60,000+ product managers receiving monthly updates on:
            </span>
            <ul class="features">
              <li>
                <img src="./assets/images/icon-list.svg" alt="" />
                <span>Product discovery and building what matters</span>
              </li>
              <li>
                <img src="./assets/images/icon-list.svg" alt="" />
                <span>Measuring to ensure updates are a success</span>
              </li>
              <li>
                <img src="./assets/images/icon-list.svg" alt="" />
                <span>And much more!</span>
              </li>
            </ul>
          </div>

          <form id="form" action="" novalidate>
            <p>
              <label for="email">Email address</label>
              <input id="email" type="email" placeholder="email@company.com" />
              <span class="error-msg hidden">Valid email required</span>
            </p>
            <button class="subscribe-btn btn" type="submit">
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
      </article>
  `;

  const form = document.getElementById('form');
  form.addEventListener('submit', handleSubmit);
}

export function renderSuccess(email) {
  const HTML = `
    <article class="success-card">
      <img
        class="success-icon"
        src="${succesIcon}"
        alt="An icon representing success"
      />
      <h2 class="title-success title">Thanks for subscribing!</h2>
      <p class="info-success-text info-text">
        A confirmation email has been sent to
        <strong>${email}</strong>. Please open it and click the
        button inside to confirm your subscription
      </p>
      <button class="btn dismiss-btn">Dismiss Message</button>
    </article>`;

  document.body.innerHTML = HTML;

  document.querySelector('.dismiss-btn').addEventListener('click', renderForm);
}

export function renderError() {
  const msg = document.querySelector('.error-msg');
  const inputField = document.querySelector('#email');

  msg.classList.remove('hidden');
  inputField.classList.add('error');
}
