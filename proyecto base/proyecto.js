
  var nav = document.querySelector('header');

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 600) {
      nav.classList.add('bg-dark', 'shadow');
      
      
    } else {
      nav.classList.remove('bg-dark', 'shadow');
    }
  });

  new Vue({
    el: '#navbar',
    vuetify: new Vuetify(),
  })