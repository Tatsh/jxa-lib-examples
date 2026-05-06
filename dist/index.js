#!/usr/bin/env osascript -l JavaScript

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.unistd = exports.string = exports.stdlib = exports.dispatch = void 0;
exports.dispatch = __importStar(__webpack_require__(2));
exports.stdlib = __importStar(__webpack_require__(3));
exports.string = __importStar(__webpack_require__(4));
exports.unistd = __importStar(__webpack_require__(5));
__exportStar(__webpack_require__(6), exports);
__exportStar(__webpack_require__(7), exports);
__exportStar(__webpack_require__(33), exports);
__exportStar(__webpack_require__(34), exports);
__exportStar(__webpack_require__(35), exports);
__exportStar(__webpack_require__(25), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DispatchSemaphore = exports.dispatch_semaphore_wait = exports.dispatch_semaphore_signal = exports.dispatch_semaphore_create = void 0;
ObjC.import('dispatch');
/** Creates new counting semaphore with an initial value. */
exports.dispatch_semaphore_create = $.dispatch_semaphore_create;
/** Signals (increments) a semaphore. */
exports.dispatch_semaphore_signal = $.dispatch_semaphore_signal;
/** Waits for (decrements) a semaphore. */
exports.dispatch_semaphore_wait = $.dispatch_semaphore_wait;
class DispatchSemaphore {
    constructor(n) {
        this.sema = (0, exports.dispatch_semaphore_create)(n);
    }
    /** Waits for (decrements) a semaphore. */
    wait(timeout) {
        return (0, exports.dispatch_semaphore_wait)(this.sema, timeout);
    }
    /** Waits for (decrements) a semaphore, with timeout parameter `DISPATCH_TIME_FOREVER`. */
    waitForever() {
        return (0, exports.dispatch_semaphore_wait)(this.sema, $.DISPATCH_TIME_FOREVER);
    }
    /** Signals (increments) a semaphore. */
    signal() {
        return (0, exports.dispatch_semaphore_signal)(this.sema);
    }
}
exports.DispatchSemaphore = DispatchSemaphore;
//# sourceMappingURL=dispatch.js.map

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.unsetenv = exports.system = exports.strtold = exports.strtof = exports.strtod = exports.srand = exports.setenv = exports.rand = exports.putenv = exports.malloc = exports.getenv = exports.free = exports.exit = exports.atoll = exports.atoi = exports.atof = exports.arc4random_uniform = exports.arc4random_stir = exports.arc4random_buf = exports.arc4random_addrandom = exports.arc4random = exports.atexit = exports.abort = exports._Exit = void 0;
ObjC.import('stdlib');
ObjC.bindFunction('free', ['void', ['void*']]);
ObjC.bindFunction('malloc', ['void*', ['int']]);
exports._Exit = $._Exit;
exports.abort = $.abort;
exports.atexit = $.atexit;
exports.arc4random = $.arc4random;
exports.arc4random_addrandom = $.arc4random_addrandom;
exports.arc4random_buf = $.arc4random_buf;
exports.arc4random_stir = $.arc4random_stir;
exports.arc4random_uniform = $.arc4random_uniform;
exports.atof = $.atof;
exports.atoi = $.atoi;
exports.atoll = $.atoll;
exports.exit = $.exit;
exports.free = $.free;
/** Will throw if the environment variable does not exist. */
exports.getenv = $.getenv;
exports.malloc = $.malloc;
exports.putenv = $.putenv;
exports.rand = $.rand;
exports.setenv = $.setenv;
exports.srand = $.srand;
exports.strtod = $.strtod;
exports.strtof = $.strtof;
exports.strtold = $.strtold;
exports.system = $.system;
exports.unsetenv = $.unsetenv;
//# sourceMappingURL=stdlib.js.map

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.stringWithData = exports.memset = exports.memcpy = exports.memcmp = exports.memchr = void 0;
ObjC.import('string');
exports.memchr = $.memchr;
exports.memcmp = $.memcmp;
exports.memcpy = $.memcpy;
exports.memset = $.memset;
/** Convert NSData to a JavaScript string. */
const stringWithData = (data, encoding = $.NSASCIIStringEncoding) => ObjC.unwrap($.NSString.alloc.initWithDataEncoding(data, encoding));
exports.stringWithData = stringWithData;
//# sourceMappingURL=string.js.map

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sleep = void 0;
ObjC.import('unistd');
/** Block for a period of time, in seconds (integer only). */
exports.sleep = $.sleep;
//# sourceMappingURL=unistd.js.map

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fetch = fetch;
ObjC.import('Cocoa');
/** Basic fetch-like function. Only GET method is supported.*/
async function fetch(url) {
    return new Promise((resolve, reject) => {
        $.NSURLSession.sharedSession.dataTaskWithURLCompletionHandler($.NSURL.URLWithString(url), (data, response, error) => {
            if (error && !error.isNil()) {
                reject(error);
                return;
            }
            resolve({
                data: data,
                originalResponse: response,
            });
        }).resume;
    });
}
//# sourceMappingURL=fetch.js.map

/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ItunesHelper = void 0;
const filter_1 = __importDefault(__webpack_require__(8));
const util_1 = __webpack_require__(25);
/** iTunes/Music must be started before constructing this. */
class ItunesHelper {
    constructor(itunesApp) {
        this._finder = Application('Finder');
        this._itunes = itunesApp;
        this._library = (0, filter_1.default)((0, util_1.propExecEq)('name', 'Library'), this._itunes.sources())[0].libraryPlaylists()[0];
        this._devicesMenuItems = Application('System Events')
            .processes.byName('iTunes')
            .menuBars[0].menuBarItems.byName('File')
            .menus[0].menuItems.byName('Devices')
            .menus[0].menuItems();
    }
    clearOrphanedTracks() {
        const ret = [];
        for (const track of this._library.fileTracks()) {
            const name = track.name();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            let loc;
            try {
                loc = track.location();
            }
            catch (e) {
                $.printf(`Removing ${name} (caught ${e}).\n`);
                ret.push(track);
                track.delete();
                continue;
            }
            if (!loc || !this._finder.exists(loc)) {
                $.printf(`Removing ${name} (not loc).\n`);
                ret.push(track);
                track.delete();
            }
        }
        return ret;
    }
    addTracksAtPath(root) {
        const paths = [];
        for (const x of root.entireContents()) {
            paths.push(x.url().replace(/^file:\/\//, ''));
        }
        this._itunes.add(paths, { to: this._library });
        for (const track of this._library.fileTracks()) {
            this._itunes.refresh(track);
        }
    }
    get fileTracks() {
        return this._library.fileTracks();
    }
    get library() {
        for (const source of this._itunes.sources()) {
            if (source.name() === 'Library') {
                return source;
            }
        }
        return undefined;
    }
    get currentTrack() {
        try {
            return this._itunes.currentTrack();
        }
        catch (_) {
            return undefined;
        }
    }
    deleteOrphanedTracks() {
        const ret = [];
        for (const track of this._library.tracks()) {
            const name = track.name();
            let loc;
            try {
                loc = track.location();
            }
            catch (_) {
                console.log(`Removing ${name}.`);
                ret.push(track);
                track.delete();
                continue;
            }
            if (!loc || !this._finder.exists(loc)) {
                console.log(`Removing ${name}.`);
                ret.push(track);
                track.delete();
            }
        }
        return ret;
    }
    clickDevicesMenuItem(regex) {
        this._itunes.activate();
        for (let i = 0; i < this._devicesMenuItems.length; i++) {
            const item = this._devicesMenuItems[i];
            if (regex.test(item.title()) && item.enabled()) {
                item.click();
                return true;
            }
        }
        return false;
    }
    syncDevice() {
        return this.clickDevicesMenuItem(/^Sync /);
    }
    backupDevice() {
        return this.clickDevicesMenuItem(/^Back Up$/);
    }
    transferPurchasesFromDevice() {
        return this.clickDevicesMenuItem(/^Transfer Purchases from /);
    }
}
exports.ItunesHelper = ItunesHelper;
//# sourceMappingURL=itunes.js.map

/***/ }),
/* 8 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_arrayReduce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _internal_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _internal_filterMap_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony import */ var _internal_isMap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);
/* harmony import */ var _internal_isObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19);
/* harmony import */ var _internal_xfilter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22);










