
  var nav = document.querySelector('header');

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 600) {
      nav.classList.add( 'pt-4', 'shadow');
      nav.style.background ='orange';
      
    } else {
      nav.classList.remove('shadow');
      nav.style.background ='none';
    }
  });

