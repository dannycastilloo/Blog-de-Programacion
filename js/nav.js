const nav = document.querySelector('nav');

function watchMenu(e) {
  if(nav.clientHeight < window.scrollY) {
    nav.style.top = `-${nav.clientHeight}px`;
  } else {
    nav.style.top = 0;
  }
}

window.addEventListener('scroll', watchMenu);