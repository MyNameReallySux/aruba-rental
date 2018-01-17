/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		2: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "js/" + ({"0":"vendor"}[chunkId]||chunkId) + ".chunk.js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 329);
/******/ })
/************************************************************************/
/******/ ({

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ConsoleUtils = __webpack_require__(331);

Object.defineProperty(exports, 'ConsoleUtils', {
    enumerable: true,
    get: function get() {
        return _ConsoleUtils.ConsoleUtils;
    }
});
Object.defineProperty(exports, 'print', {
    enumerable: true,
    get: function get() {
        return _ConsoleUtils.print;
    }
});
Object.defineProperty(exports, 'info', {
    enumerable: true,
    get: function get() {
        return _ConsoleUtils.info;
    }
});
Object.defineProperty(exports, 'debug', {
    enumerable: true,
    get: function get() {
        return _ConsoleUtils.debug;
    }
});
Object.defineProperty(exports, 'warn', {
    enumerable: true,
    get: function get() {
        return _ConsoleUtils.warn;
    }
});
Object.defineProperty(exports, 'error', {
    enumerable: true,
    get: function get() {
        return _ConsoleUtils.error;
    }
});
Object.defineProperty(exports, 'supressConsole', {
    enumerable: true,
    get: function get() {
        return _ConsoleUtils.supressConsole;
    }
});
Object.defineProperty(exports, 'restoreConsole', {
    enumerable: true,
    get: function get() {
        return _ConsoleUtils.restoreConsole;
    }
});

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(330);

var _consoleUtils = __webpack_require__(125);

var _functions = __webpack_require__(345);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var $ = void 0,
    Parallax = void 0,
    Luminous = void 0;


var main = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _ref2, Scroller, _ref3, AnimationFactory, app;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 350));

                    case 2:
                        $ = _context.sent;
                        _context.next = 5;
                        return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 351));

                    case 5:
                        _context.next = 7;
                        return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 352));

                    case 7:
                        Parallax = _context.sent;
                        _context.next = 10;
                        return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 353));

                    case 10:
                        Luminous = _context.sent;
                        _context.next = 13;
                        return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 354));

                    case 13:
                        _ref2 = _context.sent;
                        Scroller = _ref2.Scroller;
                        _context.next = 17;
                        return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 355));

                    case 17:
                        _ref3 = _context.sent;
                        AnimationFactory = _ref3.AnimationFactory;
                        app = new _app.App({
                            defer: true,
                            jquery: $,
                            imports: {
                                Parallax: Parallax, Luminous: Luminous, Scroller: Scroller, AnimationFactory: AnimationFactory
                            }
                        });


                        app.onReady = function (imports) {
                            (0, _functions.loadImages)(imports);
                            (0, _functions.loadSVGs)(imports);
                            (0, _functions.handleOwlCarousel)(imports);
                            (0, _functions.handleScroller)(imports);
                            (0, _functions.handleStickyElements)(imports);
                            (0, _functions.handleParallax)(imports);
                            (0, _functions.handleLightbox)(imports);
                        };

                        app.onInstantaneousScroll = function (imports) {
                            (0, _functions.handleStickyElements)(imports);
                        };

                        app.init();

                    case 23:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function main() {
        return _ref.apply(this, arguments);
    };
}();

main();

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = void 0;
var $document = void 0,
    $window = void 0;
var resizeTimeout = void 0,
    scrollTimeout = void 0;

var App = exports.App = function App() {
	var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	_classCallCheck(this, App);

	_initialiseProps.call(this);

	this.imports = _extends({}, options.imports, { $: options.jquery });

	var $ = options.jquery;

	$document = $(document);
	$window = $(window);

	this.$document = $document;
	this.$window = $window;

	this.options = options;

	if (!options.defer) {
		this.init();
	}
};

