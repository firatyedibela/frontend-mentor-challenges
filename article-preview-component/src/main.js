const shareSection = document.querySelector('.card__share-section');
const footerSection = document.querySelector('.card__footer-section');

document.querySelectorAll('.card__share-btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (window.screen.width < 1024) {
      shareSection.classList.toggle('hidden');
      footerSection.classList.toggle('non-visible');
    } else {
      e.currentTarget.classList.toggle('card__share-btn--active');
      e.currentTarget
        .querySelector('.card__share-img')
        .classList.toggle('card__share-img--active');

      document
        .querySelector('.card__share-icons-desktop')
        .classList.toggle('hidden');
    }
  });
});