/**
 * Takes a predicate and a `Filterable`, and returns a new filterable of the
 * same type containing the members of the given filterable which satisfy the
 * given predicate. Filterable objects include plain objects, Maps, or any object
 * that has a filter method such as `Array`.
 *
 * Dispatches to the `filter` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @category Object
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array} Filterable
 * @see R.reject, R.transduce, R.addIndex
 * @example
 *
 *      const isEven = n => n % 2 === 0;
 *
 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
var filter = /*#__PURE__*/(0,_internal_curry2_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,_internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_2__["default"])(['fantasy-land/filter', 'filter'], _internal_xfilter_js__WEBPACK_IMPORTED_MODULE_7__["default"], function (pred, filterable) {
  return (0,_internal_isObject_js__WEBPACK_IMPORTED_MODULE_6__["default"])(filterable) ? (0,_internal_arrayReduce_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (acc, key) {
    if (pred(filterable[key])) {
      acc[key] = filterable[key];
    }
    return acc;
  }, {}, (0,_keys_js__WEBPACK_IMPORTED_MODULE_8__["default"])(filterable)) : (0,_internal_isMap_js__WEBPACK_IMPORTED_MODULE_5__["default"])(filterable) ? (0,_internal_filterMap_js__WEBPACK_IMPORTED_MODULE_4__["default"])(pred, filterable) :
  // else
  (0,_internal_filter_js__WEBPACK_IMPORTED_MODULE_3__["default"])(pred, filterable);
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);

/***/ }),
/* 9 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayReduce)
/* harmony export */ });
function _arrayReduce(reducer, acc, list) {
  var index = 0;
  var length = list.length;
  while (index < length) {
    acc = reducer(acc, list[index]);
    index += 1;
  }
  return acc;
}