var _initialiseProps = function _initialiseProps() {
	var _this = this;

	this.init = function () {
		var modules = _this.imports;
		var options = _this.options;
		_this.$document.ready(function () {
			_this.onReady(modules);
		});

		_this._resizeTimeout;
		_this.$window.resize(function () {
			_this.onInstantaneousResize(modules);

			clearTimeout(_this._resizeTimeout);
			_this._resizeTimeout = setTimeout(function () {
				_this.onResize(modules);
			}, options.resizeDelay || 50);
		});

		_this._scrollTimeout;
		_this.$window.scroll(function () {
			_this.onInstantaneousScroll(modules);

			clearTimeout(_this._scrollTimeout);
			_this._scrollTimeout = setTimeout(function () {
				_this.onScroll(modules);
			}, options.scrollDelay || 50);
		});
	};

	this.onReady = function () {};

	this.onResize = function () {};

	this.onScroll = function () {};

	this.onInstantaneousResize = function () {};

	this.onInstantaneousScroll = function () {};
};

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.restoreConsole = exports.supressConsole = exports.error = exports.warn = exports.debug = exports.info = exports.print = exports.ConsoleUtils = undefined;

var _safe = __webpack_require__(332);

var _safe2 = _interopRequireDefault(_safe);

var _typeUtils = __webpack_require__(343);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LEVEL_MASKS = {
    info: 0x1,
    debug: 0x2,
    warn: 0x4,
    error: 0x8
};

_safe2.default.setTheme({
    info: 'cyan',
    debug: 'green',
    error: 'red',
    warn: 'yellow'
});

var ConsoleUtils = exports.ConsoleUtils = function ConsoleUtils() {
    _classCallCheck(this, ConsoleUtils);
};

ConsoleUtils.CONSOLE_LOG = console.log;
ConsoleUtils.CONSOLE_WARN = console.warn;
ConsoleUtils.CONSOLE_ERROR = console.error;
ConsoleUtils.LEVELS = {
    none: 0,
    minimal: LEVEL_MASKS.info,
    verbose: LEVEL_MASKS.info && LEVEL_MASKS.warn && LEVEL_MASKS.error,
    all: LEVEL_MASKS.info && LEVEL_MASKS.debug && LEVEL_MASKS.warn && LEVEL_MASKS.error,

    debug: LEVEL_MASKS.info && LEVEL_MASKS.debug,
    debug_only: LEVEL_MASKS.debug,
    debug_warn: LEVEL_MASKS.debug && LEVEL_MASKS.warn,
    debug_error: LEVEL_MASKS.debug && LEVEL_MASKS.warn && LEVEL_MASKS.error,

    warn_only: LEVEL_MASKS.warn,
    error_only: LEVEL_MASKS.error,
    all_errors: LEVEL_MASKS.warn && LEVEL_MASKS.error

};
ConsoleUtils.level = ConsoleUtils.LEVELS.all;
ConsoleUtils.print = console.log;

ConsoleUtils.info = function () {
    console.info(_safe2.default.info.apply(_safe2.default, arguments));
};

ConsoleUtils.warn = function () {
    console.warn(_safe2.default.warn.apply(_safe2.default, arguments));
};

ConsoleUtils.error = function () {
    console.error(_safe2.default.error.apply(_safe2.default, arguments));
};

ConsoleUtils.debug = function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    if (ConsoleUtils.level && LEVEL_MASKS.debug === LEVEL_MASKS.debug) {
        var _console;

        args.map(function (arg, i) {
            var result = (0, _typeUtils.isObject)(arg) ? '\n' + JSON.stringify(arg, null, 4) : arg;

            args[i] = result;
        });
        return (_console = console).log.apply(_console, args);
    } else {
        return function () {};
    }
};

ConsoleUtils.supressConsole = function () {
    console.log = function () {};
    console.warn = function () {};
    console.error = function () {};
};

ConsoleUtils.restoreConsole = function () {
    console.log = ConsoleUtils.CONSOLE_LOG;
    console.warn = ConsoleUtils.CONSOLE_WARN;
    console.error = ConsoleUtils.CONSOLE_ERROR;
};

var print = ConsoleUtils.print;
var info = ConsoleUtils.info;
var debug = ConsoleUtils.debug;
var warn = ConsoleUtils.warn;
var error = ConsoleUtils.error;

var supressConsole = ConsoleUtils.supressConsole;
var restoreConsole = ConsoleUtils.restoreConsole;

exports.print = print;
exports.info = info;
exports.debug = debug;
exports.warn = warn;
exports.error = error;
exports.supressConsole = supressConsole;
exports.restoreConsole = restoreConsole;

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

//
// Remark: Requiring this file will use the "safe" colors API which will not touch String.prototype
//
//   var colors = require('colors/safe);
//   colors.red("foo")
//
//
var colors = __webpack_require__(49);
module['exports'] = colors;

