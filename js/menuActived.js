(function(){
	window.addEventListener('scroll', menuActived);
	const $menu = document.querySelector('.header__nav');
	const $links = $menu.querySelectorAll('li a');

	function menuActived() {
		let positions = [];
		for(let i = 0; i < $links.length; i++) {
			positions[i] = getPositionScroll($links[i])
		}
		let actualLink = getLastLink(positions);

		let activedLink = $menu.querySelector('.actived');
		if(activedLink) activedLink.classList.remove('actived');

		actualLink.classList.add('actived');
	}

	function getPositionScroll(link) {
		let target = document.querySelector(link.getAttribute('href'));
		let positionY = target.getBoundingClientRect().top;
		return positionY;
	}

	function getLastLink(positions) {
		let leng = positions.length;

		while(leng) {
			leng--;
			if(positions[leng] < innerHeight / 2) {
				return $links[leng];
			}
		}
		return $links[0];
	}

	menuActived();
})()