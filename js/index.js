(function() {

  const burger = document.querySelector('.nav-burger');
  const menu = document.querySelector('.nav-list');

  burger.onclick = function() {
    menu.classList.toggle('open');
  }

})()