/***/ }),

/***/ 333:
/***/ (function(module, exports) {

/*
The MIT License (MIT)

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var styles = {};
module['exports'] = styles;

var codes = {
  reset: [0, 0],

  bold: [1, 22],
  dim: [2, 22],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  hidden: [8, 28],
  strikethrough: [9, 29],

  black: [30, 39],
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  magenta: [35, 39],
  cyan: [36, 39],
  white: [37, 39],
  gray: [90, 39],
  grey: [90, 39],

  bgBlack: [40, 49],
  bgRed: [41, 49],
  bgGreen: [42, 49],
  bgYellow: [43, 49],
  bgBlue: [44, 49],
  bgMagenta: [45, 49],
  bgCyan: [46, 49],
  bgWhite: [47, 49],

  // legacy styles for colors pre v1.0.0
  blackBG: [40, 49],
  redBG: [41, 49],
  greenBG: [42, 49],
  yellowBG: [43, 49],
  blueBG: [44, 49],
  magentaBG: [45, 49],
  cyanBG: [46, 49],
  whiteBG: [47, 49]

};

Object.keys(codes).forEach(function (key) {
  var val = codes[key];
  var style = styles[key] = [];
  style.open = '\u001b[' + val[0] + 'm';
  style.close = '\u001b[' + val[1] + 'm';
});

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/*
The MIT License (MIT)

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var argv = process.argv;

module.exports = (function () {
  if (argv.indexOf('--no-color') !== -1 ||
    argv.indexOf('--color=false') !== -1) {
    return false;
  }

  if (argv.indexOf('--color') !== -1 ||
    argv.indexOf('--color=true') !== -1 ||
    argv.indexOf('--color=always') !== -1) {
    return true;
  }

  if (process.stdout && !process.stdout.isTTY) {
    return false;
  }

  if (process.platform === 'win32') {
    return true;
  }

  if ('COLORTERM' in process.env) {
    return true;
  }

  if (process.env.TERM === 'dumb') {
    return false;
  }

  if (/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process.env.TERM)) {
    return true;
  }

  return false;
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(335)))

/***/ }),

/***/ 335:
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ 336:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 336;

/***/ }),

/***/ 337:
/***/ (function(module, exports) {

module['exports'] = function runTheTrap (text, options) {
  var result = "";
  text = text || "Run the trap, drop the bass";
  text = text.split('');
  var trap = {
    a: ["\u0040", "\u0104", "\u023a", "\u0245", "\u0394", "\u039b", "\u0414"],
    b: ["\u00df", "\u0181", "\u0243", "\u026e", "\u03b2", "\u0e3f"],
    c: ["\u00a9", "\u023b", "\u03fe"],
    d: ["\u00d0", "\u018a", "\u0500" , "\u0501" ,"\u0502", "\u0503"],
    e: ["\u00cb", "\u0115", "\u018e", "\u0258", "\u03a3", "\u03be", "\u04bc", "\u0a6c"],
    f: ["\u04fa"],
    g: ["\u0262"],
    h: ["\u0126", "\u0195", "\u04a2", "\u04ba", "\u04c7", "\u050a"],
    i: ["\u0f0f"],
    j: ["\u0134"],
    k: ["\u0138", "\u04a0", "\u04c3", "\u051e"],
    l: ["\u0139"],
    m: ["\u028d", "\u04cd", "\u04ce", "\u0520", "\u0521", "\u0d69"],
    n: ["\u00d1", "\u014b", "\u019d", "\u0376", "\u03a0", "\u048a"],
    o: ["\u00d8", "\u00f5", "\u00f8", "\u01fe", "\u0298", "\u047a", "\u05dd", "\u06dd", "\u0e4f"],
    p: ["\u01f7", "\u048e"],
    q: ["\u09cd"],
    r: ["\u00ae", "\u01a6", "\u0210", "\u024c", "\u0280", "\u042f"],
    s: ["\u00a7", "\u03de", "\u03df", "\u03e8"],
    t: ["\u0141", "\u0166", "\u0373"],
    u: ["\u01b1", "\u054d"],
    v: ["\u05d8"],
    w: ["\u0428", "\u0460", "\u047c", "\u0d70"],
    x: ["\u04b2", "\u04fe", "\u04fc", "\u04fd"],
    y: ["\u00a5", "\u04b0", "\u04cb"],
    z: ["\u01b5", "\u0240"]
  }
  text.forEach(function(c){
    c = c.toLowerCase();
    var chars = trap[c] || [" "];
    var rand = Math.floor(Math.random() * chars.length);
    if (typeof trap[c] !== "undefined") {
      result += trap[c][rand];
    } else {
      result += c;
    }
  });
  return result;

}


/***/ }),

