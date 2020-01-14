(function(){
	const $container = document.querySelector('.quote_container');
	const $itens = $container.querySelectorAll('.quote_slideshow');
	const $btnNext = $container.querySelector('.next');
	const $btnPrev = $container.querySelector('.prev');
	const $btnLink = document.querySelectorAll('.page-link');

	let currentSlide = 0;

	init()

	function init() {
		let _show = $container.querySelectorAll('.show_slide');

		Array.prototype.forEach.call(_show, function(sh){
			sh.classList.remove('show_slide');
		})

		$itens[0].classList.add('show_slide');
		$btnLink[0].classList.add('actived');

		addListeners();
		activedLink();

	}

	function activedLink(){
		$btnLink.forEach(item => {
			item.addEventListener('click', function(){				
				currentSlide = item.textContent;
				showSlide();			
			});
		})
	}

	function addListeners() {
		$btnNext.addEventListener('click', showNextSlide);
		$btnPrev.addEventListener('click', showPrevSlide);
	}

	function showNextSlide() {
		currentSlide++;
		showSlide();
	}

	function showPrevSlide() {
		currentSlide--;
		showSlide();
	}

	function showSlide() {
		let leng = $itens.length;
		let slide = currentSlide % leng;
		slide = Math.abs(slide);

		let active = document.querySelector('.slideshow__link .actived');
		if(active) active.classList.remove('actived');
		$btnLink[slide].classList.add('actived');
		
		$container.querySelector('.show_slide').classList.remove('show_slide');
		$itens[slide].classList.add('show_slide');
	}
})()