/***/ }),
/* 10 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _curry2)
/* harmony export */ });
/* harmony import */ var _curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _isPlaceholder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);



/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return (0,_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_1__["default"])(a) ? f2 : (0,_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (_b) {
          return fn(a, _b);
        });
      default:
        return (0,_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_1__["default"])(a) && (0,_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_1__["default"])(b) ? f2 : (0,_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_1__["default"])(a) ? (0,_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (_a) {
          return fn(_a, b);
        }) : (0,_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_1__["default"])(b) ? (0,_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  };
}

/***/ }),
/* 11 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _curry1)
/* harmony export */ });
/* harmony import */ var _isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);


/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || (0,_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}

/***/ }),
/* 12 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _isPlaceholder)
/* harmony export */ });
function _isPlaceholder(a) {
  return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
}

/***/ }),
/* 13 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _dispatchable)
/* harmony export */ });
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _isTransformer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);



/**
 * Returns a function that dispatches with different strategies based on the
 * object in list position (last argument). If it is an array, executes [fn].
 * Otherwise, if it has a function with one of the given method names, it will
 * execute that function (functor case). Otherwise, if it is a transformer,
 * uses transducer created by [transducerCreator] to return a new transformer
 * (transducer case).
 * Otherwise, it will default to executing [fn].
 *
 * @private
 * @param {Array} methodNames properties to check for a custom implementation
 * @param {Function} transducerCreator transducer factory if object is transformer
 * @param {Function} fn default ramda implementation
 * @return {Function} A function that dispatches on object in list position
 */
function _dispatchable(methodNames, transducerCreator, fn) {
  return function () {
    if (arguments.length === 0) {
      return fn();
    }
    var obj = arguments[arguments.length - 1];
    if (!(0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj)) {
      var idx = 0;
      while (idx < methodNames.length) {
        if (typeof obj[methodNames[idx]] === 'function') {
          return obj[methodNames[idx]].apply(obj, Array.prototype.slice.call(arguments, 0, -1));
        }
        idx += 1;
      }
      if ((0,_isTransformer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj)) {
        var transducer = transducerCreator.apply(null, Array.prototype.slice.call(arguments, 0, -1));
        return transducer(obj);
      }
    }
    return fn.apply(this, arguments);
  };
}

/***/ }),
/* 14 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Array.isArray || function _isArray(val) {
  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
});

/***/ }),
/* 15 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _isTransformer)
/* harmony export */ });
function _isTransformer(obj) {
  return obj != null && typeof obj['@@transducer/step'] === 'function';
}

/***/ }),
/* 16 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _filter)
/* harmony export */ });
function _filter(fn, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  while (idx < len) {
    if (fn(list[idx])) {
      result[result.length] = list[idx];
    }
    idx += 1;
  }
  return result;
}

/***/ }),
/* 17 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _filterMap)
/* harmony export */ });
function _filterMap(fn, map) {
  var result = new Map();
  var iterator = map.entries();
  var current = iterator.next();
  while (!current.done) {
    if (fn(current.value[1])) {
      result.set(current.value[0], current.value[1]);
    }
    current = iterator.next();
  }
  return result;
}

/***/ }),
/* 18 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _isMap)
/* harmony export */ });
function _isMap(x) {
  return Object.prototype.toString.call(x) === '[object Map]';
}

/***/ }),
/* 19 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _isObject)
/* harmony export */ });
function _isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]';
}

/***/ }),
/* 20 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _xfilter)
/* harmony export */ });
/* harmony import */ var _xfBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);

var XFilter = /*#__PURE__*/function () {
  function XFilter(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFilter.prototype['@@transducer/init'] = _xfBase_js__WEBPACK_IMPORTED_MODULE_0__["default"].init;
  XFilter.prototype['@@transducer/result'] = _xfBase_js__WEBPACK_IMPORTED_MODULE_0__["default"].result;
  XFilter.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
  };
  return XFilter;
}();
function _xfilter(f) {
  return function (xf) {
    return new XFilter(f, xf);
  };
}

/***/ }),
/* 21 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  init: function () {
    return this.xf['@@transducer/init']();
  },
  result: function (result) {
    return this.xf['@@transducer/result'](result);
  }
});

/***/ }),
/* 22 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _internal_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var _internal_isArguments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);




// cover IE < 9 keys issues
var hasEnumBug = ! /*#__PURE__*/{
  toString: null
}.propertyIsEnumerable('toString');
var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
// Safari bug
var hasArgsEnumBug = /*#__PURE__*/function () {
  'use strict';

  return arguments.propertyIsEnumerable('length');
}();
var contains = function contains(list, item) {
  var idx = 0;
  while (idx < list.length) {
    if (list[idx] === item) {
      return true;
    }
    idx += 1;
  }
  return false;
};