/***/ 338:
/***/ (function(module, exports) {

// please no
module['exports'] = function zalgo(text, options) {
  text = text || "   he is here   ";
  var soul = {
    "up" : [
      '̍', '̎', '̄', '̅',
      '̿', '̑', '̆', '̐',
      '͒', '͗', '͑', '̇',
      '̈', '̊', '͂', '̓',
      '̈', '͊', '͋', '͌',
      '̃', '̂', '̌', '͐',
      '̀', '́', '̋', '̏',
      '̒', '̓', '̔', '̽',
      '̉', 'ͣ', 'ͤ', 'ͥ',
      'ͦ', 'ͧ', 'ͨ', 'ͩ',
      'ͪ', 'ͫ', 'ͬ', 'ͭ',
      'ͮ', 'ͯ', '̾', '͛',
      '͆', '̚'
    ],
    "down" : [
      '̖', '̗', '̘', '̙',
      '̜', '̝', '̞', '̟',
      '̠', '̤', '̥', '̦',
      '̩', '̪', '̫', '̬',
      '̭', '̮', '̯', '̰',
      '̱', '̲', '̳', '̹',
      '̺', '̻', '̼', 'ͅ',
      '͇', '͈', '͉', '͍',
      '͎', '͓', '͔', '͕',
      '͖', '͙', '͚', '̣'
    ],
    "mid" : [
      '̕', '̛', '̀', '́',
      '͘', '̡', '̢', '̧',
      '̨', '̴', '̵', '̶',
      '͜', '͝', '͞',
      '͟', '͠', '͢', '̸',
      '̷', '͡', ' ҉'
    ]
  },
  all = [].concat(soul.up, soul.down, soul.mid),
  zalgo = {};

  function randomNumber(range) {
    var r = Math.floor(Math.random() * range);
    return r;
  }

  function is_char(character) {
    var bool = false;
    all.filter(function (i) {
      bool = (i === character);
    });
    return bool;
  }
  

  function heComes(text, options) {
    var result = '', counts, l;
    options = options || {};
    options["up"] =   typeof options["up"]   !== 'undefined' ? options["up"]   : true;
    options["mid"] =  typeof options["mid"]  !== 'undefined' ? options["mid"]  : true;
    options["down"] = typeof options["down"] !== 'undefined' ? options["down"] : true;
    options["size"] = typeof options["size"] !== 'undefined' ? options["size"] : "maxi";
    text = text.split('');
    for (l in text) {
      if (is_char(l)) {
        continue;
      }
      result = result + text[l];
      counts = {"up" : 0, "down" : 0, "mid" : 0};
      switch (options.size) {
      case 'mini':
        counts.up = randomNumber(8);
        counts.mid = randomNumber(2);
        counts.down = randomNumber(8);
        break;
      case 'maxi':
        counts.up = randomNumber(16) + 3;
        counts.mid = randomNumber(4) + 1;
        counts.down = randomNumber(64) + 3;
        break;
      default:
        counts.up = randomNumber(8) + 1;
        counts.mid = randomNumber(6) / 2;
        counts.down = randomNumber(8) + 1;
        break;
      }

      var arr = ["up", "mid", "down"];
      for (var d in arr) {
        var index = arr[d];
        for (var i = 0 ; i <= counts[index]; i++) {
          if (options[index]) {
            result = result + soul[index][randomNumber(soul[index].length)];
          }
        }
      }
    }
    return result;
  }
  // don't summon him
  return heComes(text, options);
}


/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

var colors = __webpack_require__(49);

module['exports'] = (function() {
  return function (letter, i, exploded) {
    if(letter === " ") return letter;
    switch(i%3) {
      case 0: return colors.red(letter);
      case 1: return colors.white(letter)
      case 2: return colors.blue(letter)
    }
  }
})();

/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

var colors = __webpack_require__(49);

module['exports'] = function (letter, i, exploded) {
  return i % 2 === 0 ? letter : colors.inverse(letter);
};

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

var colors = __webpack_require__(49);

module['exports'] = (function () {
  var rainbowColors = ['red', 'yellow', 'green', 'blue', 'magenta']; //RoY G BiV
  return function (letter, i, exploded) {
    if (letter === " ") {
      return letter;
    } else {
      return colors[rainbowColors[i++ % rainbowColors.length]](letter);
    }
  };
})();



/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

var colors = __webpack_require__(49);

module['exports'] = (function () {
  var available = ['underline', 'inverse', 'grey', 'yellow', 'red', 'green', 'blue', 'white', 'cyan', 'magenta'];
  return function(letter, i, exploded) {
    return letter === " " ? letter : colors[available[Math.round(Math.random() * (available.length - 1))]](letter);
  };
})();

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0});var _TypeUtils=__webpack_require__(344);Object.keys(_TypeUtils).forEach(function(a){'default'===a||'__esModule'===a||Object.defineProperty(exports,a,{enumerable:!0,get:function get(){return _TypeUtils[a]}})});

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a},_createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();Object.defineProperty(exports,'__esModule',{value:!0});function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}var







