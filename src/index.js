import './style.css';
import './bg.jpg';

function makeLayout () {
  const navbar = document.createElement('ul');
  navbar.classList.add('navbar');
  const home = document.createElement('li');
  home.textContent = 'Home';
  navbar.appendChild(home)
  const menu = document.createElement('li');
  menu.textContent = 'Menu';
  navbar.appendChild(menu)
  const contacts = document.createElement('li');
  contacts.textContent = 'Contacts';
  navbar.appendChild(contacts);

  const content = document.createElement('div');
  content.classList.add('content');

  const footer = document.createElement('div');
  footer.classList.add('footer');
  footer.textContent = 'The Odin Project';
  
  return [navbar, content, footer];
};

const layout = makeLayout();
layout.forEach(element => {
  document.body.appendChild(element);
});