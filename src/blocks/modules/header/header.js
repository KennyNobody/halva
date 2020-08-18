// (Все страницы) Скрипты шапки

(function toggleMenu (){
	const body = document.querySelector('.body');
	const menuBtn = document.querySelector('.header-bottom__btn');
	const menu = document.querySelector('.header-menu');
	let opened = false;

	menuBtn.addEventListener('click', changeMenu);

	function changeMenu() {
		if (opened == false) {
			menu.classList.add('header-menu--opened');
			body.classList.add('body--blocked');
			menuBtn.classList.add('header-bottom__btn--opened');
			opened = true;
		} else {
			menu.classList.remove('header-menu--opened');
			menuBtn.classList.remove('header-bottom__btn--opened');
			body.classList.remove('body--blocked');
			opened = false;
		}
	}
})();

(function toggleHeader(){
	const body = document.querySelector('.body');
	const header = document.querySelector('.header--mob');

	window.addEventListener('scroll', changeHeader);

	function changeHeader() {
		if (window.pageYOffset > 47 && window.innerWidth < 1200) {
			header.classList.add('header--fixed');
			body.classList.add('body--fixed');
		} else {
			header.classList.remove('header--fixed');
			body.classList.remove('body--fixed');
		}
	}
})();

(function scrollEvent(){
	window.addEventListener('scroll', setPosition);

	function setPosition() {
		let article = document.querySelector('.single');

		if (article) {
			let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
			let height = article.offsetHeight - document.documentElement.clientHeight;
			let scrolled = (winScroll / height) * 100;
			document.getElementById("scrollBar").style.width = scrolled + "%";
		}
	}
})();