TypeUtils=function(){function a(){_classCallCheck(this,a)}return _createClass(a,null,[{key:'getType',value:function(b)




{var c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:a.defaultTypeUtils;
for(var d in c)
if(c.hasOwnProperty(d)&&c[d](b))
return d;


}},{key:'getNativeType',value:function(b)

{var c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:a.defaultNativeTypeUtils;
for(var d in c)
if(c.hasOwnProperty(d)&&c[d](b))
return d;


}},{key:'getObjectType',value:function(a)

{
return Object.prototype.toString.call(a);
}},{key:'isArray',value:function(a)






{
return'function'==typeof Array.isArray&&Array.isArray(a);
}},{key:'isBoolean',value:function(b)
{
return'boolean'==typeof b||'[object Boolean]'===a.getObjectType(b);
}},{key:'isFunction',value:function(b)
{
return'function'==typeof b&&'[object Function]'===a.getObjectType(b);
}},{key:'isNumber',value:function(b)
{
return'number'==typeof b||'[object Number]'===a.getObjectType(b);
}},{key:'isObject',value:function(b)
{
return b===Object(b)&&'object'===('undefined'==typeof b?'undefined':_typeof(b))&&!a.isArray(b);
}},{key:'isString',value:function(b)
{
return'string'==typeof b||'[object String]'===a.getObjectType(b);
}},{key:'isSymbol',value:function(a)
{
return'symbol'===('undefined'==typeof a?'undefined':_typeof(a));
}},{key:'isArgs',value:function(b)






{
return'[object Arguments]'===a.getObjectType(b);
}},{key:'isDate',value:function(b)
{
return'[object Date]'===a.getObjectType(b);
}},{key:'isError',value:function(a)
{
return a instanceof Error;
}},{key:'isMap',value:function(b)
{
return'[object Map]'===a.getObjectType(b);
}},{key:'isRegExp',value:function(b)
{
return'[object RegExp]'===a.getObjectType(b);
}},{key:'isSet',value:function(b)
{
return'[object Set]'===a.getObjectType(b);
}},{key:'isWeakMap',value:function(b)
{
return'[object WeakMap]'===a.getObjectType(b);
}},{key:'isUndefined',value:function(a)






{
return void 0===a||'undefined'==typeof a;
}},{key:'isNull',value:function(a)
{
return null===a;
}},{key:'hasLength',value:function(a)





{
return a.hasOwnProperty('length');
}},{key:'isEmptyString',value:function(b)





{var c=1<arguments.length&&void 0!==arguments[1]&&arguments[1];return(
a.isString(b)?(
b=c?b.replace(/\s+/g,''):b,
0>=b.length):void 0);



}},{key:'isEmptyArray',value:function(b)

{var c=1<arguments.length&&void 0!==arguments[1]&&arguments[1],d=2<arguments.length&&void 0!==arguments[2]?arguments[2]:-1;
if(a.isArray(b)){
if(0===d)return 0>=b.length;



if(-1===d&&(d=a.MAX_DEPTH),--d,0<b.length&&c){var e=!0,f=!1,g=void 0;try{
for(var h,i,j=b[Symbol.iterator]();!(e=(h=j.next()).done);e=!0)
if(i=h.value,!a.isEmpty(i,c,d))return!1}catch(a){f=!0,g=a}finally{try{!e&&j.return&&j.return()}finally{if(f)throw g}}

}else
return 0==b.length;

}
}},{key:'isEmptyObject',value:function(b)


{var c=1<arguments.length&&void 0!==arguments[1]&&arguments[1],d=2<arguments.length&&void 0!==arguments[2]?arguments[2]:-1;
if(0===d)
return!c;
if(-1===d){




for(var e in d=a.MAX_DEPTH,0===d&&--d,b){
if(b.hasOwnProperty(e)&&c)
return a.isEmpty(b[e]);
if(b.hasOwnProperty(e))
return!1}


return!0;
}
}},{key:'isEmpty',value:function(b)


{var c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:!0,d=2<arguments.length&&void 0!==arguments[2]?arguments[2]:-1,
e=a.getType(b),
f=void 0;























return f='undefined'===e||'null'===e||('boolean'===e||'number'===e||'symbol'===e?!1:'string'===e?a.isEmptyString(b,c):'array'===e?a.isEmptyArray(b,c,d):'object'===e?a.isEmptyObject(b,c,d):a.isEmptyByProperty(b)),f;
}},{key:'isEmptyByProperty',value:function(b)
{return!!
b.hasOwnProperty('isEmpty')&&


b.hasOwnProperty('isEmpty')&&a.isBoolean(b.isEmpty)&&b.isEmpty;
}}]),a}();


