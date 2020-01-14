(function(){
	const $btnMenuItens = document.querySelectorAll('.header__nav a[href^="#"]');

	$btnMenuItens.forEach(item => {
		item.addEventListener('click', scrollToId);
	})

	function getScrollTop(element) {
		const id = element.getAttribute('href');
		return document.querySelector(id).offsetTop;
	}

	function scrollToId(event) {
		event.preventDefault();
		const to = getScrollTop(event.target) - 50;
		scrollToPosition(to);
	}

	function scrollToPosition(to) {
		window.scroll({
			top: to,
			behavior: "smooth",
		});
	}
})()


