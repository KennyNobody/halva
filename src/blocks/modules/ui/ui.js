// (Все страницы) Поведение input в модальном окне

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