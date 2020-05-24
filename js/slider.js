$(document).ready(() => {
    let currentSlide = 0;

    $('.slider__link span:first').addClass('active'); 

    $('.btn-prev').click(() => {
        currentSlide--;
        showSlide();
    })

    $('.btn-next').click(() => {
        currentSlide++;      
        showSlide();
    })

    $('.slider__link span').click((e) => {      
        currentSlide = e.target.textContent;
        showSlide();
    })

    function showSlide() {
        if(currentSlide <= 0) {
            currentSlide = 0;
        } else if (currentSlide >= 3) {
            currentSlide = 3;
        }

        $('.slider__link .active').removeClass('active');
        $('.slider__link span').eq(currentSlide).addClass('active');

        slide = currentSlide * 100;
        $('.slider__container').css('left', '-'+slide+'%');
    }
})