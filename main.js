const menuButton = document.querySelector('.toggle-button');
const menu = document.querySelector('.toggle-menu');
const imageButton = document.querySelector('.toggle-button img');
const menuItems = document.querySelectorAll('.toggle-menu li');

menuItems.forEach(menuItem => menuItem.addEventListener('click', toggleMenu));
menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
  menu.classList.toggle('hidden');
  menu.classList.toggle('active');
  
  menu.classList.contains('active') ?
    imageButton.setAttribute('src','images/icon-close.svg') :
    imageButton.setAttribute('src','images/icon-hamburger.svg');
}
