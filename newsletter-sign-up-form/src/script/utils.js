export function shakeElement(element) {
  element.classList.add('shake');

  setTimeout(() => {
    element.classList.remove('shake');
  }, 200);
}