TypeUtils.MAX_DEPTH=21,
TypeUtils.defaultNativeTypeUtils=Object.freeze({
array:TypeUtils.isArray,
boolean:TypeUtils.isBoolean,
function:TypeUtils.isFunction,
number:TypeUtils.isNumber,
string:TypeUtils.isString,
symbol:TypeUtils.isSymbol,
object:TypeUtils.isObject,

undefined:TypeUtils.isUndefined,
null:TypeUtils.isNull}),

TypeUtils.defaultObjectTypeUtils=Object.freeze({
args:TypeUtils.isArgs,
date:TypeUtils.isDate,
error:TypeUtils.isError,
map:TypeUtils.isMap,
regexp:TypeUtils.isRegExp,
set:TypeUtils.isSet,
weakmap:TypeUtils.isWeakMap}),

TypeUtils.defaultTypeUtils=Object.assign({},TypeUtils.defaultObjectTypeUtils,TypeUtils.defaultNativeTypeUtils);





var getType=TypeUtils.getType,
getNativeType=TypeUtils.getNativeType,
getObjectType=TypeUtils.getObjectType,

isArray=TypeUtils.isArray,
isBoolean=TypeUtils.isBoolean,
isFunction=TypeUtils.isFunction,
isNumber=TypeUtils.isNumber,
isObject=TypeUtils.isObject,
isString=TypeUtils.isString,
isSymbol=TypeUtils.isSymbol,

isArgs=TypeUtils.isArgs,
isDate=TypeUtils.isDate,
isError=TypeUtils.isError,
isMap=TypeUtils.isMap,
isRegExp=TypeUtils.isRegExp,
isSet=TypeUtils.isSet,
isWeakMap=TypeUtils.isWeakMap,

isUndefined=TypeUtils.isUndefined,
isNull=TypeUtils.isNull,

hasLength=TypeUtils.hasLength,

isEmpty=TypeUtils.isEmpty,
isEmptyString=TypeUtils.isEmptyString,
isEmptyArray=TypeUtils.isEmptyArray,
isEmptyObject=TypeUtils.isEmptyObject,
isEmptyByProperty=TypeUtils.isEmptyByProperty;exports.default=

TypeUtils,exports.

