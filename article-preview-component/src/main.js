const shareSection = document.querySelector('.card__share-section');
const footerSection = document.querySelector('.card__footer-section');

document.querySelector('.card__share-btn').addEventListener('click', () => {
  document.querySelector('.card__share-options').classList.toggle('active');
  document.querySelector('.card__share-btn').classList.toggle('active');
  document.querySelector('.card__share-img').classList.toggle('active');
  document.querySelector('.card__text-half').classList.toggle('pb-0');
});