/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @see R.keysIn, R.values, R.toPairs
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */
var keys = typeof Object.keys === 'function' && !hasArgsEnumBug ? /*#__PURE__*/(0,_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function keys(obj) {
  return Object(obj) !== obj ? [] : Object.keys(obj);
}) : /*#__PURE__*/(0,_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function keys(obj) {
  if (Object(obj) !== obj) {
    return [];
  }
  var prop, nIdx;
  var ks = [];
  var checkArgsLength = hasArgsEnumBug && (0,_internal_isArguments_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj);
  for (prop in obj) {
    if ((0,_internal_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])(prop, obj) && (!checkArgsLength || prop !== 'length')) {
      ks[ks.length] = prop;
    }
  }
  if (hasEnumBug) {
    nIdx = nonEnumerableProps.length - 1;
    while (nIdx >= 0) {
      prop = nonEnumerableProps[nIdx];
      if ((0,_internal_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])(prop, obj) && !contains(ks, prop)) {
        ks[ks.length] = prop;
      }
      nIdx -= 1;
    }
  }
  return ks;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keys);

/***/ }),
/* 23 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _has)
/* harmony export */ });
function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/***/ }),
/* 24 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);

var toString = Object.prototype.toString;
var _isArguments = /*#__PURE__*/function () {
  return toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
    return toString.call(x) === '[object Arguments]';
  } : function _isArguments(x) {
    return (0,_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])('callee', x);
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_isArguments);

/***/ }),
/* 25 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.propExecEq = exports.ord = exports.chr = exports.throwErrorIfNotNil = void 0;
exports.applicationWithStandardAdditions = applicationWithStandardAdditions;
const equals_1 = __importDefault(__webpack_require__(26));
/** Convert an `NSError` type to a JavaScript error and throw it. */
const throwErrorIfNotNil = (error) => {
    if (error && !error.isNil()) {
        throw new Error(error.localizedDescription.js);
    }
};
exports.throwErrorIfNotNil = throwErrorIfNotNil;
function applicationWithStandardAdditions(spec) {
    const app = Application(spec);
    app.includeStandardAdditions = true;
    return app;
}
/** Get the character for a code. */
const chr = (x) => String.fromCharCode(x);
exports.chr = chr;
/** Get a character code. */
const ord = (xs) => String.prototype.charCodeAt.call(xs, 0);
exports.ord = ord;
/**
 * Create a function that checks if evaluating a property on the passed in object as a function is
 * equal to the second argument.
 * @param name The name of the property to evaluate.
 * @param value The value to compare against.
 * @returns A function that takes an object and optional arguments, evaluates the property as a
 * function, and checks if the result is equal to the value.
 */
const propExecEq = (name, value) => (x, args) => (0, equals_1.default)(x[name](args), value);
exports.propExecEq = propExecEq;
//# sourceMappingURL=util.js.map

/***/ }),
/* 26 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _internal_equals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);



/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
 * cyclical data structures.
 *
 * Dispatches symmetrically to the `equals` methods of both arguments, if
 * present.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      R.equals(1, 1); //=> true
 *      R.equals(1, '1'); //=> false
 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
 *
 *      const a = {}; a.v = a;
 *      const b = {}; b.v = b;
 *      R.equals(a, b); //=> true
 */
var equals = /*#__PURE__*/(0,_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function equals(a, b) {
  return (0,_internal_equals_js__WEBPACK_IMPORTED_MODULE_1__["default"])(a, b, [], []);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (equals);

/***/ }),
/* 27 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _equals)
/* harmony export */ });
/* harmony import */ var _arrayFromIterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _includesWith_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var _functionName_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30);
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var _objectIs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22);
/* harmony import */ var _type_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32);








/**
 * private _uniqContentEquals function.
 * That function is checking equality of 2 iterator contents with 2 assumptions
 * - iterators lengths are the same
 * - iterators values are unique
 *
 * false-positive result will be returned for comparison of, e.g.
 * - [1,2,3] and [1,2,3,4]
 * - [1,1,1] and [1,2,3]
 * */

