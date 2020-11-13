(function() {
  var nav = document.querySelector('.nav');
  var menuOpen = document.querySelector('.menu-open');
  var menuClose = document.querySelector('.menu-close');

  function toggleMenuVisibility() {
    nav.classList.toggle('open')
  }
  
  menuOpen.addEventListener('click', toggleMenuVisibility)
  menuClose.addEventListener('click', toggleMenuVisibility)
})();
