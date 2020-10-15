// (Все страницы) Поведение input в модальном окне

window.addEventListener('load', function() {
	(function toggleInputTitle(){
		const inputs = document.querySelectorAll('.input__field');

		if (inputs) {
			for(let i = 0; i < inputs.length; i++) {
				inputs[i].addEventListener('focus', addActiveClass);
				inputs[i].addEventListener('focusout', removeActiveClass);
			}
		}

		function addActiveClass() {
			if (window.innerWidth < 1200) {
				this.parentNode.classList.add('input--focus');
			}	
		}

		function removeActiveClass() {
			if (window.innerWidth < 1200 && this.value == false) {
				this.parentNode.classList.remove('input--focus');
			}
		}
	})();

	(function toggleTextareaTitle(){
		const inputs = document.querySelectorAll('.textarea__field');

		if (inputs) {
			for(let i = 0; i < inputs.length; i++) {
				inputs[i].addEventListener('focus', addActiveClass);
				inputs[i].addEventListener('focusout', removeActiveClass);
			}
		}

		function addActiveClass() {
			if (window.innerWidth < 1200) {
				this.parentNode.classList.add('textarea--focus');
			}	
		}

		function removeActiveClass() {
			if (window.innerWidth < 1200 && this.value == false) {
				this.parentNode.classList.remove('textarea--focus');
			}
		}
	})();

	(function setFigure() {
		const block = document.querySelector('.single__text');

		if (block) {
			const img = block.querySelectorAll('img');

			for (let i = 0; i < img.length; i++) {
				setWrap(img[i]);
			}
		}

		function setWrap(item) {
			let title = item.getAttribute('title');
			let alt = item.getAttribute('alt');
			let src = item.getAttribute('src');

			if (title && src) {
				let el = `
				<figure>
				<picture>
				<img src="${src}" alt="${alt}">
				</picture>
				<figcaption>${title}</figcaption>
				</figure>`;

				item.insertAdjacentHTML('beforebegin', el);
				item.remove();
			}
			
		}
	})();
})