function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
  var a = (0,_arrayFromIterator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(aIterator);
  var b = (0,_arrayFromIterator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(bIterator);
  function eq(_a, _b) {
    return _equals(_a, _b, stackA.slice(), stackB.slice());
  }

  // if *a* array contains any element that is not included in *b*
  return !(0,_includesWith_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function (b, aItem) {
    return !(0,_includesWith_js__WEBPACK_IMPORTED_MODULE_1__["default"])(eq, aItem, b);
  }, b, a);
}
function _equals(a, b, stackA, stackB) {
  if ((0,_objectIs_js__WEBPACK_IMPORTED_MODULE_4__["default"])(a, b)) {
    return true;
  }
  var typeA = (0,_type_js__WEBPACK_IMPORTED_MODULE_6__["default"])(a);
  if (typeA !== (0,_type_js__WEBPACK_IMPORTED_MODULE_6__["default"])(b)) {
    return false;
  }
  if (typeof a['fantasy-land/equals'] === 'function' || typeof b['fantasy-land/equals'] === 'function') {
    return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) && typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a);
  }
  if (typeof a.equals === 'function' || typeof b.equals === 'function') {
    return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);
  }
  switch (typeA) {
    case 'Arguments':
    case 'Array':
    case 'Object':
      if (typeof a.constructor === 'function' && (0,_functionName_js__WEBPACK_IMPORTED_MODULE_2__["default"])(a.constructor) === 'Promise') {
        return a === b;
      }
      break;
    case 'Boolean':
    case 'Number':
    case 'String':
      if (!(typeof a === typeof b && (0,_objectIs_js__WEBPACK_IMPORTED_MODULE_4__["default"])(a.valueOf(), b.valueOf()))) {
        return false;
      }
      break;
    case 'Date':
      if (!(0,_objectIs_js__WEBPACK_IMPORTED_MODULE_4__["default"])(a.valueOf(), b.valueOf())) {
        return false;
      }
      break;
    case 'Error':
      return a.name === b.name && a.message === b.message;
    case 'RegExp':
      if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
        return false;
      }
      break;
  }
  var idx = stackA.length - 1;
  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b;
    }
    idx -= 1;
  }
  switch (typeA) {
    case 'Map':
      if (a.size !== b.size) {
        return false;
      }
      return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));
    case 'Set':
      if (a.size !== b.size) {
        return false;
      }
      return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));
    case 'Arguments':
    case 'Array':
    case 'Object':
    case 'Boolean':
    case 'Number':
    case 'String':
    case 'Date':
    case 'Error':
    case 'RegExp':
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'ArrayBuffer':
      break;
    default:
      // Values of other types are only equal if identical.
      return false;
  }
  var keysA = (0,_keys_js__WEBPACK_IMPORTED_MODULE_5__["default"])(a);
  if (keysA.length !== (0,_keys_js__WEBPACK_IMPORTED_MODULE_5__["default"])(b).length) {
    return false;
  }
  var extendedStackA = stackA.concat([a]);
  var extendedStackB = stackB.concat([b]);
  idx = keysA.length - 1;
  while (idx >= 0) {
    var key = keysA[idx];
    if (!((0,_has_js__WEBPACK_IMPORTED_MODULE_3__["default"])(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
      return false;
    }
    idx -= 1;
  }
  return true;
}

/***/ }),
/* 28 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayFromIterator)
/* harmony export */ });
function _arrayFromIterator(iter) {
  var list = [];
  var next;
  while (!(next = iter.next()).done) {
    list.push(next.value);
  }
  return list;
}

/***/ }),
/* 29 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _includesWith)
/* harmony export */ });
function _includesWith(pred, x, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (pred(x, list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}

/***/ }),
/* 30 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _functionName)
/* harmony export */ });
function _functionName(f) {
  // String(x => x) evaluates to "x => x", so the pattern may not match.
  var match = String(f).match(/^function (\w*)/);
  return match == null ? '' : match[1];
}

/***/ }),
/* 31 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function _objectIs(a, b) {
  // SameValue algorithm
  if (a === b) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return a !== 0 || 1 / a === 1 / b;
  } else {
    // Step 6.a: NaN == NaN
    return a !== a && b !== b;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof Object.is === 'function' ? Object.is : _objectIs);

/***/ }),
/* 32 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);


/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Type
 * @sig * -> String
 * @param {*} val The value to test
 * @return {String}
 * @example
 *
 *      R.type({}); //=> "Object"
 *      R.type(new Map); //=> "Map"
 *      R.type(new Set); //=> "Set"
 *      R.type(1); //=> "Number"
 *      R.type(false); //=> "Boolean"
 *      R.type('s'); //=> "String"
 *      R.type(null); //=> "Null"
 *      R.type([]); //=> "Array"
 *      R.type(/[A-z]/); //=> "RegExp"
 *      R.type(() => {}); //=> "Function"
 *      R.type(async () => {}); //=> "AsyncFunction"
 *      R.type(undefined); //=> "Undefined"
 *      R.type(BigInt(123)); //=> "BigInt"
 */
