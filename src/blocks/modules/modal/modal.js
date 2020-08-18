// (Все страницы) Модальное окно

import MicroModal from 'micromodal';

MicroModal.init({
	openTrigger: 'data-custom-open',
	closeTrigger: 'data-custom-close',
	openClass: 'is-open',
	disableScroll: true,
	disableFocus: false,
	awaitOpenAnimation: false,
	awaitCloseAnimation: false,
	debugMode: true
});

function openModal() {
	let errorText = window.getSelection();
	const errorInput = document.querySelector('#error-input');
	if (errorText) {
		errorInput.value = errorText.toString();
	}
	MicroModal.show('modal-error');
}

function runOnKeys(func, ...codes) {
	let pressed = new Set();

	document.addEventListener('keyup', function(event) {
		pressed.add(event.code);

		for (let code of codes) { 
			if (!pressed.has(code)) {
				return;
			}
		}

		pressed.clear();

		func();
	});
}

runOnKeys(openModal, "Enter", "ControlRight");