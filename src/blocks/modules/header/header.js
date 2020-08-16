(function toggleMenu (){
	const menuBtn = document.querySelector('.header-bottom__btn');
	const menu = document.querySelector('.header-menu');
	let opened = false;

	menuBtn.addEventListener('click', changeMenu);

	function changeMenu() {
		if (opened == false) {
			menu.classList.add('header-menu--opened');
			menuBtn.classList.add('header-bottom__btn--opened');
			opened = true;
		} else {
			menu.classList.remove('header-menu--opened');
			menuBtn.classList.remove('header-bottom__btn--opened');
			opened = false;
		}
	}

})();