var type = /*#__PURE__*/(0,_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function type(val) {
  return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (type);

/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileManager = exports.FileType = exports.FileAttributeKey = void 0;
const util_1 = __webpack_require__(25);
ObjC.import('Foundation');
var FileAttributeKey;
(function (FileAttributeKey) {
    FileAttributeKey["creationDate"] = "NSFileCreationDate";
    FileAttributeKey["extensionHidden"] = "NSFileExtensionHidden";
    FileAttributeKey["groupOwnerAccountId"] = "NSFileGroupOwnerAccountId";
    FileAttributeKey["groupOwnerAccountName"] = "NSFileGroupOwnerAccountName";
    FileAttributeKey["hfsCreatorCode"] = "NSFileHfsCreatorCode";
    FileAttributeKey["hfsTypeCode"] = "NSFileHFSTypeCode";
    FileAttributeKey["modificationDate"] = "NSFileModificationDate";
    FileAttributeKey["ownerAccountId"] = "NSFileOwnerAccountId";
    FileAttributeKey["ownerAccountName"] = "NSFileOwnerAccountName";
    FileAttributeKey["posixPermissions"] = "NSFilePosixPermissions";
    FileAttributeKey["referenceCount"] = "NSFileReferenceCount";
    FileAttributeKey["size"] = "NSFileSize";
    FileAttributeKey["systemFileNumber"] = "NSFileSystemFileNumber";
    FileAttributeKey["systemNumber"] = "NSFileSystemNumber";
    FileAttributeKey["type"] = "NSFileType";
})(FileAttributeKey || (exports.FileAttributeKey = FileAttributeKey = {}));
var FileType;
(function (FileType) {
    FileType["directory"] = "NSFileTypeDirectory";
    FileType["symbolicLink"] = "NSFileTypeSymbolicLink";
    FileType["regular"] = "NSFileTypeRegular";
})(FileType || (exports.FileType = FileType = {}));
class FileManager {
    constructor() {
        this.fm = $.NSFileManager.defaultManager;
    }
    attributesOfItem(path) {
        const error = Ref();
        const ret = ObjC.deepUnwrap(this.fm.attributesOfItemAtPathError(path, error));
        (0, util_1.throwErrorIfNotNil)(error[0]);
        return ret;
    }
    contentsOfDirectory(path) {
        const error = Ref();
        const ret = ObjC.deepUnwrap(this.fm.contentsOfDirectoryAtPathError(path, error));
        (0, util_1.throwErrorIfNotNil)(error[0]);
        return ret;
    }
    fileExists(path) {
        return this.fm.fileExistsAtPath(path);
    }
    homeDirectory() {
        return ObjC.unwrap($.NSHomeDirectory());
    }
}
exports.FileManager = FileManager;
//# sourceMappingURL=nsfilemanager.js.map

/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GeneralPasteboard = exports.PasteboardTypeString = void 0;
ObjC.import('AppKit');
exports.PasteboardTypeString = $.NSPasteboardTypeString;
class GeneralPasteboard {
    constructor() {
        this.general = $.NSPasteboard.generalPasteboard;
    }
    set(data, type = exports.PasteboardTypeString) {
        return this.general.setStringForType(data, type);
    }
    /* istanbul ignore next */
    clear() {
        this.general.clearContents;
    }
    get(index = 0) {
        return ObjC.unwrap(this.general.pasteboardItems)[index];
    }
}
exports.GeneralPasteboard = GeneralPasteboard;
//# sourceMappingURL=nspasteboard.js.map

/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Workspace = void 0;
ObjC.import('AppKit');
/**
 * A workspace that can launch other apps and perform a variety of
 * file-handling services.
 */
class Workspace {
    constructor() {
        this.ws = $.NSWorkspace.sharedWorkspace;
    }
    /**
     * Retrieves information about the specified file.
     * @param fullPath The full path to the desired file.
     * @param appName The app the system would use to open the file.
     * @param type On input, a pointer to a string object variable;
     * on return, if the method is successful, this variable contains a string
     * object with the filename extension or encoded HFS file type of the file.
     * @returns `true` if the information was retrieved successfully;
     * otherwise, `false` if the file could not be found or the app was not
     * associated with the file.
     */
    getInfoForFile(fullPath, appName, type) {
        return this.ws.getInfoForFileApplicationType(fullPath, appName, type);
    }
    /**
     * Determines whether the specified path is a file package.
     * @param fullPath The full path to examine.
     * @returns `true` if the path identifies a file package; otherwise, `false`
     * if the path does not exist, is not a directory, or is not a file package.
     */
    isFilePackage(fullPath) {
        return this.ws.isFilePackageAtPath(fullPath);
    }
    /**
     * Returns an image containing the icon for the specified file.
     * @param fullPath The full path to the file.
     * @returns The icon associated with the file.
     */
    iconForFile(fullPath) {
        return this.ws.iconForFile(fullPath);
    }
    /**
     * Returns an image containing the icon for the specified files.
     *
     * If `fullPaths` specifies one file, that file's icon is returned. If
     * `fullPaths` specifies more than one file, an icon representing the
     * multiple selection is returned.
     * @param paths An array of `JXString` objects, each of which contains the
     * full path to a file.
     * @returns The icon associated with the group of files.
     */
    iconForFiles(paths) {
        return this.ws.iconForFiles(ObjC.wrap(paths));
    }
    /**
     * Check if an app is running by bundle ID.
     * @param bundleId The bundle identifier of the app to check.
     * @returns `true` if the app is running; otherwise, `false`.
     */
    appIsRunning(bundleId) {
        for (const app of ObjC.unwrap($.NSWorkspace.sharedWorkspace.runningApplications)) {
            if (typeof app.bundleIdentifier.isEqualToString !== 'undefined' &&
                app.bundleIdentifier.isEqualToString(bundleId)) {
                return true;
            }
        }
        return false;
    }
    /**
     * Start an application by bundle ID.
     * @param bundleId The bundle identifier of the app to start.
     * @param waitTime The time to wait after starting the app, in seconds.
     */
    startApp(bundleId, waitTime = 3) {
        $.NSWorkspace.sharedWorkspace.launchAppWithBundleIdentifierOptionsAdditionalEventParamDescriptorLaunchIdentifier(bundleId, $.NSWorkspaceLaunchAsync | $.NSWorkspaceLaunchAndHide, $.NSAppleEventDescriptor.nullDescriptor, null);
        delay(waitTime);
    }
}
exports.Workspace = Workspace;
/** Returns the shared `NSWorkspace` instance. */
Workspace.shared = new Workspace();
//# sourceMappingURL=nsworkspace.js.map

/***/ }),
/* 36 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.main = void 0;
const jxa_lib_1 = __webpack_require__(1);
const fetch_google_command_1 = __importDefault(__webpack_require__(37));
const get_file_icon_1 = __importDefault(__webpack_require__(38));
const refresh_selected_tags_1 = __importDefault(__webpack_require__(39));
const refresh_tags_1 = __importDefault(__webpack_require__(40));
const reset_facetime_block_list_1 = __importDefault(__webpack_require__(41));
const main = () => {
    const finder = (0, jxa_lib_1.applicationWithStandardAdditions)('Finder');
    const item = finder.chooseFromList([
        'Clear Badge of FaceTime.app',
        'Fetch google.com with NSURLSession (fetch-like API)',
        'Get icon of Chrome Apps.localized',
        'Refresh selected tags in Music.app',
        'Refresh all tags in Music.app',
        'Reset the FaceTime block list',
    ], {
        withTitle: 'jxa-lib examples',
        withPrompt: 'Please open the associated app with the task you choose before ' +
            'clicking OK.\n\n' +
            `If you choose "Reset the FaceTime block list", have FaceTime.app's ` +
            'Preferences window already open.\n\n' +
            'Getting the icon of Chrome Apps directory may fail if Chrome has ' +
            'not yet made this directory.\n',
        multipleSelectionsAllowed: false,
        emptySelectionAllowed: false,
    });
    if (!item || !item.length) {
        return 0;
    }
    switch (item[0]) {
        case 'Fetch google.com with NSURLSession (fetch-like API)':
            return (0, fetch_google_command_1.default)();
        case 'Refresh selected tags in Music.app':
            return (0, refresh_selected_tags_1.default)();
        case 'Refresh all tags in Music.app':
            return (0, refresh_tags_1.default)();
        case 'Reset the FaceTime block list':
            return (0, reset_facetime_block_list_1.default)();
        case 'Get icon of Chrome Apps.localized':
            return (0, get_file_icon_1.default)();
        default:
            return 1;
    }
};
exports.main = main;


/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = fetchGoogle;
const jxa_lib_1 = __webpack_require__(1);
/**
 * Demonstrates how to use the Dispatch framework to fetch webpage contents. `fetch()` here is
 * custom built in jxa-lib to use `NSURLSession`.
 */
