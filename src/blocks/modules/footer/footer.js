// (Все страницы) Скрипты из подвала

(function scrollToTop(){
	const btn = document.querySelector('.to-top__link');

	if (btn) {
		btn.addEventListener('click', function(e){
			e.preventDefault();
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		})
	}
})();