TypeUtils=TypeUtils,exports.
getType=getType,exports.getNativeType=getNativeType,exports.getObjectType=getObjectType,exports.
isArray=isArray,exports.isBoolean=isBoolean,exports.isFunction=isFunction,exports.isNumber=isNumber,exports.isObject=isObject,exports.isString=isString,exports.isSymbol=isSymbol,exports.
isArgs=isArgs,exports.isDate=isDate,exports.isError=isError,exports.isMap=isMap,exports.isRegExp=isRegExp,exports.isSet=isSet,exports.isWeakMap=isWeakMap,exports.isUndefined=isUndefined,exports.isNull=isNull,exports.
hasLength=hasLength,exports.isEmpty=isEmpty,exports.isEmptyString=isEmptyString,exports.isEmptyArray=isEmptyArray,exports.isEmptyObject=isEmptyObject,exports.isEmptyByProperty=isEmptyByProperty;

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var handleParallax = exports.handleParallax = function handleParallax(_ref) {
	var $ = _ref.$,
	    Parallax = _ref.Parallax;

	var parallax = new Parallax('[data-parallax]');
	parallax.animate({
		speed: 0.5
	});
};

var handleLightbox = exports.handleLightbox = function handleLightbox(_ref2) {
	var $ = _ref2.$,
	    Luminous = _ref2.Luminous;

	var luminous = [];
	$('[data-lightbox]').each(function (i, item) {
		var caption = $(item).attr('data-caption');
		var options = { caption: caption };
		luminous = [].concat(_toConsumableArray(luminous), [new Luminous(item, options)]);
	});
};

var handleOwlCarousel = exports.handleOwlCarousel = function handleOwlCarousel(_ref3) {
	var $ = _ref3.$;

	var carousels = {
		main: $('[data-carousel="main"]').owlCarousel({
			items: 1
		}),
		amenities: $('[data-carousel="amenities"]').owlCarousel({
			responsive: {
				0: {
					items: 1,
					autoplay: true,
					nav: false,
					dots: true
				},
				768: {
					items: 3,
					nav: true,
					navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
					stagePadding: 64
				}
			}

		}),
		places: $('[data-carousel="places"]').owlCarousel({
			items: 2,
			nav: true,
			navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
			stagePadding: 64
		})
	};
};

var handleStickyElements = exports.handleStickyElements = function handleStickyElements(_ref4) {
	var $ = _ref4.$;
	var customSelectors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	var selectors = ['.sticky', '[data-sticky]'].concat(_toConsumableArray(customSelectors));

	var $elements = $(selectors.join(', '));
	$elements.each(function (i, element) {
		var $element = $(element);
		handleSticky($element, $element.attr('data-sticky') || 0);
	});
};

var handleSticky = function handleSticky($element) {
	var buffer = 5;
	var offset = $window.scrollTop();
	var position = $element.position().top;
	if (offset > position) {
		$element.addClass('is-stuck');
	} else {
		$element.removeClass('is-stuck');
	}
};

var loadSVGs = exports.loadSVGs = function loadSVGs(_ref5) {
	var $ = _ref5.$;

	var $svgs = $('[data-svg]');
	$svgs.each(function (i, element) {
		var $svg = $(element);
		var src = $svg.attr('data-svg');
		$.ajax({
			url: src,
			success: function success(data) {
				if (data.childNodes.length > 0) {
					$svg.append(data.childNodes[0]);
				} else {
					console.log('invalid SVG');
				}
			},
			error: function error(data) {
				console.error('Error loading SVG!');
			}
		});
	});
};

var loadImages = exports.loadImages = function loadImages(_ref6) {
	var $ = _ref6.$;

	var $images = $('[data-src]');
	$images.each(function (i, element) {
		var $image = $(element);
		var src = $image.attr('data-src');

		var $sources = $image.find('source');
		if ($sources) {
			$sources.each(function (j, source) {
				var $source = $(source);
				var media = $source.attr('media');
				var srcset = $source.attr('srcset');

				if (window.matchMedia(media).matches) {
					console.log(media, 'matches, loading', srcset);
					src = srcset;
				}

				return false;
			});
		}

		if ($image.is('div')) {
			$image.css('background-image', 'url(' + src);
		} else {
			$image.attr('src', src);
		}
		$image.removeAttr('data-src');
	});
};