function fetchGoogle() {
    const sema = new jxa_lib_1.dispatch.DispatchSemaphore(0);
    (0, jxa_lib_1.fetch)('https://www.google.com/')
        .then((x) => {
        if (x.data) {
            console.log(jxa_lib_1.string.stringWithData(x.data));
        }
        sema.signal();
    })
        .catch((_) => {
        console.log('Caught error');
        sema.signal();
    });
    while (sema.waitForever() != 0) {
        jxa_lib_1.unistd.sleep(1);
    }
    return 0;
}


/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = getIconOfChromeAppsDirectory;
const jxa_lib_1 = __webpack_require__(1);
/** Demonstrates calling `-[NSWorkspace iconForFile:]`. */
function getIconOfChromeAppsDirectory() {
    const p = $.NSHomeDirectory()
        .stringByAppendingPathComponent('Applications')
        .stringByAppendingPathComponent('Chrome Apps.localized');
    const image = jxa_lib_1.Workspace.shared.iconForFile(p);
    const tiff = image.TIFFRepresentation;
    const r = $.NSBitmapImageRep.imageRepWithData(tiff);
    const data = r.representationUsingTypeProperties($.NSPNGFileType, ObjC.wrap({}));
    data.writeToFileAtomically($.NSHomeDirectory().stringByAppendingPathComponent('TheIcon.png'), false);
    return 0;
}


