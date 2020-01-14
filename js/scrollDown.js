(function(){
  const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  const $target = document.querySelectorAll('[data-anima]');

  function animaScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    $target.forEach(function(element) {
      if((windowTop) > element.offsetTop) {
        element.classList.add('animationScroll');
      } else {
        element.classList.remove('animationScroll');
      }
    })
  }

  animaScroll();

  if($target.length) {
    window.addEventListener('scroll', debounce(function() {
      animaScroll();
    }, 200));
  }
})()