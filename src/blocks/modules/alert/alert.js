window.addEventListener('load', function() {
	(function setCookieMessage() {
		const block = document.querySelector('.alert');

		if (block) {
			const btn = document. querySelector('.alert__btn');

			if (block && btn && localStorage.getItem('cookieFlag') !== 'true') {
				block.classList.add('alert--show');
			}

			btn.addEventListener('click', function() {
				block.classList.remove('alert--show');
				localStorage.setItem('cookieFlag', true);
			})	
		}
		
	})();
})