var handleScroller = exports.handleScroller = function handleScroller(_ref7) {
	var $ = _ref7.$,
	    AnimationFactory = _ref7.AnimationFactory,
	    Scroller = _ref7.Scroller;
	var makeBasicAnimation = AnimationFactory.makeBasicAnimation,
	    makeSequentialAnimation = AnimationFactory.makeSequentialAnimation;

	var scroller = new Scroller([makeBasicAnimation('.card_horizontal', 'fade-in-from-left', { offset: 0, duration: 0.6 }), makeBasicAnimation('.parallax-card', 'fade-in-from-left', { offset: -100, duration: 0.6 }), makeSequentialAnimation(['#Carousel__Amenities', '.card'], 'fade-in-from-bottom', '@amenities-cards', { duration: 0.6, delay: 200 }), makeSequentialAnimation(['#Carousel__Places', '.feature'], 'fade-in-from-bottom', '@feature-cards', { offset: 350, duration: 0.6, delay: 250 })]);
};

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

/*

The MIT License (MIT)

Original Library 
  - Copyright (c) Marak Squires

Additional functionality
 - Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var colors = {};
module['exports'] = colors;

colors.themes = {};

var ansiStyles = colors.styles = __webpack_require__(333);
var defineProps = Object.defineProperties;

colors.supportsColor = __webpack_require__(334);

if (typeof colors.enabled === "undefined") {
  colors.enabled = colors.supportsColor;
}

colors.stripColors = colors.strip = function(str){
  return ("" + str).replace(/\x1B\[\d+m/g, '');
};


var stylize = colors.stylize = function stylize (str, style) {
  if (!colors.enabled) {
    return str+'';
  }

  return ansiStyles[style].open + str + ansiStyles[style].close;
}

var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
var escapeStringRegexp = function (str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  return str.replace(matchOperatorsRe,  '\\$&');
}

function build(_styles) {
  var builder = function builder() {
    return applyStyle.apply(builder, arguments);
  };
  builder._styles = _styles;
  // __proto__ is used because we must return a function, but there is
  // no way to create a function with a different prototype.
  builder.__proto__ = proto;
  return builder;
}

var styles = (function () {
  var ret = {};
  ansiStyles.grey = ansiStyles.gray;
  Object.keys(ansiStyles).forEach(function (key) {
    ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');
    ret[key] = {
      get: function () {
        return build(this._styles.concat(key));
      }
    };
  });
  return ret;
})();

var proto = defineProps(function colors() {}, styles);

function applyStyle() {
  var args = arguments;
  var argsLen = args.length;
  var str = argsLen !== 0 && String(arguments[0]);
  if (argsLen > 1) {
    for (var a = 1; a < argsLen; a++) {
      str += ' ' + args[a];
    }
  }

  if (!colors.enabled || !str) {
    return str;
  }

  var nestedStyles = this._styles;

  var i = nestedStyles.length;
  while (i--) {
    var code = ansiStyles[nestedStyles[i]];
    str = code.open + str.replace(code.closeRe, code.open) + code.close;
  }

  return str;
}

function applyTheme (theme) {
  for (var style in theme) {
    (function(style){
      colors[style] = function(str){
        if (typeof theme[style] === 'object'){
          var out = str;
          for (var i in theme[style]){
            out = colors[theme[style][i]](out);
          }
          return out;
        }
        return colors[theme[style]](str);
      };
    })(style)
  }
}

colors.setTheme = function (theme) {
  if (typeof theme === 'string') {
    try {
      colors.themes[theme] = !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());
      applyTheme(colors.themes[theme]);
      return colors.themes[theme];
    } catch (err) {
      console.log(err);
      return err;
    }
  } else {
    applyTheme(theme);
  }
};

function init() {
  var ret = {};
  Object.keys(styles).forEach(function (name) {
    ret[name] = {
      get: function () {
        return build([name]);
      }
    };
  });
  return ret;
}

var sequencer = function sequencer (map, str) {
  var exploded = str.split(""), i = 0;
  exploded = exploded.map(map);
  return exploded.join("");
};

// custom formatter methods
colors.trap = __webpack_require__(337);
colors.zalgo = __webpack_require__(338);

// maps
colors.maps = {};
colors.maps.america = __webpack_require__(339);
colors.maps.zebra = __webpack_require__(340);
colors.maps.rainbow = __webpack_require__(341);
colors.maps.random = __webpack_require__(342)

for (var map in colors.maps) {
  (function(map){
    colors[map] = function (str) {
      return sequencer(colors.maps[map], str);
    }
  })(map)
}

defineProps(colors, init());

/***/ })

/******/ });