/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = refreshSelectedTags;
const jxa_lib_1 = __webpack_require__(1);
/**
Original source:
```applescript
(*
Refresh Selected Tags v1.0
June 6, 2006 (yes, that's 6/6/06)
http://marv.kordix.com
*)
tell application "iTunes"
    if selection is {} then
        display dialog "No tracks selected. Select some tracks with some
                        stale tags."
            buttons {"I will!"}
            default button 1 with icon 0
    else
        set sel to selection
        repeat with myTrack in sel
            if myTrack's class is file track then
                tell myTrack
                    refresh myTrack
                end tell
            end if
        end repeat
        display dialog "Selected tags have been freshened up."
            buttons {"Okay"}
            default button 1
    end if
end tell
```
*/
function refreshSelectedTags() {
    const app = (0, jxa_lib_1.applicationWithStandardAdditions)('Music');
    if (!app.selection().length) {
        app.displayDialog('No tracks selected. Select some tracks with some stale tags.', {
            buttons: ['I will!'],
            defaultButton: 1,
            withIcon: 0,
        });
        return 1;
    }
    for (const track of app.selection()) {
        if (track.class() === 'fileTrack') {
            app.refresh(track);
        }
    }
    app.displayDialog('Selected tags have been freshened up.', {
        buttons: ['Okay'],
        defaultButton: 1,
    });
    return 0;
}


/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = refreshTags;
const jxa_lib_1 = __webpack_require__(1);
function refreshTags() {
    const tunesApp = Application('Music');
    const itunes = new jxa_lib_1.ItunesHelper(tunesApp);
    itunes.clearOrphanedTracks();
    console.log('Please be patient!');
    for (const track of itunes.fileTracks) {
        tunesApp.refresh(track);
    }
    return 0;
}


/***/ }),
/* 41 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = resetFaceTimeBlockList;
const path_1 = __importDefault(__webpack_require__(42));
// The Preferences window in FaceTime must be already open for this to work
function resetFaceTimeBlockList() {
    const se = Application('System Events');
    const total = (0, path_1.default)([
        'processes',
        'FaceTime',
        'windows',
        'Preferences',
        'tabGroups',
        0,
        'scrollAreas',
        'tables',
        0,
        'rows',
        'length',
    ], se);
    Application('FaceTime').activate();
    delay(0.2);
    for (let i = total; i >= 0; i--) {
        console.log(`${total - i} / ${total}`);
        se.keyCode(51);
    }
    return 0;
}


/***/ }),
/* 42 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _internal_path_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);



/**
 * Retrieves the value at a given path. The nodes of the path can be arbitrary strings or non-negative integers.
 * For anything else, the value is unspecified. Integer paths are meant to index arrays, strings are meant for objects.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @typedefn Idx = String | Int | Symbol
 * @sig [Idx] -> {a} -> a | Undefined
 * @sig Idx = String | NonNegativeInt
 * @param {Array} path The path to use.
 * @param {Object} obj The object or array to retrieve the nested property from.
 * @return {*} The data at `path`.
 * @see R.prop, R.nth, R.assocPath, R.dissocPath
 * @example
 *
 *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
 *      R.path(['a', 'b', 0], {a: {b: [1, 2, 3]}}); //=> 1
 *      R.path(['a', 'b', -2], {a: {b: [1, 2, 3]}}); //=> 2
 *      R.path([2], {'2': 2}); //=> 2
 *      R.path([-2], {'-2': 'a'}); //=> undefined
 */

var path = /*#__PURE__*/(0,_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_internal_path_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (path);

/***/ }),
/* 43 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _path)
/* harmony export */ });
/* harmony import */ var _isInteger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _nth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);


function _path(pathAr, obj) {
  var val = obj;
  for (var i = 0; i < pathAr.length; i += 1) {
    if (val == null) {
      return undefined;
    }
    var p = pathAr[i];
    if ((0,_isInteger_js__WEBPACK_IMPORTED_MODULE_0__["default"])(p)) {
      val = (0,_nth_js__WEBPACK_IMPORTED_MODULE_1__["default"])(p, val);
    } else {
      val = val[p];
    }
  }
  return val;
}

/***/ }),
/* 44 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Determine if the passed argument is an integer.
 *
 * @private
 * @param {*} n
 * @category Type
 * @return {Boolean}
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Number.isInteger || function _isInteger(n) {
  return n << 0 === n;
});

/***/ }),
/* 45 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nth)
/* harmony export */ });
function _nth(offset, list) {
  var idx = offset < 0 ? list.length + offset : offset;
  return list[idx];
}

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const jxa_lib_1 = __webpack_require__(1);
const main_1 = __webpack_require__(36);
jxa_lib_1.stdlib.exit((0, main_1.main)());

})();

/******/ })()
;
