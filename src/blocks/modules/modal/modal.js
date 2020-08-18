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