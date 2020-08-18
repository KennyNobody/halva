(function toggleDesktopSearch(){
	const btn = document.querySelectorAll('.search__btn');
	const searchDesktop = document.querySelector('.search');
	const searchMobile = document.querySelector('.header-middle');
	let open = false;

	for (let i = 0; i < btn.length; i++) {
		btn[i].addEventListener('click', toggleField);
	}

	function toggleField(){
		if (open == false) {
			searchDesktop.classList.add('search--open');
			searchMobile.classList.add('header-middle--open');
			open = true;
		} else {
			searchDesktop.classList.remove('search--open');
			searchMobile.classList.remove('header-middle--open');
			open = false;
		}
	}
})();