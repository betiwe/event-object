const value = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list');
const links = Array.from(document.getElementsByClassName('dropdown__link'));

value.addEventListener('click', () => {
  list.classList.toggle('dropdown__list_active');
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', (event) => {
      value.textContent = links[i].textContent;
      list.classList.remove('dropdown__list_active');
      event.preventDefault();
    });
  }
});
