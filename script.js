function toggleMenu() {
  const menu = document.getElementById('side-menu');
  const btn = document.getElementById('menuBtn');
  const body = document.getElementById('body')
  menu.classList.toggle('active');
  btn.classList.toggle('open');
  body.classList.toggle('opacity')
}


document.addEventListener('click', function(event) {
  const menu = document.getElementById('side-menu');
  const btn = document.getElementById('menuBtn');
  const body = document.getElementById('body')
 
  const isMenuOpen = menu.classList.contains('active');
  

  const clickedOutside = !menu.contains(event.target) && !btn.contains(event.target);

  if (isMenuOpen && clickedOutside) {

    menu.classList.remove('active');
    btn.classList.remove('open');
    body.classList.toggle('opacity')
  }
});

