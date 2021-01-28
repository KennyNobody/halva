/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/alert/alert.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/alert/alert.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.addEventListener('load', function () {
  (function setCookieMessage() {
    var block = document.querySelector('.alert');

    if (block) {
      var btn = document.querySelector('.alert__btn');

      if (block && btn && localStorage.getItem('cookieFlag') !== 'true') {
        block.classList.add('alert--show');
      }

      btn.addEventListener('click', function () {
        block.classList.remove('alert--show');
        localStorage.setItem('cookieFlag', true);
      });
    }
  })();
});

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// (Все страницы) Скрипты из подвала
(function scrollToTop() {
  var btn = document.querySelector('.to-top__link');

  if (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
})();

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// (Все страницы) Скрипты шапки
(function toggleMenu() {
  var body = document.querySelector('.body');
  var menuBtn = document.querySelector('.header-bottom__btn');
  var menu = document.querySelector('.header-menu');
  var opened = false;
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

(function toggleHeader() {
  var body = document.querySelector('.body');
  var header = document.querySelector('.header--mob');
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

(function scrollEvent() {
  window.addEventListener('scroll', setPosition);

  function setPosition() {
    var article = document.querySelector('.single');

    if (article) {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = article.offsetHeight - document.documentElement.clientHeight;
      var scrolled = winScroll / height * 100;
      document.getElementById("scrollBar").style.width = scrolled + "%";
    }
  }
})();

/***/ }),

/***/ "./src/blocks/modules/modal/modal.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/modal/modal.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromodal */ "./node_modules/micromodal/dist/micromodal.es.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// (Все страницы) Модальное окно

micromodal__WEBPACK_IMPORTED_MODULE_0__["default"].init({
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
  var errorText = window.getSelection();
  var errorInput = document.querySelector('#error-input');

  if (errorText) {
    errorInput.value = errorText.toString();
  }

  micromodal__WEBPACK_IMPORTED_MODULE_0__["default"].show('modal-error');
}

function runOnKeys(func) {
  for (var _len = arguments.length, codes = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    codes[_key - 1] = arguments[_key];
  }

  var pressed = new Set();
  document.addEventListener('keyup', function (event) {
    pressed.add(event.code);

    var _iterator = _createForOfIteratorHelper(codes),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var code = _step.value;

        if (!pressed.has(code)) {
          return;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    pressed.clear();
    func();
  });
}

runOnKeys(openModal, "Enter", "ControlRight");
runOnKeys(openModal, "Enter", "ControlLeft");

/***/ }),

/***/ "./src/blocks/modules/search/search.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/search/search.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// (СВсе страницы) Скрипты поиска
(function toggleDesktopSearch() {
  var btn = document.querySelectorAll('.search__btn');
  var searchDesktop = document.querySelector('.search');
  var searchMobile = document.querySelector('.header-middle');
  var open = false;

  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', toggleField);
  }

  function toggleField() {
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

/***/ }),

/***/ "./src/blocks/modules/slider/slider.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/slider/slider.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var slick_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slick-slider */ "./node_modules/slick-slider/slick/slick.js");
/* harmony import */ var slick_slider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slick_slider__WEBPACK_IMPORTED_MODULE_0__);

document.addEventListener('DOMContentLoaded', function () {
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider',
    arrows: true,
    // centerMode: true,
    focusOnSelect: true,
    // nextArrow: '.slider-nav__btn--next',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/ui/ui.js":
/*!*************************************!*\
  !*** ./src/blocks/modules/ui/ui.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// (Все страницы) Поведение input в модальном окне
window.addEventListener('load', function () {
  (function toggleInputTitle() {
    var inputs = document.querySelectorAll('.input__field');

    if (inputs) {
      for (var i = 0; i < inputs.length; i++) {
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

  (function toggleTextareaTitle() {
    var inputs = document.querySelectorAll('.textarea__field');

    if (inputs) {
      for (var i = 0; i < inputs.length; i++) {
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
    var block = document.querySelector('.single__text');

    if (block) {
      var img = block.querySelectorAll('img');

      for (var i = 0; i < img.length; i++) {
        setWrap(img[i]);
      }
    }

    function setWrap(item) {
      var title = item.getAttribute('title');
      var alt = item.getAttribute('alt');
      var src = item.getAttribute('src');

      if (title && src) {
        var el = "\n\t\t\t\t<figure>\n\t\t\t\t<picture>\n\t\t\t\t<img src=\"".concat(src, "\" alt=\"").concat(alt, "\">\n\t\t\t\t</picture>\n\t\t\t\t<figcaption>").concat(title, "</figcaption>\n\t\t\t\t</figure>");
        item.insertAdjacentHTML('beforebegin', el);
        item.remove();
      }
    }
  })();
});

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/modal/modal */ "./src/blocks/modules/modal/modal.js");
/* harmony import */ var _modules_ui_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/ui/ui */ "./src/blocks/modules/ui/ui.js");
/* harmony import */ var _modules_ui_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_ui_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_alert_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/alert/alert */ "./src/blocks/modules/alert/alert.js");
/* harmony import */ var _modules_alert_alert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_alert_alert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_search_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/search/search */ "./src/blocks/modules/search/search.js");
/* harmony import */ var _modules_search_search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_search_search__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_slider_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/slider/slider */ "./src/blocks/modules/slider/slider.js");








/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map