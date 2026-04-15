function toggleMenu() {
  const menu = document.getElementById('side-menu');
  const btn = document.getElementById('menuBtn');
  const body = document.getElementById('body')
  menu.classList.toggle('active');
  btn.classList.toggle('open');
  body.classList.toggle('opacity')
}