import {renderHome, renderMenu, renderContacts} from "./renderContent.js";
import './style.css';
import './bg.jpg';

function makeLayout () {
  const navbar = document.createElement('ul');
  navbar.classList.add('navbar');
  const home = document.createElement('li');
  home.classList.add('home');
  home.textContent = 'Home';
  navbar.appendChild(home)
  const menu = document.createElement('li');
  menu.classList.add('menu');
  menu.textContent = 'Menu';
  navbar.appendChild(menu)
  const contacts = document.createElement('li');
  contacts.classList.add('contacts');
  contacts.textContent = 'Contacts';
  navbar.appendChild(contacts);

  const content = document.createElement('div');
  content.classList.add('content');

  const footer = document.createElement('div');
  footer.classList.add('footer');
  footer.textContent = 'The Odin Project';
  
  const layout = [navbar, content, footer];
  layout.forEach(element => {
    document.body.appendChild(element);
  });
};

makeLayout();
renderHome();

const home = document.querySelector('.home');
home.addEventListener('click', () => renderHome());
const menu = document.querySelector('.menu');
menu.addEventListener('click', () => renderMenu());
const contacts = document.querySelector('.contacts');
contacts.addEventListener('click', () => renderContacts());