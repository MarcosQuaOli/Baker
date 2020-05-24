$(document).ready(() => {
    $('.btn-menu').click(() => {
        $('.header__nav').slideToggle();
    });

    
    $('.navbar a').click((e) => {
        if(window.innerWidth < 768) {
            $('.header__nav').slideUp('fast');
        }
    })

    $(window).resize(() => {
        if(window.innerWidth > 768) {
            $('.header__nav').css('display', 'grid');            
        } else {
            $('.header__nav').css('display', 'none');
        }
    })

    $(window).scroll(() => {
		if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
			$('.header').addClass('scroll');
		} else {
			$('.header').removeClass('scroll');
        }
        
        menuActived();
    })
    

    // Scroll Smooth
    $('.header__nav a[href^="#"]').click(scrollToId);
    $('.btn-about').click((e) => {
        e.preventDefault();
        const to = $($('.btn-about').attr('href')).offset().top - 50;
        scrollToPosition(to);
    });

	function scrollToId(event) {
		event.preventDefault();
		const to = getScrollTop(event.target) - 50;
		scrollToPosition(to);
	}

	function getScrollTop(element) {
		const id = element.getAttribute('href');
		return document.querySelector(id).offsetTop;
	}

	function scrollToPosition(to) {
		window.scroll({
			top: to,
			behavior: "smooth",
		});
    }

    // Menu Active
    function menuActived() {
        let positions = [];
        let links = [];

        $.each($('.navbar a') , function(index, value) {
            links[index] = value;
            positions[index] = getScrollTop(value);     
        })
        let linkAtual = getLastLink(positions, links);
        
        $('.navbar .active').removeClass('active');
        $(linkAtual).addClass('active');
    }

    function getLastLink(position, link) {
        let leng = position.length;

        while(leng) {
            leng--;
            
            if(position[leng] < $(window).scrollTop() + ((window.innerHeight * 3) / 8)) {
                return link[leng];   
            }
        }
        return link[0];
    }

    menuActived();
})