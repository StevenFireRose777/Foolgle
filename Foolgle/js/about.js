const nav = document.querySelector('.nav');
const close = document.querySelector('.menu-close');
const open = document.getElementById('burger-bar');
const links = document.querySelectorAll('.link');

function menuTog(e){
  if (!nav) return; // if navigation bar doesn't work
  nav.classList.toggle('active');
}

if (open) open.addEventListener('click', menuTog);
if (close) close.addEventListener('click', menuTog);
if (links && links.length) {
  links.forEach(l => l.addEventListener('click', () => nav && nav.classList.remove('active')));
}
