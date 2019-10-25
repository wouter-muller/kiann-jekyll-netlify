
var menu = {
  init: function() {
    var hamburger = document.querySelector('.js-menu-hamburger')
    var menu = document.querySelector('.js-menu')
    var close = document.querySelector('.js-menu-close')
    var backdrop = document.querySelector('.js-menu-backdrop')

    // When user clicks on hamburger
    hamburger.onclick = function() {
      menu.classList.add('--visible')
      backdrop.classList.add('--visible')
    }

    // When user clicks on close icon or clicks on backdrop
    close.onclick = function() {
      backdrop.classList.remove('--visible')
      menu.classList.remove('--visible')
    }

    backdrop.onclick = function() {
      backdrop.classList.remove('--visible')
      menu.classList.remove('--visible')
    }
  }
};


window.onload = function() {
    menu.init();
};
