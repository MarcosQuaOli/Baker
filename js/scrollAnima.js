$(document).ready(() => {
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

    function animaScroll() {
        const windowTop = $(window).scrollTop() + ((window.innerHeight * 3) / 3);
        
        $.each($('[data-anima]'), function() {
            if(windowTop > $(this).offset().top) {
                $(this).addClass('animationScroll');
            } else {
                $(this).removeClass('animationScroll');
            }
        })
    }

    animaScroll();

    if($('[data-anima]').length) {
        $(window).scroll(debounce(() => {
            animaScroll();
        }, 200))
    }
})