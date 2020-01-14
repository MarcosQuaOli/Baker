(function(){
	let $btnMenu = document.querySelector('.btnMenu');
	let $navHeader = document.querySelector('.header__nav');

	let menuOpen = false;
	
	const WIDTH = 768;

	window.addEventListener('resize', function(){
		if(window.innerWidth > WIDTH) {
			closeMenu();
		}
	});
	
	$btnMenu.addEventListener('click', function(){
		if(!menuOpen) {			
			openMenu();
		}
		else {
			closeMenu();			
		}
		menuOpen = !menuOpen;
	});

	function openMenu() {
		$navHeader.classList.add('show');
	}

	function closeMenu() {
		$navHeader.classList.remove('show');
	}	
})()


