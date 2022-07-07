export function renderHome () {
  const wrapper = document.querySelector('.content');
  wrapper.innerHTML = '';

  const header = document.createElement('h1');
  header.textContent = 'Welcome to $RESTAURANT_NAME$!';
  wrapper.appendChild(header);

  const description = document.createElement('p');
  description.textContent = "Here will be description about how good our " + 
  "$RESTAURANT_NAME$ is. It's the best place in city, i'm telling ya " +
  "Such place. Much wow. Gotta visit it for sure! Ja ja ja ja ja" +
  "I got to add some picture here for sure, yea.";
  wrapper.appendChild(description);

  const review_box = document.createElement('div');
  const review = document.createElement('p');
  review.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit," + 
  " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad" +
  " minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea" +
  " commodo consequat.";
  review_box.appendChild(review);
  const author = document.createElement('p');
  author.textContent = ' - Loremus Ipsumovich';
  review_box.appendChild(author);
  wrapper.appendChild(review_box);
};

export function renderMenu () {
  const wrapper = document.querySelector('.content');
  wrapper.innerHTML = '';
  const menu = document.createElement('p');
  menu.textContent = "Placeholder for menu, maybe even with pictures" +
  "1\n2\n3\n4\n5\n6\n7\n8\n";
  wrapper.appendChild(menu);
};
export function renderContacts () {
  const wrapper = document.querySelector('.content');
  wrapper.innerHTML = '';
  const info = document.createElement('p');
  info.textContent = "La La La will place adres and phone here and maybe even add da map!";
  wrapper.appendChild(info);
};