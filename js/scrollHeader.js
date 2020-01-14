(function(){
	let $header = document.querySelector('#header');

	window.onscroll = function() {
		scrollDown()
	}

	function scrollDown() {
		if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
			$header.classList.add("headerDown");
		} else {
			$header.classList.remove("headerDown");
		}
	}
})()