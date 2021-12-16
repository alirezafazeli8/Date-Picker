// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1bEO8":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "635c849b833266ea";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"lzYRN":[function(require,module,exports) {
var _dateFns = require("date-fns");
const datePickerButton = document.querySelector(".date-picker-button");
const datePicker = document.querySelector(".date-picker");
const dateHeader = document.querySelector(".date-picker-header");
const currentMonth = document.querySelector(".current-month");
const prevMonthButton = document.querySelector(".prev-month-button");
const nextMonthButton = document.querySelector(".next-month-button");
const datePickerGrid = document.querySelector(".date-picker-grid-dates");
//  for current date
let sDateLected;
// format the date picker button
function setDate(date) {
    datePickerButton.innerHTML = _dateFns.format(date, "MMMM do YYY ");
    sDateLected = _dateFns.getUnixTime(date);
}
function setupDateMonth(date) {
    nextMonthButton.addEventListener("click", function() {
        setUpDatePicker(_dateFns.addMonths(date, 1));
    }, {
        once: true
    });
    prevMonthButton.addEventListener("click", function() {
        setUpDatePicker(_dateFns.addMonths(date, -1));
    }, {
        once: true
    });
}
function dayDatePickerSetup(userDate) {
    const firstWeekStart = _dateFns.startOfWeek(_dateFns.startOfMonth(userDate));
    const lastWeekEnd = _dateFns.endOfWeek(_dateFns.endOfMonth(userDate));
    const startAndEndWeekOBJ = {
        start: firstWeekStart,
        end: lastWeekEnd
    };
    const allDates = _dateFns.eachDayOfInterval(startAndEndWeekOBJ);
    datePickerGrid.innerHTML = "";
    allDates.forEach((date)=>{
        const buttonElement = document.createElement("button");
        buttonElement.classList.add("date");
        buttonElement.innerText = date.getDate();
        if (!_dateFns.isSameMonth(date, userDate)) buttonElement.classList.add("date-picker-other-month-date");
        if (_dateFns.isSameDay(date, userDate)) buttonElement.classList.add("selected");
        datePickerGrid.appendChild(buttonElement);
        buttonElement.addEventListener("click", (e)=>{
            setDate(date);
            datePicker.classList.toggle("show");
        });
    });
}
function setUpDatePicker(selectedDate) {
    currentMonth.innerHTML = _dateFns.format(selectedDate, "MMM YYY");
    setupDateMonth(selectedDate);
    dayDatePickerSetup(selectedDate);
}
//
datePickerButton.addEventListener("click", function(e) {
    datePicker.classList.toggle("show");
    setUpDatePicker(_dateFns.fromUnixTime(sDateLected));
});
setDate(new Date());

},{"date-fns":"9iKZB"}],"9iKZB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// This file is generated automatically by `scripts/build/indices.js`. Please, don't change it.
parcelHelpers.export(exports, "add", ()=>_indexJsDefault.default
);
parcelHelpers.export(exports, "addBusinessDays", ()=>_indexJsDefault1.default
);
parcelHelpers.export(exports, "addDays", ()=>_indexJsDefault2.default
);
parcelHelpers.export(exports, "addHours", ()=>_indexJsDefault3.default
);
parcelHelpers.export(exports, "addISOWeekYears", ()=>_indexJsDefault4.default
);
parcelHelpers.export(exports, "addMilliseconds", ()=>_indexJsDefault5.default
);
parcelHelpers.export(exports, "addMinutes", ()=>_indexJsDefault6.default
);
parcelHelpers.export(exports, "addMonths", ()=>_indexJsDefault7.default
);
parcelHelpers.export(exports, "addQuarters", ()=>_indexJsDefault8.default
);
parcelHelpers.export(exports, "addSeconds", ()=>_indexJsDefault9.default
);
parcelHelpers.export(exports, "addWeeks", ()=>_indexJsDefault10.default
);
parcelHelpers.export(exports, "addYears", ()=>_indexJsDefault11.default
);
parcelHelpers.export(exports, "areIntervalsOverlapping", ()=>_indexJsDefault12.default
);
parcelHelpers.export(exports, "clamp", ()=>_indexJsDefault13.default
);
parcelHelpers.export(exports, "closestIndexTo", ()=>_indexJsDefault14.default
);
parcelHelpers.export(exports, "closestTo", ()=>_indexJsDefault15.default
);
parcelHelpers.export(exports, "compareAsc", ()=>_indexJsDefault16.default
);
parcelHelpers.export(exports, "compareDesc", ()=>_indexJsDefault17.default
);
parcelHelpers.export(exports, "daysToWeeks", ()=>_indexJsDefault18.default
);
parcelHelpers.export(exports, "differenceInBusinessDays", ()=>_indexJsDefault19.default
);
parcelHelpers.export(exports, "differenceInCalendarDays", ()=>_indexJsDefault20.default
);
parcelHelpers.export(exports, "differenceInCalendarISOWeekYears", ()=>_indexJsDefault21.default
);
parcelHelpers.export(exports, "differenceInCalendarISOWeeks", ()=>_indexJsDefault22.default
);
parcelHelpers.export(exports, "differenceInCalendarMonths", ()=>_indexJsDefault23.default
);
parcelHelpers.export(exports, "differenceInCalendarQuarters", ()=>_indexJsDefault24.default
);
parcelHelpers.export(exports, "differenceInCalendarWeeks", ()=>_indexJsDefault25.default
);
parcelHelpers.export(exports, "differenceInCalendarYears", ()=>_indexJsDefault26.default
);
parcelHelpers.export(exports, "differenceInDays", ()=>_indexJsDefault27.default
);
parcelHelpers.export(exports, "differenceInHours", ()=>_indexJsDefault28.default
);
parcelHelpers.export(exports, "differenceInISOWeekYears", ()=>_indexJsDefault29.default
);
parcelHelpers.export(exports, "differenceInMilliseconds", ()=>_indexJsDefault30.default
);
parcelHelpers.export(exports, "differenceInMinutes", ()=>_indexJsDefault31.default
);
parcelHelpers.export(exports, "differenceInMonths", ()=>_indexJsDefault32.default
);
parcelHelpers.export(exports, "differenceInQuarters", ()=>_indexJsDefault33.default
);
parcelHelpers.export(exports, "differenceInSeconds", ()=>_indexJsDefault34.default
);
parcelHelpers.export(exports, "differenceInWeeks", ()=>_indexJsDefault35.default
);
parcelHelpers.export(exports, "differenceInYears", ()=>_indexJsDefault36.default
);
parcelHelpers.export(exports, "eachDayOfInterval", ()=>_indexJsDefault37.default
);
parcelHelpers.export(exports, "eachHourOfInterval", ()=>_indexJsDefault38.default
);
parcelHelpers.export(exports, "eachMinuteOfInterval", ()=>_indexJsDefault39.default
);
parcelHelpers.export(exports, "eachMonthOfInterval", ()=>_indexJsDefault40.default
);
parcelHelpers.export(exports, "eachQuarterOfInterval", ()=>_indexJsDefault41.default
);
parcelHelpers.export(exports, "eachWeekOfInterval", ()=>_indexJsDefault42.default
);
parcelHelpers.export(exports, "eachWeekendOfInterval", ()=>_indexJsDefault43.default
);
parcelHelpers.export(exports, "eachWeekendOfMonth", ()=>_indexJsDefault44.default
);
parcelHelpers.export(exports, "eachWeekendOfYear", ()=>_indexJsDefault45.default
);
parcelHelpers.export(exports, "eachYearOfInterval", ()=>_indexJsDefault46.default
);
parcelHelpers.export(exports, "endOfDay", ()=>_indexJsDefault47.default
);
parcelHelpers.export(exports, "endOfDecade", ()=>_indexJsDefault48.default
);
parcelHelpers.export(exports, "endOfHour", ()=>_indexJsDefault49.default
);
parcelHelpers.export(exports, "endOfISOWeek", ()=>_indexJsDefault50.default
);
parcelHelpers.export(exports, "endOfISOWeekYear", ()=>_indexJsDefault51.default
);
parcelHelpers.export(exports, "endOfMinute", ()=>_indexJsDefault52.default
);
parcelHelpers.export(exports, "endOfMonth", ()=>_indexJsDefault53.default
);
parcelHelpers.export(exports, "endOfQuarter", ()=>_indexJsDefault54.default
);
parcelHelpers.export(exports, "endOfSecond", ()=>_indexJsDefault55.default
);
parcelHelpers.export(exports, "endOfToday", ()=>_indexJsDefault56.default
);
parcelHelpers.export(exports, "endOfTomorrow", ()=>_indexJsDefault57.default
);
parcelHelpers.export(exports, "endOfWeek", ()=>_indexJsDefault58.default
);
parcelHelpers.export(exports, "endOfYear", ()=>_indexJsDefault59.default
);
parcelHelpers.export(exports, "endOfYesterday", ()=>_indexJsDefault60.default
);
parcelHelpers.export(exports, "format", ()=>_indexJsDefault61.default
);
parcelHelpers.export(exports, "formatDistance", ()=>_indexJsDefault62.default
);
parcelHelpers.export(exports, "formatDistanceStrict", ()=>_indexJsDefault63.default
);
parcelHelpers.export(exports, "formatDistanceToNow", ()=>_indexJsDefault64.default
);
parcelHelpers.export(exports, "formatDistanceToNowStrict", ()=>_indexJsDefault65.default
);
parcelHelpers.export(exports, "formatDuration", ()=>_indexJsDefault66.default
);
parcelHelpers.export(exports, "formatISO", ()=>_indexJsDefault67.default
);
parcelHelpers.export(exports, "formatISO9075", ()=>_indexJsDefault68.default
);
parcelHelpers.export(exports, "formatISODuration", ()=>_indexJsDefault69.default
);
parcelHelpers.export(exports, "formatRFC3339", ()=>_indexJsDefault70.default
);
parcelHelpers.export(exports, "formatRFC7231", ()=>_indexJsDefault71.default
);
parcelHelpers.export(exports, "formatRelative", ()=>_indexJsDefault72.default
);
parcelHelpers.export(exports, "fromUnixTime", ()=>_indexJsDefault73.default
);
parcelHelpers.export(exports, "getDate", ()=>_indexJsDefault74.default
);
parcelHelpers.export(exports, "getDay", ()=>_indexJsDefault75.default
);
parcelHelpers.export(exports, "getDayOfYear", ()=>_indexJsDefault76.default
);
parcelHelpers.export(exports, "getDaysInMonth", ()=>_indexJsDefault77.default
);
parcelHelpers.export(exports, "getDaysInYear", ()=>_indexJsDefault78.default
);
parcelHelpers.export(exports, "getDecade", ()=>_indexJsDefault79.default
);
parcelHelpers.export(exports, "getHours", ()=>_indexJsDefault80.default
);
parcelHelpers.export(exports, "getISODay", ()=>_indexJsDefault81.default
);
parcelHelpers.export(exports, "getISOWeek", ()=>_indexJsDefault82.default
);
parcelHelpers.export(exports, "getISOWeekYear", ()=>_indexJsDefault83.default
);
parcelHelpers.export(exports, "getISOWeeksInYear", ()=>_indexJsDefault84.default
);
parcelHelpers.export(exports, "getMilliseconds", ()=>_indexJsDefault85.default
);
parcelHelpers.export(exports, "getMinutes", ()=>_indexJsDefault86.default
);
parcelHelpers.export(exports, "getMonth", ()=>_indexJsDefault87.default
);
parcelHelpers.export(exports, "getOverlappingDaysInIntervals", ()=>_indexJsDefault88.default
);
parcelHelpers.export(exports, "getQuarter", ()=>_indexJsDefault89.default
);
parcelHelpers.export(exports, "getSeconds", ()=>_indexJsDefault90.default
);
parcelHelpers.export(exports, "getTime", ()=>_indexJsDefault91.default
);
parcelHelpers.export(exports, "getUnixTime", ()=>_indexJsDefault92.default
);
parcelHelpers.export(exports, "getWeek", ()=>_indexJsDefault93.default
);
parcelHelpers.export(exports, "getWeekOfMonth", ()=>_indexJsDefault94.default
);
parcelHelpers.export(exports, "getWeekYear", ()=>_indexJsDefault95.default
);
parcelHelpers.export(exports, "getWeeksInMonth", ()=>_indexJsDefault96.default
);
parcelHelpers.export(exports, "getYear", ()=>_indexJsDefault97.default
);
parcelHelpers.export(exports, "hoursToMilliseconds", ()=>_indexJsDefault98.default
);
parcelHelpers.export(exports, "hoursToMinutes", ()=>_indexJsDefault99.default
);
parcelHelpers.export(exports, "hoursToSeconds", ()=>_indexJsDefault100.default
);
parcelHelpers.export(exports, "intervalToDuration", ()=>_indexJsDefault101.default
);
parcelHelpers.export(exports, "intlFormat", ()=>_indexJsDefault102.default
);
parcelHelpers.export(exports, "isAfter", ()=>_indexJsDefault103.default
);
parcelHelpers.export(exports, "isBefore", ()=>_indexJsDefault104.default
);
parcelHelpers.export(exports, "isDate", ()=>_indexJsDefault105.default
);
parcelHelpers.export(exports, "isEqual", ()=>_indexJsDefault106.default
);
parcelHelpers.export(exports, "isExists", ()=>_indexJsDefault107.default
);
parcelHelpers.export(exports, "isFirstDayOfMonth", ()=>_indexJsDefault108.default
);
parcelHelpers.export(exports, "isFriday", ()=>_indexJsDefault109.default
);
parcelHelpers.export(exports, "isFuture", ()=>_indexJsDefault110.default
);
parcelHelpers.export(exports, "isLastDayOfMonth", ()=>_indexJsDefault111.default
);
parcelHelpers.export(exports, "isLeapYear", ()=>_indexJsDefault112.default
);
parcelHelpers.export(exports, "isMatch", ()=>_indexJsDefault113.default
);
parcelHelpers.export(exports, "isMonday", ()=>_indexJsDefault114.default
);
parcelHelpers.export(exports, "isPast", ()=>_indexJsDefault115.default
);
parcelHelpers.export(exports, "isSameDay", ()=>_indexJsDefault116.default
);
parcelHelpers.export(exports, "isSameHour", ()=>_indexJsDefault117.default
);
parcelHelpers.export(exports, "isSameISOWeek", ()=>_indexJsDefault118.default
);
parcelHelpers.export(exports, "isSameISOWeekYear", ()=>_indexJsDefault119.default
);
parcelHelpers.export(exports, "isSameMinute", ()=>_indexJsDefault120.default
);
parcelHelpers.export(exports, "isSameMonth", ()=>_indexJsDefault121.default
);
parcelHelpers.export(exports, "isSameQuarter", ()=>_indexJsDefault122.default
);
parcelHelpers.export(exports, "isSameSecond", ()=>_indexJsDefault123.default
);
parcelHelpers.export(exports, "isSameWeek", ()=>_indexJsDefault124.default
);
parcelHelpers.export(exports, "isSameYear", ()=>_indexJsDefault125.default
);
parcelHelpers.export(exports, "isSaturday", ()=>_indexJsDefault126.default
);
parcelHelpers.export(exports, "isSunday", ()=>_indexJsDefault127.default
);
parcelHelpers.export(exports, "isThisHour", ()=>_indexJsDefault128.default
);
parcelHelpers.export(exports, "isThisISOWeek", ()=>_indexJsDefault129.default
);
parcelHelpers.export(exports, "isThisMinute", ()=>_indexJsDefault130.default
);
parcelHelpers.export(exports, "isThisMonth", ()=>_indexJsDefault131.default
);
parcelHelpers.export(exports, "isThisQuarter", ()=>_indexJsDefault132.default
);
parcelHelpers.export(exports, "isThisSecond", ()=>_indexJsDefault133.default
);
parcelHelpers.export(exports, "isThisWeek", ()=>_indexJsDefault134.default
);
parcelHelpers.export(exports, "isThisYear", ()=>_indexJsDefault135.default
);
parcelHelpers.export(exports, "isThursday", ()=>_indexJsDefault136.default
);
parcelHelpers.export(exports, "isToday", ()=>_indexJsDefault137.default
);
parcelHelpers.export(exports, "isTomorrow", ()=>_indexJsDefault138.default
);
parcelHelpers.export(exports, "isTuesday", ()=>_indexJsDefault139.default
);
parcelHelpers.export(exports, "isValid", ()=>_indexJsDefault140.default
);
parcelHelpers.export(exports, "isWednesday", ()=>_indexJsDefault141.default
);
parcelHelpers.export(exports, "isWeekend", ()=>_indexJsDefault142.default
);
parcelHelpers.export(exports, "isWithinInterval", ()=>_indexJsDefault143.default
);
parcelHelpers.export(exports, "isYesterday", ()=>_indexJsDefault144.default
);
parcelHelpers.export(exports, "lastDayOfDecade", ()=>_indexJsDefault145.default
);
parcelHelpers.export(exports, "lastDayOfISOWeek", ()=>_indexJsDefault146.default
);
parcelHelpers.export(exports, "lastDayOfISOWeekYear", ()=>_indexJsDefault147.default
);
parcelHelpers.export(exports, "lastDayOfMonth", ()=>_indexJsDefault148.default
);
parcelHelpers.export(exports, "lastDayOfQuarter", ()=>_indexJsDefault149.default
);
parcelHelpers.export(exports, "lastDayOfWeek", ()=>_indexJsDefault150.default
);
parcelHelpers.export(exports, "lastDayOfYear", ()=>_indexJsDefault151.default
);
parcelHelpers.export(exports, "lightFormat", ()=>_indexJsDefault152.default
);
parcelHelpers.export(exports, "max", ()=>_indexJsDefault153.default
);
parcelHelpers.export(exports, "milliseconds", ()=>_indexJsDefault154.default
);
parcelHelpers.export(exports, "millisecondsToHours", ()=>_indexJsDefault155.default
);
parcelHelpers.export(exports, "millisecondsToMinutes", ()=>_indexJsDefault156.default
);
parcelHelpers.export(exports, "millisecondsToSeconds", ()=>_indexJsDefault157.default
);
parcelHelpers.export(exports, "min", ()=>_indexJsDefault158.default
);
parcelHelpers.export(exports, "minutesToHours", ()=>_indexJsDefault159.default
);
parcelHelpers.export(exports, "minutesToMilliseconds", ()=>_indexJsDefault160.default
);
parcelHelpers.export(exports, "minutesToSeconds", ()=>_indexJsDefault161.default
);
parcelHelpers.export(exports, "monthsToQuarters", ()=>_indexJsDefault162.default
);
parcelHelpers.export(exports, "monthsToYears", ()=>_indexJsDefault163.default
);
parcelHelpers.export(exports, "nextDay", ()=>_indexJsDefault164.default
);
parcelHelpers.export(exports, "nextFriday", ()=>_indexJsDefault165.default
);
parcelHelpers.export(exports, "nextMonday", ()=>_indexJsDefault166.default
);
parcelHelpers.export(exports, "nextSaturday", ()=>_indexJsDefault167.default
);
parcelHelpers.export(exports, "nextSunday", ()=>_indexJsDefault168.default
);
parcelHelpers.export(exports, "nextThursday", ()=>_indexJsDefault169.default
);
parcelHelpers.export(exports, "nextTuesday", ()=>_indexJsDefault170.default
);
parcelHelpers.export(exports, "nextWednesday", ()=>_indexJsDefault171.default
);
parcelHelpers.export(exports, "parse", ()=>_indexJsDefault172.default
);
parcelHelpers.export(exports, "parseISO", ()=>_indexJsDefault173.default
);
parcelHelpers.export(exports, "parseJSON", ()=>_indexJsDefault174.default
);
parcelHelpers.export(exports, "previousDay", ()=>_indexJsDefault175.default
);
parcelHelpers.export(exports, "previousFriday", ()=>_indexJsDefault176.default
);
parcelHelpers.export(exports, "previousMonday", ()=>_indexJsDefault177.default
);
parcelHelpers.export(exports, "previousSaturday", ()=>_indexJsDefault178.default
);
parcelHelpers.export(exports, "previousSunday", ()=>_indexJsDefault179.default
);
parcelHelpers.export(exports, "previousThursday", ()=>_indexJsDefault180.default
);
parcelHelpers.export(exports, "previousTuesday", ()=>_indexJsDefault181.default
);
parcelHelpers.export(exports, "previousWednesday", ()=>_indexJsDefault182.default
);
parcelHelpers.export(exports, "quartersToMonths", ()=>_indexJsDefault183.default
);
parcelHelpers.export(exports, "quartersToYears", ()=>_indexJsDefault184.default
);
parcelHelpers.export(exports, "roundToNearestMinutes", ()=>_indexJsDefault185.default
);
parcelHelpers.export(exports, "secondsToHours", ()=>_indexJsDefault186.default
);
parcelHelpers.export(exports, "secondsToMilliseconds", ()=>_indexJsDefault187.default
);
parcelHelpers.export(exports, "secondsToMinutes", ()=>_indexJsDefault188.default
);
parcelHelpers.export(exports, "set", ()=>_indexJsDefault189.default
);
parcelHelpers.export(exports, "setDate", ()=>_indexJsDefault190.default
);
parcelHelpers.export(exports, "setDay", ()=>_indexJsDefault191.default
);
parcelHelpers.export(exports, "setDayOfYear", ()=>_indexJsDefault192.default
);
parcelHelpers.export(exports, "setHours", ()=>_indexJsDefault193.default
);
parcelHelpers.export(exports, "setISODay", ()=>_indexJsDefault194.default
);
parcelHelpers.export(exports, "setISOWeek", ()=>_indexJsDefault195.default
);
parcelHelpers.export(exports, "setISOWeekYear", ()=>_indexJsDefault196.default
);
parcelHelpers.export(exports, "setMilliseconds", ()=>_indexJsDefault197.default
);
parcelHelpers.export(exports, "setMinutes", ()=>_indexJsDefault198.default
);
parcelHelpers.export(exports, "setMonth", ()=>_indexJsDefault199.default
);
parcelHelpers.export(exports, "setQuarter", ()=>_indexJsDefault200.default
);
parcelHelpers.export(exports, "setSeconds", ()=>_indexJsDefault201.default
);
parcelHelpers.export(exports, "setWeek", ()=>_indexJsDefault202.default
);
parcelHelpers.export(exports, "setWeekYear", ()=>_indexJsDefault203.default
);
parcelHelpers.export(exports, "setYear", ()=>_indexJsDefault204.default
);
parcelHelpers.export(exports, "startOfDay", ()=>_indexJsDefault205.default
);
parcelHelpers.export(exports, "startOfDecade", ()=>_indexJsDefault206.default
);
parcelHelpers.export(exports, "startOfHour", ()=>_indexJsDefault207.default
);
parcelHelpers.export(exports, "startOfISOWeek", ()=>_indexJsDefault208.default
);
parcelHelpers.export(exports, "startOfISOWeekYear", ()=>_indexJsDefault209.default
);
parcelHelpers.export(exports, "startOfMinute", ()=>_indexJsDefault210.default
);
parcelHelpers.export(exports, "startOfMonth", ()=>_indexJsDefault211.default
);
parcelHelpers.export(exports, "startOfQuarter", ()=>_indexJsDefault212.default
);
parcelHelpers.export(exports, "startOfSecond", ()=>_indexJsDefault213.default
);
parcelHelpers.export(exports, "startOfToday", ()=>_indexJsDefault214.default
);
parcelHelpers.export(exports, "startOfTomorrow", ()=>_indexJsDefault215.default
);
parcelHelpers.export(exports, "startOfWeek", ()=>_indexJsDefault216.default
);
parcelHelpers.export(exports, "startOfWeekYear", ()=>_indexJsDefault217.default
);
parcelHelpers.export(exports, "startOfYear", ()=>_indexJsDefault218.default
);
parcelHelpers.export(exports, "startOfYesterday", ()=>_indexJsDefault219.default
);
parcelHelpers.export(exports, "sub", ()=>_indexJsDefault220.default
);
parcelHelpers.export(exports, "subBusinessDays", ()=>_indexJsDefault221.default
);
parcelHelpers.export(exports, "subDays", ()=>_indexJsDefault222.default
);
parcelHelpers.export(exports, "subHours", ()=>_indexJsDefault223.default
);
parcelHelpers.export(exports, "subISOWeekYears", ()=>_indexJsDefault224.default
);
parcelHelpers.export(exports, "subMilliseconds", ()=>_indexJsDefault225.default
);
parcelHelpers.export(exports, "subMinutes", ()=>_indexJsDefault226.default
);
parcelHelpers.export(exports, "subMonths", ()=>_indexJsDefault227.default
);
parcelHelpers.export(exports, "subQuarters", ()=>_indexJsDefault228.default
);
parcelHelpers.export(exports, "subSeconds", ()=>_indexJsDefault229.default
);
parcelHelpers.export(exports, "subWeeks", ()=>_indexJsDefault230.default
);
parcelHelpers.export(exports, "subYears", ()=>_indexJsDefault231.default
);
parcelHelpers.export(exports, "toDate", ()=>_indexJsDefault232.default
);
parcelHelpers.export(exports, "weeksToDays", ()=>_indexJsDefault233.default
);
parcelHelpers.export(exports, "yearsToMonths", ()=>_indexJsDefault234.default
);
parcelHelpers.export(exports, "yearsToQuarters", ()=>_indexJsDefault235.default
);
var _indexJs = require("./add/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("./addBusinessDays/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("./addDays/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("./addHours/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("./addISOWeekYears/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("./addMilliseconds/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("./addMinutes/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs6);
var _indexJs7 = require("./addMonths/index.js");
var _indexJsDefault7 = parcelHelpers.interopDefault(_indexJs7);
var _indexJs8 = require("./addQuarters/index.js");
var _indexJsDefault8 = parcelHelpers.interopDefault(_indexJs8);
var _indexJs9 = require("./addSeconds/index.js");
var _indexJsDefault9 = parcelHelpers.interopDefault(_indexJs9);
var _indexJs10 = require("./addWeeks/index.js");
var _indexJsDefault10 = parcelHelpers.interopDefault(_indexJs10);
var _indexJs11 = require("./addYears/index.js");
var _indexJsDefault11 = parcelHelpers.interopDefault(_indexJs11);
var _indexJs12 = require("./areIntervalsOverlapping/index.js");
var _indexJsDefault12 = parcelHelpers.interopDefault(_indexJs12);
var _indexJs13 = require("./clamp/index.js");
var _indexJsDefault13 = parcelHelpers.interopDefault(_indexJs13);
var _indexJs14 = require("./closestIndexTo/index.js");
var _indexJsDefault14 = parcelHelpers.interopDefault(_indexJs14);
var _indexJs15 = require("./closestTo/index.js");
var _indexJsDefault15 = parcelHelpers.interopDefault(_indexJs15);
var _indexJs16 = require("./compareAsc/index.js");
var _indexJsDefault16 = parcelHelpers.interopDefault(_indexJs16);
var _indexJs17 = require("./compareDesc/index.js");
var _indexJsDefault17 = parcelHelpers.interopDefault(_indexJs17);
var _indexJs18 = require("./daysToWeeks/index.js");
var _indexJsDefault18 = parcelHelpers.interopDefault(_indexJs18);
var _indexJs19 = require("./differenceInBusinessDays/index.js");
var _indexJsDefault19 = parcelHelpers.interopDefault(_indexJs19);
var _indexJs20 = require("./differenceInCalendarDays/index.js");
var _indexJsDefault20 = parcelHelpers.interopDefault(_indexJs20);
var _indexJs21 = require("./differenceInCalendarISOWeekYears/index.js");
var _indexJsDefault21 = parcelHelpers.interopDefault(_indexJs21);
var _indexJs22 = require("./differenceInCalendarISOWeeks/index.js");
var _indexJsDefault22 = parcelHelpers.interopDefault(_indexJs22);
var _indexJs23 = require("./differenceInCalendarMonths/index.js");
var _indexJsDefault23 = parcelHelpers.interopDefault(_indexJs23);
var _indexJs24 = require("./differenceInCalendarQuarters/index.js");
var _indexJsDefault24 = parcelHelpers.interopDefault(_indexJs24);
var _indexJs25 = require("./differenceInCalendarWeeks/index.js");
var _indexJsDefault25 = parcelHelpers.interopDefault(_indexJs25);
var _indexJs26 = require("./differenceInCalendarYears/index.js");
var _indexJsDefault26 = parcelHelpers.interopDefault(_indexJs26);
var _indexJs27 = require("./differenceInDays/index.js");
var _indexJsDefault27 = parcelHelpers.interopDefault(_indexJs27);
var _indexJs28 = require("./differenceInHours/index.js");
var _indexJsDefault28 = parcelHelpers.interopDefault(_indexJs28);
var _indexJs29 = require("./differenceInISOWeekYears/index.js");
var _indexJsDefault29 = parcelHelpers.interopDefault(_indexJs29);
var _indexJs30 = require("./differenceInMilliseconds/index.js");
var _indexJsDefault30 = parcelHelpers.interopDefault(_indexJs30);
var _indexJs31 = require("./differenceInMinutes/index.js");
var _indexJsDefault31 = parcelHelpers.interopDefault(_indexJs31);
var _indexJs32 = require("./differenceInMonths/index.js");
var _indexJsDefault32 = parcelHelpers.interopDefault(_indexJs32);
var _indexJs33 = require("./differenceInQuarters/index.js");
var _indexJsDefault33 = parcelHelpers.interopDefault(_indexJs33);
var _indexJs34 = require("./differenceInSeconds/index.js");
var _indexJsDefault34 = parcelHelpers.interopDefault(_indexJs34);
var _indexJs35 = require("./differenceInWeeks/index.js");
var _indexJsDefault35 = parcelHelpers.interopDefault(_indexJs35);
var _indexJs36 = require("./differenceInYears/index.js");
var _indexJsDefault36 = parcelHelpers.interopDefault(_indexJs36);
var _indexJs37 = require("./eachDayOfInterval/index.js");
var _indexJsDefault37 = parcelHelpers.interopDefault(_indexJs37);
var _indexJs38 = require("./eachHourOfInterval/index.js");
var _indexJsDefault38 = parcelHelpers.interopDefault(_indexJs38);
var _indexJs39 = require("./eachMinuteOfInterval/index.js");
var _indexJsDefault39 = parcelHelpers.interopDefault(_indexJs39);
var _indexJs40 = require("./eachMonthOfInterval/index.js");
var _indexJsDefault40 = parcelHelpers.interopDefault(_indexJs40);
var _indexJs41 = require("./eachQuarterOfInterval/index.js");
var _indexJsDefault41 = parcelHelpers.interopDefault(_indexJs41);
var _indexJs42 = require("./eachWeekOfInterval/index.js");
var _indexJsDefault42 = parcelHelpers.interopDefault(_indexJs42);
var _indexJs43 = require("./eachWeekendOfInterval/index.js");
var _indexJsDefault43 = parcelHelpers.interopDefault(_indexJs43);
var _indexJs44 = require("./eachWeekendOfMonth/index.js");
var _indexJsDefault44 = parcelHelpers.interopDefault(_indexJs44);
var _indexJs45 = require("./eachWeekendOfYear/index.js");
var _indexJsDefault45 = parcelHelpers.interopDefault(_indexJs45);
var _indexJs46 = require("./eachYearOfInterval/index.js");
var _indexJsDefault46 = parcelHelpers.interopDefault(_indexJs46);
var _indexJs47 = require("./endOfDay/index.js");
var _indexJsDefault47 = parcelHelpers.interopDefault(_indexJs47);
var _indexJs48 = require("./endOfDecade/index.js");
var _indexJsDefault48 = parcelHelpers.interopDefault(_indexJs48);
var _indexJs49 = require("./endOfHour/index.js");
var _indexJsDefault49 = parcelHelpers.interopDefault(_indexJs49);
var _indexJs50 = require("./endOfISOWeek/index.js");
var _indexJsDefault50 = parcelHelpers.interopDefault(_indexJs50);
var _indexJs51 = require("./endOfISOWeekYear/index.js");
var _indexJsDefault51 = parcelHelpers.interopDefault(_indexJs51);
var _indexJs52 = require("./endOfMinute/index.js");
var _indexJsDefault52 = parcelHelpers.interopDefault(_indexJs52);
var _indexJs53 = require("./endOfMonth/index.js");
var _indexJsDefault53 = parcelHelpers.interopDefault(_indexJs53);
var _indexJs54 = require("./endOfQuarter/index.js");
var _indexJsDefault54 = parcelHelpers.interopDefault(_indexJs54);
var _indexJs55 = require("./endOfSecond/index.js");
var _indexJsDefault55 = parcelHelpers.interopDefault(_indexJs55);
var _indexJs56 = require("./endOfToday/index.js");
var _indexJsDefault56 = parcelHelpers.interopDefault(_indexJs56);
var _indexJs57 = require("./endOfTomorrow/index.js");
var _indexJsDefault57 = parcelHelpers.interopDefault(_indexJs57);
var _indexJs58 = require("./endOfWeek/index.js");
var _indexJsDefault58 = parcelHelpers.interopDefault(_indexJs58);
var _indexJs59 = require("./endOfYear/index.js");
var _indexJsDefault59 = parcelHelpers.interopDefault(_indexJs59);
var _indexJs60 = require("./endOfYesterday/index.js");
var _indexJsDefault60 = parcelHelpers.interopDefault(_indexJs60);
var _indexJs61 = require("./format/index.js");
var _indexJsDefault61 = parcelHelpers.interopDefault(_indexJs61);
var _indexJs62 = require("./formatDistance/index.js");
var _indexJsDefault62 = parcelHelpers.interopDefault(_indexJs62);
var _indexJs63 = require("./formatDistanceStrict/index.js");
var _indexJsDefault63 = parcelHelpers.interopDefault(_indexJs63);
var _indexJs64 = require("./formatDistanceToNow/index.js");
var _indexJsDefault64 = parcelHelpers.interopDefault(_indexJs64);
var _indexJs65 = require("./formatDistanceToNowStrict/index.js");
var _indexJsDefault65 = parcelHelpers.interopDefault(_indexJs65);
var _indexJs66 = require("./formatDuration/index.js");
var _indexJsDefault66 = parcelHelpers.interopDefault(_indexJs66);
var _indexJs67 = require("./formatISO/index.js");
var _indexJsDefault67 = parcelHelpers.interopDefault(_indexJs67);
var _indexJs68 = require("./formatISO9075/index.js");
var _indexJsDefault68 = parcelHelpers.interopDefault(_indexJs68);
var _indexJs69 = require("./formatISODuration/index.js");
var _indexJsDefault69 = parcelHelpers.interopDefault(_indexJs69);
var _indexJs70 = require("./formatRFC3339/index.js");
var _indexJsDefault70 = parcelHelpers.interopDefault(_indexJs70);
var _indexJs71 = require("./formatRFC7231/index.js");
var _indexJsDefault71 = parcelHelpers.interopDefault(_indexJs71);
var _indexJs72 = require("./formatRelative/index.js");
var _indexJsDefault72 = parcelHelpers.interopDefault(_indexJs72);
var _indexJs73 = require("./fromUnixTime/index.js");
var _indexJsDefault73 = parcelHelpers.interopDefault(_indexJs73);
var _indexJs74 = require("./getDate/index.js");
var _indexJsDefault74 = parcelHelpers.interopDefault(_indexJs74);
var _indexJs75 = require("./getDay/index.js");
var _indexJsDefault75 = parcelHelpers.interopDefault(_indexJs75);
var _indexJs76 = require("./getDayOfYear/index.js");
var _indexJsDefault76 = parcelHelpers.interopDefault(_indexJs76);
var _indexJs77 = require("./getDaysInMonth/index.js");
var _indexJsDefault77 = parcelHelpers.interopDefault(_indexJs77);
var _indexJs78 = require("./getDaysInYear/index.js");
var _indexJsDefault78 = parcelHelpers.interopDefault(_indexJs78);
var _indexJs79 = require("./getDecade/index.js");
var _indexJsDefault79 = parcelHelpers.interopDefault(_indexJs79);
var _indexJs80 = require("./getHours/index.js");
var _indexJsDefault80 = parcelHelpers.interopDefault(_indexJs80);
var _indexJs81 = require("./getISODay/index.js");
var _indexJsDefault81 = parcelHelpers.interopDefault(_indexJs81);
var _indexJs82 = require("./getISOWeek/index.js");
var _indexJsDefault82 = parcelHelpers.interopDefault(_indexJs82);
var _indexJs83 = require("./getISOWeekYear/index.js");
var _indexJsDefault83 = parcelHelpers.interopDefault(_indexJs83);
var _indexJs84 = require("./getISOWeeksInYear/index.js");
var _indexJsDefault84 = parcelHelpers.interopDefault(_indexJs84);
var _indexJs85 = require("./getMilliseconds/index.js");
var _indexJsDefault85 = parcelHelpers.interopDefault(_indexJs85);
var _indexJs86 = require("./getMinutes/index.js");
var _indexJsDefault86 = parcelHelpers.interopDefault(_indexJs86);
var _indexJs87 = require("./getMonth/index.js");
var _indexJsDefault87 = parcelHelpers.interopDefault(_indexJs87);
var _indexJs88 = require("./getOverlappingDaysInIntervals/index.js");
var _indexJsDefault88 = parcelHelpers.interopDefault(_indexJs88);
var _indexJs89 = require("./getQuarter/index.js");
var _indexJsDefault89 = parcelHelpers.interopDefault(_indexJs89);
var _indexJs90 = require("./getSeconds/index.js");
var _indexJsDefault90 = parcelHelpers.interopDefault(_indexJs90);
var _indexJs91 = require("./getTime/index.js");
var _indexJsDefault91 = parcelHelpers.interopDefault(_indexJs91);
var _indexJs92 = require("./getUnixTime/index.js");
var _indexJsDefault92 = parcelHelpers.interopDefault(_indexJs92);
var _indexJs93 = require("./getWeek/index.js");
var _indexJsDefault93 = parcelHelpers.interopDefault(_indexJs93);
var _indexJs94 = require("./getWeekOfMonth/index.js");
var _indexJsDefault94 = parcelHelpers.interopDefault(_indexJs94);
var _indexJs95 = require("./getWeekYear/index.js");
var _indexJsDefault95 = parcelHelpers.interopDefault(_indexJs95);
var _indexJs96 = require("./getWeeksInMonth/index.js");
var _indexJsDefault96 = parcelHelpers.interopDefault(_indexJs96);
var _indexJs97 = require("./getYear/index.js");
var _indexJsDefault97 = parcelHelpers.interopDefault(_indexJs97);
var _indexJs98 = require("./hoursToMilliseconds/index.js");
var _indexJsDefault98 = parcelHelpers.interopDefault(_indexJs98);
var _indexJs99 = require("./hoursToMinutes/index.js");
var _indexJsDefault99 = parcelHelpers.interopDefault(_indexJs99);
var _indexJs100 = require("./hoursToSeconds/index.js");
var _indexJsDefault100 = parcelHelpers.interopDefault(_indexJs100);
var _indexJs101 = require("./intervalToDuration/index.js");
var _indexJsDefault101 = parcelHelpers.interopDefault(_indexJs101);
var _indexJs102 = require("./intlFormat/index.js");
var _indexJsDefault102 = parcelHelpers.interopDefault(_indexJs102);
var _indexJs103 = require("./isAfter/index.js");
var _indexJsDefault103 = parcelHelpers.interopDefault(_indexJs103);
var _indexJs104 = require("./isBefore/index.js");
var _indexJsDefault104 = parcelHelpers.interopDefault(_indexJs104);
var _indexJs105 = require("./isDate/index.js");
var _indexJsDefault105 = parcelHelpers.interopDefault(_indexJs105);
var _indexJs106 = require("./isEqual/index.js");
var _indexJsDefault106 = parcelHelpers.interopDefault(_indexJs106);
var _indexJs107 = require("./isExists/index.js");
var _indexJsDefault107 = parcelHelpers.interopDefault(_indexJs107);
var _indexJs108 = require("./isFirstDayOfMonth/index.js");
var _indexJsDefault108 = parcelHelpers.interopDefault(_indexJs108);
var _indexJs109 = require("./isFriday/index.js");
var _indexJsDefault109 = parcelHelpers.interopDefault(_indexJs109);
var _indexJs110 = require("./isFuture/index.js");
var _indexJsDefault110 = parcelHelpers.interopDefault(_indexJs110);
var _indexJs111 = require("./isLastDayOfMonth/index.js");
var _indexJsDefault111 = parcelHelpers.interopDefault(_indexJs111);
var _indexJs112 = require("./isLeapYear/index.js");
var _indexJsDefault112 = parcelHelpers.interopDefault(_indexJs112);
var _indexJs113 = require("./isMatch/index.js");
var _indexJsDefault113 = parcelHelpers.interopDefault(_indexJs113);
var _indexJs114 = require("./isMonday/index.js");
var _indexJsDefault114 = parcelHelpers.interopDefault(_indexJs114);
var _indexJs115 = require("./isPast/index.js");
var _indexJsDefault115 = parcelHelpers.interopDefault(_indexJs115);
var _indexJs116 = require("./isSameDay/index.js");
var _indexJsDefault116 = parcelHelpers.interopDefault(_indexJs116);
var _indexJs117 = require("./isSameHour/index.js");
var _indexJsDefault117 = parcelHelpers.interopDefault(_indexJs117);
var _indexJs118 = require("./isSameISOWeek/index.js");
var _indexJsDefault118 = parcelHelpers.interopDefault(_indexJs118);
var _indexJs119 = require("./isSameISOWeekYear/index.js");
var _indexJsDefault119 = parcelHelpers.interopDefault(_indexJs119);
var _indexJs120 = require("./isSameMinute/index.js");
var _indexJsDefault120 = parcelHelpers.interopDefault(_indexJs120);
var _indexJs121 = require("./isSameMonth/index.js");
var _indexJsDefault121 = parcelHelpers.interopDefault(_indexJs121);
var _indexJs122 = require("./isSameQuarter/index.js");
var _indexJsDefault122 = parcelHelpers.interopDefault(_indexJs122);
var _indexJs123 = require("./isSameSecond/index.js");
var _indexJsDefault123 = parcelHelpers.interopDefault(_indexJs123);
var _indexJs124 = require("./isSameWeek/index.js");
var _indexJsDefault124 = parcelHelpers.interopDefault(_indexJs124);
var _indexJs125 = require("./isSameYear/index.js");
var _indexJsDefault125 = parcelHelpers.interopDefault(_indexJs125);
var _indexJs126 = require("./isSaturday/index.js");
var _indexJsDefault126 = parcelHelpers.interopDefault(_indexJs126);
var _indexJs127 = require("./isSunday/index.js");
var _indexJsDefault127 = parcelHelpers.interopDefault(_indexJs127);
var _indexJs128 = require("./isThisHour/index.js");
var _indexJsDefault128 = parcelHelpers.interopDefault(_indexJs128);
var _indexJs129 = require("./isThisISOWeek/index.js");
var _indexJsDefault129 = parcelHelpers.interopDefault(_indexJs129);
var _indexJs130 = require("./isThisMinute/index.js");
var _indexJsDefault130 = parcelHelpers.interopDefault(_indexJs130);
var _indexJs131 = require("./isThisMonth/index.js");
var _indexJsDefault131 = parcelHelpers.interopDefault(_indexJs131);
var _indexJs132 = require("./isThisQuarter/index.js");
var _indexJsDefault132 = parcelHelpers.interopDefault(_indexJs132);
var _indexJs133 = require("./isThisSecond/index.js");
var _indexJsDefault133 = parcelHelpers.interopDefault(_indexJs133);
var _indexJs134 = require("./isThisWeek/index.js");
var _indexJsDefault134 = parcelHelpers.interopDefault(_indexJs134);
var _indexJs135 = require("./isThisYear/index.js");
var _indexJsDefault135 = parcelHelpers.interopDefault(_indexJs135);
var _indexJs136 = require("./isThursday/index.js");
var _indexJsDefault136 = parcelHelpers.interopDefault(_indexJs136);
var _indexJs137 = require("./isToday/index.js");
var _indexJsDefault137 = parcelHelpers.interopDefault(_indexJs137);
var _indexJs138 = require("./isTomorrow/index.js");
var _indexJsDefault138 = parcelHelpers.interopDefault(_indexJs138);
var _indexJs139 = require("./isTuesday/index.js");
var _indexJsDefault139 = parcelHelpers.interopDefault(_indexJs139);
var _indexJs140 = require("./isValid/index.js");
var _indexJsDefault140 = parcelHelpers.interopDefault(_indexJs140);
var _indexJs141 = require("./isWednesday/index.js");
var _indexJsDefault141 = parcelHelpers.interopDefault(_indexJs141);
var _indexJs142 = require("./isWeekend/index.js");
var _indexJsDefault142 = parcelHelpers.interopDefault(_indexJs142);
var _indexJs143 = require("./isWithinInterval/index.js");
var _indexJsDefault143 = parcelHelpers.interopDefault(_indexJs143);
var _indexJs144 = require("./isYesterday/index.js");
var _indexJsDefault144 = parcelHelpers.interopDefault(_indexJs144);
var _indexJs145 = require("./lastDayOfDecade/index.js");
var _indexJsDefault145 = parcelHelpers.interopDefault(_indexJs145);
var _indexJs146 = require("./lastDayOfISOWeek/index.js");
var _indexJsDefault146 = parcelHelpers.interopDefault(_indexJs146);
var _indexJs147 = require("./lastDayOfISOWeekYear/index.js");
var _indexJsDefault147 = parcelHelpers.interopDefault(_indexJs147);
var _indexJs148 = require("./lastDayOfMonth/index.js");
var _indexJsDefault148 = parcelHelpers.interopDefault(_indexJs148);
var _indexJs149 = require("./lastDayOfQuarter/index.js");
var _indexJsDefault149 = parcelHelpers.interopDefault(_indexJs149);
var _indexJs150 = require("./lastDayOfWeek/index.js");
var _indexJsDefault150 = parcelHelpers.interopDefault(_indexJs150);
var _indexJs151 = require("./lastDayOfYear/index.js");
var _indexJsDefault151 = parcelHelpers.interopDefault(_indexJs151);
var _indexJs152 = require("./lightFormat/index.js");
var _indexJsDefault152 = parcelHelpers.interopDefault(_indexJs152);
var _indexJs153 = require("./max/index.js");
var _indexJsDefault153 = parcelHelpers.interopDefault(_indexJs153);
var _indexJs154 = require("./milliseconds/index.js");
var _indexJsDefault154 = parcelHelpers.interopDefault(_indexJs154);
var _indexJs155 = require("./millisecondsToHours/index.js");
var _indexJsDefault155 = parcelHelpers.interopDefault(_indexJs155);
var _indexJs156 = require("./millisecondsToMinutes/index.js");
var _indexJsDefault156 = parcelHelpers.interopDefault(_indexJs156);
var _indexJs157 = require("./millisecondsToSeconds/index.js");
var _indexJsDefault157 = parcelHelpers.interopDefault(_indexJs157);
var _indexJs158 = require("./min/index.js");
var _indexJsDefault158 = parcelHelpers.interopDefault(_indexJs158);
var _indexJs159 = require("./minutesToHours/index.js");
var _indexJsDefault159 = parcelHelpers.interopDefault(_indexJs159);
var _indexJs160 = require("./minutesToMilliseconds/index.js");
var _indexJsDefault160 = parcelHelpers.interopDefault(_indexJs160);
var _indexJs161 = require("./minutesToSeconds/index.js");
var _indexJsDefault161 = parcelHelpers.interopDefault(_indexJs161);
var _indexJs162 = require("./monthsToQuarters/index.js");
var _indexJsDefault162 = parcelHelpers.interopDefault(_indexJs162);
var _indexJs163 = require("./monthsToYears/index.js");
var _indexJsDefault163 = parcelHelpers.interopDefault(_indexJs163);
var _indexJs164 = require("./nextDay/index.js");
var _indexJsDefault164 = parcelHelpers.interopDefault(_indexJs164);
var _indexJs165 = require("./nextFriday/index.js");
var _indexJsDefault165 = parcelHelpers.interopDefault(_indexJs165);
var _indexJs166 = require("./nextMonday/index.js");
var _indexJsDefault166 = parcelHelpers.interopDefault(_indexJs166);
var _indexJs167 = require("./nextSaturday/index.js");
var _indexJsDefault167 = parcelHelpers.interopDefault(_indexJs167);
var _indexJs168 = require("./nextSunday/index.js");
var _indexJsDefault168 = parcelHelpers.interopDefault(_indexJs168);
var _indexJs169 = require("./nextThursday/index.js");
var _indexJsDefault169 = parcelHelpers.interopDefault(_indexJs169);
var _indexJs170 = require("./nextTuesday/index.js");
var _indexJsDefault170 = parcelHelpers.interopDefault(_indexJs170);
var _indexJs171 = require("./nextWednesday/index.js");
var _indexJsDefault171 = parcelHelpers.interopDefault(_indexJs171);
var _indexJs172 = require("./parse/index.js");
var _indexJsDefault172 = parcelHelpers.interopDefault(_indexJs172);
var _indexJs173 = require("./parseISO/index.js");
var _indexJsDefault173 = parcelHelpers.interopDefault(_indexJs173);
var _indexJs174 = require("./parseJSON/index.js");
var _indexJsDefault174 = parcelHelpers.interopDefault(_indexJs174);
var _indexJs175 = require("./previousDay/index.js");
var _indexJsDefault175 = parcelHelpers.interopDefault(_indexJs175);
var _indexJs176 = require("./previousFriday/index.js");
var _indexJsDefault176 = parcelHelpers.interopDefault(_indexJs176);
var _indexJs177 = require("./previousMonday/index.js");
var _indexJsDefault177 = parcelHelpers.interopDefault(_indexJs177);
var _indexJs178 = require("./previousSaturday/index.js");
var _indexJsDefault178 = parcelHelpers.interopDefault(_indexJs178);
var _indexJs179 = require("./previousSunday/index.js");
var _indexJsDefault179 = parcelHelpers.interopDefault(_indexJs179);
var _indexJs180 = require("./previousThursday/index.js");
var _indexJsDefault180 = parcelHelpers.interopDefault(_indexJs180);
var _indexJs181 = require("./previousTuesday/index.js");
var _indexJsDefault181 = parcelHelpers.interopDefault(_indexJs181);
var _indexJs182 = require("./previousWednesday/index.js");
var _indexJsDefault182 = parcelHelpers.interopDefault(_indexJs182);
var _indexJs183 = require("./quartersToMonths/index.js");
var _indexJsDefault183 = parcelHelpers.interopDefault(_indexJs183);
var _indexJs184 = require("./quartersToYears/index.js");
var _indexJsDefault184 = parcelHelpers.interopDefault(_indexJs184);
var _indexJs185 = require("./roundToNearestMinutes/index.js");
var _indexJsDefault185 = parcelHelpers.interopDefault(_indexJs185);
var _indexJs186 = require("./secondsToHours/index.js");
var _indexJsDefault186 = parcelHelpers.interopDefault(_indexJs186);
var _indexJs187 = require("./secondsToMilliseconds/index.js");
var _indexJsDefault187 = parcelHelpers.interopDefault(_indexJs187);
var _indexJs188 = require("./secondsToMinutes/index.js");
var _indexJsDefault188 = parcelHelpers.interopDefault(_indexJs188);
var _indexJs189 = require("./set/index.js");
var _indexJsDefault189 = parcelHelpers.interopDefault(_indexJs189);
var _indexJs190 = require("./setDate/index.js");
var _indexJsDefault190 = parcelHelpers.interopDefault(_indexJs190);
var _indexJs191 = require("./setDay/index.js");
var _indexJsDefault191 = parcelHelpers.interopDefault(_indexJs191);
var _indexJs192 = require("./setDayOfYear/index.js");
var _indexJsDefault192 = parcelHelpers.interopDefault(_indexJs192);
var _indexJs193 = require("./setHours/index.js");
var _indexJsDefault193 = parcelHelpers.interopDefault(_indexJs193);
var _indexJs194 = require("./setISODay/index.js");
var _indexJsDefault194 = parcelHelpers.interopDefault(_indexJs194);
var _indexJs195 = require("./setISOWeek/index.js");
var _indexJsDefault195 = parcelHelpers.interopDefault(_indexJs195);
var _indexJs196 = require("./setISOWeekYear/index.js");
var _indexJsDefault196 = parcelHelpers.interopDefault(_indexJs196);
var _indexJs197 = require("./setMilliseconds/index.js");
var _indexJsDefault197 = parcelHelpers.interopDefault(_indexJs197);
var _indexJs198 = require("./setMinutes/index.js");
var _indexJsDefault198 = parcelHelpers.interopDefault(_indexJs198);
var _indexJs199 = require("./setMonth/index.js");
var _indexJsDefault199 = parcelHelpers.interopDefault(_indexJs199);
var _indexJs200 = require("./setQuarter/index.js");
var _indexJsDefault200 = parcelHelpers.interopDefault(_indexJs200);
var _indexJs201 = require("./setSeconds/index.js");
var _indexJsDefault201 = parcelHelpers.interopDefault(_indexJs201);
var _indexJs202 = require("./setWeek/index.js");
var _indexJsDefault202 = parcelHelpers.interopDefault(_indexJs202);
var _indexJs203 = require("./setWeekYear/index.js");
var _indexJsDefault203 = parcelHelpers.interopDefault(_indexJs203);
var _indexJs204 = require("./setYear/index.js");
var _indexJsDefault204 = parcelHelpers.interopDefault(_indexJs204);
var _indexJs205 = require("./startOfDay/index.js");
var _indexJsDefault205 = parcelHelpers.interopDefault(_indexJs205);
var _indexJs206 = require("./startOfDecade/index.js");
var _indexJsDefault206 = parcelHelpers.interopDefault(_indexJs206);
var _indexJs207 = require("./startOfHour/index.js");
var _indexJsDefault207 = parcelHelpers.interopDefault(_indexJs207);
var _indexJs208 = require("./startOfISOWeek/index.js");
var _indexJsDefault208 = parcelHelpers.interopDefault(_indexJs208);
var _indexJs209 = require("./startOfISOWeekYear/index.js");
var _indexJsDefault209 = parcelHelpers.interopDefault(_indexJs209);
var _indexJs210 = require("./startOfMinute/index.js");
var _indexJsDefault210 = parcelHelpers.interopDefault(_indexJs210);
var _indexJs211 = require("./startOfMonth/index.js");
var _indexJsDefault211 = parcelHelpers.interopDefault(_indexJs211);
var _indexJs212 = require("./startOfQuarter/index.js");
var _indexJsDefault212 = parcelHelpers.interopDefault(_indexJs212);
var _indexJs213 = require("./startOfSecond/index.js");
var _indexJsDefault213 = parcelHelpers.interopDefault(_indexJs213);
var _indexJs214 = require("./startOfToday/index.js");
var _indexJsDefault214 = parcelHelpers.interopDefault(_indexJs214);
var _indexJs215 = require("./startOfTomorrow/index.js");
var _indexJsDefault215 = parcelHelpers.interopDefault(_indexJs215);
var _indexJs216 = require("./startOfWeek/index.js");
var _indexJsDefault216 = parcelHelpers.interopDefault(_indexJs216);
var _indexJs217 = require("./startOfWeekYear/index.js");
var _indexJsDefault217 = parcelHelpers.interopDefault(_indexJs217);
var _indexJs218 = require("./startOfYear/index.js");
var _indexJsDefault218 = parcelHelpers.interopDefault(_indexJs218);
var _indexJs219 = require("./startOfYesterday/index.js");
var _indexJsDefault219 = parcelHelpers.interopDefault(_indexJs219);
var _indexJs220 = require("./sub/index.js");
var _indexJsDefault220 = parcelHelpers.interopDefault(_indexJs220);
var _indexJs221 = require("./subBusinessDays/index.js");
var _indexJsDefault221 = parcelHelpers.interopDefault(_indexJs221);
var _indexJs222 = require("./subDays/index.js");
var _indexJsDefault222 = parcelHelpers.interopDefault(_indexJs222);
var _indexJs223 = require("./subHours/index.js");
var _indexJsDefault223 = parcelHelpers.interopDefault(_indexJs223);
var _indexJs224 = require("./subISOWeekYears/index.js");
var _indexJsDefault224 = parcelHelpers.interopDefault(_indexJs224);
var _indexJs225 = require("./subMilliseconds/index.js");
var _indexJsDefault225 = parcelHelpers.interopDefault(_indexJs225);
var _indexJs226 = require("./subMinutes/index.js");
var _indexJsDefault226 = parcelHelpers.interopDefault(_indexJs226);
var _indexJs227 = require("./subMonths/index.js");
var _indexJsDefault227 = parcelHelpers.interopDefault(_indexJs227);
var _indexJs228 = require("./subQuarters/index.js");
var _indexJsDefault228 = parcelHelpers.interopDefault(_indexJs228);
var _indexJs229 = require("./subSeconds/index.js");
var _indexJsDefault229 = parcelHelpers.interopDefault(_indexJs229);
var _indexJs230 = require("./subWeeks/index.js");
var _indexJsDefault230 = parcelHelpers.interopDefault(_indexJs230);
var _indexJs231 = require("./subYears/index.js");
var _indexJsDefault231 = parcelHelpers.interopDefault(_indexJs231);
var _indexJs232 = require("./toDate/index.js");
var _indexJsDefault232 = parcelHelpers.interopDefault(_indexJs232);
var _indexJs233 = require("./weeksToDays/index.js");
var _indexJsDefault233 = parcelHelpers.interopDefault(_indexJs233);
var _indexJs234 = require("./yearsToMonths/index.js");
var _indexJsDefault234 = parcelHelpers.interopDefault(_indexJs234);
var _indexJs235 = require("./yearsToQuarters/index.js");
var _indexJsDefault235 = parcelHelpers.interopDefault(_indexJs235);
var _indexJs236 = require("./constants/index.js");
parcelHelpers.exportAll(_indexJs236, exports);

},{"./add/index.js":"2eALo","./addBusinessDays/index.js":"3OG2i","./addDays/index.js":"6ZRIL","./addHours/index.js":"fYdRc","./addISOWeekYears/index.js":"bnfhf","./addMilliseconds/index.js":"9RdST","./addMinutes/index.js":"eoKpP","./addMonths/index.js":"lf3Gj","./addQuarters/index.js":"7QQhj","./addSeconds/index.js":"hD1t5","./addWeeks/index.js":"5JeVP","./addYears/index.js":"iJG5U","./areIntervalsOverlapping/index.js":"4OU7R","./clamp/index.js":"f3jyt","./closestIndexTo/index.js":"2UaS6","./closestTo/index.js":"gToGy","./compareAsc/index.js":"lHJiT","./compareDesc/index.js":"cEkp8","./daysToWeeks/index.js":"dI9K0","./differenceInBusinessDays/index.js":"hbWdc","./differenceInCalendarDays/index.js":"3nymD","./differenceInCalendarISOWeekYears/index.js":"eddMX","./differenceInCalendarISOWeeks/index.js":"jC4Lh","./differenceInCalendarMonths/index.js":"ahPdg","./differenceInCalendarQuarters/index.js":"bXbVs","./differenceInCalendarWeeks/index.js":"l9vfp","./differenceInCalendarYears/index.js":"lOI6a","./differenceInDays/index.js":"djPSs","./differenceInHours/index.js":"7DDgr","./differenceInISOWeekYears/index.js":"PWOPv","./differenceInMilliseconds/index.js":"dJMlG","./differenceInMinutes/index.js":"i8Bhl","./differenceInMonths/index.js":"lUaVC","./differenceInQuarters/index.js":"ertw1","./differenceInSeconds/index.js":"6Ki2w","./differenceInWeeks/index.js":"3sm9j","./differenceInYears/index.js":"fqVPi","./eachDayOfInterval/index.js":"3l3aV","./eachHourOfInterval/index.js":"2Ii2i","./eachMinuteOfInterval/index.js":"cRHXc","./eachMonthOfInterval/index.js":"6QWmr","./eachQuarterOfInterval/index.js":"fECh7","./eachWeekOfInterval/index.js":"lAOFs","./eachWeekendOfInterval/index.js":"e999K","./eachWeekendOfMonth/index.js":"eKQou","./eachWeekendOfYear/index.js":"oXRNx","./eachYearOfInterval/index.js":"cePo7","./endOfDay/index.js":"d6lCv","./endOfDecade/index.js":"cTuVb","./endOfHour/index.js":"kmY1U","./endOfISOWeek/index.js":"kJMZU","./endOfISOWeekYear/index.js":"gCZi9","./endOfMinute/index.js":"caT3k","./endOfMonth/index.js":"8Iu88","./endOfQuarter/index.js":"8U8VT","./endOfSecond/index.js":"d7ZMp","./endOfToday/index.js":"bti1v","./endOfTomorrow/index.js":"7tsky","./endOfWeek/index.js":"e6UMr","./endOfYear/index.js":"gdftL","./endOfYesterday/index.js":"hpQgU","./format/index.js":"kS361","./formatDistance/index.js":"5mXNe","./formatDistanceStrict/index.js":"fJZbf","./formatDistanceToNow/index.js":"E20nO","./formatDistanceToNowStrict/index.js":"jCn0k","./formatDuration/index.js":"iPdjS","./formatISO/index.js":"lthd5","./formatISO9075/index.js":"cxmac","./formatISODuration/index.js":"cxiq5","./formatRFC3339/index.js":"3zEir","./formatRFC7231/index.js":"7iGZp","./formatRelative/index.js":"kAVTp","./fromUnixTime/index.js":"fTLuY","./getDate/index.js":"f9PHd","./getDay/index.js":"8bQ00","./getDayOfYear/index.js":"17hgf","./getDaysInMonth/index.js":"8KDB1","./getDaysInYear/index.js":"gRgTP","./getDecade/index.js":"kSWAr","./getHours/index.js":"lBxk5","./getISODay/index.js":"csuPW","./getISOWeek/index.js":"ltK9L","./getISOWeekYear/index.js":"k0p9j","./getISOWeeksInYear/index.js":"jNCwz","./getMilliseconds/index.js":"d3pyL","./getMinutes/index.js":"eOYaS","./getMonth/index.js":"2Yna1","./getOverlappingDaysInIntervals/index.js":"3EIal","./getQuarter/index.js":"1vU7i","./getSeconds/index.js":"frlCF","./getTime/index.js":"aDfBS","./getUnixTime/index.js":"4PmVA","./getWeek/index.js":"10ich","./getWeekOfMonth/index.js":"gd0GE","./getWeekYear/index.js":"bJqCK","./getWeeksInMonth/index.js":"aWPgQ","./getYear/index.js":"42bz7","./hoursToMilliseconds/index.js":"k8P6P","./hoursToMinutes/index.js":"6YdHE","./hoursToSeconds/index.js":"kO9dM","./intervalToDuration/index.js":"fdgxR","./intlFormat/index.js":"lUGaB","./isAfter/index.js":"gPO99","./isBefore/index.js":"dWFxJ","./isDate/index.js":"1eB1o","./isEqual/index.js":"lkPjt","./isExists/index.js":"479dh","./isFirstDayOfMonth/index.js":"cRO0W","./isFriday/index.js":"4ih3Y","./isFuture/index.js":"kcr6P","./isLastDayOfMonth/index.js":"da0tZ","./isLeapYear/index.js":"cTlk5","./isMatch/index.js":"4NLAs","./isMonday/index.js":"7GvPL","./isPast/index.js":"5326W","./isSameDay/index.js":"JZdzi","./isSameHour/index.js":"8ywh5","./isSameISOWeek/index.js":"cyoqD","./isSameISOWeekYear/index.js":"lUPo1","./isSameMinute/index.js":"76P3M","./isSameMonth/index.js":"4rwfL","./isSameQuarter/index.js":"296wU","./isSameSecond/index.js":"4PyHG","./isSameWeek/index.js":"iWvgg","./isSameYear/index.js":"9eIN2","./isSaturday/index.js":"1jMQX","./isSunday/index.js":"5xHFU","./isThisHour/index.js":"jdc9b","./isThisISOWeek/index.js":"75XzV","./isThisMinute/index.js":"lRE1E","./isThisMonth/index.js":"246HS","./isThisQuarter/index.js":"2NfH9","./isThisSecond/index.js":"4evtI","./isThisWeek/index.js":"gEA0x","./isThisYear/index.js":"6JlPi","./isThursday/index.js":"l1SzU","./isToday/index.js":"iVN6D","./isTomorrow/index.js":"kM6Xr","./isTuesday/index.js":"1A2O8","./isValid/index.js":"kdbZT","./isWednesday/index.js":"97lxp","./isWeekend/index.js":"4m2SO","./isWithinInterval/index.js":"esUgo","./isYesterday/index.js":"bIXz0","./lastDayOfDecade/index.js":"5kI8a","./lastDayOfISOWeek/index.js":"ao0To","./lastDayOfISOWeekYear/index.js":"9lEAs","./lastDayOfMonth/index.js":"fjshY","./lastDayOfQuarter/index.js":"6gd6t","./lastDayOfWeek/index.js":"4XpP2","./lastDayOfYear/index.js":"dcn2H","./lightFormat/index.js":"PlzEj","./max/index.js":"cr5hL","./milliseconds/index.js":"bIeKK","./millisecondsToHours/index.js":"Nb0zf","./millisecondsToMinutes/index.js":"cSJJz","./millisecondsToSeconds/index.js":"d7Dqb","./min/index.js":"fv4pT","./minutesToHours/index.js":"dc51H","./minutesToMilliseconds/index.js":"hUKp8","./minutesToSeconds/index.js":"lSThi","./monthsToQuarters/index.js":"cjUn4","./monthsToYears/index.js":"20oA4","./nextDay/index.js":"amwR2","./nextFriday/index.js":"lAHgI","./nextMonday/index.js":"l9Epm","./nextSaturday/index.js":"bJi1B","./nextSunday/index.js":"2EqlL","./nextThursday/index.js":"jwMtu","./nextTuesday/index.js":"jDGaM","./nextWednesday/index.js":"kkKDu","./parse/index.js":"fQqrR","./parseISO/index.js":"kAymx","./parseJSON/index.js":"7J88x","./previousDay/index.js":"hGztQ","./previousFriday/index.js":"cWBAz","./previousMonday/index.js":"1XL1y","./previousSaturday/index.js":"eoce0","./previousSunday/index.js":"75Ktg","./previousThursday/index.js":"lPjVT","./previousTuesday/index.js":"81ag6","./previousWednesday/index.js":"a1OYq","./quartersToMonths/index.js":"6r2Px","./quartersToYears/index.js":"jWhuD","./roundToNearestMinutes/index.js":"9PjdH","./secondsToHours/index.js":"4xDYy","./secondsToMilliseconds/index.js":"Bjn1d","./secondsToMinutes/index.js":"4oryE","./set/index.js":"joCTO","./setDate/index.js":"5o0tz","./setDay/index.js":"gztCo","./setDayOfYear/index.js":"hfnp7","./setHours/index.js":"8PCiH","./setISODay/index.js":"8OU6W","./setISOWeek/index.js":"9KUfe","./setISOWeekYear/index.js":"8O2PU","./setMilliseconds/index.js":"dubt0","./setMinutes/index.js":"jRqGX","./setMonth/index.js":"5hUxz","./setQuarter/index.js":"jxPuI","./setSeconds/index.js":"OvY6i","./setWeek/index.js":"10Fv2","./setWeekYear/index.js":"jspoC","./setYear/index.js":"3IB34","./startOfDay/index.js":"4pB2U","./startOfDecade/index.js":"ioMCr","./startOfHour/index.js":"iceHZ","./startOfISOWeek/index.js":"3uvqr","./startOfISOWeekYear/index.js":"ewe0d","./startOfMinute/index.js":"4e0Wp","./startOfMonth/index.js":"fwgu6","./startOfQuarter/index.js":"4MKst","./startOfSecond/index.js":"3eeom","./startOfToday/index.js":"b8fOJ","./startOfTomorrow/index.js":"7Vn7w","./startOfWeek/index.js":"aVyea","./startOfWeekYear/index.js":"dqGOa","./startOfYear/index.js":"yMCop","./startOfYesterday/index.js":"au97L","./sub/index.js":"lhXqZ","./subBusinessDays/index.js":"9O7oH","./subDays/index.js":"2fUPw","./subHours/index.js":"fShW6","./subISOWeekYears/index.js":"a0oZ1","./subMilliseconds/index.js":"gA2J2","./subMinutes/index.js":"ijbdr","./subMonths/index.js":"1yuKK","./subQuarters/index.js":"2vDrn","./subSeconds/index.js":"gCbpz","./subWeeks/index.js":"6d6G3","./subYears/index.js":"akvu6","./toDate/index.js":"8SEUI","./weeksToDays/index.js":"ljkFD","./yearsToMonths/index.js":"9hHKJ","./yearsToQuarters/index.js":"2ktFj","./constants/index.js":"iykpK","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2eALo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../addDays/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addMonths/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../toDate/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../_lib/toInteger/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
function add(dirtyDate, duration) {
    _indexJsDefault3.default(2, arguments);
    if (!duration || typeof duration !== 'object') return new Date(NaN);
    var years = duration.years ? _indexJsDefault4.default(duration.years) : 0;
    var months = duration.months ? _indexJsDefault4.default(duration.months) : 0;
    var weeks = duration.weeks ? _indexJsDefault4.default(duration.weeks) : 0;
    var days = duration.days ? _indexJsDefault4.default(duration.days) : 0;
    var hours = duration.hours ? _indexJsDefault4.default(duration.hours) : 0;
    var minutes = duration.minutes ? _indexJsDefault4.default(duration.minutes) : 0;
    var seconds = duration.seconds ? _indexJsDefault4.default(duration.seconds) : 0; // Add years and months
    var date = _indexJsDefault2.default(dirtyDate);
    var dateWithMonths = months || years ? _indexJsDefault1.default(date, months + years * 12) : date; // Add weeks and days
    var dateWithDays = days || weeks ? _indexJsDefault.default(dateWithMonths, days + weeks * 7) : dateWithMonths; // Add days, hours, minutes and seconds
    var minutesToAdd = minutes + hours * 60;
    var secondsToAdd = seconds + minutesToAdd * 60;
    var msToAdd = secondsToAdd * 1000;
    var finalDate = new Date(dateWithDays.getTime() + msToAdd);
    return finalDate;
}
exports.default = add;

},{"../addDays/index.js":"6ZRIL","../addMonths/index.js":"lf3Gj","../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","../_lib/toInteger/index.js":"kAD4R","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6ZRIL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function addDays(dirtyDate, dirtyAmount) {
    _indexJsDefault2.default(2, arguments);
    var date = _indexJsDefault1.default(dirtyDate);
    var amount = _indexJsDefault.default(dirtyAmount);
    if (isNaN(amount)) return new Date(NaN);
    if (!amount) // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
    date.setDate(date.getDate() + amount);
    return date;
}
exports.default = addDays;

},{"../_lib/toInteger/index.js":"kAD4R","../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kAD4R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function toInteger(dirtyNumber) {
    if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) return NaN;
    var number = Number(dirtyNumber);
    if (isNaN(number)) return number;
    return number < 0 ? Math.ceil(number) : Math.floor(number);
}
exports.default = toInteger;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"8SEUI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function toDate(argument) {
    _indexJsDefault.default(1, arguments);
    var argStr = Object.prototype.toString.call(argument); // Clone the date
    if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
    else if (typeof argument === 'number' || argStr === '[object Number]') return new Date(argument);
    else {
        if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
            // eslint-disable-next-line no-console
            console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console
            console.warn(new Error().stack);
        }
        return new Date(NaN);
    }
}
exports.default = toDate;

},{"../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"d68zO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function requiredArgs(required, args) {
    if (args.length < required) throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
}
exports.default = requiredArgs;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lf3Gj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function addMonths(dirtyDate, dirtyAmount) {
    _indexJsDefault2.default(2, arguments);
    var date = _indexJsDefault1.default(dirtyDate);
    var amount = _indexJsDefault.default(dirtyAmount);
    if (isNaN(amount)) return new Date(NaN);
    if (!amount) // If 0 months, no-op to avoid changing times in the hour before end of DST
    return date;
    var dayOfMonth = date.getDate(); // The JS Date object supports date math by accepting out-of-bounds values for
    // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
    // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
    // want except that dates will wrap around the end of a month, meaning that
    // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
    // we'll default to the end of the desired month by adding 1 to the desired
    // month and using a date of 0 to back up one day to the end of the desired
    // month.
    var endOfDesiredMonth = new Date(date.getTime());
    endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
    var daysInMonth = endOfDesiredMonth.getDate();
    if (dayOfMonth >= daysInMonth) // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
    else {
        // Otherwise, we now know that setting the original day-of-month value won't
        // cause an overflow, so set the desired day-of-month. Note that we can't
        // just set the date of `endOfDesiredMonth` because that object may have had
        // its time changed in the unusual case where where a DST transition was on
        // the last day of the month and its local time was in the hour skipped or
        // repeated next to a DST transition.  So we use `date` instead which is
        // guaranteed to still have the original time.
        date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
        return date;
    }
}
exports.default = addMonths;

},{"../_lib/toInteger/index.js":"kAD4R","../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3OG2i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../isWeekend/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/toInteger/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../isSunday/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("../isSaturday/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
function addBusinessDays(dirtyDate, dirtyAmount) {
    _indexJsDefault3.default(2, arguments);
    var date = _indexJsDefault1.default(dirtyDate);
    var startedOnWeekend = _indexJsDefault.default(date);
    var amount = _indexJsDefault2.default(dirtyAmount);
    if (isNaN(amount)) return new Date(NaN);
    var hours = date.getHours();
    var sign = amount < 0 ? -1 : 1;
    var fullWeeks = _indexJsDefault2.default(amount / 5);
    date.setDate(date.getDate() + fullWeeks * 7); // Get remaining days not part of a full week
    var restDays = Math.abs(amount % 5); // Loops over remaining days
    while(restDays > 0){
        date.setDate(date.getDate() + sign);
        if (!_indexJsDefault.default(date)) restDays -= 1;
    } // If the date is a weekend day and we reduce a dividable of
    // 5 from it, we land on a weekend date.
    // To counter this, we add days accordingly to land on the next business day
    if (startedOnWeekend && _indexJsDefault.default(date) && amount !== 0) {
        // If we're reducing days, we want to add days until we land on a weekday
        // If we're adding days we want to reduce days until we land on a weekday
        if (_indexJsDefault5.default(date)) date.setDate(date.getDate() + (sign < 0 ? 2 : -1));
        if (_indexJsDefault4.default(date)) date.setDate(date.getDate() + (sign < 0 ? 1 : -2));
    } // Restore hours to avoid DST lag
    date.setHours(hours);
    return date;
}
exports.default = addBusinessDays;

},{"../isWeekend/index.js":"4m2SO","../toDate/index.js":"8SEUI","../_lib/toInteger/index.js":"kAD4R","../_lib/requiredArgs/index.js":"d68zO","../isSunday/index.js":"5xHFU","../isSaturday/index.js":"1jMQX","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4m2SO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isWeekend(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var day = date.getDay();
    return day === 0 || day === 6;
}
exports.default = isWeekend;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5xHFU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isSunday(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    return _indexJsDefault.default(dirtyDate).getDay() === 0;
}
exports.default = isSunday;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1jMQX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isSaturday(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    return _indexJsDefault.default(dirtyDate).getDay() === 6;
}
exports.default = isSaturday;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fYdRc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addMilliseconds/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var MILLISECONDS_IN_HOUR = 3600000;
function addHours(dirtyDate, dirtyAmount) {
    _indexJsDefault2.default(2, arguments);
    var amount = _indexJsDefault.default(dirtyAmount);
    return _indexJsDefault1.default(dirtyDate, amount * MILLISECONDS_IN_HOUR);
}
exports.default = addHours;

},{"../_lib/toInteger/index.js":"kAD4R","../addMilliseconds/index.js":"9RdST","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9RdST":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function addMilliseconds(dirtyDate, dirtyAmount) {
    _indexJsDefault2.default(2, arguments);
    var timestamp = _indexJsDefault1.default(dirtyDate).getTime();
    var amount = _indexJsDefault.default(dirtyAmount);
    return new Date(timestamp + amount);
}
exports.default = addMilliseconds;

},{"../_lib/toInteger/index.js":"kAD4R","../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bnfhf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../getISOWeekYear/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../setISOWeekYear/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function addISOWeekYears(dirtyDate, dirtyAmount) {
    _indexJsDefault3.default(2, arguments);
    var amount = _indexJsDefault.default(dirtyAmount);
    return _indexJsDefault2.default(dirtyDate, _indexJsDefault1.default(dirtyDate) + amount);
}
exports.default = addISOWeekYears;

},{"../_lib/toInteger/index.js":"kAD4R","../getISOWeekYear/index.js":"k0p9j","../setISOWeekYear/index.js":"8O2PU","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"k0p9j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfISOWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function getISOWeekYear(dirtyDate) {
    _indexJsDefault2.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var year = date.getFullYear();
    var fourthOfJanuaryOfNextYear = new Date(0);
    fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
    var startOfNextYear = _indexJsDefault1.default(fourthOfJanuaryOfNextYear);
    var fourthOfJanuaryOfThisYear = new Date(0);
    fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
    var startOfThisYear = _indexJsDefault1.default(fourthOfJanuaryOfThisYear);
    if (date.getTime() >= startOfNextYear.getTime()) return year + 1;
    else if (date.getTime() >= startOfThisYear.getTime()) return year;
    else return year - 1;
}
exports.default = getISOWeekYear;

},{"../toDate/index.js":"8SEUI","../startOfISOWeek/index.js":"3uvqr","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3uvqr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../startOfWeek/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function startOfISOWeek(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    return _indexJsDefault.default(dirtyDate, {
        weekStartsOn: 1
    });
}
exports.default = startOfISOWeek;

},{"../startOfWeek/index.js":"aVyea","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aVyea":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/toInteger/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function startOfWeek(dirtyDate, dirtyOptions) {
    _indexJsDefault2.default(1, arguments);
    var options = dirtyOptions || {
    };
    var locale = options.locale;
    var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : _indexJsDefault1.default(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : _indexJsDefault1.default(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    var date = _indexJsDefault.default(dirtyDate);
    var day = date.getDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setDate(date.getDate() - diff);
    date.setHours(0, 0, 0, 0);
    return date;
}
exports.default = startOfWeek;

},{"../toDate/index.js":"8SEUI","../_lib/toInteger/index.js":"kAD4R","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8O2PU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfISOWeekYear/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../differenceInCalendarDays/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
function setISOWeekYear(dirtyDate, dirtyISOWeekYear) {
    _indexJsDefault4.default(2, arguments);
    var date = _indexJsDefault1.default(dirtyDate);
    var isoWeekYear = _indexJsDefault.default(dirtyISOWeekYear);
    var diff = _indexJsDefault3.default(date, _indexJsDefault2.default(date));
    var fourthOfJanuary = new Date(0);
    fourthOfJanuary.setFullYear(isoWeekYear, 0, 4);
    fourthOfJanuary.setHours(0, 0, 0, 0);
    date = _indexJsDefault2.default(fourthOfJanuary);
    date.setDate(date.getDate() + diff);
    return date;
}
exports.default = setISOWeekYear;

},{"../_lib/toInteger/index.js":"kAD4R","../toDate/index.js":"8SEUI","../startOfISOWeekYear/index.js":"ewe0d","../differenceInCalendarDays/index.js":"3nymD","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ewe0d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../getISOWeekYear/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfISOWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function startOfISOWeekYear(dirtyDate) {
    _indexJsDefault2.default(1, arguments);
    var year = _indexJsDefault.default(dirtyDate);
    var fourthOfJanuary = new Date(0);
    fourthOfJanuary.setFullYear(year, 0, 4);
    fourthOfJanuary.setHours(0, 0, 0, 0);
    var date = _indexJsDefault1.default(fourthOfJanuary);
    return date;
}
exports.default = startOfISOWeekYear;

},{"../getISOWeekYear/index.js":"k0p9j","../startOfISOWeek/index.js":"3uvqr","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3nymD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/getTimezoneOffsetInMilliseconds/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfDay/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var MILLISECONDS_IN_DAY = 86400000;
function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
    _indexJsDefault2.default(2, arguments);
    var startOfDayLeft = _indexJsDefault1.default(dirtyDateLeft);
    var startOfDayRight = _indexJsDefault1.default(dirtyDateRight);
    var timestampLeft = startOfDayLeft.getTime() - _indexJsDefault.default(startOfDayLeft);
    var timestampRight = startOfDayRight.getTime() - _indexJsDefault.default(startOfDayRight); // Round the number of days to the nearest integer
    // because the number of milliseconds in a day is not constant
    // (e.g. it's different in the day of the daylight saving time clock shift)
    return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}
exports.default = differenceInCalendarDays;

},{"../_lib/getTimezoneOffsetInMilliseconds/index.js":"f8dgA","../startOfDay/index.js":"4pB2U","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"f8dgA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getTimezoneOffsetInMilliseconds(date) {
    var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
    utcDate.setUTCFullYear(date.getFullYear());
    return date.getTime() - utcDate.getTime();
}
exports.default = getTimezoneOffsetInMilliseconds;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4pB2U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function startOfDay(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    date.setHours(0, 0, 0, 0);
    return date;
}
exports.default = startOfDay;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eoKpP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addMilliseconds/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var MILLISECONDS_IN_MINUTE = 60000;
function addMinutes(dirtyDate, dirtyAmount) {
    _indexJsDefault2.default(2, arguments);
    var amount = _indexJsDefault.default(dirtyAmount);
    return _indexJsDefault1.default(dirtyDate, amount * MILLISECONDS_IN_MINUTE);
}
exports.default = addMinutes;

},{"../_lib/toInteger/index.js":"kAD4R","../addMilliseconds/index.js":"9RdST","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7QQhj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addMonths/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function addQuarters(dirtyDate, dirtyAmount) {
    _indexJsDefault2.default(2, arguments);
    var amount = _indexJsDefault.default(dirtyAmount);
    var months = amount * 3;
    return _indexJsDefault1.default(dirtyDate, months);
}
exports.default = addQuarters;

},{"../_lib/toInteger/index.js":"kAD4R","../addMonths/index.js":"lf3Gj","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hD1t5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addMilliseconds/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function addSeconds(dirtyDate, dirtyAmount) {
    _indexJsDefault2.default(2, arguments);
    var amount = _indexJsDefault.default(dirtyAmount);
    return _indexJsDefault1.default(dirtyDate, amount * 1000);
}
exports.default = addSeconds;

},{"../_lib/toInteger/index.js":"kAD4R","../addMilliseconds/index.js":"9RdST","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5JeVP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addDays/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function addWeeks(dirtyDate, dirtyAmount) {
    _indexJsDefault2.default(2, arguments);
    var amount = _indexJsDefault.default(dirtyAmount);
    var days = amount * 7;
    return _indexJsDefault1.default(dirtyDate, days);
}
exports.default = addWeeks;

},{"../_lib/toInteger/index.js":"kAD4R","../addDays/index.js":"6ZRIL","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iJG5U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addMonths/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function addYears(dirtyDate, dirtyAmount) {
    _indexJsDefault2.default(2, arguments);
    var amount = _indexJsDefault.default(dirtyAmount);
    return _indexJsDefault1.default(dirtyDate, amount * 12);
}
exports.default = addYears;

},{"../_lib/toInteger/index.js":"kAD4R","../addMonths/index.js":"lf3Gj","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4OU7R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function areIntervalsOverlapping(dirtyIntervalLeft, dirtyIntervalRight) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        inclusive: false
    };
    _indexJsDefault1.default(2, arguments);
    var intervalLeft = dirtyIntervalLeft || {
    };
    var intervalRight = dirtyIntervalRight || {
    };
    var leftStartTime = _indexJsDefault.default(intervalLeft.start).getTime();
    var leftEndTime = _indexJsDefault.default(intervalLeft.end).getTime();
    var rightStartTime = _indexJsDefault.default(intervalRight.start).getTime();
    var rightEndTime = _indexJsDefault.default(intervalRight.end).getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`
    if (!(leftStartTime <= leftEndTime && rightStartTime <= rightEndTime)) throw new RangeError('Invalid interval');
    if (options.inclusive) return leftStartTime <= rightEndTime && rightStartTime <= leftEndTime;
    return leftStartTime < rightEndTime && rightStartTime < leftEndTime;
}
exports.default = areIntervalsOverlapping;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"f3jyt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../max/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../min/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function clamp(date, _ref) {
    var start = _ref.start, end = _ref.end;
    _indexJsDefault2.default(2, arguments);
    return _indexJsDefault1.default([
        _indexJsDefault.default([
            date,
            start
        ]),
        end
    ]);
}
exports.default = clamp;

},{"../max/index.js":"cr5hL","../min/index.js":"fv4pT","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cr5hL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function max(dirtyDatesArray) {
    _indexJsDefault1.default(1, arguments);
    var datesArray; // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method
    if (dirtyDatesArray && typeof dirtyDatesArray.forEach === 'function') datesArray = dirtyDatesArray; // If `dirtyDatesArray` is Array-like Object, convert to Array.
    else if (typeof dirtyDatesArray === 'object' && dirtyDatesArray !== null) datesArray = Array.prototype.slice.call(dirtyDatesArray);
    else // `dirtyDatesArray` is non-iterable, return Invalid Date
    return new Date(NaN);
    var result;
    datesArray.forEach(function(dirtyDate) {
        var currentDate = _indexJsDefault.default(dirtyDate);
        if (result === undefined || result < currentDate || isNaN(Number(currentDate))) result = currentDate;
    });
    return result || new Date(NaN);
}
exports.default = max;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fv4pT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function min(dirtyDatesArray) {
    _indexJsDefault1.default(1, arguments);
    var datesArray; // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method
    if (dirtyDatesArray && typeof dirtyDatesArray.forEach === 'function') datesArray = dirtyDatesArray; // If `dirtyDatesArray` is Array-like Object, convert to Array.
    else if (typeof dirtyDatesArray === 'object' && dirtyDatesArray !== null) datesArray = Array.prototype.slice.call(dirtyDatesArray);
    else // `dirtyDatesArray` is non-iterable, return Invalid Date
    return new Date(NaN);
    var result;
    datesArray.forEach(function(dirtyDate) {
        var currentDate = _indexJsDefault.default(dirtyDate);
        if (result === undefined || result > currentDate || isNaN(currentDate.getDate())) result = currentDate;
    });
    return result || new Date(NaN);
}
exports.default = min;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2UaS6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function closestIndexTo(dirtyDateToCompare, dirtyDatesArray) {
    _indexJsDefault1.default(2, arguments);
    var dateToCompare = _indexJsDefault.default(dirtyDateToCompare);
    if (isNaN(Number(dateToCompare))) return NaN;
    var timeToCompare = dateToCompare.getTime();
    var datesArray; // `dirtyDatesArray` is undefined or null
    if (dirtyDatesArray == null) datesArray = []; // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method
    else if (typeof dirtyDatesArray.forEach === 'function') datesArray = dirtyDatesArray; // If `dirtyDatesArray` is Array-like Object, convert to Array. Otherwise, make it empty Array
    else datesArray = Array.prototype.slice.call(dirtyDatesArray);
    var result;
    var minDistance;
    datesArray.forEach(function(dirtyDate, index) {
        var currentDate = _indexJsDefault.default(dirtyDate);
        if (isNaN(Number(currentDate))) {
            result = NaN;
            minDistance = NaN;
            return;
        }
        var distance = Math.abs(timeToCompare - currentDate.getTime());
        if (result == null || distance < Number(minDistance)) {
            result = index;
            minDistance = distance;
        }
    });
    return result;
}
exports.default = closestIndexTo;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gToGy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function closestTo(dirtyDateToCompare, dirtyDatesArray) {
    _indexJsDefault1.default(2, arguments);
    var dateToCompare = _indexJsDefault.default(dirtyDateToCompare);
    if (isNaN(Number(dateToCompare))) return new Date(NaN);
    var timeToCompare = dateToCompare.getTime();
    var datesArray; // `dirtyDatesArray` is undefined or null
    if (dirtyDatesArray == null) datesArray = []; // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method
    else if (typeof dirtyDatesArray.forEach === 'function') datesArray = dirtyDatesArray; // If `dirtyDatesArray` is Array-like Object, convert to Array. Otherwise, make it empty Array
    else datesArray = Array.prototype.slice.call(dirtyDatesArray);
    var result;
    var minDistance;
    datesArray.forEach(function(dirtyDate) {
        var currentDate = _indexJsDefault.default(dirtyDate);
        if (isNaN(Number(currentDate))) {
            result = new Date(NaN);
            minDistance = NaN;
            return;
        }
        var distance = Math.abs(timeToCompare - currentDate.getTime());
        if (result == null || distance < Number(minDistance)) {
            result = currentDate;
            minDistance = distance;
        }
    });
    return result;
}
exports.default = closestTo;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lHJiT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function compareAsc(dirtyDateLeft, dirtyDateRight) {
    _indexJsDefault1.default(2, arguments);
    var dateLeft = _indexJsDefault.default(dirtyDateLeft);
    var dateRight = _indexJsDefault.default(dirtyDateRight);
    var diff = dateLeft.getTime() - dateRight.getTime();
    if (diff < 0) return -1;
    else if (diff > 0) return 1; // Return 0 if diff is 0; return NaN if diff is NaN
    else return diff;
}
exports.default = compareAsc;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cEkp8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function compareDesc(dirtyDateLeft, dirtyDateRight) {
    _indexJsDefault1.default(2, arguments);
    var dateLeft = _indexJsDefault.default(dirtyDateLeft);
    var dateRight = _indexJsDefault.default(dirtyDateRight);
    var diff = dateLeft.getTime() - dateRight.getTime();
    if (diff > 0) return -1;
    else if (diff < 0) return 1; // Return 0 if diff is 0; return NaN if diff is NaN
    else return diff;
}
exports.default = compareDesc;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dI9K0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function daysToWeeks(days) {
    _indexJsDefault.default(1, arguments);
    var weeks = days / _indexJs1.daysInWeek;
    return Math.floor(weeks);
}
exports.default = daysToWeeks;

},{"../_lib/requiredArgs/index.js":"d68zO","../constants/index.js":"iykpK","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iykpK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "daysInWeek", ()=>daysInWeek
);
parcelHelpers.export(exports, "maxTime", ()=>maxTime
);
parcelHelpers.export(exports, "millisecondsInMinute", ()=>millisecondsInMinute
);
parcelHelpers.export(exports, "millisecondsInHour", ()=>millisecondsInHour
);
parcelHelpers.export(exports, "millisecondsInSecond", ()=>millisecondsInSecond
);
parcelHelpers.export(exports, "minTime", ()=>minTime
);
parcelHelpers.export(exports, "minutesInHour", ()=>minutesInHour
);
parcelHelpers.export(exports, "monthsInQuarter", ()=>monthsInQuarter
);
parcelHelpers.export(exports, "monthsInYear", ()=>monthsInYear
);
parcelHelpers.export(exports, "quartersInYear", ()=>quartersInYear
);
parcelHelpers.export(exports, "secondsInHour", ()=>secondsInHour
);
parcelHelpers.export(exports, "secondsInMinute", ()=>secondsInMinute
);
var daysInWeek = 7;
var maxTime = Math.pow(10, 8) * 86400000;
var millisecondsInMinute = 60000;
var millisecondsInHour = 3600000;
var millisecondsInSecond = 1000;
var minTime = -maxTime;
var minutesInHour = 60;
var monthsInQuarter = 3;
var monthsInYear = 12;
var quartersInYear = 4;
var secondsInHour = 3600;
var secondsInMinute = 60;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hbWdc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../addDays/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../differenceInCalendarDays/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../isSameDay/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../isValid/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../isWeekend/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("../toDate/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs6);
var _indexJs7 = require("../_lib/toInteger/index.js");
var _indexJsDefault7 = parcelHelpers.interopDefault(_indexJs7);
function differenceInBusinessDays(dirtyDateLeft, dirtyDateRight) {
    _indexJsDefault6.default(2, arguments);
    var dateLeft = _indexJsDefault5.default(dirtyDateLeft);
    var dateRight = _indexJsDefault5.default(dirtyDateRight);
    if (!_indexJsDefault3.default(dateLeft) || !_indexJsDefault3.default(dateRight)) return NaN;
    var calendarDifference = _indexJsDefault1.default(dateLeft, dateRight);
    var sign = calendarDifference < 0 ? -1 : 1;
    var weeks = _indexJsDefault7.default(calendarDifference / 7);
    var result = weeks * 5;
    dateRight = _indexJsDefault.default(dateRight, weeks * 7); // the loop below will run at most 6 times to account for the remaining days that don't makeup a full week
    while(!_indexJsDefault2.default(dateLeft, dateRight)){
        // sign is used to account for both negative and positive differences
        result += _indexJsDefault4.default(dateRight) ? 0 : sign;
        dateRight = _indexJsDefault.default(dateRight, sign);
    }
    return result === 0 ? 0 : result;
}
exports.default = differenceInBusinessDays;

},{"../addDays/index.js":"6ZRIL","../differenceInCalendarDays/index.js":"3nymD","../isSameDay/index.js":"JZdzi","../isValid/index.js":"kdbZT","../isWeekend/index.js":"4m2SO","../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","../_lib/toInteger/index.js":"kAD4R","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"JZdzi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../startOfDay/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isSameDay(dirtyDateLeft, dirtyDateRight) {
    _indexJsDefault1.default(2, arguments);
    var dateLeftStartOfDay = _indexJsDefault.default(dirtyDateLeft);
    var dateRightStartOfDay = _indexJsDefault.default(dirtyDateRight);
    return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}
exports.default = isSameDay;

},{"../startOfDay/index.js":"4pB2U","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kdbZT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../isDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function isValid(dirtyDate) {
    _indexJsDefault2.default(1, arguments);
    if (!_indexJsDefault.default(dirtyDate) && typeof dirtyDate !== 'number') return false;
    var date = _indexJsDefault1.default(dirtyDate);
    return !isNaN(Number(date));
}
exports.default = isValid;

},{"../isDate/index.js":"1eB1o","../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1eB1o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function isDate(value) {
    _indexJsDefault.default(1, arguments);
    return value instanceof Date || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}
exports.default = isDate;

},{"../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eddMX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../getISOWeekYear/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function differenceInCalendarISOWeekYears(dirtyDateLeft, dirtyDateRight) {
    _indexJsDefault1.default(2, arguments);
    return _indexJsDefault.default(dirtyDateLeft) - _indexJsDefault.default(dirtyDateRight);
}
exports.default = differenceInCalendarISOWeekYears;

},{"../getISOWeekYear/index.js":"k0p9j","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jC4Lh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/getTimezoneOffsetInMilliseconds/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfISOWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var MILLISECONDS_IN_WEEK = 604800000;
function differenceInCalendarISOWeeks(dirtyDateLeft, dirtyDateRight) {
    _indexJsDefault2.default(2, arguments);
    var startOfISOWeekLeft = _indexJsDefault1.default(dirtyDateLeft);
    var startOfISOWeekRight = _indexJsDefault1.default(dirtyDateRight);
    var timestampLeft = startOfISOWeekLeft.getTime() - _indexJsDefault.default(startOfISOWeekLeft);
    var timestampRight = startOfISOWeekRight.getTime() - _indexJsDefault.default(startOfISOWeekRight); // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK);
}
exports.default = differenceInCalendarISOWeeks;

},{"../_lib/getTimezoneOffsetInMilliseconds/index.js":"f8dgA","../startOfISOWeek/index.js":"3uvqr","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ahPdg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
    _indexJsDefault1.default(2, arguments);
    var dateLeft = _indexJsDefault.default(dirtyDateLeft);
    var dateRight = _indexJsDefault.default(dirtyDateRight);
    var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
    var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
    return yearDiff * 12 + monthDiff;
}
exports.default = differenceInCalendarMonths;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bXbVs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../getQuarter/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function differenceInCalendarQuarters(dirtyDateLeft, dirtyDateRight) {
    _indexJsDefault2.default(2, arguments);
    var dateLeft = _indexJsDefault1.default(dirtyDateLeft);
    var dateRight = _indexJsDefault1.default(dirtyDateRight);
    var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
    var quarterDiff = _indexJsDefault.default(dateLeft) - _indexJsDefault.default(dateRight);
    return yearDiff * 4 + quarterDiff;
}
exports.default = differenceInCalendarQuarters;

},{"../getQuarter/index.js":"1vU7i","../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1vU7i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function getQuarter(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var quarter = Math.floor(date.getMonth() / 3) + 1;
    return quarter;
}
exports.default = getQuarter;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"l9vfp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../startOfWeek/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/getTimezoneOffsetInMilliseconds/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var MILLISECONDS_IN_WEEK = 604800000;
function differenceInCalendarWeeks(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
    _indexJsDefault2.default(2, arguments);
    var startOfWeekLeft = _indexJsDefault.default(dirtyDateLeft, dirtyOptions);
    var startOfWeekRight = _indexJsDefault.default(dirtyDateRight, dirtyOptions);
    var timestampLeft = startOfWeekLeft.getTime() - _indexJsDefault1.default(startOfWeekLeft);
    var timestampRight = startOfWeekRight.getTime() - _indexJsDefault1.default(startOfWeekRight); // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK);
}
exports.default = differenceInCalendarWeeks;

},{"../startOfWeek/index.js":"aVyea","../_lib/getTimezoneOffsetInMilliseconds/index.js":"f8dgA","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lOI6a":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function differenceInCalendarYears(dirtyDateLeft, dirtyDateRight) {
    _indexJsDefault1.default(2, arguments);
    var dateLeft = _indexJsDefault.default(dirtyDateLeft);
    var dateRight = _indexJsDefault.default(dirtyDateRight);
    return dateLeft.getFullYear() - dateRight.getFullYear();
}
exports.default = differenceInCalendarYears;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"djPSs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../differenceInCalendarDays/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js"); // Like `compareAsc` but uses local time not UTC, which is needed
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
// for accurate equality comparisons of UTC timestamps that end up
// having the same representation in local time, e.g. one hour before
// DST ends vs. the instant that DST ends.
function compareLocalAsc(dateLeft, dateRight) {
    var diff = dateLeft.getFullYear() - dateRight.getFullYear() || dateLeft.getMonth() - dateRight.getMonth() || dateLeft.getDate() - dateRight.getDate() || dateLeft.getHours() - dateRight.getHours() || dateLeft.getMinutes() - dateRight.getMinutes() || dateLeft.getSeconds() - dateRight.getSeconds() || dateLeft.getMilliseconds() - dateRight.getMilliseconds();
    if (diff < 0) return -1;
    else if (diff > 0) return 1; // Return 0 if diff is 0; return NaN if diff is NaN
    else return diff;
}
function differenceInDays(dirtyDateLeft, dirtyDateRight) {
    _indexJsDefault2.default(2, arguments);
    var dateLeft = _indexJsDefault.default(dirtyDateLeft);
    var dateRight = _indexJsDefault.default(dirtyDateRight);
    var sign = compareLocalAsc(dateLeft, dateRight);
    var difference = Math.abs(_indexJsDefault1.default(dateLeft, dateRight));
    dateLeft.setDate(dateLeft.getDate() - sign * difference); // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
    // If so, result must be decreased by 1 in absolute value
    var isLastDayNotFull = Number(compareLocalAsc(dateLeft, dateRight) === -sign);
    var result = sign * (difference - isLastDayNotFull); // Prevent negative zero
    return result === 0 ? 0 : result;
}
exports.default = differenceInDays;

},{"../toDate/index.js":"8SEUI","../differenceInCalendarDays/index.js":"3nymD","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7DDgr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../constants/index.js");
var _indexJs1 = require("../differenceInMilliseconds/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/roundingMethods/index.js");
function differenceInHours(dateLeft, dateRight, options) {
    _indexJsDefault1.default(2, arguments);
    var diff = _indexJsDefault.default(dateLeft, dateRight) / _indexJs.millisecondsInHour;
    return _indexJs3.getRoundingMethod(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}
exports.default = differenceInHours;

},{"../constants/index.js":"iykpK","../differenceInMilliseconds/index.js":"dJMlG","../_lib/requiredArgs/index.js":"d68zO","../_lib/roundingMethods/index.js":"iIxYL","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dJMlG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function differenceInMilliseconds(dateLeft, dateRight) {
    _indexJsDefault1.default(2, arguments);
    return _indexJsDefault.default(dateLeft).getTime() - _indexJsDefault.default(dateRight).getTime();
}
exports.default = differenceInMilliseconds;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iIxYL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getRoundingMethod", ()=>getRoundingMethod
);
var roundingMap = {
    ceil: Math.ceil,
    round: Math.round,
    floor: Math.floor,
    trunc: function(value) {
        return value < 0 ? Math.ceil(value) : Math.floor(value);
    } // Math.trunc is not supported by IE
};
var defaultRoundingMethod = 'trunc';
function getRoundingMethod(method) {
    return method ? roundingMap[method] : roundingMap[defaultRoundingMethod];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"PWOPv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../differenceInCalendarISOWeekYears/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../compareAsc/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../subISOWeekYears/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
function differenceInISOWeekYears(dirtyDateLeft, dirtyDateRight) {
    _indexJsDefault4.default(2, arguments);
    var dateLeft = _indexJsDefault.default(dirtyDateLeft);
    var dateRight = _indexJsDefault.default(dirtyDateRight);
    var sign = _indexJsDefault2.default(dateLeft, dateRight);
    var difference = Math.abs(_indexJsDefault1.default(dateLeft, dateRight));
    dateLeft = _indexJsDefault3.default(dateLeft, sign * difference); // Math.abs(diff in full ISO years - diff in calendar ISO years) === 1
    // if last calendar ISO year is not full
    // If so, result must be decreased by 1 in absolute value
    var isLastISOWeekYearNotFull = Number(_indexJsDefault2.default(dateLeft, dateRight) === -sign);
    var result = sign * (difference - isLastISOWeekYearNotFull); // Prevent negative zero
    return result === 0 ? 0 : result;
}
exports.default = differenceInISOWeekYears;

},{"../toDate/index.js":"8SEUI","../differenceInCalendarISOWeekYears/index.js":"eddMX","../compareAsc/index.js":"lHJiT","../subISOWeekYears/index.js":"a0oZ1","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"a0oZ1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addISOWeekYears/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function subISOWeekYears(dirtyDate, dirtyAmount) {
    _indexJsDefault2.default(2, arguments);
    var amount = _indexJsDefault.default(dirtyAmount);
    return _indexJsDefault1.default(dirtyDate, -amount);
}
exports.default = subISOWeekYears;

},{"../_lib/toInteger/index.js":"kAD4R","../addISOWeekYears/index.js":"bnfhf","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"i8Bhl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../constants/index.js");
var _indexJs1 = require("../differenceInMilliseconds/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/roundingMethods/index.js");
function differenceInMinutes(dateLeft, dateRight, options) {
    _indexJsDefault1.default(2, arguments);
    var diff = _indexJsDefault.default(dateLeft, dateRight) / _indexJs.millisecondsInMinute;
    return _indexJs3.getRoundingMethod(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}
exports.default = differenceInMinutes;

},{"../constants/index.js":"iykpK","../differenceInMilliseconds/index.js":"dJMlG","../_lib/requiredArgs/index.js":"d68zO","../_lib/roundingMethods/index.js":"iIxYL","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lUaVC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../differenceInCalendarMonths/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../compareAsc/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../isLastDayOfMonth/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
    _indexJsDefault3.default(2, arguments);
    var dateLeft = _indexJsDefault.default(dirtyDateLeft);
    var dateRight = _indexJsDefault.default(dirtyDateRight);
    var sign = _indexJsDefault2.default(dateLeft, dateRight);
    var difference = Math.abs(_indexJsDefault1.default(dateLeft, dateRight));
    var result; // Check for the difference of less than month
    if (difference < 1) result = 0;
    else {
        if (dateLeft.getMonth() === 1 && dateLeft.getDate() > 27) // This will check if the date is end of Feb and assign a higher end of month date
        // to compare it with Jan
        dateLeft.setDate(30);
        dateLeft.setMonth(dateLeft.getMonth() - sign * difference); // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
        // If so, result must be decreased by 1 in absolute value
        var isLastMonthNotFull = _indexJsDefault2.default(dateLeft, dateRight) === -sign; // Check for cases of one full calendar month
        if (_indexJsDefault4.default(_indexJsDefault.default(dirtyDateLeft)) && difference === 1 && _indexJsDefault2.default(dirtyDateLeft, dateRight) === 1) isLastMonthNotFull = false;
        result = sign * (difference - Number(isLastMonthNotFull));
    } // Prevent negative zero
    return result === 0 ? 0 : result;
}
exports.default = differenceInMonths;

},{"../toDate/index.js":"8SEUI","../differenceInCalendarMonths/index.js":"ahPdg","../compareAsc/index.js":"lHJiT","../_lib/requiredArgs/index.js":"d68zO","../isLastDayOfMonth/index.js":"da0tZ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"da0tZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../endOfDay/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../endOfMonth/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function isLastDayOfMonth(dirtyDate) {
    _indexJsDefault3.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    return _indexJsDefault1.default(date).getTime() === _indexJsDefault2.default(date).getTime();
}
exports.default = isLastDayOfMonth;

},{"../toDate/index.js":"8SEUI","../endOfDay/index.js":"d6lCv","../endOfMonth/index.js":"8Iu88","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"d6lCv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function endOfDay(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    date.setHours(23, 59, 59, 999);
    return date;
}
exports.default = endOfDay;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8Iu88":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function endOfMonth(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var month = date.getMonth();
    date.setFullYear(date.getFullYear(), month + 1, 0);
    date.setHours(23, 59, 59, 999);
    return date;
}
exports.default = endOfMonth;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ertw1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../differenceInMonths/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/roundingMethods/index.js");
function differenceInQuarters(dateLeft, dateRight, options) {
    _indexJsDefault1.default(2, arguments);
    var diff = _indexJsDefault.default(dateLeft, dateRight) / 3;
    return _indexJs2.getRoundingMethod(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}
exports.default = differenceInQuarters;

},{"../differenceInMonths/index.js":"lUaVC","../_lib/requiredArgs/index.js":"d68zO","../_lib/roundingMethods/index.js":"iIxYL","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6Ki2w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../differenceInMilliseconds/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/roundingMethods/index.js");
function differenceInSeconds(dateLeft, dateRight, options) {
    _indexJsDefault1.default(2, arguments);
    var diff = _indexJsDefault.default(dateLeft, dateRight) / 1000;
    return _indexJs2.getRoundingMethod(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}
exports.default = differenceInSeconds;

},{"../differenceInMilliseconds/index.js":"dJMlG","../_lib/requiredArgs/index.js":"d68zO","../_lib/roundingMethods/index.js":"iIxYL","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3sm9j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../differenceInDays/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/roundingMethods/index.js");
function differenceInWeeks(dateLeft, dateRight, options) {
    _indexJsDefault1.default(2, arguments);
    var diff = _indexJsDefault.default(dateLeft, dateRight) / 7;
    return _indexJs2.getRoundingMethod(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}
exports.default = differenceInWeeks;

},{"../differenceInDays/index.js":"djPSs","../_lib/requiredArgs/index.js":"d68zO","../_lib/roundingMethods/index.js":"iIxYL","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fqVPi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../differenceInCalendarYears/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../compareAsc/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function differenceInYears(dirtyDateLeft, dirtyDateRight) {
    _indexJsDefault3.default(2, arguments);
    var dateLeft = _indexJsDefault.default(dirtyDateLeft);
    var dateRight = _indexJsDefault.default(dirtyDateRight);
    var sign = _indexJsDefault2.default(dateLeft, dateRight);
    var difference = Math.abs(_indexJsDefault1.default(dateLeft, dateRight)); // Set both dates to a valid leap year for accurate comparison when dealing
    // with leap days
    dateLeft.setFullYear(1584);
    dateRight.setFullYear(1584); // Math.abs(diff in full years - diff in calendar years) === 1 if last calendar year is not full
    // If so, result must be decreased by 1 in absolute value
    var isLastYearNotFull = _indexJsDefault2.default(dateLeft, dateRight) === -sign;
    var result = sign * (difference - Number(isLastYearNotFull)); // Prevent negative zero
    return result === 0 ? 0 : result;
}
exports.default = differenceInYears;

},{"../toDate/index.js":"8SEUI","../differenceInCalendarYears/index.js":"lOI6a","../compareAsc/index.js":"lHJiT","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3l3aV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function eachDayOfInterval(dirtyInterval, options) {
    _indexJsDefault1.default(1, arguments);
    var interval = dirtyInterval || {
    };
    var startDate = _indexJsDefault.default(interval.start);
    var endDate = _indexJsDefault.default(interval.end);
    var endTime = endDate.getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`
    if (!(startDate.getTime() <= endTime)) throw new RangeError('Invalid interval');
    var dates = [];
    var currentDate = startDate;
    currentDate.setHours(0, 0, 0, 0);
    var step = options && 'step' in options ? Number(options.step) : 1;
    if (step < 1 || isNaN(step)) throw new RangeError('`options.step` must be a number greater than 1');
    while(currentDate.getTime() <= endTime){
        dates.push(_indexJsDefault.default(currentDate));
        currentDate.setDate(currentDate.getDate() + step);
        currentDate.setHours(0, 0, 0, 0);
    }
    return dates;
}
exports.default = eachDayOfInterval;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2Ii2i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../addHours/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function eachHourOfInterval(dirtyInterval, options) {
    _indexJsDefault2.default(1, arguments);
    var interval = dirtyInterval || {
    };
    var startDate = _indexJsDefault1.default(interval.start);
    var endDate = _indexJsDefault1.default(interval.end);
    var startTime = startDate.getTime();
    var endTime = endDate.getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`
    if (!(startTime <= endTime)) throw new RangeError('Invalid interval');
    var dates = [];
    var currentDate = startDate;
    currentDate.setMinutes(0, 0, 0);
    var step = options && 'step' in options ? Number(options.step) : 1;
    if (step < 1 || isNaN(step)) throw new RangeError('`options.step` must be a number greater than 1');
    while(currentDate.getTime() <= endTime){
        dates.push(_indexJsDefault1.default(currentDate));
        currentDate = _indexJsDefault.default(currentDate, step);
    }
    return dates;
}
exports.default = eachHourOfInterval;

},{"../addHours/index.js":"fYdRc","../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cRHXc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../addMinutes/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfMinute/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function eachMinuteOfInterval(interval, options) {
    _indexJsDefault3.default(1, arguments);
    var startDate = _indexJsDefault2.default(_indexJsDefault1.default(interval.start));
    var endDate = _indexJsDefault1.default(interval.end);
    var startTime = startDate.getTime();
    var endTime = endDate.getTime();
    if (startTime >= endTime) throw new RangeError('Invalid interval');
    var dates = [];
    var currentDate = startDate;
    var step = options && 'step' in options ? Number(options.step) : 1;
    if (step < 1 || isNaN(step)) throw new RangeError('`options.step` must be a number equal or greater than 1');
    while(currentDate.getTime() <= endTime){
        dates.push(_indexJsDefault1.default(currentDate));
        currentDate = _indexJsDefault.default(currentDate, step);
    }
    return dates;
}
exports.default = eachMinuteOfInterval;

},{"../addMinutes/index.js":"eoKpP","../toDate/index.js":"8SEUI","../startOfMinute/index.js":"4e0Wp","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4e0Wp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function startOfMinute(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    date.setSeconds(0, 0);
    return date;
}
exports.default = startOfMinute;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6QWmr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function eachMonthOfInterval(dirtyInterval) {
    _indexJsDefault1.default(1, arguments);
    var interval = dirtyInterval || {
    };
    var startDate = _indexJsDefault.default(interval.start);
    var endDate = _indexJsDefault.default(interval.end);
    var endTime = endDate.getTime();
    var dates = []; // Throw an exception if start date is after end date or if any date is `Invalid Date`
    if (!(startDate.getTime() <= endTime)) throw new RangeError('Invalid interval');
    var currentDate = startDate;
    currentDate.setHours(0, 0, 0, 0);
    currentDate.setDate(1);
    while(currentDate.getTime() <= endTime){
        dates.push(_indexJsDefault.default(currentDate));
        currentDate.setMonth(currentDate.getMonth() + 1);
    }
    return dates;
}
exports.default = eachMonthOfInterval;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fECh7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../addQuarters/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfQuarter/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../toDate/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function eachQuarterOfInterval(dirtyInterval) {
    _indexJsDefault3.default(1, arguments);
    var interval = dirtyInterval || {
    };
    var startDate = _indexJsDefault2.default(interval.start);
    var endDate = _indexJsDefault2.default(interval.end);
    var endTime = endDate.getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`
    if (!(startDate.getTime() <= endTime)) throw new RangeError('Invalid interval');
    var startDateQuarter = _indexJsDefault1.default(startDate);
    var endDateQuarter = _indexJsDefault1.default(endDate);
    endTime = endDateQuarter.getTime();
    var quarters = [];
    var currentQuarter = startDateQuarter;
    while(currentQuarter.getTime() <= endTime){
        quarters.push(_indexJsDefault2.default(currentQuarter));
        currentQuarter = _indexJsDefault.default(currentQuarter, 1);
    }
    return quarters;
}
exports.default = eachQuarterOfInterval;

},{"../addQuarters/index.js":"7QQhj","../startOfQuarter/index.js":"4MKst","../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4MKst":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function startOfQuarter(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var currentMonth = date.getMonth();
    var month = currentMonth - currentMonth % 3;
    date.setMonth(month, 1);
    date.setHours(0, 0, 0, 0);
    return date;
}
exports.default = startOfQuarter;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lAOFs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../addWeeks/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../toDate/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function eachWeekOfInterval(dirtyInterval, options) {
    _indexJsDefault3.default(1, arguments);
    var interval = dirtyInterval || {
    };
    var startDate = _indexJsDefault2.default(interval.start);
    var endDate = _indexJsDefault2.default(interval.end);
    var endTime = endDate.getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`
    if (!(startDate.getTime() <= endTime)) throw new RangeError('Invalid interval');
    var startDateWeek = _indexJsDefault1.default(startDate, options);
    var endDateWeek = _indexJsDefault1.default(endDate, options); // Some timezones switch DST at midnight, making start of day unreliable in these timezones, 3pm is a safe bet
    startDateWeek.setHours(15);
    endDateWeek.setHours(15);
    endTime = endDateWeek.getTime();
    var weeks = [];
    var currentWeek = startDateWeek;
    while(currentWeek.getTime() <= endTime){
        currentWeek.setHours(0);
        weeks.push(_indexJsDefault2.default(currentWeek));
        currentWeek = _indexJsDefault.default(currentWeek, 1);
        currentWeek.setHours(15);
    }
    return weeks;
}
exports.default = eachWeekOfInterval;

},{"../addWeeks/index.js":"5JeVP","../startOfWeek/index.js":"aVyea","../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"e999K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../eachDayOfInterval/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../isSunday/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../isWeekend/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function eachWeekendOfInterval(interval) {
    _indexJsDefault3.default(1, arguments);
    var dateInterval = _indexJsDefault.default(interval);
    var weekends = [];
    var index = 0;
    while(index < dateInterval.length){
        var date = dateInterval[index++];
        if (_indexJsDefault2.default(date)) {
            weekends.push(date);
            if (_indexJsDefault1.default(date)) index = index + 5;
        }
    }
    return weekends;
}
exports.default = eachWeekendOfInterval;

},{"../eachDayOfInterval/index.js":"3l3aV","../isSunday/index.js":"5xHFU","../isWeekend/index.js":"4m2SO","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eKQou":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../eachWeekendOfInterval/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfMonth/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../endOfMonth/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function eachWeekendOfMonth(dirtyDate) {
    _indexJsDefault3.default(1, arguments);
    var startDate = _indexJsDefault1.default(dirtyDate);
    if (isNaN(startDate.getTime())) throw new RangeError('The passed date is invalid');
    var endDate = _indexJsDefault2.default(dirtyDate);
    return _indexJsDefault.default({
        start: startDate,
        end: endDate
    });
}
exports.default = eachWeekendOfMonth;

},{"../eachWeekendOfInterval/index.js":"e999K","../startOfMonth/index.js":"fwgu6","../endOfMonth/index.js":"8Iu88","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fwgu6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function startOfMonth(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    date.setDate(1);
    date.setHours(0, 0, 0, 0);
    return date;
}
exports.default = startOfMonth;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"oXRNx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../eachWeekendOfInterval/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfYear/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../endOfYear/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function eachWeekendOfYear(dirtyDate) {
    _indexJsDefault3.default(1, arguments);
    var startDate = _indexJsDefault1.default(dirtyDate);
    if (isNaN(startDate)) throw new RangeError('The passed date is invalid');
    var endDate = _indexJsDefault2.default(dirtyDate);
    return _indexJsDefault.default({
        start: startDate,
        end: endDate
    });
}
exports.default = eachWeekendOfYear;

},{"../eachWeekendOfInterval/index.js":"e999K","../startOfYear/index.js":"yMCop","../endOfYear/index.js":"gdftL","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"yMCop":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function startOfYear(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var cleanDate = _indexJsDefault.default(dirtyDate);
    var date = new Date(0);
    date.setFullYear(cleanDate.getFullYear(), 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
}
exports.default = startOfYear;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gdftL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function endOfYear(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var year = date.getFullYear();
    date.setFullYear(year + 1, 0, 0);
    date.setHours(23, 59, 59, 999);
    return date;
}
exports.default = endOfYear;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cePo7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function eachYearOfInterval(dirtyInterval) {
    _indexJsDefault1.default(1, arguments);
    var interval = dirtyInterval || {
    };
    var startDate = _indexJsDefault.default(interval.start);
    var endDate = _indexJsDefault.default(interval.end);
    var endTime = endDate.getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`
    if (!(startDate.getTime() <= endTime)) throw new RangeError('Invalid interval');
    var dates = [];
    var currentDate = startDate;
    currentDate.setHours(0, 0, 0, 0);
    currentDate.setMonth(0, 1);
    while(currentDate.getTime() <= endTime){
        dates.push(_indexJsDefault.default(currentDate));
        currentDate.setFullYear(currentDate.getFullYear() + 1);
    }
    return dates;
}
exports.default = eachYearOfInterval;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cTuVb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function endOfDecade(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var year = date.getFullYear();
    var decade = 9 + Math.floor(year / 10) * 10;
    date.setFullYear(decade, 11, 31);
    date.setHours(23, 59, 59, 999);
    return date;
}
exports.default = endOfDecade;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kmY1U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function endOfHour(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    date.setMinutes(59, 59, 999);
    return date;
}
exports.default = endOfHour;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kJMZU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../endOfWeek/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function endOfISOWeek(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    return _indexJsDefault.default(dirtyDate, {
        weekStartsOn: 1
    });
}
exports.default = endOfISOWeek;

},{"../endOfWeek/index.js":"e6UMr","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"e6UMr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/toInteger/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function endOfWeek(dirtyDate, dirtyOptions) {
    _indexJsDefault2.default(1, arguments);
    var options = dirtyOptions || {
    };
    var locale = options.locale;
    var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : _indexJsDefault1.default(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : _indexJsDefault1.default(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    var date = _indexJsDefault.default(dirtyDate);
    var day = date.getDay();
    var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
    date.setDate(date.getDate() + diff);
    date.setHours(23, 59, 59, 999);
    return date;
}
exports.default = endOfWeek;

},{"../toDate/index.js":"8SEUI","../_lib/toInteger/index.js":"kAD4R","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gCZi9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../getISOWeekYear/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfISOWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function endOfISOWeekYear(dirtyDate) {
    _indexJsDefault2.default(1, arguments);
    var year = _indexJsDefault.default(dirtyDate);
    var fourthOfJanuaryOfNextYear = new Date(0);
    fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
    var date = _indexJsDefault1.default(fourthOfJanuaryOfNextYear);
    date.setMilliseconds(date.getMilliseconds() - 1);
    return date;
}
exports.default = endOfISOWeekYear;

},{"../getISOWeekYear/index.js":"k0p9j","../startOfISOWeek/index.js":"3uvqr","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"caT3k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function endOfMinute(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    date.setSeconds(59, 999);
    return date;
}
exports.default = endOfMinute;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8U8VT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function endOfQuarter(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var currentMonth = date.getMonth();
    var month = currentMonth - currentMonth % 3 + 3;
    date.setMonth(month, 0);
    date.setHours(23, 59, 59, 999);
    return date;
}
exports.default = endOfQuarter;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"d7ZMp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function endOfSecond(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    date.setMilliseconds(999);
    return date;
}
exports.default = endOfSecond;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bti1v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../endOfDay/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function endOfToday() {
    return _indexJsDefault.default(Date.now());
}
exports.default = endOfToday;

},{"../endOfDay/index.js":"d6lCv","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7tsky":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function endOfTomorrow() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var day = now.getDate();
    var date = new Date(0);
    date.setFullYear(year, month, day + 1);
    date.setHours(23, 59, 59, 999);
    return date;
}
exports.default = endOfTomorrow;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hpQgU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function endOfYesterday() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var day = now.getDate();
    var date = new Date(0);
    date.setFullYear(year, month, day - 1);
    date.setHours(23, 59, 59, 999);
    return date;
}
exports.default = endOfYesterday;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kS361":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../isValid/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../locale/en-US/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../subMilliseconds/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../toDate/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../_lib/format/formatters/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("../_lib/format/longFormatters/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("../_lib/getTimezoneOffsetInMilliseconds/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs6);
var _indexJs7 = require("../_lib/protectedTokens/index.js");
var _indexJs8 = require("../_lib/toInteger/index.js");
var _indexJsDefault7 = parcelHelpers.interopDefault(_indexJs8);
var _indexJs9 = require("../_lib/requiredArgs/index.js"); // This RegExp consists of three parts separated by `|`:
var _indexJsDefault8 = parcelHelpers.interopDefault(_indexJs9);
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
    _indexJsDefault8.default(2, arguments);
    var formatStr = String(dirtyFormatStr);
    var options = dirtyOptions || {
    };
    var locale = options.locale || _indexJsDefault1.default;
    var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : _indexJsDefault7.default(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : _indexJsDefault7.default(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : _indexJsDefault7.default(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : _indexJsDefault7.default(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    if (!locale.localize) throw new RangeError('locale must contain localize property');
    if (!locale.formatLong) throw new RangeError('locale must contain formatLong property');
    var originalDate = _indexJsDefault3.default(dirtyDate);
    if (!_indexJsDefault.default(originalDate)) throw new RangeError('Invalid time value');
     // Convert the date in system timezone to the same date in UTC+00:00 timezone.
    // This ensures that when UTC functions will be implemented, locales will be compatible with them.
    // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
    var timezoneOffset = _indexJsDefault6.default(originalDate);
    var utcDate = _indexJsDefault2.default(originalDate, timezoneOffset);
    var formatterOptions = {
        firstWeekContainsDate: firstWeekContainsDate,
        weekStartsOn: weekStartsOn,
        locale: locale,
        _originalDate: originalDate
    };
    var result = formatStr.match(longFormattingTokensRegExp).map(function(substring) {
        var firstCharacter = substring[0];
        if (firstCharacter === 'p' || firstCharacter === 'P') {
            var longFormatter = _indexJsDefault5.default[firstCharacter];
            return longFormatter(substring, locale.formatLong, formatterOptions);
        }
        return substring;
    }).join('').match(formattingTokensRegExp).map(function(substring) {
        // Replace two single quote characters with one single quote character
        if (substring === "''") return "'";
        var firstCharacter = substring[0];
        if (firstCharacter === "'") return cleanEscapedString(substring);
        var formatter = _indexJsDefault4.default[firstCharacter];
        if (formatter) {
            if (!options.useAdditionalWeekYearTokens && _indexJs7.isProtectedWeekYearToken(substring)) _indexJs7.throwProtectedError(substring, dirtyFormatStr, dirtyDate);
            if (!options.useAdditionalDayOfYearTokens && _indexJs7.isProtectedDayOfYearToken(substring)) _indexJs7.throwProtectedError(substring, dirtyFormatStr, dirtyDate);
            return formatter(utcDate, substring, locale.localize, formatterOptions);
        }
        if (firstCharacter.match(unescapedLatinCharacterRegExp)) throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
        return substring;
    }).join('');
    return result;
}
exports.default = format;
function cleanEscapedString(input) {
    return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

},{"../isValid/index.js":"kdbZT","../locale/en-US/index.js":"jUFks","../subMilliseconds/index.js":"gA2J2","../toDate/index.js":"8SEUI","../_lib/format/formatters/index.js":"a2WX0","../_lib/format/longFormatters/index.js":"1geSY","../_lib/getTimezoneOffsetInMilliseconds/index.js":"f8dgA","../_lib/protectedTokens/index.js":"akIGo","../_lib/toInteger/index.js":"kAD4R","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jUFks":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./_lib/formatDistance/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("./_lib/formatLong/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("./_lib/formatRelative/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("./_lib/localize/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("./_lib/match/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */ var locale = {
    code: 'en-US',
    formatDistance: _indexJsDefault.default,
    formatLong: _indexJsDefault1.default,
    formatRelative: _indexJsDefault2.default,
    localize: _indexJsDefault3.default,
    match: _indexJsDefault4.default,
    options: {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
    }
};
exports.default = locale;

},{"./_lib/formatDistance/index.js":"9Yc7F","./_lib/formatLong/index.js":"4EwuF","./_lib/formatRelative/index.js":"4Z2oE","./_lib/localize/index.js":"liLKE","./_lib/match/index.js":"jyLyD","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9Yc7F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: 'less than a second',
        other: 'less than {{count}} seconds'
    },
    xSeconds: {
        one: '1 second',
        other: '{{count}} seconds'
    },
    halfAMinute: 'half a minute',
    lessThanXMinutes: {
        one: 'less than a minute',
        other: 'less than {{count}} minutes'
    },
    xMinutes: {
        one: '1 minute',
        other: '{{count}} minutes'
    },
    aboutXHours: {
        one: 'about 1 hour',
        other: 'about {{count}} hours'
    },
    xHours: {
        one: '1 hour',
        other: '{{count}} hours'
    },
    xDays: {
        one: '1 day',
        other: '{{count}} days'
    },
    aboutXWeeks: {
        one: 'about 1 week',
        other: 'about {{count}} weeks'
    },
    xWeeks: {
        one: '1 week',
        other: '{{count}} weeks'
    },
    aboutXMonths: {
        one: 'about 1 month',
        other: 'about {{count}} months'
    },
    xMonths: {
        one: '1 month',
        other: '{{count}} months'
    },
    aboutXYears: {
        one: 'about 1 year',
        other: 'about {{count}} years'
    },
    xYears: {
        one: '1 year',
        other: '{{count}} years'
    },
    overXYears: {
        one: 'over 1 year',
        other: 'over {{count}} years'
    },
    almostXYears: {
        one: 'almost 1 year',
        other: 'almost {{count}} years'
    }
};
var formatDistance = function(token, count, options) {
    var result;
    var tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === 'string') result = tokenValue;
    else if (count === 1) result = tokenValue.one;
    else result = tokenValue.other.replace('{{count}}', count.toString());
    if (options !== null && options !== void 0 && options.addSuffix) {
        if (options.comparison && options.comparison > 0) return 'in ' + result;
        else return result + ' ago';
    }
    return result;
};
exports.default = formatDistance;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4EwuF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../../_lib/buildFormatLongFn/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var dateFormats = {
    full: 'EEEE, MMMM do, y',
    long: 'MMMM do, y',
    medium: 'MMM d, y',
    short: 'MM/dd/yyyy'
};
var timeFormats = {
    full: 'h:mm:ss a zzzz',
    long: 'h:mm:ss a z',
    medium: 'h:mm:ss a',
    short: 'h:mm a'
};
var dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}'
};
var formatLong = {
    date: _indexJsDefault.default({
        formats: dateFormats,
        defaultWidth: 'full'
    }),
    time: _indexJsDefault.default({
        formats: timeFormats,
        defaultWidth: 'full'
    }),
    dateTime: _indexJsDefault.default({
        formats: dateTimeFormats,
        defaultWidth: 'full'
    })
};
exports.default = formatLong;

},{"../../../_lib/buildFormatLongFn/index.js":"7YQFc","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7YQFc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function buildFormatLongFn(args) {
    return function() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        };
        // TODO: Remove String()
        var width = options.width ? String(options.width) : args.defaultWidth;
        var format = args.formats[width] || args.formats[args.defaultWidth];
        return format;
    };
}
exports.default = buildFormatLongFn;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4Z2oE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: 'P'
};
var formatRelative = function(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
exports.default = formatRelative;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"liLKE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../../_lib/buildLocalizeFn/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var eraValues = {
    narrow: [
        'B',
        'A'
    ],
    abbreviated: [
        'BC',
        'AD'
    ],
    wide: [
        'Before Christ',
        'Anno Domini'
    ]
};
var quarterValues = {
    narrow: [
        '1',
        '2',
        '3',
        '4'
    ],
    abbreviated: [
        'Q1',
        'Q2',
        'Q3',
        'Q4'
    ],
    wide: [
        '1st quarter',
        '2nd quarter',
        '3rd quarter',
        '4th quarter'
    ]
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
    narrow: [
        'J',
        'F',
        'M',
        'A',
        'M',
        'J',
        'J',
        'A',
        'S',
        'O',
        'N',
        'D'
    ],
    abbreviated: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ],
    wide: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
};
var dayValues = {
    narrow: [
        'S',
        'M',
        'T',
        'W',
        'T',
        'F',
        'S'
    ],
    short: [
        'Su',
        'Mo',
        'Tu',
        'We',
        'Th',
        'Fr',
        'Sa'
    ],
    abbreviated: [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
    ],
    wide: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
};
var dayPeriodValues = {
    narrow: {
        am: 'a',
        pm: 'p',
        midnight: 'mi',
        noon: 'n',
        morning: 'morning',
        afternoon: 'afternoon',
        evening: 'evening',
        night: 'night'
    },
    abbreviated: {
        am: 'AM',
        pm: 'PM',
        midnight: 'midnight',
        noon: 'noon',
        morning: 'morning',
        afternoon: 'afternoon',
        evening: 'evening',
        night: 'night'
    },
    wide: {
        am: 'a.m.',
        pm: 'p.m.',
        midnight: 'midnight',
        noon: 'noon',
        morning: 'morning',
        afternoon: 'afternoon',
        evening: 'evening',
        night: 'night'
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: 'a',
        pm: 'p',
        midnight: 'mi',
        noon: 'n',
        morning: 'in the morning',
        afternoon: 'in the afternoon',
        evening: 'in the evening',
        night: 'at night'
    },
    abbreviated: {
        am: 'AM',
        pm: 'PM',
        midnight: 'midnight',
        noon: 'noon',
        morning: 'in the morning',
        afternoon: 'in the afternoon',
        evening: 'in the evening',
        night: 'at night'
    },
    wide: {
        am: 'a.m.',
        pm: 'p.m.',
        midnight: 'midnight',
        noon: 'noon',
        morning: 'in the morning',
        afternoon: 'in the afternoon',
        evening: 'in the evening',
        night: 'at night'
    }
};
var ordinalNumber = function(dirtyNumber, _options) {
    var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
    // if they are different for different grammatical genders,
    // use `options.unit`.
    //
    // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
    // 'day', 'hour', 'minute', 'second'.
    var rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) switch(rem100 % 10){
        case 1:
            return number + 'st';
        case 2:
            return number + 'nd';
        case 3:
            return number + 'rd';
    }
    return number + 'th';
};
var localize = {
    ordinalNumber: ordinalNumber,
    era: _indexJsDefault.default({
        values: eraValues,
        defaultWidth: 'wide'
    }),
    quarter: _indexJsDefault.default({
        values: quarterValues,
        defaultWidth: 'wide',
        argumentCallback: function(quarter) {
            return quarter - 1;
        }
    }),
    month: _indexJsDefault.default({
        values: monthValues,
        defaultWidth: 'wide'
    }),
    day: _indexJsDefault.default({
        values: dayValues,
        defaultWidth: 'wide'
    }),
    dayPeriod: _indexJsDefault.default({
        values: dayPeriodValues,
        defaultWidth: 'wide',
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: 'wide'
    })
};
exports.default = localize;

},{"../../../_lib/buildLocalizeFn/index.js":"5Q7pQ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5Q7pQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function buildLocalizeFn(args) {
    return function(dirtyIndex, dirtyOptions) {
        var options = dirtyOptions || {
        };
        var context = options.context ? String(options.context) : 'standalone';
        var valuesArray;
        if (context === 'formatting' && args.formattingValues) {
            var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
            var width = options.width ? String(options.width) : defaultWidth;
            valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
        } else {
            var _defaultWidth = args.defaultWidth;
            var _width = options.width ? String(options.width) : args.defaultWidth;
            valuesArray = args.values[_width] || args.values[_defaultWidth];
        }
        var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
        return valuesArray[index];
    };
}
exports.default = buildLocalizeFn;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jyLyD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../../_lib/buildMatchFn/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../../../_lib/buildMatchPatternFn/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
    any: [
        /^b/i,
        /^(a|c)/i
    ]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
    any: [
        /1/i,
        /2/i,
        /3/i,
        /4/i
    ]
};
var matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
    narrow: [
        /^j/i,
        /^f/i,
        /^m/i,
        /^a/i,
        /^m/i,
        /^j/i,
        /^j/i,
        /^a/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ],
    any: [
        /^ja/i,
        /^f/i,
        /^mar/i,
        /^ap/i,
        /^may/i,
        /^jun/i,
        /^jul/i,
        /^au/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ]
};
var matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
    narrow: [
        /^s/i,
        /^m/i,
        /^t/i,
        /^w/i,
        /^t/i,
        /^f/i,
        /^s/i
    ],
    any: [
        /^su/i,
        /^m/i,
        /^tu/i,
        /^w/i,
        /^th/i,
        /^f/i,
        /^sa/i
    ]
};
var matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
};
var match = {
    ordinalNumber: _indexJsDefault1.default({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: function(value) {
            return parseInt(value, 10);
        }
    }),
    era: _indexJsDefault.default({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: 'wide',
        parsePatterns: parseEraPatterns,
        defaultParseWidth: 'any'
    }),
    quarter: _indexJsDefault.default({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: 'wide',
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: 'any',
        valueCallback: function(index) {
            return index + 1;
        }
    }),
    month: _indexJsDefault.default({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: 'wide',
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: 'any'
    }),
    day: _indexJsDefault.default({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: 'wide',
        parsePatterns: parseDayPatterns,
        defaultParseWidth: 'any'
    }),
    dayPeriod: _indexJsDefault.default({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: 'any',
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: 'any'
    })
};
exports.default = match;

},{"../../../_lib/buildMatchFn/index.js":"i22Ei","../../../_lib/buildMatchPatternFn/index.js":"9R45L","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"i22Ei":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function buildMatchFn(args) {
    return function(string) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        };
        var width = options.width;
        var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
        var matchResult = string.match(matchPattern);
        if (!matchResult) return null;
        var matchedString = matchResult[0];
        var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
        var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function(pattern) {
            return pattern.test(matchedString);
        }) : findKey(parsePatterns, function(pattern) {
            return pattern.test(matchedString);
        });
        var value;
        value = args.valueCallback ? args.valueCallback(key) : key;
        value = options.valueCallback ? options.valueCallback(value) : value;
        var rest = string.slice(matchedString.length);
        return {
            value: value,
            rest: rest
        };
    };
}
exports.default = buildMatchFn;
function findKey(object, predicate) {
    for(var key in object){
        if (object.hasOwnProperty(key) && predicate(object[key])) return key;
    }
    return undefined;
}
function findIndex(array, predicate) {
    for(var key = 0; key < array.length; key++){
        if (predicate(array[key])) return key;
    }
    return undefined;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9R45L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function buildMatchPatternFn(args) {
    return function(string) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        };
        var matchResult = string.match(args.matchPattern);
        if (!matchResult) return null;
        var matchedString = matchResult[0];
        var parseResult = string.match(args.parsePattern);
        if (!parseResult) return null;
        var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
        value = options.valueCallback ? options.valueCallback(value) : value;
        var rest = string.slice(matchedString.length);
        return {
            value: value,
            rest: rest
        };
    };
}
exports.default = buildMatchPatternFn;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gA2J2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addMilliseconds/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function subMilliseconds(dirtyDate, dirtyAmount) {
    _indexJsDefault2.default(2, arguments);
    var amount = _indexJsDefault.default(dirtyAmount);
    return _indexJsDefault1.default(dirtyDate, -amount);
}
exports.default = subMilliseconds;

},{"../_lib/toInteger/index.js":"kAD4R","../addMilliseconds/index.js":"9RdST","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"a2WX0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../lightFormatters/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../../../_lib/getUTCDayOfYear/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../../../_lib/getUTCISOWeek/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../../../_lib/getUTCISOWeekYear/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../../../_lib/getUTCWeek/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("../../../_lib/getUTCWeekYear/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("../../addLeadingZeros/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs6);
var dayPeriodEnum = {
    am: 'am',
    pm: 'pm',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */ var formatters = {
    // Era
    G: function(date, token, localize) {
        var era = date.getUTCFullYear() > 0 ? 1 : 0;
        switch(token){
            // AD, BC
            case 'G':
            case 'GG':
            case 'GGG':
                return localize.era(era, {
                    width: 'abbreviated'
                });
            // A, B
            case 'GGGGG':
                return localize.era(era, {
                    width: 'narrow'
                });
            // Anno Domini, Before Christ
            case 'GGGG':
            default:
                return localize.era(era, {
                    width: 'wide'
                });
        }
    },
    // Year
    y: function(date, token, localize) {
        // Ordinal number
        if (token === 'yo') {
            var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)
            var year = signedYear > 0 ? signedYear : 1 - signedYear;
            return localize.ordinalNumber(year, {
                unit: 'year'
            });
        }
        return _indexJsDefault.default.y(date, token);
    },
    // Local week-numbering year
    Y: function(date, token, localize, options) {
        var signedWeekYear = _indexJsDefault5.default(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)
        var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year
        if (token === 'YY') {
            var twoDigitYear = weekYear % 100;
            return _indexJsDefault6.default(twoDigitYear, 2);
        } // Ordinal number
        if (token === 'Yo') return localize.ordinalNumber(weekYear, {
            unit: 'year'
        });
         // Padding
        return _indexJsDefault6.default(weekYear, token.length);
    },
    // ISO week-numbering year
    R: function(date, token) {
        var isoWeekYear = _indexJsDefault3.default(date); // Padding
        return _indexJsDefault6.default(isoWeekYear, token.length);
    },
    // Extended year. This is a single number designating the year of this calendar system.
    // The main difference between `y` and `u` localizers are B.C. years:
    // | Year | `y` | `u` |
    // |------|-----|-----|
    // | AC 1 |   1 |   1 |
    // | BC 1 |   1 |   0 |
    // | BC 2 |   2 |  -1 |
    // Also `yy` always returns the last two digits of a year,
    // while `uu` pads single digit years to 2 characters and returns other years unchanged.
    u: function(date, token) {
        var year = date.getUTCFullYear();
        return _indexJsDefault6.default(year, token.length);
    },
    // Quarter
    Q: function(date, token, localize) {
        var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case 'Q':
                return String(quarter);
            // 01, 02, 03, 04
            case 'QQ':
                return _indexJsDefault6.default(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case 'Qo':
                return localize.ordinalNumber(quarter, {
                    unit: 'quarter'
                });
            // Q1, Q2, Q3, Q4
            case 'QQQ':
                return localize.quarter(quarter, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case 'QQQQQ':
                return localize.quarter(quarter, {
                    width: 'narrow',
                    context: 'formatting'
                });
            // 1st quarter, 2nd quarter, ...
            case 'QQQQ':
            default:
                return localize.quarter(quarter, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // Stand-alone quarter
    q: function(date, token, localize) {
        var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case 'q':
                return String(quarter);
            // 01, 02, 03, 04
            case 'qq':
                return _indexJsDefault6.default(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case 'qo':
                return localize.ordinalNumber(quarter, {
                    unit: 'quarter'
                });
            // Q1, Q2, Q3, Q4
            case 'qqq':
                return localize.quarter(quarter, {
                    width: 'abbreviated',
                    context: 'standalone'
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case 'qqqqq':
                return localize.quarter(quarter, {
                    width: 'narrow',
                    context: 'standalone'
                });
            // 1st quarter, 2nd quarter, ...
            case 'qqqq':
            default:
                return localize.quarter(quarter, {
                    width: 'wide',
                    context: 'standalone'
                });
        }
    },
    // Month
    M: function(date, token, localize) {
        var month = date.getUTCMonth();
        switch(token){
            case 'M':
            case 'MM':
                return _indexJsDefault.default.M(date, token);
            // 1st, 2nd, ..., 12th
            case 'Mo':
                return localize.ordinalNumber(month + 1, {
                    unit: 'month'
                });
            // Jan, Feb, ..., Dec
            case 'MMM':
                return localize.month(month, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            // J, F, ..., D
            case 'MMMMM':
                return localize.month(month, {
                    width: 'narrow',
                    context: 'formatting'
                });
            // January, February, ..., December
            case 'MMMM':
            default:
                return localize.month(month, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // Stand-alone month
    L: function(date, token, localize) {
        var month = date.getUTCMonth();
        switch(token){
            // 1, 2, ..., 12
            case 'L':
                return String(month + 1);
            // 01, 02, ..., 12
            case 'LL':
                return _indexJsDefault6.default(month + 1, 2);
            // 1st, 2nd, ..., 12th
            case 'Lo':
                return localize.ordinalNumber(month + 1, {
                    unit: 'month'
                });
            // Jan, Feb, ..., Dec
            case 'LLL':
                return localize.month(month, {
                    width: 'abbreviated',
                    context: 'standalone'
                });
            // J, F, ..., D
            case 'LLLLL':
                return localize.month(month, {
                    width: 'narrow',
                    context: 'standalone'
                });
            // January, February, ..., December
            case 'LLLL':
            default:
                return localize.month(month, {
                    width: 'wide',
                    context: 'standalone'
                });
        }
    },
    // Local week of year
    w: function(date, token, localize, options) {
        var week = _indexJsDefault4.default(date, options);
        if (token === 'wo') return localize.ordinalNumber(week, {
            unit: 'week'
        });
        return _indexJsDefault6.default(week, token.length);
    },
    // ISO week of year
    I: function(date, token, localize) {
        var isoWeek = _indexJsDefault2.default(date);
        if (token === 'Io') return localize.ordinalNumber(isoWeek, {
            unit: 'week'
        });
        return _indexJsDefault6.default(isoWeek, token.length);
    },
    // Day of the month
    d: function(date, token, localize) {
        if (token === 'do') return localize.ordinalNumber(date.getUTCDate(), {
            unit: 'date'
        });
        return _indexJsDefault.default.d(date, token);
    },
    // Day of year
    D: function(date, token, localize) {
        var dayOfYear = _indexJsDefault1.default(date);
        if (token === 'Do') return localize.ordinalNumber(dayOfYear, {
            unit: 'dayOfYear'
        });
        return _indexJsDefault6.default(dayOfYear, token.length);
    },
    // Day of week
    E: function(date, token, localize) {
        var dayOfWeek = date.getUTCDay();
        switch(token){
            // Tue
            case 'E':
            case 'EE':
            case 'EEE':
                return localize.day(dayOfWeek, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            // T
            case 'EEEEE':
                return localize.day(dayOfWeek, {
                    width: 'narrow',
                    context: 'formatting'
                });
            // Tu
            case 'EEEEEE':
                return localize.day(dayOfWeek, {
                    width: 'short',
                    context: 'formatting'
                });
            // Tuesday
            case 'EEEE':
            default:
                return localize.day(dayOfWeek, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // Local day of week
    e: function(date, token, localize, options) {
        var dayOfWeek = date.getUTCDay();
        var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (Nth day of week with current locale or weekStartsOn)
            case 'e':
                return String(localDayOfWeek);
            // Padded numerical value
            case 'ee':
                return _indexJsDefault6.default(localDayOfWeek, 2);
            // 1st, 2nd, ..., 7th
            case 'eo':
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: 'day'
                });
            case 'eee':
                return localize.day(dayOfWeek, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            // T
            case 'eeeee':
                return localize.day(dayOfWeek, {
                    width: 'narrow',
                    context: 'formatting'
                });
            // Tu
            case 'eeeeee':
                return localize.day(dayOfWeek, {
                    width: 'short',
                    context: 'formatting'
                });
            // Tuesday
            case 'eeee':
            default:
                return localize.day(dayOfWeek, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // Stand-alone local day of week
    c: function(date, token, localize, options) {
        var dayOfWeek = date.getUTCDay();
        var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (same as in `e`)
            case 'c':
                return String(localDayOfWeek);
            // Padded numerical value
            case 'cc':
                return _indexJsDefault6.default(localDayOfWeek, token.length);
            // 1st, 2nd, ..., 7th
            case 'co':
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: 'day'
                });
            case 'ccc':
                return localize.day(dayOfWeek, {
                    width: 'abbreviated',
                    context: 'standalone'
                });
            // T
            case 'ccccc':
                return localize.day(dayOfWeek, {
                    width: 'narrow',
                    context: 'standalone'
                });
            // Tu
            case 'cccccc':
                return localize.day(dayOfWeek, {
                    width: 'short',
                    context: 'standalone'
                });
            // Tuesday
            case 'cccc':
            default:
                return localize.day(dayOfWeek, {
                    width: 'wide',
                    context: 'standalone'
                });
        }
    },
    // ISO day of week
    i: function(date, token, localize) {
        var dayOfWeek = date.getUTCDay();
        var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
        switch(token){
            // 2
            case 'i':
                return String(isoDayOfWeek);
            // 02
            case 'ii':
                return _indexJsDefault6.default(isoDayOfWeek, token.length);
            // 2nd
            case 'io':
                return localize.ordinalNumber(isoDayOfWeek, {
                    unit: 'day'
                });
            // Tue
            case 'iii':
                return localize.day(dayOfWeek, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            // T
            case 'iiiii':
                return localize.day(dayOfWeek, {
                    width: 'narrow',
                    context: 'formatting'
                });
            // Tu
            case 'iiiiii':
                return localize.day(dayOfWeek, {
                    width: 'short',
                    context: 'formatting'
                });
            // Tuesday
            case 'iiii':
            default:
                return localize.day(dayOfWeek, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // AM or PM
    a: function(date, token, localize) {
        var hours = date.getUTCHours();
        var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
        switch(token){
            case 'a':
            case 'aa':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            case 'aaa':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'abbreviated',
                    context: 'formatting'
                }).toLowerCase();
            case 'aaaaa':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'narrow',
                    context: 'formatting'
                });
            case 'aaaa':
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // AM, PM, midnight, noon
    b: function(date, token, localize) {
        var hours = date.getUTCHours();
        var dayPeriodEnumValue;
        if (hours === 12) dayPeriodEnumValue = dayPeriodEnum.noon;
        else if (hours === 0) dayPeriodEnumValue = dayPeriodEnum.midnight;
        else dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
        switch(token){
            case 'b':
            case 'bb':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            case 'bbb':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'abbreviated',
                    context: 'formatting'
                }).toLowerCase();
            case 'bbbbb':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'narrow',
                    context: 'formatting'
                });
            case 'bbbb':
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // in the morning, in the afternoon, in the evening, at night
    B: function(date, token, localize) {
        var hours = date.getUTCHours();
        var dayPeriodEnumValue;
        if (hours >= 17) dayPeriodEnumValue = dayPeriodEnum.evening;
        else if (hours >= 12) dayPeriodEnumValue = dayPeriodEnum.afternoon;
        else if (hours >= 4) dayPeriodEnumValue = dayPeriodEnum.morning;
        else dayPeriodEnumValue = dayPeriodEnum.night;
        switch(token){
            case 'B':
            case 'BB':
            case 'BBB':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            case 'BBBBB':
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'narrow',
                    context: 'formatting'
                });
            case 'BBBB':
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    // Hour [1-12]
    h: function(date, token, localize) {
        if (token === 'ho') {
            var hours = date.getUTCHours() % 12;
            if (hours === 0) hours = 12;
            return localize.ordinalNumber(hours, {
                unit: 'hour'
            });
        }
        return _indexJsDefault.default.h(date, token);
    },
    // Hour [0-23]
    H: function(date, token, localize) {
        if (token === 'Ho') return localize.ordinalNumber(date.getUTCHours(), {
            unit: 'hour'
        });
        return _indexJsDefault.default.H(date, token);
    },
    // Hour [0-11]
    K: function(date, token, localize) {
        var hours = date.getUTCHours() % 12;
        if (token === 'Ko') return localize.ordinalNumber(hours, {
            unit: 'hour'
        });
        return _indexJsDefault6.default(hours, token.length);
    },
    // Hour [1-24]
    k: function(date, token, localize) {
        var hours = date.getUTCHours();
        if (hours === 0) hours = 24;
        if (token === 'ko') return localize.ordinalNumber(hours, {
            unit: 'hour'
        });
        return _indexJsDefault6.default(hours, token.length);
    },
    // Minute
    m: function(date, token, localize) {
        if (token === 'mo') return localize.ordinalNumber(date.getUTCMinutes(), {
            unit: 'minute'
        });
        return _indexJsDefault.default.m(date, token);
    },
    // Second
    s: function(date, token, localize) {
        if (token === 'so') return localize.ordinalNumber(date.getUTCSeconds(), {
            unit: 'second'
        });
        return _indexJsDefault.default.s(date, token);
    },
    // Fraction of second
    S: function(date, token) {
        return _indexJsDefault.default.S(date, token);
    },
    // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
    X: function(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        if (timezoneOffset === 0) return 'Z';
        switch(token){
            // Hours and optional minutes
            case 'X':
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XX`
            case 'XXXX':
            case 'XX':
                // Hours and minutes without `:` delimiter
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XXX`
            case 'XXXXX':
            case 'XXX':
            default:
                return formatTimezone(timezoneOffset, ':');
        }
    },
    // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
    x: function(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        switch(token){
            // Hours and optional minutes
            case 'x':
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xx`
            case 'xxxx':
            case 'xx':
                // Hours and minutes without `:` delimiter
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xxx`
            case 'xxxxx':
            case 'xxx':
            default:
                return formatTimezone(timezoneOffset, ':');
        }
    },
    // Timezone (GMT)
    O: function(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        switch(token){
            // Short
            case 'O':
            case 'OO':
            case 'OOO':
                return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
            // Long
            case 'OOOO':
            default:
                return 'GMT' + formatTimezone(timezoneOffset, ':');
        }
    },
    // Timezone (specific non-location)
    z: function(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        switch(token){
            // Short
            case 'z':
            case 'zz':
            case 'zzz':
                return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
            // Long
            case 'zzzz':
            default:
                return 'GMT' + formatTimezone(timezoneOffset, ':');
        }
    },
    // Seconds timestamp
    t: function(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timestamp = Math.floor(originalDate.getTime() / 1000);
        return _indexJsDefault6.default(timestamp, token.length);
    },
    // Milliseconds timestamp
    T: function(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timestamp = originalDate.getTime();
        return _indexJsDefault6.default(timestamp, token.length);
    }
};
function formatTimezoneShort(offset, delimiter) {
    var sign = offset > 0 ? '-' : '+';
    var absOffset = Math.abs(offset);
    var hours = Math.floor(absOffset / 60);
    var minutes = absOffset % 60;
    if (minutes === 0) return sign + String(hours);
    return sign + String(hours) + delimiter + _indexJsDefault6.default(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
    if (offset % 60 === 0) {
        var sign = offset > 0 ? '-' : '+';
        return sign + _indexJsDefault6.default(Math.abs(offset) / 60, 2);
    }
    return formatTimezone(offset, dirtyDelimiter);
}
function formatTimezone(offset, dirtyDelimiter) {
    var delimiter = dirtyDelimiter || '';
    var sign = offset > 0 ? '-' : '+';
    var absOffset = Math.abs(offset);
    var hours = _indexJsDefault6.default(Math.floor(absOffset / 60), 2);
    var minutes = _indexJsDefault6.default(absOffset % 60, 2);
    return sign + hours + delimiter + minutes;
}
exports.default = formatters;

},{"../lightFormatters/index.js":"cSNhC","../../../_lib/getUTCDayOfYear/index.js":"38MHB","../../../_lib/getUTCISOWeek/index.js":"hDBPo","../../../_lib/getUTCISOWeekYear/index.js":"5iMyZ","../../../_lib/getUTCWeek/index.js":"5PHDh","../../../_lib/getUTCWeekYear/index.js":"ffyer","../../addLeadingZeros/index.js":"aSeLv","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cSNhC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../addLeadingZeros/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */ var formatters = {
    // Year
    y: function(date, token) {
        // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
        // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
        // |----------|-------|----|-------|-------|-------|
        // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
        // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
        // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
        // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
        // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
        var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)
        var year = signedYear > 0 ? signedYear : 1 - signedYear;
        return _indexJsDefault.default(token === 'yy' ? year % 100 : year, token.length);
    },
    // Month
    M: function(date, token) {
        var month = date.getUTCMonth();
        return token === 'M' ? String(month + 1) : _indexJsDefault.default(month + 1, 2);
    },
    // Day of the month
    d: function(date, token) {
        return _indexJsDefault.default(date.getUTCDate(), token.length);
    },
    // AM or PM
    a: function(date, token) {
        var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';
        switch(token){
            case 'a':
            case 'aa':
                return dayPeriodEnumValue.toUpperCase();
            case 'aaa':
                return dayPeriodEnumValue;
            case 'aaaaa':
                return dayPeriodEnumValue[0];
            case 'aaaa':
            default:
                return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
        }
    },
    // Hour [1-12]
    h: function(date, token) {
        return _indexJsDefault.default(date.getUTCHours() % 12 || 12, token.length);
    },
    // Hour [0-23]
    H: function(date, token) {
        return _indexJsDefault.default(date.getUTCHours(), token.length);
    },
    // Minute
    m: function(date, token) {
        return _indexJsDefault.default(date.getUTCMinutes(), token.length);
    },
    // Second
    s: function(date, token) {
        return _indexJsDefault.default(date.getUTCSeconds(), token.length);
    },
    // Fraction of second
    S: function(date, token) {
        var numberOfDigits = token.length;
        var milliseconds = date.getUTCMilliseconds();
        var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
        return _indexJsDefault.default(fractionalSeconds, token.length);
    }
};
exports.default = formatters;

},{"../../addLeadingZeros/index.js":"aSeLv","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aSeLv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function addLeadingZeros(number, targetLength) {
    var sign = number < 0 ? '-' : '';
    var output = Math.abs(number).toString();
    while(output.length < targetLength)output = '0' + output;
    return sign + output;
}
exports.default = addLeadingZeros;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"38MHB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
function getUTCDayOfYear(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var timestamp = date.getTime();
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
    var startOfYearTimestamp = date.getTime();
    var difference = timestamp - startOfYearTimestamp;
    return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}
exports.default = getUTCDayOfYear;

},{"../../toDate/index.js":"8SEUI","../requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hDBPo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfUTCISOWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfUTCISOWeekYear/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
function getUTCISOWeek(dirtyDate) {
    _indexJsDefault3.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var diff = _indexJsDefault1.default(date).getTime() - _indexJsDefault2.default(date).getTime(); // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
exports.default = getUTCISOWeek;

},{"../../toDate/index.js":"8SEUI","../startOfUTCISOWeek/index.js":"lULNq","../startOfUTCISOWeekYear/index.js":"cW8Jt","../requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lULNq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js"); // This function will be a part of public API when UTC function will be implemented.
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function startOfUTCISOWeek(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var weekStartsOn = 1;
    var date = _indexJsDefault.default(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
}
exports.default = startOfUTCISOWeek;

},{"../../toDate/index.js":"8SEUI","../requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cW8Jt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../getUTCISOWeekYear/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfUTCISOWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../requiredArgs/index.js"); // This function will be a part of public API when UTC function will be implemented.
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function startOfUTCISOWeekYear(dirtyDate) {
    _indexJsDefault2.default(1, arguments);
    var year = _indexJsDefault.default(dirtyDate);
    var fourthOfJanuary = new Date(0);
    fourthOfJanuary.setUTCFullYear(year, 0, 4);
    fourthOfJanuary.setUTCHours(0, 0, 0, 0);
    var date = _indexJsDefault1.default(fourthOfJanuary);
    return date;
}
exports.default = startOfUTCISOWeekYear;

},{"../getUTCISOWeekYear/index.js":"5iMyZ","../startOfUTCISOWeek/index.js":"lULNq","../requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5iMyZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfUTCISOWeek/index.js"); // This function will be a part of public API when UTC function will be implemented.
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function getUTCISOWeekYear(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var year = date.getUTCFullYear();
    var fourthOfJanuaryOfNextYear = new Date(0);
    fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = _indexJsDefault2.default(fourthOfJanuaryOfNextYear);
    var fourthOfJanuaryOfThisYear = new Date(0);
    fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = _indexJsDefault2.default(fourthOfJanuaryOfThisYear);
    if (date.getTime() >= startOfNextYear.getTime()) return year + 1;
    else if (date.getTime() >= startOfThisYear.getTime()) return year;
    else return year - 1;
}
exports.default = getUTCISOWeekYear;

},{"../../toDate/index.js":"8SEUI","../requiredArgs/index.js":"d68zO","../startOfUTCISOWeek/index.js":"lULNq","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5PHDh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfUTCWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfUTCWeekYear/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
function getUTCWeek(dirtyDate, options) {
    _indexJsDefault3.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var diff = _indexJsDefault1.default(date, options).getTime() - _indexJsDefault2.default(date, options).getTime(); // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
exports.default = getUTCWeek;

},{"../../toDate/index.js":"8SEUI","../startOfUTCWeek/index.js":"kvAF1","../startOfUTCWeekYear/index.js":"dp6qL","../requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kvAF1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../toInteger/index.js"); // This function will be a part of public API when UTC function will be implemented.
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function startOfUTCWeek(dirtyDate, dirtyOptions) {
    _indexJsDefault1.default(1, arguments);
    var options = dirtyOptions || {
    };
    var locale = options.locale;
    var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : _indexJsDefault2.default(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : _indexJsDefault2.default(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    var date = _indexJsDefault.default(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
}
exports.default = startOfUTCWeek;

},{"../../toDate/index.js":"8SEUI","../requiredArgs/index.js":"d68zO","../toInteger/index.js":"kAD4R","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dp6qL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../getUTCWeekYear/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfUTCWeek/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../toInteger/index.js"); // This function will be a part of public API when UTC function will be implemented.
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
    _indexJsDefault1.default(1, arguments);
    var options = dirtyOptions || {
    };
    var locale = options.locale;
    var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : _indexJsDefault3.default(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : _indexJsDefault3.default(options.firstWeekContainsDate);
    var year = _indexJsDefault.default(dirtyDate, dirtyOptions);
    var firstWeek = new Date(0);
    firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setUTCHours(0, 0, 0, 0);
    var date = _indexJsDefault2.default(firstWeek, dirtyOptions);
    return date;
}
exports.default = startOfUTCWeekYear;

},{"../getUTCWeekYear/index.js":"ffyer","../requiredArgs/index.js":"d68zO","../startOfUTCWeek/index.js":"kvAF1","../toInteger/index.js":"kAD4R","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ffyer":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfUTCWeek/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../toInteger/index.js"); // This function will be a part of public API when UTC function will be implemented.
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function getUTCWeekYear(dirtyDate, dirtyOptions) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var year = date.getUTCFullYear();
    var options = dirtyOptions || {
    };
    var locale = options.locale;
    var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : _indexJsDefault3.default(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : _indexJsDefault3.default(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    var firstWeekOfNextYear = new Date(0);
    firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = _indexJsDefault2.default(firstWeekOfNextYear, dirtyOptions);
    var firstWeekOfThisYear = new Date(0);
    firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = _indexJsDefault2.default(firstWeekOfThisYear, dirtyOptions);
    if (date.getTime() >= startOfNextYear.getTime()) return year + 1;
    else if (date.getTime() >= startOfThisYear.getTime()) return year;
    else return year - 1;
}
exports.default = getUTCWeekYear;

},{"../../toDate/index.js":"8SEUI","../requiredArgs/index.js":"d68zO","../startOfUTCWeek/index.js":"kvAF1","../toInteger/index.js":"kAD4R","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1geSY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function dateLongFormatter(pattern, formatLong) {
    switch(pattern){
        case 'P':
            return formatLong.date({
                width: 'short'
            });
        case 'PP':
            return formatLong.date({
                width: 'medium'
            });
        case 'PPP':
            return formatLong.date({
                width: 'long'
            });
        case 'PPPP':
        default:
            return formatLong.date({
                width: 'full'
            });
    }
}
function timeLongFormatter(pattern, formatLong) {
    switch(pattern){
        case 'p':
            return formatLong.time({
                width: 'short'
            });
        case 'pp':
            return formatLong.time({
                width: 'medium'
            });
        case 'ppp':
            return formatLong.time({
                width: 'long'
            });
        case 'pppp':
        default:
            return formatLong.time({
                width: 'full'
            });
    }
}
function dateTimeLongFormatter(pattern, formatLong) {
    var matchResult = pattern.match(/(P+)(p+)?/) || [];
    var datePattern = matchResult[1];
    var timePattern = matchResult[2];
    if (!timePattern) return dateLongFormatter(pattern, formatLong);
    var dateTimeFormat;
    switch(datePattern){
        case 'P':
            dateTimeFormat = formatLong.dateTime({
                width: 'short'
            });
            break;
        case 'PP':
            dateTimeFormat = formatLong.dateTime({
                width: 'medium'
            });
            break;
        case 'PPP':
            dateTimeFormat = formatLong.dateTime({
                width: 'long'
            });
            break;
        case 'PPPP':
        default:
            dateTimeFormat = formatLong.dateTime({
                width: 'full'
            });
            break;
    }
    return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}
var longFormatters = {
    p: timeLongFormatter,
    P: dateTimeLongFormatter
};
exports.default = longFormatters;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"akIGo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isProtectedDayOfYearToken", ()=>isProtectedDayOfYearToken
);
parcelHelpers.export(exports, "isProtectedWeekYearToken", ()=>isProtectedWeekYearToken
);
parcelHelpers.export(exports, "throwProtectedError", ()=>throwProtectedError
);
var protectedDayOfYearTokens = [
    'D',
    'DD'
];
var protectedWeekYearTokens = [
    'YY',
    'YYYY'
];
function isProtectedDayOfYearToken(token) {
    return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
    return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
    if (token === 'YYYY') throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    else if (token === 'YY') throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    else if (token === 'D') throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    else if (token === 'DD') throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5mXNe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../compareAsc/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../differenceInMonths/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../differenceInSeconds/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../locale/en-US/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../toDate/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("../_lib/cloneObject/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("../_lib/getTimezoneOffsetInMilliseconds/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs6);
var _indexJs7 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault7 = parcelHelpers.interopDefault(_indexJs7);
var MINUTES_IN_DAY = 1440;
var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
var MINUTES_IN_MONTH = 43200;
var MINUTES_IN_TWO_MONTHS = 86400;
function formatDistance(dirtyDate, dirtyBaseDate) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    };
    _indexJsDefault7.default(2, arguments);
    var locale = options.locale || _indexJsDefault3.default;
    if (!locale.formatDistance) throw new RangeError('locale must contain formatDistance property');
    var comparison = _indexJsDefault.default(dirtyDate, dirtyBaseDate);
    if (isNaN(comparison)) throw new RangeError('Invalid time value');
    var localizeOptions = _indexJsDefault5.default(options);
    localizeOptions.addSuffix = Boolean(options.addSuffix);
    localizeOptions.comparison = comparison;
    var dateLeft;
    var dateRight;
    if (comparison > 0) {
        dateLeft = _indexJsDefault4.default(dirtyBaseDate);
        dateRight = _indexJsDefault4.default(dirtyDate);
    } else {
        dateLeft = _indexJsDefault4.default(dirtyDate);
        dateRight = _indexJsDefault4.default(dirtyBaseDate);
    }
    var seconds = _indexJsDefault2.default(dateRight, dateLeft);
    var offsetInSeconds = (_indexJsDefault6.default(dateRight) - _indexJsDefault6.default(dateLeft)) / 1000;
    var minutes = Math.round((seconds - offsetInSeconds) / 60);
    var months; // 0 up to 2 mins
    if (minutes < 2) {
        if (options.includeSeconds) {
            if (seconds < 5) return locale.formatDistance('lessThanXSeconds', 5, localizeOptions);
            else if (seconds < 10) return locale.formatDistance('lessThanXSeconds', 10, localizeOptions);
            else if (seconds < 20) return locale.formatDistance('lessThanXSeconds', 20, localizeOptions);
            else if (seconds < 40) return locale.formatDistance('halfAMinute', null, localizeOptions);
            else if (seconds < 60) return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
            else return locale.formatDistance('xMinutes', 1, localizeOptions);
        } else {
            if (minutes === 0) return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
            else return locale.formatDistance('xMinutes', minutes, localizeOptions);
        } // 2 mins up to 0.75 hrs
    } else if (minutes < 45) return locale.formatDistance('xMinutes', minutes, localizeOptions); // 0.75 hrs up to 1.5 hrs
    else if (minutes < 90) return locale.formatDistance('aboutXHours', 1, localizeOptions); // 1.5 hrs up to 24 hrs
    else if (minutes < MINUTES_IN_DAY) {
        var hours = Math.round(minutes / 60);
        return locale.formatDistance('aboutXHours', hours, localizeOptions); // 1 day up to 1.75 days
    } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) return locale.formatDistance('xDays', 1, localizeOptions); // 1.75 days up to 30 days
    else if (minutes < MINUTES_IN_MONTH) {
        var days = Math.round(minutes / MINUTES_IN_DAY);
        return locale.formatDistance('xDays', days, localizeOptions); // 1 month up to 2 months
    } else if (minutes < MINUTES_IN_TWO_MONTHS) {
        months = Math.round(minutes / MINUTES_IN_MONTH);
        return locale.formatDistance('aboutXMonths', months, localizeOptions);
    }
    months = _indexJsDefault1.default(dateRight, dateLeft); // 2 months up to 12 months
    if (months < 12) {
        var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
        return locale.formatDistance('xMonths', nearestMonth, localizeOptions); // 1 year up to max Date
    } else {
        var monthsSinceStartOfYear = months % 12;
        var years = Math.floor(months / 12); // N years up to 1 years 3 months
        if (monthsSinceStartOfYear < 3) return locale.formatDistance('aboutXYears', years, localizeOptions); // N years 3 months up to N years 9 months
        else if (monthsSinceStartOfYear < 9) return locale.formatDistance('overXYears', years, localizeOptions); // N years 9 months up to N year 12 months
        else return locale.formatDistance('almostXYears', years + 1, localizeOptions);
    }
}
exports.default = formatDistance;

},{"../compareAsc/index.js":"lHJiT","../differenceInMonths/index.js":"lUaVC","../differenceInSeconds/index.js":"6Ki2w","../locale/en-US/index.js":"jUFks","../toDate/index.js":"8SEUI","../_lib/cloneObject/index.js":"6N0MV","../_lib/getTimezoneOffsetInMilliseconds/index.js":"f8dgA","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6N0MV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../assign/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function cloneObject(dirtyObject) {
    return _indexJsDefault.default({
    }, dirtyObject);
}
exports.default = cloneObject;

},{"../assign/index.js":"6g3LK","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6g3LK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function assign(target, dirtyObject) {
    if (target == null) throw new TypeError('assign requires that input parameter not be null or undefined');
    dirtyObject = dirtyObject || {
    };
    for(var property in dirtyObject)if (Object.prototype.hasOwnProperty.call(dirtyObject, property)) target[property] = dirtyObject[property];
    return target;
}
exports.default = assign;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fJZbf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/getTimezoneOffsetInMilliseconds/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../compareAsc/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../toDate/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/cloneObject/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../locale/en-US/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
var MILLISECONDS_IN_MINUTE = 60000;
var MINUTES_IN_DAY = 1440;
var MINUTES_IN_MONTH = MINUTES_IN_DAY * 30;
var MINUTES_IN_YEAR = MINUTES_IN_DAY * 365;
function formatDistanceStrict(dirtyDate, dirtyBaseDate) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    };
    _indexJsDefault5.default(2, arguments);
    var locale = options.locale || _indexJsDefault4.default;
    if (!locale.formatDistance) throw new RangeError('locale must contain localize.formatDistance property');
    var comparison = _indexJsDefault1.default(dirtyDate, dirtyBaseDate);
    if (isNaN(comparison)) throw new RangeError('Invalid time value');
    var localizeOptions = _indexJsDefault3.default(options);
    localizeOptions.addSuffix = Boolean(options.addSuffix);
    localizeOptions.comparison = comparison;
    var dateLeft;
    var dateRight;
    if (comparison > 0) {
        dateLeft = _indexJsDefault2.default(dirtyBaseDate);
        dateRight = _indexJsDefault2.default(dirtyDate);
    } else {
        dateLeft = _indexJsDefault2.default(dirtyDate);
        dateRight = _indexJsDefault2.default(dirtyBaseDate);
    }
    var roundingMethod = options.roundingMethod == null ? 'round' : String(options.roundingMethod);
    var roundingMethodFn;
    if (roundingMethod === 'floor') roundingMethodFn = Math.floor;
    else if (roundingMethod === 'ceil') roundingMethodFn = Math.ceil;
    else if (roundingMethod === 'round') roundingMethodFn = Math.round;
    else throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
    var milliseconds = dateRight.getTime() - dateLeft.getTime();
    var minutes = milliseconds / MILLISECONDS_IN_MINUTE;
    var timezoneOffset = _indexJsDefault.default(dateRight) - _indexJsDefault.default(dateLeft); // Use DST-normalized difference in minutes for years, months and days;
    // use regular difference in minutes for hours, minutes and seconds.
    var dstNormalizedMinutes = (milliseconds - timezoneOffset) / MILLISECONDS_IN_MINUTE;
    var unit;
    if (options.unit == null) {
        if (minutes < 1) unit = 'second';
        else if (minutes < 60) unit = 'minute';
        else if (minutes < MINUTES_IN_DAY) unit = 'hour';
        else if (dstNormalizedMinutes < MINUTES_IN_MONTH) unit = 'day';
        else if (dstNormalizedMinutes < MINUTES_IN_YEAR) unit = 'month';
        else unit = 'year';
    } else unit = String(options.unit);
     // 0 up to 60 seconds
    if (unit === 'second') {
        var seconds = roundingMethodFn(milliseconds / 1000);
        return locale.formatDistance('xSeconds', seconds, localizeOptions); // 1 up to 60 mins
    } else if (unit === 'minute') {
        var roundedMinutes = roundingMethodFn(minutes);
        return locale.formatDistance('xMinutes', roundedMinutes, localizeOptions); // 1 up to 24 hours
    } else if (unit === 'hour') {
        var hours = roundingMethodFn(minutes / 60);
        return locale.formatDistance('xHours', hours, localizeOptions); // 1 up to 30 days
    } else if (unit === 'day') {
        var days = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_DAY);
        return locale.formatDistance('xDays', days, localizeOptions); // 1 up to 12 months
    } else if (unit === 'month') {
        var months = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_MONTH);
        return months === 12 && options.unit !== 'month' ? locale.formatDistance('xYears', 1, localizeOptions) : locale.formatDistance('xMonths', months, localizeOptions); // 1 year up to max Date
    } else if (unit === 'year') {
        var years = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_YEAR);
        return locale.formatDistance('xYears', years, localizeOptions);
    }
    throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
exports.default = formatDistanceStrict;

},{"../_lib/getTimezoneOffsetInMilliseconds/index.js":"f8dgA","../compareAsc/index.js":"lHJiT","../toDate/index.js":"8SEUI","../_lib/cloneObject/index.js":"6N0MV","../locale/en-US/index.js":"jUFks","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"E20nO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../formatDistance/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function formatDistanceToNow(dirtyDate, dirtyOptions) {
    _indexJsDefault1.default(1, arguments);
    return _indexJsDefault.default(dirtyDate, Date.now(), dirtyOptions);
}
exports.default = formatDistanceToNow;

},{"../formatDistance/index.js":"5mXNe","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jCn0k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../formatDistanceStrict/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function formatDistanceToNowStrict(dirtyDate, dirtyOptions) {
    _indexJsDefault1.default(1, arguments);
    return _indexJsDefault.default(dirtyDate, Date.now(), dirtyOptions);
}
exports.default = formatDistanceToNowStrict;

},{"../formatDistanceStrict/index.js":"fJZbf","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iPdjS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../locale/en-US/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var defaultFormat = [
    'years',
    'months',
    'weeks',
    'days',
    'hours',
    'minutes',
    'seconds'
];
function formatDuration(duration) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    };
    if (arguments.length < 1) throw new TypeError("1 argument required, but only ".concat(arguments.length, " present"));
    var format = (options === null || options === void 0 ? void 0 : options.format) || defaultFormat;
    var locale = (options === null || options === void 0 ? void 0 : options.locale) || _indexJsDefault.default;
    var zero = (options === null || options === void 0 ? void 0 : options.zero) || false;
    var delimiter = (options === null || options === void 0 ? void 0 : options.delimiter) || ' ';
    var result = format.reduce(function(acc, unit) {
        var token = "x".concat(unit.replace(/(^.)/, function(m) {
            return m.toUpperCase();
        }));
        var addChunk = typeof duration[unit] === 'number' && (zero || duration[unit]);
        return addChunk && locale.formatDistance ? acc.concat(locale.formatDistance(token, duration[unit])) : acc;
    }, []).join(delimiter);
    return result;
}
exports.default = formatDuration;

},{"../locale/en-US/index.js":"jUFks","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lthd5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/addLeadingZeros/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function formatISO(date, options) {
    _indexJsDefault2.default(1, arguments);
    var originalDate = _indexJsDefault.default(date);
    if (isNaN(originalDate.getTime())) throw new RangeError('Invalid time value');
    var format = !(options !== null && options !== void 0 && options.format) ? 'extended' : String(options.format);
    var representation = !(options !== null && options !== void 0 && options.representation) ? 'complete' : String(options.representation);
    if (format !== 'extended' && format !== 'basic') throw new RangeError("format must be 'extended' or 'basic'");
    if (representation !== 'date' && representation !== 'time' && representation !== 'complete') throw new RangeError("representation must be 'date', 'time', or 'complete'");
    var result = '';
    var tzOffset = '';
    var dateDelimiter = format === 'extended' ? '-' : '';
    var timeDelimiter = format === 'extended' ? ':' : ''; // Representation is either 'date' or 'complete'
    if (representation !== 'time') {
        var day = _indexJsDefault1.default(originalDate.getDate(), 2);
        var month = _indexJsDefault1.default(originalDate.getMonth() + 1, 2);
        var year = _indexJsDefault1.default(originalDate.getFullYear(), 4); // yyyyMMdd or yyyy-MM-dd.
        result = "".concat(year).concat(dateDelimiter).concat(month).concat(dateDelimiter).concat(day);
    } // Representation is either 'time' or 'complete'
    if (representation !== 'date') {
        // Add the timezone.
        var offset = originalDate.getTimezoneOffset();
        if (offset !== 0) {
            var absoluteOffset = Math.abs(offset);
            var hourOffset = _indexJsDefault1.default(Math.floor(absoluteOffset / 60), 2);
            var minuteOffset = _indexJsDefault1.default(absoluteOffset % 60, 2); // If less than 0, the sign is +, because it is ahead of time.
            var sign = offset < 0 ? '+' : '-';
            tzOffset = "".concat(sign).concat(hourOffset, ":").concat(minuteOffset);
        } else tzOffset = 'Z';
        var hour = _indexJsDefault1.default(originalDate.getHours(), 2);
        var minute = _indexJsDefault1.default(originalDate.getMinutes(), 2);
        var second = _indexJsDefault1.default(originalDate.getSeconds(), 2); // If there's also date, separate it with time with 'T'
        var separator = result === '' ? '' : 'T'; // Creates a time string consisting of hour, minute, and second, separated by delimiters, if defined.
        var time = [
            hour,
            minute,
            second
        ].join(timeDelimiter); // HHmmss or HH:mm:ss.
        result = "".concat(result).concat(separator).concat(time).concat(tzOffset);
    }
    return result;
}
exports.default = formatISO;

},{"../toDate/index.js":"8SEUI","../_lib/addLeadingZeros/index.js":"aSeLv","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cxmac":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../isValid/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/addLeadingZeros/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function formatISO9075(dirtyDate, dirtyOptions) {
    if (arguments.length < 1) throw new TypeError("1 argument required, but only ".concat(arguments.length, " present"));
    var originalDate = _indexJsDefault.default(dirtyDate);
    if (!_indexJsDefault1.default(originalDate)) throw new RangeError('Invalid time value');
    var options = dirtyOptions || {
    };
    var format = options.format == null ? 'extended' : String(options.format);
    var representation = options.representation == null ? 'complete' : String(options.representation);
    if (format !== 'extended' && format !== 'basic') throw new RangeError("format must be 'extended' or 'basic'");
    if (representation !== 'date' && representation !== 'time' && representation !== 'complete') throw new RangeError("representation must be 'date', 'time', or 'complete'");
    var result = '';
    var dateDelimiter = format === 'extended' ? '-' : '';
    var timeDelimiter = format === 'extended' ? ':' : ''; // Representation is either 'date' or 'complete'
    if (representation !== 'time') {
        var day = _indexJsDefault2.default(originalDate.getDate(), 2);
        var month = _indexJsDefault2.default(originalDate.getMonth() + 1, 2);
        var year = _indexJsDefault2.default(originalDate.getFullYear(), 4); // yyyyMMdd or yyyy-MM-dd.
        result = "".concat(year).concat(dateDelimiter).concat(month).concat(dateDelimiter).concat(day);
    } // Representation is either 'time' or 'complete'
    if (representation !== 'date') {
        var hour = _indexJsDefault2.default(originalDate.getHours(), 2);
        var minute = _indexJsDefault2.default(originalDate.getMinutes(), 2);
        var second = _indexJsDefault2.default(originalDate.getSeconds(), 2); // If there's also date, separate it with time with a space
        var separator = result === '' ? '' : ' '; // HHmmss or HH:mm:ss.
        result = "".concat(result).concat(separator).concat(hour).concat(timeDelimiter).concat(minute).concat(timeDelimiter).concat(second);
    }
    return result;
}
exports.default = formatISO9075;

},{"../toDate/index.js":"8SEUI","../isValid/index.js":"kdbZT","../_lib/addLeadingZeros/index.js":"aSeLv","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cxiq5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function formatISODuration(duration) {
    _indexJsDefault.default(1, arguments);
    if (typeof duration !== 'object') throw new Error('Duration must be an object');
    var _duration$years = duration.years, years = _duration$years === void 0 ? 0 : _duration$years, _duration$months = duration.months, months = _duration$months === void 0 ? 0 : _duration$months, _duration$days = duration.days, days = _duration$days === void 0 ? 0 : _duration$days, _duration$hours = duration.hours, hours = _duration$hours === void 0 ? 0 : _duration$hours, _duration$minutes = duration.minutes, minutes = _duration$minutes === void 0 ? 0 : _duration$minutes, _duration$seconds = duration.seconds, seconds = _duration$seconds === void 0 ? 0 : _duration$seconds;
    return "P".concat(years, "Y").concat(months, "M").concat(days, "DT").concat(hours, "H").concat(minutes, "M").concat(seconds, "S");
}
exports.default = formatISODuration;

},{"../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3zEir":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../isValid/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/addLeadingZeros/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/toInteger/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function formatRFC3339(dirtyDate, dirtyOptions) {
    if (arguments.length < 1) throw new TypeError("1 arguments required, but only ".concat(arguments.length, " present"));
    var originalDate = _indexJsDefault.default(dirtyDate);
    if (!_indexJsDefault1.default(originalDate)) throw new RangeError('Invalid time value');
    var _ref = dirtyOptions || {
    }, _ref$fractionDigits = _ref.fractionDigits, fractionDigits = _ref$fractionDigits === void 0 ? 0 : _ref$fractionDigits; // Test if fractionDigits is between 0 and 3 _and_ is not NaN
    if (!(fractionDigits >= 0 && fractionDigits <= 3)) throw new RangeError('fractionDigits must be between 0 and 3 inclusively');
    var day = _indexJsDefault2.default(originalDate.getDate(), 2);
    var month = _indexJsDefault2.default(originalDate.getMonth() + 1, 2);
    var year = originalDate.getFullYear();
    var hour = _indexJsDefault2.default(originalDate.getHours(), 2);
    var minute = _indexJsDefault2.default(originalDate.getMinutes(), 2);
    var second = _indexJsDefault2.default(originalDate.getSeconds(), 2);
    var fractionalSecond = '';
    if (fractionDigits > 0) {
        var milliseconds = originalDate.getMilliseconds();
        var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, fractionDigits - 3));
        fractionalSecond = '.' + _indexJsDefault2.default(fractionalSeconds, fractionDigits);
    }
    var offset = '';
    var tzOffset = originalDate.getTimezoneOffset();
    if (tzOffset !== 0) {
        var absoluteOffset = Math.abs(tzOffset);
        var hourOffset = _indexJsDefault2.default(_indexJsDefault3.default(absoluteOffset / 60), 2);
        var minuteOffset = _indexJsDefault2.default(absoluteOffset % 60, 2); // If less than 0, the sign is +, because it is ahead of time.
        var sign = tzOffset < 0 ? '+' : '-';
        offset = "".concat(sign).concat(hourOffset, ":").concat(minuteOffset);
    } else offset = 'Z';
    return "".concat(year, "-").concat(month, "-").concat(day, "T").concat(hour, ":").concat(minute, ":").concat(second).concat(fractionalSecond).concat(offset);
}
exports.default = formatRFC3339;

},{"../toDate/index.js":"8SEUI","../isValid/index.js":"kdbZT","../_lib/addLeadingZeros/index.js":"aSeLv","../_lib/toInteger/index.js":"kAD4R","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7iGZp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../isValid/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/addLeadingZeros/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
];
var months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];
function formatRFC7231(dirtyDate) {
    if (arguments.length < 1) throw new TypeError("1 arguments required, but only ".concat(arguments.length, " present"));
    var originalDate = _indexJsDefault.default(dirtyDate);
    if (!_indexJsDefault1.default(originalDate)) throw new RangeError('Invalid time value');
    var dayName = days[originalDate.getUTCDay()];
    var dayOfMonth = _indexJsDefault2.default(originalDate.getUTCDate(), 2);
    var monthName = months[originalDate.getUTCMonth()];
    var year = originalDate.getUTCFullYear();
    var hour = _indexJsDefault2.default(originalDate.getUTCHours(), 2);
    var minute = _indexJsDefault2.default(originalDate.getUTCMinutes(), 2);
    var second = _indexJsDefault2.default(originalDate.getUTCSeconds(), 2); // Result variables.
    return "".concat(dayName, ", ").concat(dayOfMonth, " ").concat(monthName, " ").concat(year, " ").concat(hour, ":").concat(minute, ":").concat(second, " GMT");
}
exports.default = formatRFC7231;

},{"../toDate/index.js":"8SEUI","../isValid/index.js":"kdbZT","../_lib/addLeadingZeros/index.js":"aSeLv","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kAVTp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../differenceInCalendarDays/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../format/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../locale/en-US/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../subMilliseconds/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../toDate/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("../_lib/getTimezoneOffsetInMilliseconds/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs6);
function formatRelative(dirtyDate, dirtyBaseDate, dirtyOptions) {
    _indexJsDefault6.default(2, arguments);
    var date = _indexJsDefault4.default(dirtyDate);
    var baseDate = _indexJsDefault4.default(dirtyBaseDate);
    var _ref = dirtyOptions || {
    }, _ref$locale = _ref.locale, locale = _ref$locale === void 0 ? _indexJsDefault2.default : _ref$locale, _ref$weekStartsOn = _ref.weekStartsOn, weekStartsOn = _ref$weekStartsOn === void 0 ? 0 : _ref$weekStartsOn;
    if (!locale.localize) throw new RangeError('locale must contain localize property');
    if (!locale.formatLong) throw new RangeError('locale must contain formatLong property');
    if (!locale.formatRelative) throw new RangeError('locale must contain formatRelative property');
    var diff = _indexJsDefault.default(date, baseDate);
    if (isNaN(diff)) throw new RangeError('Invalid time value');
    var token;
    if (diff < -6) token = 'other';
    else if (diff < -1) token = 'lastWeek';
    else if (diff < 0) token = 'yesterday';
    else if (diff < 1) token = 'today';
    else if (diff < 2) token = 'tomorrow';
    else if (diff < 7) token = 'nextWeek';
    else token = 'other';
    var utcDate = _indexJsDefault3.default(date, _indexJsDefault5.default(date));
    var utcBaseDate = _indexJsDefault3.default(baseDate, _indexJsDefault5.default(baseDate));
    var formatStr = locale.formatRelative(token, utcDate, utcBaseDate, {
        locale: locale,
        weekStartsOn: weekStartsOn
    });
    return _indexJsDefault1.default(date, formatStr, {
        locale: locale,
        weekStartsOn: weekStartsOn
    });
}
exports.default = formatRelative;

},{"../differenceInCalendarDays/index.js":"3nymD","../format/index.js":"kS361","../locale/en-US/index.js":"jUFks","../subMilliseconds/index.js":"gA2J2","../toDate/index.js":"8SEUI","../_lib/getTimezoneOffsetInMilliseconds/index.js":"f8dgA","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fTLuY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/toInteger/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function fromUnixTime(dirtyUnixTime) {
    _indexJsDefault2.default(1, arguments);
    var unixTime = _indexJsDefault1.default(dirtyUnixTime);
    return _indexJsDefault.default(unixTime * 1000);
}
exports.default = fromUnixTime;

},{"../toDate/index.js":"8SEUI","../_lib/toInteger/index.js":"kAD4R","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"f9PHd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function getDate(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var dayOfMonth = date.getDate();
    return dayOfMonth;
}
exports.default = getDate;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8bQ00":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function getDay(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var day = date.getDay();
    return day;
}
exports.default = getDay;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"17hgf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfYear/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../differenceInCalendarDays/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function getDayOfYear(dirtyDate) {
    _indexJsDefault3.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var diff = _indexJsDefault2.default(date, _indexJsDefault1.default(date));
    var dayOfYear = diff + 1;
    return dayOfYear;
}
exports.default = getDayOfYear;

},{"../toDate/index.js":"8SEUI","../startOfYear/index.js":"yMCop","../differenceInCalendarDays/index.js":"3nymD","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8KDB1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function getDaysInMonth(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var year = date.getFullYear();
    var monthIndex = date.getMonth();
    var lastDayOfMonth = new Date(0);
    lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
    lastDayOfMonth.setHours(0, 0, 0, 0);
    return lastDayOfMonth.getDate();
}
exports.default = getDaysInMonth;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gRgTP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../isLeapYear/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function getDaysInYear(dirtyDate) {
    _indexJsDefault2.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    if (String(new Date(date)) === 'Invalid Date') return NaN;
    return _indexJsDefault1.default(date) ? 366 : 365;
}
exports.default = getDaysInYear;

},{"../toDate/index.js":"8SEUI","../isLeapYear/index.js":"cTlk5","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cTlk5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isLeapYear(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var year = date.getFullYear();
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
exports.default = isLeapYear;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kSWAr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function getDecade(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var year = date.getFullYear();
    var decade = Math.floor(year / 10) * 10;
    return decade;
}
exports.default = getDecade;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lBxk5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function getHours(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var hours = date.getHours();
    return hours;
}
exports.default = getHours;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"csuPW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function getISODay(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var day = date.getDay();
    if (day === 0) day = 7;
    return day;
}
exports.default = getISODay;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ltK9L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfISOWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfISOWeekYear/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var MILLISECONDS_IN_WEEK = 604800000;
function getISOWeek(dirtyDate) {
    _indexJsDefault3.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var diff = _indexJsDefault1.default(date).getTime() - _indexJsDefault2.default(date).getTime(); // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
exports.default = getISOWeek;

},{"../toDate/index.js":"8SEUI","../startOfISOWeek/index.js":"3uvqr","../startOfISOWeekYear/index.js":"ewe0d","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jNCwz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../startOfISOWeekYear/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addWeeks/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var MILLISECONDS_IN_WEEK = 604800000;
function getISOWeeksInYear(dirtyDate) {
    _indexJsDefault2.default(1, arguments);
    var thisYear = _indexJsDefault.default(dirtyDate);
    var nextYear = _indexJsDefault.default(_indexJsDefault1.default(thisYear, 60));
    var diff = nextYear.valueOf() - thisYear.valueOf(); // Round the number of weeks to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round(diff / MILLISECONDS_IN_WEEK);
}
exports.default = getISOWeeksInYear;

},{"../startOfISOWeekYear/index.js":"ewe0d","../addWeeks/index.js":"5JeVP","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"d3pyL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function getMilliseconds(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var milliseconds = date.getMilliseconds();
    return milliseconds;
}
exports.default = getMilliseconds;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eOYaS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function getMinutes(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var minutes = date.getMinutes();
    return minutes;
}
exports.default = getMinutes;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2Yna1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function getMonth(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var month = date.getMonth();
    return month;
}
exports.default = getMonth;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3EIal":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var MILLISECONDS_IN_DAY = 86400000;
function getOverlappingDaysInIntervals(dirtyIntervalLeft, dirtyIntervalRight) {
    _indexJsDefault1.default(2, arguments);
    var intervalLeft = dirtyIntervalLeft || {
    };
    var intervalRight = dirtyIntervalRight || {
    };
    var leftStartTime = _indexJsDefault.default(intervalLeft.start).getTime();
    var leftEndTime = _indexJsDefault.default(intervalLeft.end).getTime();
    var rightStartTime = _indexJsDefault.default(intervalRight.start).getTime();
    var rightEndTime = _indexJsDefault.default(intervalRight.end).getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`
    if (!(leftStartTime <= leftEndTime && rightStartTime <= rightEndTime)) throw new RangeError('Invalid interval');
    var isOverlapping = leftStartTime < rightEndTime && rightStartTime < leftEndTime;
    if (!isOverlapping) return 0;
    var overlapStartDate = rightStartTime < leftStartTime ? leftStartTime : rightStartTime;
    var overlapEndDate = rightEndTime > leftEndTime ? leftEndTime : rightEndTime;
    var differenceInMs = overlapEndDate - overlapStartDate;
    return Math.ceil(differenceInMs / MILLISECONDS_IN_DAY);
}
exports.default = getOverlappingDaysInIntervals;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"frlCF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function getSeconds(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var seconds = date.getSeconds();
    return seconds;
}
exports.default = getSeconds;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aDfBS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function getTime(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var timestamp = date.getTime();
    return timestamp;
}
exports.default = getTime;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4PmVA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../getTime/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function getUnixTime(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    return Math.floor(_indexJsDefault.default(dirtyDate) / 1000);
}
exports.default = getUnixTime;

},{"../getTime/index.js":"aDfBS","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"10ich":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../startOfWeek/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfWeekYear/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../toDate/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var MILLISECONDS_IN_WEEK = 604800000;
function getWeek(dirtyDate, options) {
    _indexJsDefault3.default(1, arguments);
    var date = _indexJsDefault2.default(dirtyDate);
    var diff = _indexJsDefault.default(date, options).getTime() - _indexJsDefault1.default(date, options).getTime(); // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
exports.default = getWeek;

},{"../startOfWeek/index.js":"aVyea","../startOfWeekYear/index.js":"dqGOa","../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dqGOa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../getWeekYear/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/toInteger/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function startOfWeekYear(dirtyDate, dirtyOptions) {
    _indexJsDefault3.default(1, arguments);
    var options = dirtyOptions || {
    };
    var locale = options.locale;
    var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : _indexJsDefault2.default(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : _indexJsDefault2.default(options.firstWeekContainsDate);
    var year = _indexJsDefault.default(dirtyDate, dirtyOptions);
    var firstWeek = new Date(0);
    firstWeek.setFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setHours(0, 0, 0, 0);
    var date = _indexJsDefault1.default(firstWeek, dirtyOptions);
    return date;
}
exports.default = startOfWeekYear;

},{"../getWeekYear/index.js":"bJqCK","../startOfWeek/index.js":"aVyea","../_lib/toInteger/index.js":"kAD4R","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bJqCK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../startOfWeek/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/toInteger/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function getWeekYear(dirtyDate, options) {
    var _options$locale, _options$locale$optio;
    _indexJsDefault3.default(1, arguments);
    var date = _indexJsDefault1.default(dirtyDate);
    var year = date.getFullYear();
    var localeFirstWeekContainsDate = options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : _indexJsDefault2.default(localeFirstWeekContainsDate);
    var firstWeekContainsDate = (options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) == null ? defaultFirstWeekContainsDate : _indexJsDefault2.default(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    var firstWeekOfNextYear = new Date(0);
    firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setHours(0, 0, 0, 0);
    var startOfNextYear = _indexJsDefault.default(firstWeekOfNextYear, options);
    var firstWeekOfThisYear = new Date(0);
    firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setHours(0, 0, 0, 0);
    var startOfThisYear = _indexJsDefault.default(firstWeekOfThisYear, options);
    if (date.getTime() >= startOfNextYear.getTime()) return year + 1;
    else if (date.getTime() >= startOfThisYear.getTime()) return year;
    else return year - 1;
}
exports.default = getWeekYear;

},{"../startOfWeek/index.js":"aVyea","../toDate/index.js":"8SEUI","../_lib/toInteger/index.js":"kAD4R","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gd0GE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../getDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../getDay/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfMonth/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/toInteger/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
function getWeekOfMonth(date, dirtyOptions) {
    _indexJsDefault4.default(1, arguments);
    var options = dirtyOptions || {
    };
    var locale = options.locale;
    var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : _indexJsDefault3.default(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : _indexJsDefault3.default(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    var currentDayOfMonth = _indexJsDefault.default(date);
    if (isNaN(currentDayOfMonth)) return currentDayOfMonth;
    var startWeekDay = _indexJsDefault1.default(_indexJsDefault2.default(date));
    var lastDayOfFirstWeek = 0;
    if (startWeekDay >= weekStartsOn) lastDayOfFirstWeek = weekStartsOn + 7 - startWeekDay;
    else lastDayOfFirstWeek = weekStartsOn - startWeekDay;
    var weekNumber = 1;
    if (currentDayOfMonth > lastDayOfFirstWeek) {
        var remainingDaysAfterFirstWeek = currentDayOfMonth - lastDayOfFirstWeek;
        weekNumber = weekNumber + Math.ceil(remainingDaysAfterFirstWeek / 7);
    }
    return weekNumber;
}
exports.default = getWeekOfMonth;

},{"../getDate/index.js":"f9PHd","../getDay/index.js":"8bQ00","../startOfMonth/index.js":"fwgu6","../_lib/toInteger/index.js":"kAD4R","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aWPgQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../differenceInCalendarWeeks/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../lastDayOfMonth/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfMonth/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function getWeeksInMonth(date, options) {
    _indexJsDefault3.default(1, arguments);
    return _indexJsDefault.default(_indexJsDefault1.default(date), _indexJsDefault2.default(date), options) + 1;
}
exports.default = getWeeksInMonth;

},{"../differenceInCalendarWeeks/index.js":"l9vfp","../lastDayOfMonth/index.js":"fjshY","../startOfMonth/index.js":"fwgu6","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fjshY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function lastDayOfMonth(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var month = date.getMonth();
    date.setFullYear(date.getFullYear(), month + 1, 0);
    date.setHours(0, 0, 0, 0);
    return date;
}
exports.default = lastDayOfMonth;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"42bz7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function getYear(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    return _indexJsDefault.default(dirtyDate).getFullYear();
}
exports.default = getYear;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"k8P6P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function hoursToMilliseconds(hours) {
    _indexJsDefault.default(1, arguments);
    return Math.floor(hours * _indexJs1.millisecondsInHour);
}
exports.default = hoursToMilliseconds;

},{"../_lib/requiredArgs/index.js":"d68zO","../constants/index.js":"iykpK","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6YdHE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function hoursToMinutes(hours) {
    _indexJsDefault.default(1, arguments);
    return Math.floor(hours * _indexJs1.minutesInHour);
}
exports.default = hoursToMinutes;

},{"../_lib/requiredArgs/index.js":"d68zO","../constants/index.js":"iykpK","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kO9dM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function hoursToSeconds(hours) {
    _indexJsDefault.default(1, arguments);
    return Math.floor(hours * _indexJs1.secondsInHour);
}
exports.default = hoursToSeconds;

},{"../_lib/requiredArgs/index.js":"d68zO","../constants/index.js":"iykpK","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fdgxR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../compareAsc/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../differenceInYears/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../differenceInMonths/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../differenceInDays/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../differenceInHours/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("../differenceInMinutes/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("../differenceInSeconds/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs6);
var _indexJs7 = require("../isValid/index.js");
var _indexJsDefault7 = parcelHelpers.interopDefault(_indexJs7);
var _indexJs8 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault8 = parcelHelpers.interopDefault(_indexJs8);
var _indexJs9 = require("../toDate/index.js");
var _indexJsDefault9 = parcelHelpers.interopDefault(_indexJs9);
var _indexJs10 = require("../sub/index.js");
var _indexJsDefault10 = parcelHelpers.interopDefault(_indexJs10);
function intervalToDuration(_ref) {
    var start = _ref.start, end = _ref.end;
    _indexJsDefault8.default(1, arguments);
    var dateLeft = _indexJsDefault9.default(start);
    var dateRight = _indexJsDefault9.default(end);
    if (!_indexJsDefault7.default(dateLeft)) throw new RangeError('Start Date is invalid');
    if (!_indexJsDefault7.default(dateRight)) throw new RangeError('End Date is invalid');
    var duration = {
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    };
    var sign = _indexJsDefault.default(dateLeft, dateRight);
    duration.years = Math.abs(_indexJsDefault1.default(dateLeft, dateRight));
    var remainingMonths = _indexJsDefault10.default(dateLeft, {
        years: sign * duration.years
    });
    duration.months = Math.abs(_indexJsDefault2.default(remainingMonths, dateRight));
    var remainingDays = _indexJsDefault10.default(remainingMonths, {
        months: sign * duration.months
    });
    duration.days = Math.abs(_indexJsDefault3.default(remainingDays, dateRight));
    var remainingHours = _indexJsDefault10.default(remainingDays, {
        days: sign * duration.days
    });
    duration.hours = Math.abs(_indexJsDefault4.default(remainingHours, dateRight));
    var remainingMinutes = _indexJsDefault10.default(remainingHours, {
        hours: sign * duration.hours
    });
    duration.minutes = Math.abs(_indexJsDefault5.default(remainingMinutes, dateRight));
    var remainingSeconds = _indexJsDefault10.default(remainingMinutes, {
        minutes: sign * duration.minutes
    });
    duration.seconds = Math.abs(_indexJsDefault6.default(remainingSeconds, dateRight));
    return duration;
}
exports.default = intervalToDuration;

},{"../compareAsc/index.js":"lHJiT","../differenceInYears/index.js":"fqVPi","../differenceInMonths/index.js":"lUaVC","../differenceInDays/index.js":"djPSs","../differenceInHours/index.js":"7DDgr","../differenceInMinutes/index.js":"i8Bhl","../differenceInSeconds/index.js":"6Ki2w","../isValid/index.js":"kdbZT","../_lib/requiredArgs/index.js":"d68zO","../toDate/index.js":"8SEUI","../sub/index.js":"lhXqZ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lhXqZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../subDays/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../subMonths/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/toInteger/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function sub(date, duration) {
    _indexJsDefault2.default(2, arguments);
    if (!duration || typeof duration !== 'object') return new Date(NaN);
    var years = duration.years ? _indexJsDefault3.default(duration.years) : 0;
    var months = duration.months ? _indexJsDefault3.default(duration.months) : 0;
    var weeks = duration.weeks ? _indexJsDefault3.default(duration.weeks) : 0;
    var days = duration.days ? _indexJsDefault3.default(duration.days) : 0;
    var hours = duration.hours ? _indexJsDefault3.default(duration.hours) : 0;
    var minutes = duration.minutes ? _indexJsDefault3.default(duration.minutes) : 0;
    var seconds = duration.seconds ? _indexJsDefault3.default(duration.seconds) : 0; // Subtract years and months
    var dateWithoutMonths = _indexJsDefault1.default(date, months + years * 12); // Subtract weeks and days
    var dateWithoutDays = _indexJsDefault.default(dateWithoutMonths, days + weeks * 7); // Subtract hours, minutes and seconds
    var minutestoSub = minutes + hours * 60;
    var secondstoSub = seconds + minutestoSub * 60;
    var mstoSub = secondstoSub * 1000;
    var finalDate = new Date(dateWithoutDays.getTime() - mstoSub);
    return finalDate;
}
exports.default = sub;

},{"../subDays/index.js":"2fUPw","../subMonths/index.js":"1yuKK","../_lib/requiredArgs/index.js":"d68zO","../_lib/toInteger/index.js":"kAD4R","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2fUPw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addDays/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function subDays(dirtyDate, dirtyAmount) {
    _indexJsDefault2.default(2, arguments);
    var amount = _indexJsDefault.default(dirtyAmount);
    return _indexJsDefault1.default(dirtyDate, -amount);
}
exports.default = subDays;

},{"../_lib/toInteger/index.js":"kAD4R","../addDays/index.js":"6ZRIL","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1yuKK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addMonths/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function subMonths(dirtyDate, dirtyAmount) {
    _indexJsDefault2.default(2, arguments);
    var amount = _indexJsDefault.default(dirtyAmount);
    return _indexJsDefault1.default(dirtyDate, -amount);
}
exports.default = subMonths;

},{"../_lib/toInteger/index.js":"kAD4R","../addMonths/index.js":"lf3Gj","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lUGaB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function intlFormat(date, formatOrLocale, localeOptions) {
    var _localeOptions;
    _indexJsDefault.default(1, arguments);
    var formatOptions;
    if (isFormatOptions(formatOrLocale)) formatOptions = formatOrLocale;
    else localeOptions = formatOrLocale;
    return new Intl.DateTimeFormat((_localeOptions = localeOptions) === null || _localeOptions === void 0 ? void 0 : _localeOptions.locale, formatOptions).format(date);
}
exports.default = intlFormat;
function isFormatOptions(opts) {
    return opts !== undefined && !('locale' in opts);
}

},{"../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gPO99":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isAfter(dirtyDate, dirtyDateToCompare) {
    _indexJsDefault1.default(2, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var dateToCompare = _indexJsDefault.default(dirtyDateToCompare);
    return date.getTime() > dateToCompare.getTime();
}
exports.default = isAfter;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dWFxJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isBefore(dirtyDate, dirtyDateToCompare) {
    _indexJsDefault1.default(2, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var dateToCompare = _indexJsDefault.default(dirtyDateToCompare);
    return date.getTime() < dateToCompare.getTime();
}
exports.default = isBefore;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lkPjt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isEqual(dirtyLeftDate, dirtyRightDate) {
    _indexJsDefault1.default(2, arguments);
    var dateLeft = _indexJsDefault.default(dirtyLeftDate);
    var dateRight = _indexJsDefault.default(dirtyRightDate);
    return dateLeft.getTime() === dateRight.getTime();
}
exports.default = isEqual;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"479dh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isExists(year, month, day) {
    if (arguments.length < 3) throw new TypeError('3 argument required, but only ' + arguments.length + ' present');
    var date = new Date(year, month, day);
    return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
}
exports.default = isExists;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cRO0W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isFirstDayOfMonth(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    return _indexJsDefault.default(dirtyDate).getDate() === 1;
}
exports.default = isFirstDayOfMonth;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4ih3Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isFriday(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    return _indexJsDefault.default(dirtyDate).getDay() === 5;
}
exports.default = isFriday;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kcr6P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isFuture(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    return _indexJsDefault.default(dirtyDate).getTime() > Date.now();
}
exports.default = isFuture;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4NLAs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../parse/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../isValid/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function isMatch(dateString, formatString, options) {
    _indexJsDefault2.default(2, arguments);
    return _indexJsDefault1.default(_indexJsDefault.default(dateString, formatString, new Date(), options));
}
exports.default = isMatch;

},{"../parse/index.js":"fQqrR","../isValid/index.js":"kdbZT","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fQqrR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../locale/en-US/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../subMilliseconds/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../toDate/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/assign/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../_lib/format/longFormatters/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("../_lib/getTimezoneOffsetInMilliseconds/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("../_lib/protectedTokens/index.js");
var _indexJs7 = require("../_lib/toInteger/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs7);
var _indexJs8 = require("./_lib/parsers/index.js");
var _indexJsDefault7 = parcelHelpers.interopDefault(_indexJs8);
var _indexJs9 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault8 = parcelHelpers.interopDefault(_indexJs9);
var TIMEZONE_UNIT_PRIORITY = 10; // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var notWhitespaceRegExp = /\S/;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function parse(dirtyDateString, dirtyFormatString, dirtyReferenceDate, dirtyOptions) {
    _indexJsDefault8.default(3, arguments);
    var dateString = String(dirtyDateString);
    var formatString = String(dirtyFormatString);
    var options = dirtyOptions || {
    };
    var locale = options.locale || _indexJsDefault.default;
    if (!locale.match) throw new RangeError('locale must contain match property');
    var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : _indexJsDefault6.default(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : _indexJsDefault6.default(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : _indexJsDefault6.default(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : _indexJsDefault6.default(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    if (formatString === '') {
        if (dateString === '') return _indexJsDefault2.default(dirtyReferenceDate);
        else return new Date(NaN);
    }
    var subFnOptions = {
        firstWeekContainsDate: firstWeekContainsDate,
        weekStartsOn: weekStartsOn,
        locale: locale
    }; // If timezone isn't specified, it will be set to the system timezone
    var setters = [
        {
            priority: TIMEZONE_UNIT_PRIORITY,
            subPriority: -1,
            set: dateToSystemTimezone,
            index: 0
        }
    ];
    var i;
    var tokens = formatString.match(longFormattingTokensRegExp).map(function(substring) {
        var firstCharacter = substring[0];
        if (firstCharacter === 'p' || firstCharacter === 'P') {
            var longFormatter = _indexJsDefault4.default[firstCharacter];
            return longFormatter(substring, locale.formatLong, subFnOptions);
        }
        return substring;
    }).join('').match(formattingTokensRegExp);
    var usedTokens = [];
    for(i = 0; i < tokens.length; i++){
        var token = tokens[i];
        if (!options.useAdditionalWeekYearTokens && _indexJs6.isProtectedWeekYearToken(token)) _indexJs6.throwProtectedError(token, formatString, dirtyDateString);
        if (!options.useAdditionalDayOfYearTokens && _indexJs6.isProtectedDayOfYearToken(token)) _indexJs6.throwProtectedError(token, formatString, dirtyDateString);
        var firstCharacter1 = token[0];
        var parser = _indexJsDefault7.default[firstCharacter1];
        if (parser) {
            var incompatibleTokens = parser.incompatibleTokens;
            if (Array.isArray(incompatibleTokens)) {
                var incompatibleToken = void 0;
                for(var _i = 0; _i < usedTokens.length; _i++){
                    var usedToken = usedTokens[_i].token;
                    if (incompatibleTokens.indexOf(usedToken) !== -1 || usedToken === firstCharacter1) {
                        incompatibleToken = usedTokens[_i];
                        break;
                    }
                }
                if (incompatibleToken) throw new RangeError("The format string mustn't contain `".concat(incompatibleToken.fullToken, "` and `").concat(token, "` at the same time"));
            } else if (parser.incompatibleTokens === '*' && usedTokens.length) throw new RangeError("The format string mustn't contain `".concat(token, "` and any other token at the same time"));
            usedTokens.push({
                token: firstCharacter1,
                fullToken: token
            });
            var parseResult = parser.parse(dateString, token, locale.match, subFnOptions);
            if (!parseResult) return new Date(NaN);
            setters.push({
                priority: parser.priority,
                subPriority: parser.subPriority || 0,
                set: parser.set,
                validate: parser.validate,
                value: parseResult.value,
                index: setters.length
            });
            dateString = parseResult.rest;
        } else {
            if (firstCharacter1.match(unescapedLatinCharacterRegExp)) throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter1 + '`');
             // Replace two single quote characters with one single quote character
            if (token === "''") token = "'";
            else if (firstCharacter1 === "'") token = cleanEscapedString(token);
             // Cut token from string, or, if string doesn't match the token, return Invalid Date
            if (dateString.indexOf(token) === 0) dateString = dateString.slice(token.length);
            else return new Date(NaN);
        }
    } // Check if the remaining input contains something other than whitespace
    if (dateString.length > 0 && notWhitespaceRegExp.test(dateString)) return new Date(NaN);
    var uniquePrioritySetters = setters.map(function(setter) {
        return setter.priority;
    }).sort(function(a, b) {
        return b - a;
    }).filter(function(priority, index, array) {
        return array.indexOf(priority) === index;
    }).map(function(priority) {
        return setters.filter(function(setter) {
            return setter.priority === priority;
        }).sort(function(a, b) {
            return b.subPriority - a.subPriority;
        });
    }).map(function(setterArray) {
        return setterArray[0];
    });
    var date = _indexJsDefault2.default(dirtyReferenceDate);
    if (isNaN(date)) return new Date(NaN);
     // Convert the date in system timezone to the same date in UTC+00:00 timezone.
    // This ensures that when UTC functions will be implemented, locales will be compatible with them.
    // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/37
    var utcDate = _indexJsDefault1.default(date, _indexJsDefault5.default(date));
    var flags = {
    };
    for(i = 0; i < uniquePrioritySetters.length; i++){
        var setter1 = uniquePrioritySetters[i];
        if (setter1.validate && !setter1.validate(utcDate, setter1.value, subFnOptions)) return new Date(NaN);
        var result = setter1.set(utcDate, flags, setter1.value, subFnOptions); // Result is tuple (date, flags)
        if (result[0]) {
            utcDate = result[0];
            _indexJsDefault3.default(flags, result[1]); // Result is date
        } else utcDate = result;
    }
    return utcDate;
}
exports.default = parse;
function dateToSystemTimezone(date, flags) {
    if (flags.timestampIsSet) return date;
    var convertedDate = new Date(0);
    convertedDate.setFullYear(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
    convertedDate.setHours(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
    return convertedDate;
}
function cleanEscapedString(input) {
    return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

},{"../locale/en-US/index.js":"jUFks","../subMilliseconds/index.js":"gA2J2","../toDate/index.js":"8SEUI","../_lib/assign/index.js":"6g3LK","../_lib/format/longFormatters/index.js":"1geSY","../_lib/getTimezoneOffsetInMilliseconds/index.js":"f8dgA","../_lib/protectedTokens/index.js":"akIGo","../_lib/toInteger/index.js":"kAD4R","./_lib/parsers/index.js":"6vU63","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6vU63":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../../_lib/getUTCWeekYear/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../../../_lib/setUTCDay/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../../../_lib/setUTCISODay/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../../../_lib/setUTCISOWeek/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../../../_lib/setUTCWeek/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("../../../_lib/startOfUTCISOWeek/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("../../../_lib/startOfUTCWeek/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs6);
var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var MILLISECONDS_IN_SECOND = 1000;
var numericPatterns = {
    month: /^(1[0-2]|0?\d)/,
    // 0 to 12
    date: /^(3[0-1]|[0-2]?\d)/,
    // 0 to 31
    dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    // 0 to 366
    week: /^(5[0-3]|[0-4]?\d)/,
    // 0 to 53
    hour23h: /^(2[0-3]|[0-1]?\d)/,
    // 0 to 23
    hour24h: /^(2[0-4]|[0-1]?\d)/,
    // 0 to 24
    hour11h: /^(1[0-1]|0?\d)/,
    // 0 to 11
    hour12h: /^(1[0-2]|0?\d)/,
    // 0 to 12
    minute: /^[0-5]?\d/,
    // 0 to 59
    second: /^[0-5]?\d/,
    // 0 to 59
    singleDigit: /^\d/,
    // 0 to 9
    twoDigits: /^\d{1,2}/,
    // 0 to 99
    threeDigits: /^\d{1,3}/,
    // 0 to 999
    fourDigits: /^\d{1,4}/,
    // 0 to 9999
    anyDigitsSigned: /^-?\d+/,
    singleDigitSigned: /^-?\d/,
    // 0 to 9, -0 to -9
    twoDigitsSigned: /^-?\d{1,2}/,
    // 0 to 99, -0 to -99
    threeDigitsSigned: /^-?\d{1,3}/,
    // 0 to 999, -0 to -999
    fourDigitsSigned: /^-?\d{1,4}/ // 0 to 9999, -0 to -9999
};
var timezonePatterns = {
    basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
    basic: /^([+-])(\d{2})(\d{2})|Z/,
    basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    extended: /^([+-])(\d{2}):(\d{2})|Z/,
    extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function parseNumericPattern(pattern, string, valueCallback) {
    var matchResult = string.match(pattern);
    if (!matchResult) return null;
    var value = parseInt(matchResult[0], 10);
    return {
        value: valueCallback ? valueCallback(value) : value,
        rest: string.slice(matchResult[0].length)
    };
}
function parseTimezonePattern(pattern, string) {
    var matchResult = string.match(pattern);
    if (!matchResult) return null;
     // Input is 'Z'
    if (matchResult[0] === 'Z') return {
        value: 0,
        rest: string.slice(1)
    };
    var sign = matchResult[1] === '+' ? 1 : -1;
    var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
    var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
    var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
    return {
        value: sign * (hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * MILLISECONDS_IN_SECOND),
        rest: string.slice(matchResult[0].length)
    };
}
function parseAnyDigitsSigned(string, valueCallback) {
    return parseNumericPattern(numericPatterns.anyDigitsSigned, string, valueCallback);
}
function parseNDigits(n, string, valueCallback) {
    switch(n){
        case 1:
            return parseNumericPattern(numericPatterns.singleDigit, string, valueCallback);
        case 2:
            return parseNumericPattern(numericPatterns.twoDigits, string, valueCallback);
        case 3:
            return parseNumericPattern(numericPatterns.threeDigits, string, valueCallback);
        case 4:
            return parseNumericPattern(numericPatterns.fourDigits, string, valueCallback);
        default:
            return parseNumericPattern(new RegExp('^\\d{1,' + n + '}'), string, valueCallback);
    }
}
function parseNDigitsSigned(n, string, valueCallback) {
    switch(n){
        case 1:
            return parseNumericPattern(numericPatterns.singleDigitSigned, string, valueCallback);
        case 2:
            return parseNumericPattern(numericPatterns.twoDigitsSigned, string, valueCallback);
        case 3:
            return parseNumericPattern(numericPatterns.threeDigitsSigned, string, valueCallback);
        case 4:
            return parseNumericPattern(numericPatterns.fourDigitsSigned, string, valueCallback);
        default:
            return parseNumericPattern(new RegExp('^-?\\d{1,' + n + '}'), string, valueCallback);
    }
}
function dayPeriodEnumToHours(enumValue) {
    switch(enumValue){
        case 'morning':
            return 4;
        case 'evening':
            return 17;
        case 'pm':
        case 'noon':
        case 'afternoon':
            return 12;
        case 'am':
        case 'midnight':
        case 'night':
        default:
            return 0;
    }
}
function normalizeTwoDigitYear(twoDigitYear, currentYear) {
    var isCommonEra = currentYear > 0; // Absolute number of the current year:
    // 1 -> 1 AC
    // 0 -> 1 BC
    // -1 -> 2 BC
    var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
    var result;
    if (absCurrentYear <= 50) result = twoDigitYear || 100;
    else {
        var rangeEnd = absCurrentYear + 50;
        var rangeEndCentury = Math.floor(rangeEnd / 100) * 100;
        var isPreviousCentury = twoDigitYear >= rangeEnd % 100;
        result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
    }
    return isCommonEra ? result : 1 - result;
}
var DAYS_IN_MONTH = [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
];
var DAYS_IN_MONTH_LEAP_YEAR = [
    31,
    29,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
]; // User for validation
function isLeapYearIndex(year) {
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O* | Timezone (GMT)                 |
 * |  p  |                                |  P  |                                |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z* | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 */ var parsers = {
    // Era
    G: {
        priority: 140,
        parse: function(string, token, match, _options) {
            switch(token){
                // AD, BC
                case 'G':
                case 'GG':
                case 'GGG':
                    return match.era(string, {
                        width: 'abbreviated'
                    }) || match.era(string, {
                        width: 'narrow'
                    });
                // A, B
                case 'GGGGG':
                    return match.era(string, {
                        width: 'narrow'
                    });
                // Anno Domini, Before Christ
                case 'GGGG':
                default:
                    return match.era(string, {
                        width: 'wide'
                    }) || match.era(string, {
                        width: 'abbreviated'
                    }) || match.era(string, {
                        width: 'narrow'
                    });
            }
        },
        set: function(date, flags, value, _options) {
            flags.era = value;
            date.setUTCFullYear(value, 0, 1);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            'R',
            'u',
            't',
            'T'
        ]
    },
    // Year
    y: {
        // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
        // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
        // |----------|-------|----|-------|-------|-------|
        // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
        // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
        // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
        // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
        // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
        priority: 130,
        parse: function(string, token, match, _options) {
            var valueCallback = function(year) {
                return {
                    year: year,
                    isTwoDigitYear: token === 'yy'
                };
            };
            switch(token){
                case 'y':
                    return parseNDigits(4, string, valueCallback);
                case 'yo':
                    return match.ordinalNumber(string, {
                        unit: 'year',
                        valueCallback: valueCallback
                    });
                default:
                    return parseNDigits(token.length, string, valueCallback);
            }
        },
        validate: function(_date, value, _options) {
            return value.isTwoDigitYear || value.year > 0;
        },
        set: function(date, flags, value, _options) {
            var currentYear = date.getUTCFullYear();
            if (value.isTwoDigitYear) {
                var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
                date.setUTCFullYear(normalizedTwoDigitYear, 0, 1);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
            var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
            date.setUTCFullYear(year, 0, 1);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            'Y',
            'R',
            'u',
            'w',
            'I',
            'i',
            'e',
            'c',
            't',
            'T'
        ]
    },
    // Local week-numbering year
    Y: {
        priority: 130,
        parse: function(string, token, match, _options) {
            var valueCallback = function(year) {
                return {
                    year: year,
                    isTwoDigitYear: token === 'YY'
                };
            };
            switch(token){
                case 'Y':
                    return parseNDigits(4, string, valueCallback);
                case 'Yo':
                    return match.ordinalNumber(string, {
                        unit: 'year',
                        valueCallback: valueCallback
                    });
                default:
                    return parseNDigits(token.length, string, valueCallback);
            }
        },
        validate: function(_date, value, _options) {
            return value.isTwoDigitYear || value.year > 0;
        },
        set: function(date, flags, value, options) {
            var currentYear = _indexJsDefault.default(date, options);
            if (value.isTwoDigitYear) {
                var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
                date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
                date.setUTCHours(0, 0, 0, 0);
                return _indexJsDefault6.default(date, options);
            }
            var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
            date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
            date.setUTCHours(0, 0, 0, 0);
            return _indexJsDefault6.default(date, options);
        },
        incompatibleTokens: [
            'y',
            'R',
            'u',
            'Q',
            'q',
            'M',
            'L',
            'I',
            'd',
            'D',
            'i',
            't',
            'T'
        ]
    },
    // ISO week-numbering year
    R: {
        priority: 130,
        parse: function(string, token, _match, _options) {
            if (token === 'R') return parseNDigitsSigned(4, string);
            return parseNDigitsSigned(token.length, string);
        },
        set: function(_date, _flags, value, _options) {
            var firstWeekOfYear = new Date(0);
            firstWeekOfYear.setUTCFullYear(value, 0, 4);
            firstWeekOfYear.setUTCHours(0, 0, 0, 0);
            return _indexJsDefault5.default(firstWeekOfYear);
        },
        incompatibleTokens: [
            'G',
            'y',
            'Y',
            'u',
            'Q',
            'q',
            'M',
            'L',
            'w',
            'd',
            'D',
            'e',
            'c',
            't',
            'T'
        ]
    },
    // Extended year
    u: {
        priority: 130,
        parse: function(string, token, _match, _options) {
            if (token === 'u') return parseNDigitsSigned(4, string);
            return parseNDigitsSigned(token.length, string);
        },
        set: function(date, _flags, value, _options) {
            date.setUTCFullYear(value, 0, 1);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            'G',
            'y',
            'Y',
            'R',
            'w',
            'I',
            'i',
            'e',
            'c',
            't',
            'T'
        ]
    },
    // Quarter
    Q: {
        priority: 120,
        parse: function(string, token, match, _options) {
            switch(token){
                // 1, 2, 3, 4
                case 'Q':
                case 'QQ':
                    // 01, 02, 03, 04
                    return parseNDigits(token.length, string);
                // 1st, 2nd, 3rd, 4th
                case 'Qo':
                    return match.ordinalNumber(string, {
                        unit: 'quarter'
                    });
                // Q1, Q2, Q3, Q4
                case 'QQQ':
                    return match.quarter(string, {
                        width: 'abbreviated',
                        context: 'formatting'
                    }) || match.quarter(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                // 1, 2, 3, 4 (narrow quarter; could be not numerical)
                case 'QQQQQ':
                    return match.quarter(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                // 1st quarter, 2nd quarter, ...
                case 'QQQQ':
                default:
                    return match.quarter(string, {
                        width: 'wide',
                        context: 'formatting'
                    }) || match.quarter(string, {
                        width: 'abbreviated',
                        context: 'formatting'
                    }) || match.quarter(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
            }
        },
        validate: function(_date, value, _options) {
            return value >= 1 && value <= 4;
        },
        set: function(date, _flags, value, _options) {
            date.setUTCMonth((value - 1) * 3, 1);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            'Y',
            'R',
            'q',
            'M',
            'L',
            'w',
            'I',
            'd',
            'D',
            'i',
            'e',
            'c',
            't',
            'T'
        ]
    },
    // Stand-alone quarter
    q: {
        priority: 120,
        parse: function(string, token, match, _options) {
            switch(token){
                // 1, 2, 3, 4
                case 'q':
                case 'qq':
                    // 01, 02, 03, 04
                    return parseNDigits(token.length, string);
                // 1st, 2nd, 3rd, 4th
                case 'qo':
                    return match.ordinalNumber(string, {
                        unit: 'quarter'
                    });
                // Q1, Q2, Q3, Q4
                case 'qqq':
                    return match.quarter(string, {
                        width: 'abbreviated',
                        context: 'standalone'
                    }) || match.quarter(string, {
                        width: 'narrow',
                        context: 'standalone'
                    });
                // 1, 2, 3, 4 (narrow quarter; could be not numerical)
                case 'qqqqq':
                    return match.quarter(string, {
                        width: 'narrow',
                        context: 'standalone'
                    });
                // 1st quarter, 2nd quarter, ...
                case 'qqqq':
                default:
                    return match.quarter(string, {
                        width: 'wide',
                        context: 'standalone'
                    }) || match.quarter(string, {
                        width: 'abbreviated',
                        context: 'standalone'
                    }) || match.quarter(string, {
                        width: 'narrow',
                        context: 'standalone'
                    });
            }
        },
        validate: function(_date, value, _options) {
            return value >= 1 && value <= 4;
        },
        set: function(date, _flags, value, _options) {
            date.setUTCMonth((value - 1) * 3, 1);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            'Y',
            'R',
            'Q',
            'M',
            'L',
            'w',
            'I',
            'd',
            'D',
            'i',
            'e',
            'c',
            't',
            'T'
        ]
    },
    // Month
    M: {
        priority: 110,
        parse: function(string, token, match, _options) {
            var valueCallback = function(value) {
                return value - 1;
            };
            switch(token){
                // 1, 2, ..., 12
                case 'M':
                    return parseNumericPattern(numericPatterns.month, string, valueCallback);
                // 01, 02, ..., 12
                case 'MM':
                    return parseNDigits(2, string, valueCallback);
                // 1st, 2nd, ..., 12th
                case 'Mo':
                    return match.ordinalNumber(string, {
                        unit: 'month',
                        valueCallback: valueCallback
                    });
                // Jan, Feb, ..., Dec
                case 'MMM':
                    return match.month(string, {
                        width: 'abbreviated',
                        context: 'formatting'
                    }) || match.month(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                // J, F, ..., D
                case 'MMMMM':
                    return match.month(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                // January, February, ..., December
                case 'MMMM':
                default:
                    return match.month(string, {
                        width: 'wide',
                        context: 'formatting'
                    }) || match.month(string, {
                        width: 'abbreviated',
                        context: 'formatting'
                    }) || match.month(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
            }
        },
        validate: function(_date, value, _options) {
            return value >= 0 && value <= 11;
        },
        set: function(date, _flags, value, _options) {
            date.setUTCMonth(value, 1);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            'Y',
            'R',
            'q',
            'Q',
            'L',
            'w',
            'I',
            'D',
            'i',
            'e',
            'c',
            't',
            'T'
        ]
    },
    // Stand-alone month
    L: {
        priority: 110,
        parse: function(string, token, match, _options) {
            var valueCallback = function(value) {
                return value - 1;
            };
            switch(token){
                // 1, 2, ..., 12
                case 'L':
                    return parseNumericPattern(numericPatterns.month, string, valueCallback);
                // 01, 02, ..., 12
                case 'LL':
                    return parseNDigits(2, string, valueCallback);
                // 1st, 2nd, ..., 12th
                case 'Lo':
                    return match.ordinalNumber(string, {
                        unit: 'month',
                        valueCallback: valueCallback
                    });
                // Jan, Feb, ..., Dec
                case 'LLL':
                    return match.month(string, {
                        width: 'abbreviated',
                        context: 'standalone'
                    }) || match.month(string, {
                        width: 'narrow',
                        context: 'standalone'
                    });
                // J, F, ..., D
                case 'LLLLL':
                    return match.month(string, {
                        width: 'narrow',
                        context: 'standalone'
                    });
                // January, February, ..., December
                case 'LLLL':
                default:
                    return match.month(string, {
                        width: 'wide',
                        context: 'standalone'
                    }) || match.month(string, {
                        width: 'abbreviated',
                        context: 'standalone'
                    }) || match.month(string, {
                        width: 'narrow',
                        context: 'standalone'
                    });
            }
        },
        validate: function(_date, value, _options) {
            return value >= 0 && value <= 11;
        },
        set: function(date, _flags, value, _options) {
            date.setUTCMonth(value, 1);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            'Y',
            'R',
            'q',
            'Q',
            'M',
            'w',
            'I',
            'D',
            'i',
            'e',
            'c',
            't',
            'T'
        ]
    },
    // Local week of year
    w: {
        priority: 100,
        parse: function(string, token, match, _options) {
            switch(token){
                case 'w':
                    return parseNumericPattern(numericPatterns.week, string);
                case 'wo':
                    return match.ordinalNumber(string, {
                        unit: 'week'
                    });
                default:
                    return parseNDigits(token.length, string);
            }
        },
        validate: function(_date, value, _options) {
            return value >= 1 && value <= 53;
        },
        set: function(date, _flags, value, options) {
            return _indexJsDefault6.default(_indexJsDefault4.default(date, value, options), options);
        },
        incompatibleTokens: [
            'y',
            'R',
            'u',
            'q',
            'Q',
            'M',
            'L',
            'I',
            'd',
            'D',
            'i',
            't',
            'T'
        ]
    },
    // ISO week of year
    I: {
        priority: 100,
        parse: function(string, token, match, _options) {
            switch(token){
                case 'I':
                    return parseNumericPattern(numericPatterns.week, string);
                case 'Io':
                    return match.ordinalNumber(string, {
                        unit: 'week'
                    });
                default:
                    return parseNDigits(token.length, string);
            }
        },
        validate: function(_date, value, _options) {
            return value >= 1 && value <= 53;
        },
        set: function(date, _flags, value, options) {
            return _indexJsDefault5.default(_indexJsDefault3.default(date, value, options), options);
        },
        incompatibleTokens: [
            'y',
            'Y',
            'u',
            'q',
            'Q',
            'M',
            'L',
            'w',
            'd',
            'D',
            'e',
            'c',
            't',
            'T'
        ]
    },
    // Day of the month
    d: {
        priority: 90,
        subPriority: 1,
        parse: function(string, token, match, _options) {
            switch(token){
                case 'd':
                    return parseNumericPattern(numericPatterns.date, string);
                case 'do':
                    return match.ordinalNumber(string, {
                        unit: 'date'
                    });
                default:
                    return parseNDigits(token.length, string);
            }
        },
        validate: function(date, value, _options) {
            var year = date.getUTCFullYear();
            var isLeapYear = isLeapYearIndex(year);
            var month = date.getUTCMonth();
            if (isLeapYear) return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
            else return value >= 1 && value <= DAYS_IN_MONTH[month];
        },
        set: function(date, _flags, value, _options) {
            date.setUTCDate(value);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            'Y',
            'R',
            'q',
            'Q',
            'w',
            'I',
            'D',
            'i',
            'e',
            'c',
            't',
            'T'
        ]
    },
    // Day of year
    D: {
        priority: 90,
        subPriority: 1,
        parse: function(string, token, match, _options) {
            switch(token){
                case 'D':
                case 'DD':
                    return parseNumericPattern(numericPatterns.dayOfYear, string);
                case 'Do':
                    return match.ordinalNumber(string, {
                        unit: 'date'
                    });
                default:
                    return parseNDigits(token.length, string);
            }
        },
        validate: function(date, value, _options) {
            var year = date.getUTCFullYear();
            var isLeapYear = isLeapYearIndex(year);
            if (isLeapYear) return value >= 1 && value <= 366;
            else return value >= 1 && value <= 365;
        },
        set: function(date, _flags, value, _options) {
            date.setUTCMonth(0, value);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            'Y',
            'R',
            'q',
            'Q',
            'M',
            'L',
            'w',
            'I',
            'd',
            'E',
            'i',
            'e',
            'c',
            't',
            'T'
        ]
    },
    // Day of week
    E: {
        priority: 90,
        parse: function(string, token, match, _options) {
            switch(token){
                // Tue
                case 'E':
                case 'EE':
                case 'EEE':
                    return match.day(string, {
                        width: 'abbreviated',
                        context: 'formatting'
                    }) || match.day(string, {
                        width: 'short',
                        context: 'formatting'
                    }) || match.day(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                // T
                case 'EEEEE':
                    return match.day(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                // Tu
                case 'EEEEEE':
                    return match.day(string, {
                        width: 'short',
                        context: 'formatting'
                    }) || match.day(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                // Tuesday
                case 'EEEE':
                default:
                    return match.day(string, {
                        width: 'wide',
                        context: 'formatting'
                    }) || match.day(string, {
                        width: 'abbreviated',
                        context: 'formatting'
                    }) || match.day(string, {
                        width: 'short',
                        context: 'formatting'
                    }) || match.day(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
            }
        },
        validate: function(_date, value, _options) {
            return value >= 0 && value <= 6;
        },
        set: function(date, _flags, value, options) {
            date = _indexJsDefault1.default(date, value, options);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            'D',
            'i',
            'e',
            'c',
            't',
            'T'
        ]
    },
    // Local day of week
    e: {
        priority: 90,
        parse: function(string, token, match, options) {
            var valueCallback = function(value) {
                var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
                return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
            };
            switch(token){
                // 3
                case 'e':
                case 'ee':
                    // 03
                    return parseNDigits(token.length, string, valueCallback);
                // 3rd
                case 'eo':
                    return match.ordinalNumber(string, {
                        unit: 'day',
                        valueCallback: valueCallback
                    });
                // Tue
                case 'eee':
                    return match.day(string, {
                        width: 'abbreviated',
                        context: 'formatting'
                    }) || match.day(string, {
                        width: 'short',
                        context: 'formatting'
                    }) || match.day(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                // T
                case 'eeeee':
                    return match.day(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                // Tu
                case 'eeeeee':
                    return match.day(string, {
                        width: 'short',
                        context: 'formatting'
                    }) || match.day(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                // Tuesday
                case 'eeee':
                default:
                    return match.day(string, {
                        width: 'wide',
                        context: 'formatting'
                    }) || match.day(string, {
                        width: 'abbreviated',
                        context: 'formatting'
                    }) || match.day(string, {
                        width: 'short',
                        context: 'formatting'
                    }) || match.day(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
            }
        },
        validate: function(_date, value, _options) {
            return value >= 0 && value <= 6;
        },
        set: function(date, _flags, value, options) {
            date = _indexJsDefault1.default(date, value, options);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            'y',
            'R',
            'u',
            'q',
            'Q',
            'M',
            'L',
            'I',
            'd',
            'D',
            'E',
            'i',
            'c',
            't',
            'T'
        ]
    },
    // Stand-alone local day of week
    c: {
        priority: 90,
        parse: function(string, token, match, options) {
            var valueCallback = function(value) {
                var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
                return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
            };
            switch(token){
                // 3
                case 'c':
                case 'cc':
                    // 03
                    return parseNDigits(token.length, string, valueCallback);
                // 3rd
                case 'co':
                    return match.ordinalNumber(string, {
                        unit: 'day',
                        valueCallback: valueCallback
                    });
                // Tue
                case 'ccc':
                    return match.day(string, {
                        width: 'abbreviated',
                        context: 'standalone'
                    }) || match.day(string, {
                        width: 'short',
                        context: 'standalone'
                    }) || match.day(string, {
                        width: 'narrow',
                        context: 'standalone'
                    });
                // T
                case 'ccccc':
                    return match.day(string, {
                        width: 'narrow',
                        context: 'standalone'
                    });
                // Tu
                case 'cccccc':
                    return match.day(string, {
                        width: 'short',
                        context: 'standalone'
                    }) || match.day(string, {
                        width: 'narrow',
                        context: 'standalone'
                    });
                // Tuesday
                case 'cccc':
                default:
                    return match.day(string, {
                        width: 'wide',
                        context: 'standalone'
                    }) || match.day(string, {
                        width: 'abbreviated',
                        context: 'standalone'
                    }) || match.day(string, {
                        width: 'short',
                        context: 'standalone'
                    }) || match.day(string, {
                        width: 'narrow',
                        context: 'standalone'
                    });
            }
        },
        validate: function(_date, value, _options) {
            return value >= 0 && value <= 6;
        },
        set: function(date, _flags, value, options) {
            date = _indexJsDefault1.default(date, value, options);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            'y',
            'R',
            'u',
            'q',
            'Q',
            'M',
            'L',
            'I',
            'd',
            'D',
            'E',
            'i',
            'e',
            't',
            'T'
        ]
    },
    // ISO day of week
    i: {
        priority: 90,
        parse: function(string, token, match, _options) {
            var valueCallback = function(value) {
                if (value === 0) return 7;
                return value;
            };
            switch(token){
                // 2
                case 'i':
                case 'ii':
                    // 02
                    return parseNDigits(token.length, string);
                // 2nd
                case 'io':
                    return match.ordinalNumber(string, {
                        unit: 'day'
                    });
                // Tue
                case 'iii':
                    return match.day(string, {
                        width: 'abbreviated',
                        context: 'formatting',
                        valueCallback: valueCallback
                    }) || match.day(string, {
                        width: 'short',
                        context: 'formatting',
                        valueCallback: valueCallback
                    }) || match.day(string, {
                        width: 'narrow',
                        context: 'formatting',
                        valueCallback: valueCallback
                    });
                // T
                case 'iiiii':
                    return match.day(string, {
                        width: 'narrow',
                        context: 'formatting',
                        valueCallback: valueCallback
                    });
                // Tu
                case 'iiiiii':
                    return match.day(string, {
                        width: 'short',
                        context: 'formatting',
                        valueCallback: valueCallback
                    }) || match.day(string, {
                        width: 'narrow',
                        context: 'formatting',
                        valueCallback: valueCallback
                    });
                // Tuesday
                case 'iiii':
                default:
                    return match.day(string, {
                        width: 'wide',
                        context: 'formatting',
                        valueCallback: valueCallback
                    }) || match.day(string, {
                        width: 'abbreviated',
                        context: 'formatting',
                        valueCallback: valueCallback
                    }) || match.day(string, {
                        width: 'short',
                        context: 'formatting',
                        valueCallback: valueCallback
                    }) || match.day(string, {
                        width: 'narrow',
                        context: 'formatting',
                        valueCallback: valueCallback
                    });
            }
        },
        validate: function(_date, value, _options) {
            return value >= 1 && value <= 7;
        },
        set: function(date, _flags, value, options) {
            date = _indexJsDefault2.default(date, value, options);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            'y',
            'Y',
            'u',
            'q',
            'Q',
            'M',
            'L',
            'w',
            'd',
            'D',
            'E',
            'e',
            'c',
            't',
            'T'
        ]
    },
    // AM or PM
    a: {
        priority: 80,
        parse: function(string, token, match, _options) {
            switch(token){
                case 'a':
                case 'aa':
                case 'aaa':
                    return match.dayPeriod(string, {
                        width: 'abbreviated',
                        context: 'formatting'
                    }) || match.dayPeriod(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                case 'aaaaa':
                    return match.dayPeriod(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                case 'aaaa':
                default:
                    return match.dayPeriod(string, {
                        width: 'wide',
                        context: 'formatting'
                    }) || match.dayPeriod(string, {
                        width: 'abbreviated',
                        context: 'formatting'
                    }) || match.dayPeriod(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
            }
        },
        set: function(date, _flags, value, _options) {
            date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            'b',
            'B',
            'H',
            'K',
            'k',
            't',
            'T'
        ]
    },
    // AM, PM, midnight
    b: {
        priority: 80,
        parse: function(string, token, match, _options) {
            switch(token){
                case 'b':
                case 'bb':
                case 'bbb':
                    return match.dayPeriod(string, {
                        width: 'abbreviated',
                        context: 'formatting'
                    }) || match.dayPeriod(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                case 'bbbbb':
                    return match.dayPeriod(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                case 'bbbb':
                default:
                    return match.dayPeriod(string, {
                        width: 'wide',
                        context: 'formatting'
                    }) || match.dayPeriod(string, {
                        width: 'abbreviated',
                        context: 'formatting'
                    }) || match.dayPeriod(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
            }
        },
        set: function(date, _flags, value, _options) {
            date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            'a',
            'B',
            'H',
            'K',
            'k',
            't',
            'T'
        ]
    },
    // in the morning, in the afternoon, in the evening, at night
    B: {
        priority: 80,
        parse: function(string, token, match, _options) {
            switch(token){
                case 'B':
                case 'BB':
                case 'BBB':
                    return match.dayPeriod(string, {
                        width: 'abbreviated',
                        context: 'formatting'
                    }) || match.dayPeriod(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                case 'BBBBB':
                    return match.dayPeriod(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                case 'BBBB':
                default:
                    return match.dayPeriod(string, {
                        width: 'wide',
                        context: 'formatting'
                    }) || match.dayPeriod(string, {
                        width: 'abbreviated',
                        context: 'formatting'
                    }) || match.dayPeriod(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
            }
        },
        set: function(date, _flags, value, _options) {
            date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            'a',
            'b',
            't',
            'T'
        ]
    },
    // Hour [1-12]
    h: {
        priority: 70,
        parse: function(string, token, match, _options) {
            switch(token){
                case 'h':
                    return parseNumericPattern(numericPatterns.hour12h, string);
                case 'ho':
                    return match.ordinalNumber(string, {
                        unit: 'hour'
                    });
                default:
                    return parseNDigits(token.length, string);
            }
        },
        validate: function(_date, value, _options) {
            return value >= 1 && value <= 12;
        },
        set: function(date, _flags, value, _options) {
            var isPM = date.getUTCHours() >= 12;
            if (isPM && value < 12) date.setUTCHours(value + 12, 0, 0, 0);
            else if (!isPM && value === 12) date.setUTCHours(0, 0, 0, 0);
            else date.setUTCHours(value, 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            'H',
            'K',
            'k',
            't',
            'T'
        ]
    },
    // Hour [0-23]
    H: {
        priority: 70,
        parse: function(string, token, match, _options) {
            switch(token){
                case 'H':
                    return parseNumericPattern(numericPatterns.hour23h, string);
                case 'Ho':
                    return match.ordinalNumber(string, {
                        unit: 'hour'
                    });
                default:
                    return parseNDigits(token.length, string);
            }
        },
        validate: function(_date, value, _options) {
            return value >= 0 && value <= 23;
        },
        set: function(date, _flags, value, _options) {
            date.setUTCHours(value, 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            'a',
            'b',
            'h',
            'K',
            'k',
            't',
            'T'
        ]
    },
    // Hour [0-11]
    K: {
        priority: 70,
        parse: function(string, token, match, _options) {
            switch(token){
                case 'K':
                    return parseNumericPattern(numericPatterns.hour11h, string);
                case 'Ko':
                    return match.ordinalNumber(string, {
                        unit: 'hour'
                    });
                default:
                    return parseNDigits(token.length, string);
            }
        },
        validate: function(_date, value, _options) {
            return value >= 0 && value <= 11;
        },
        set: function(date, _flags, value, _options) {
            var isPM = date.getUTCHours() >= 12;
            if (isPM && value < 12) date.setUTCHours(value + 12, 0, 0, 0);
            else date.setUTCHours(value, 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            'a',
            'b',
            'h',
            'H',
            'k',
            't',
            'T'
        ]
    },
    // Hour [1-24]
    k: {
        priority: 70,
        parse: function(string, token, match, _options) {
            switch(token){
                case 'k':
                    return parseNumericPattern(numericPatterns.hour24h, string);
                case 'ko':
                    return match.ordinalNumber(string, {
                        unit: 'hour'
                    });
                default:
                    return parseNDigits(token.length, string);
            }
        },
        validate: function(_date, value, _options) {
            return value >= 1 && value <= 24;
        },
        set: function(date, _flags, value, _options) {
            var hours = value <= 24 ? value % 24 : value;
            date.setUTCHours(hours, 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            'a',
            'b',
            'h',
            'H',
            'K',
            't',
            'T'
        ]
    },
    // Minute
    m: {
        priority: 60,
        parse: function(string, token, match, _options) {
            switch(token){
                case 'm':
                    return parseNumericPattern(numericPatterns.minute, string);
                case 'mo':
                    return match.ordinalNumber(string, {
                        unit: 'minute'
                    });
                default:
                    return parseNDigits(token.length, string);
            }
        },
        validate: function(_date, value, _options) {
            return value >= 0 && value <= 59;
        },
        set: function(date, _flags, value, _options) {
            date.setUTCMinutes(value, 0, 0);
            return date;
        },
        incompatibleTokens: [
            't',
            'T'
        ]
    },
    // Second
    s: {
        priority: 50,
        parse: function(string, token, match, _options) {
            switch(token){
                case 's':
                    return parseNumericPattern(numericPatterns.second, string);
                case 'so':
                    return match.ordinalNumber(string, {
                        unit: 'second'
                    });
                default:
                    return parseNDigits(token.length, string);
            }
        },
        validate: function(_date, value, _options) {
            return value >= 0 && value <= 59;
        },
        set: function(date, _flags, value, _options) {
            date.setUTCSeconds(value, 0);
            return date;
        },
        incompatibleTokens: [
            't',
            'T'
        ]
    },
    // Fraction of second
    S: {
        priority: 30,
        parse: function(string, token, _match, _options) {
            var valueCallback = function(value) {
                return Math.floor(value * Math.pow(10, -token.length + 3));
            };
            return parseNDigits(token.length, string, valueCallback);
        },
        set: function(date, _flags, value, _options) {
            date.setUTCMilliseconds(value);
            return date;
        },
        incompatibleTokens: [
            't',
            'T'
        ]
    },
    // Timezone (ISO-8601. +00:00 is `'Z'`)
    X: {
        priority: 10,
        parse: function(string, token, _match, _options) {
            switch(token){
                case 'X':
                    return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);
                case 'XX':
                    return parseTimezonePattern(timezonePatterns.basic, string);
                case 'XXXX':
                    return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);
                case 'XXXXX':
                    return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);
                case 'XXX':
                default:
                    return parseTimezonePattern(timezonePatterns.extended, string);
            }
        },
        set: function(date, flags, value, _options) {
            if (flags.timestampIsSet) return date;
            return new Date(date.getTime() - value);
        },
        incompatibleTokens: [
            't',
            'T',
            'x'
        ]
    },
    // Timezone (ISO-8601)
    x: {
        priority: 10,
        parse: function(string, token, _match, _options) {
            switch(token){
                case 'x':
                    return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);
                case 'xx':
                    return parseTimezonePattern(timezonePatterns.basic, string);
                case 'xxxx':
                    return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);
                case 'xxxxx':
                    return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);
                case 'xxx':
                default:
                    return parseTimezonePattern(timezonePatterns.extended, string);
            }
        },
        set: function(date, flags, value, _options) {
            if (flags.timestampIsSet) return date;
            return new Date(date.getTime() - value);
        },
        incompatibleTokens: [
            't',
            'T',
            'X'
        ]
    },
    // Seconds timestamp
    t: {
        priority: 40,
        parse: function(string, _token, _match, _options) {
            return parseAnyDigitsSigned(string);
        },
        set: function(_date, _flags, value, _options) {
            return [
                new Date(value * 1000),
                {
                    timestampIsSet: true
                }
            ];
        },
        incompatibleTokens: '*'
    },
    // Milliseconds timestamp
    T: {
        priority: 20,
        parse: function(string, _token, _match, _options) {
            return parseAnyDigitsSigned(string);
        },
        set: function(_date, _flags, value, _options) {
            return [
                new Date(value),
                {
                    timestampIsSet: true
                }
            ];
        },
        incompatibleTokens: '*'
    }
};
exports.default = parsers;

},{"../../../_lib/getUTCWeekYear/index.js":"ffyer","../../../_lib/setUTCDay/index.js":"hAdPZ","../../../_lib/setUTCISODay/index.js":"23Ent","../../../_lib/setUTCISOWeek/index.js":"0Fcot","../../../_lib/setUTCWeek/index.js":"gvYNv","../../../_lib/startOfUTCISOWeek/index.js":"lULNq","../../../_lib/startOfUTCWeek/index.js":"kvAF1","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hAdPZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../toInteger/index.js"); // This function will be a part of public API when UTC function will be implemented.
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function setUTCDay(dirtyDate, dirtyDay, dirtyOptions) {
    _indexJsDefault1.default(2, arguments);
    var options = dirtyOptions || {
    };
    var locale = options.locale;
    var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : _indexJsDefault2.default(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : _indexJsDefault2.default(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    var date = _indexJsDefault.default(dirtyDate);
    var day = _indexJsDefault2.default(dirtyDay);
    var currentDay = date.getUTCDay();
    var remainder = day % 7;
    var dayIndex = (remainder + 7) % 7;
    var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
    date.setUTCDate(date.getUTCDate() + diff);
    return date;
}
exports.default = setUTCDay;

},{"../../toDate/index.js":"8SEUI","../requiredArgs/index.js":"d68zO","../toInteger/index.js":"kAD4R","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"23Ent":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../toInteger/index.js"); // This function will be a part of public API when UTC function will be implemented.
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function setUTCISODay(dirtyDate, dirtyDay) {
    _indexJsDefault1.default(2, arguments);
    var day = _indexJsDefault2.default(dirtyDay);
    if (day % 7 === 0) day = day - 7;
    var weekStartsOn = 1;
    var date = _indexJsDefault.default(dirtyDate);
    var currentDay = date.getUTCDay();
    var remainder = day % 7;
    var dayIndex = (remainder + 7) % 7;
    var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
    date.setUTCDate(date.getUTCDate() + diff);
    return date;
}
exports.default = setUTCISODay;

},{"../../toDate/index.js":"8SEUI","../requiredArgs/index.js":"d68zO","../toInteger/index.js":"kAD4R","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"0Fcot":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../getUTCISOWeek/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../requiredArgs/index.js"); // This function will be a part of public API when UTC function will be implemented.
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
    _indexJsDefault3.default(2, arguments);
    var date = _indexJsDefault1.default(dirtyDate);
    var isoWeek = _indexJsDefault.default(dirtyISOWeek);
    var diff = _indexJsDefault2.default(date) - isoWeek;
    date.setUTCDate(date.getUTCDate() - diff * 7);
    return date;
}
exports.default = setUTCISOWeek;

},{"../toInteger/index.js":"kAD4R","../../toDate/index.js":"8SEUI","../getUTCISOWeek/index.js":"hDBPo","../requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gvYNv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../getUTCWeek/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../requiredArgs/index.js"); // This function will be a part of public API when UTC function will be implemented.
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function setUTCWeek(dirtyDate, dirtyWeek, options) {
    _indexJsDefault3.default(2, arguments);
    var date = _indexJsDefault1.default(dirtyDate);
    var week = _indexJsDefault.default(dirtyWeek);
    var diff = _indexJsDefault2.default(date, options) - week;
    date.setUTCDate(date.getUTCDate() - diff * 7);
    return date;
}
exports.default = setUTCWeek;

},{"../toInteger/index.js":"kAD4R","../../toDate/index.js":"8SEUI","../getUTCWeek/index.js":"5PHDh","../requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7GvPL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isMonday(date) {
    _indexJsDefault1.default(1, arguments);
    return _indexJsDefault.default(date).getDay() === 1;
}
exports.default = isMonday;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5326W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isPast(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    return _indexJsDefault.default(dirtyDate).getTime() < Date.now();
}
exports.default = isPast;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8ywh5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../startOfHour/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isSameHour(dirtyDateLeft, dirtyDateRight) {
    _indexJsDefault1.default(2, arguments);
    var dateLeftStartOfHour = _indexJsDefault.default(dirtyDateLeft);
    var dateRightStartOfHour = _indexJsDefault.default(dirtyDateRight);
    return dateLeftStartOfHour.getTime() === dateRightStartOfHour.getTime();
}
exports.default = isSameHour;

},{"../startOfHour/index.js":"iceHZ","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iceHZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function startOfHour(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    date.setMinutes(0, 0, 0);
    return date;
}
exports.default = startOfHour;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cyoqD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../isSameWeek/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isSameISOWeek(dirtyDateLeft, dirtyDateRight) {
    _indexJsDefault1.default(2, arguments);
    return _indexJsDefault.default(dirtyDateLeft, dirtyDateRight, {
        weekStartsOn: 1
    });
}
exports.default = isSameISOWeek;

},{"../isSameWeek/index.js":"iWvgg","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iWvgg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../startOfWeek/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isSameWeek(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
    _indexJsDefault1.default(2, arguments);
    var dateLeftStartOfWeek = _indexJsDefault.default(dirtyDateLeft, dirtyOptions);
    var dateRightStartOfWeek = _indexJsDefault.default(dirtyDateRight, dirtyOptions);
    return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}
exports.default = isSameWeek;

},{"../startOfWeek/index.js":"aVyea","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lUPo1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../startOfISOWeekYear/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isSameISOWeekYear(dirtyDateLeft, dirtyDateRight) {
    _indexJsDefault1.default(2, arguments);
    var dateLeftStartOfYear = _indexJsDefault.default(dirtyDateLeft);
    var dateRightStartOfYear = _indexJsDefault.default(dirtyDateRight);
    return dateLeftStartOfYear.getTime() === dateRightStartOfYear.getTime();
}
exports.default = isSameISOWeekYear;

},{"../startOfISOWeekYear/index.js":"ewe0d","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"76P3M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../startOfMinute/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isSameMinute(dirtyDateLeft, dirtyDateRight) {
    _indexJsDefault1.default(2, arguments);
    var dateLeftStartOfMinute = _indexJsDefault.default(dirtyDateLeft);
    var dateRightStartOfMinute = _indexJsDefault.default(dirtyDateRight);
    return dateLeftStartOfMinute.getTime() === dateRightStartOfMinute.getTime();
}
exports.default = isSameMinute;

},{"../startOfMinute/index.js":"4e0Wp","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4rwfL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isSameMonth(dirtyDateLeft, dirtyDateRight) {
    _indexJsDefault1.default(2, arguments);
    var dateLeft = _indexJsDefault.default(dirtyDateLeft);
    var dateRight = _indexJsDefault.default(dirtyDateRight);
    return dateLeft.getFullYear() === dateRight.getFullYear() && dateLeft.getMonth() === dateRight.getMonth();
}
exports.default = isSameMonth;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"296wU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../startOfQuarter/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isSameQuarter(dirtyDateLeft, dirtyDateRight) {
    _indexJsDefault1.default(2, arguments);
    var dateLeftStartOfQuarter = _indexJsDefault.default(dirtyDateLeft);
    var dateRightStartOfQuarter = _indexJsDefault.default(dirtyDateRight);
    return dateLeftStartOfQuarter.getTime() === dateRightStartOfQuarter.getTime();
}
exports.default = isSameQuarter;

},{"../startOfQuarter/index.js":"4MKst","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4PyHG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../startOfSecond/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isSameSecond(dirtyDateLeft, dirtyDateRight) {
    _indexJsDefault1.default(2, arguments);
    var dateLeftStartOfSecond = _indexJsDefault.default(dirtyDateLeft);
    var dateRightStartOfSecond = _indexJsDefault.default(dirtyDateRight);
    return dateLeftStartOfSecond.getTime() === dateRightStartOfSecond.getTime();
}
exports.default = isSameSecond;

},{"../startOfSecond/index.js":"3eeom","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3eeom":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function startOfSecond(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    date.setMilliseconds(0);
    return date;
}
exports.default = startOfSecond;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9eIN2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isSameYear(dirtyDateLeft, dirtyDateRight) {
    _indexJsDefault1.default(2, arguments);
    var dateLeft = _indexJsDefault.default(dirtyDateLeft);
    var dateRight = _indexJsDefault.default(dirtyDateRight);
    return dateLeft.getFullYear() === dateRight.getFullYear();
}
exports.default = isSameYear;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jdc9b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../isSameHour/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isThisHour(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    return _indexJsDefault.default(Date.now(), dirtyDate);
}
exports.default = isThisHour;

},{"../isSameHour/index.js":"8ywh5","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"75XzV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../isSameISOWeek/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isThisISOWeek(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    return _indexJsDefault.default(dirtyDate, Date.now());
}
exports.default = isThisISOWeek;

},{"../isSameISOWeek/index.js":"cyoqD","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lRE1E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../isSameMinute/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isThisMinute(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    return _indexJsDefault.default(Date.now(), dirtyDate);
}
exports.default = isThisMinute;

},{"../isSameMinute/index.js":"76P3M","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"246HS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../isSameMonth/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isThisMonth(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    return _indexJsDefault.default(Date.now(), dirtyDate);
}
exports.default = isThisMonth;

},{"../isSameMonth/index.js":"4rwfL","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2NfH9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../isSameQuarter/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isThisQuarter(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    return _indexJsDefault.default(Date.now(), dirtyDate);
}
exports.default = isThisQuarter;

},{"../isSameQuarter/index.js":"296wU","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4evtI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../isSameSecond/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isThisSecond(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    return _indexJsDefault.default(Date.now(), dirtyDate);
}
exports.default = isThisSecond;

},{"../isSameSecond/index.js":"4PyHG","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gEA0x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../isSameWeek/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isThisWeek(dirtyDate, options) {
    _indexJsDefault1.default(1, arguments);
    return _indexJsDefault.default(dirtyDate, Date.now(), options);
}
exports.default = isThisWeek;

},{"../isSameWeek/index.js":"iWvgg","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6JlPi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../isSameYear/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isThisYear(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    return _indexJsDefault.default(dirtyDate, Date.now());
}
exports.default = isThisYear;

},{"../isSameYear/index.js":"9eIN2","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"l1SzU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isThursday(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    return _indexJsDefault.default(dirtyDate).getDay() === 4;
}
exports.default = isThursday;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iVN6D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../isSameDay/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isToday(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    return _indexJsDefault.default(dirtyDate, Date.now());
}
exports.default = isToday;

},{"../isSameDay/index.js":"JZdzi","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kM6Xr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../addDays/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../isSameDay/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function isTomorrow(dirtyDate) {
    _indexJsDefault2.default(1, arguments);
    return _indexJsDefault1.default(dirtyDate, _indexJsDefault.default(Date.now(), 1));
}
exports.default = isTomorrow;

},{"../addDays/index.js":"6ZRIL","../isSameDay/index.js":"JZdzi","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1A2O8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isTuesday(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    return _indexJsDefault.default(dirtyDate).getDay() === 2;
}
exports.default = isTuesday;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"97lxp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isWednesday(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    return _indexJsDefault.default(dirtyDate).getDay() === 3;
}
exports.default = isWednesday;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"esUgo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function isWithinInterval(dirtyDate, interval) {
    _indexJsDefault1.default(2, arguments);
    var time = _indexJsDefault.default(dirtyDate).getTime();
    var startTime = _indexJsDefault.default(interval.start).getTime();
    var endTime = _indexJsDefault.default(interval.end).getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`
    if (!(startTime <= endTime)) throw new RangeError('Invalid interval');
    return time >= startTime && time <= endTime;
}
exports.default = isWithinInterval;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bIXz0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../isSameDay/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../subDays/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function isYesterday(dirtyDate) {
    _indexJsDefault2.default(1, arguments);
    return _indexJsDefault.default(dirtyDate, _indexJsDefault1.default(Date.now(), 1));
}
exports.default = isYesterday;

},{"../isSameDay/index.js":"JZdzi","../subDays/index.js":"2fUPw","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5kI8a":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function lastDayOfDecade(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var year = date.getFullYear();
    var decade = 9 + Math.floor(year / 10) * 10;
    date.setFullYear(decade + 1, 0, 0);
    date.setHours(0, 0, 0, 0);
    return date;
}
exports.default = lastDayOfDecade;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ao0To":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../lastDayOfWeek/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function lastDayOfISOWeek(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    return _indexJsDefault.default(dirtyDate, {
        weekStartsOn: 1
    });
}
exports.default = lastDayOfISOWeek;

},{"../lastDayOfWeek/index.js":"4XpP2","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4XpP2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/toInteger/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function lastDayOfWeek(dirtyDate, dirtyOptions) {
    _indexJsDefault2.default(1, arguments);
    var options = dirtyOptions || {
    };
    var locale = options.locale;
    var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : _indexJsDefault1.default(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : _indexJsDefault1.default(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6');
    var date = _indexJsDefault.default(dirtyDate);
    var day = date.getDay();
    var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + diff);
    return date;
}
exports.default = lastDayOfWeek;

},{"../toDate/index.js":"8SEUI","../_lib/toInteger/index.js":"kAD4R","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9lEAs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../getISOWeekYear/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfISOWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function lastDayOfISOWeekYear(dirtyDate) {
    _indexJsDefault2.default(1, arguments);
    var year = _indexJsDefault.default(dirtyDate);
    var fourthOfJanuary = new Date(0);
    fourthOfJanuary.setFullYear(year + 1, 0, 4);
    fourthOfJanuary.setHours(0, 0, 0, 0);
    var date = _indexJsDefault1.default(fourthOfJanuary);
    date.setDate(date.getDate() - 1);
    return date;
}
exports.default = lastDayOfISOWeekYear;

},{"../getISOWeekYear/index.js":"k0p9j","../startOfISOWeek/index.js":"3uvqr","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6gd6t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function lastDayOfQuarter(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var currentMonth = date.getMonth();
    var month = currentMonth - currentMonth % 3 + 3;
    date.setMonth(month, 0);
    date.setHours(0, 0, 0, 0);
    return date;
}
exports.default = lastDayOfQuarter;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dcn2H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function lastDayOfYear(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var year = date.getFullYear();
    date.setFullYear(year + 1, 0, 0);
    date.setHours(0, 0, 0, 0);
    return date;
}
exports.default = lastDayOfYear;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"PlzEj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/format/lightFormatters/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/getTimezoneOffsetInMilliseconds/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../isValid/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../subMilliseconds/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("../_lib/requiredArgs/index.js"); // This RegExp consists of three parts separated by `|`:
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /(\w)\1*|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function lightFormat(dirtyDate, formatStr) {
    _indexJsDefault5.default(2, arguments);
    var originalDate = _indexJsDefault.default(dirtyDate);
    if (!_indexJsDefault3.default(originalDate)) throw new RangeError('Invalid time value');
     // Convert the date in system timezone to the same date in UTC+00:00 timezone.
    // This ensures that when UTC functions will be implemented, locales will be compatible with them.
    // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
    var timezoneOffset = _indexJsDefault2.default(originalDate);
    var utcDate = _indexJsDefault4.default(originalDate, timezoneOffset);
    var tokens = formatStr.match(formattingTokensRegExp); // The only case when formattingTokensRegExp doesn't match the string is when it's empty
    if (!tokens) return '';
    var result = tokens.map(function(substring) {
        // Replace two single quote characters with one single quote character
        if (substring === "''") return "'";
        var firstCharacter = substring[0];
        if (firstCharacter === "'") return cleanEscapedString(substring);
        var formatter = _indexJsDefault1.default[firstCharacter];
        if (formatter) return formatter(utcDate, substring);
        if (firstCharacter.match(unescapedLatinCharacterRegExp)) throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
        return substring;
    }).join('');
    return result;
}
exports.default = lightFormat;
function cleanEscapedString(input) {
    var matches = input.match(escapedStringRegExp);
    if (!matches) return input;
    return matches[1].replace(doubleQuoteRegExp, "'");
}

},{"../toDate/index.js":"8SEUI","../_lib/format/lightFormatters/index.js":"cSNhC","../_lib/getTimezoneOffsetInMilliseconds/index.js":"f8dgA","../isValid/index.js":"kdbZT","../subMilliseconds/index.js":"gA2J2","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bIeKK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
// Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
// 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
var daysInYear = 365.2425;
function milliseconds(_ref) {
    var years = _ref.years, months = _ref.months, weeks = _ref.weeks, days = _ref.days, hours = _ref.hours, minutes = _ref.minutes, seconds = _ref.seconds;
    _indexJsDefault.default(1, arguments);
    var totalDays = 0;
    if (years) totalDays += years * daysInYear;
    if (months) totalDays += months * (daysInYear / 12);
    if (weeks) totalDays += weeks * 7;
    if (days) totalDays += days;
    var totalSeconds = totalDays * 86400;
    if (hours) totalSeconds += hours * 3600;
    if (minutes) totalSeconds += minutes * 60;
    if (seconds) totalSeconds += seconds;
    return Math.round(totalSeconds * 1000);
}
exports.default = milliseconds;

},{"../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"Nb0zf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function millisecondsToHours(milliseconds) {
    _indexJsDefault.default(1, arguments);
    var hours = milliseconds / _indexJs1.millisecondsInHour;
    return Math.floor(hours);
}
exports.default = millisecondsToHours;

},{"../_lib/requiredArgs/index.js":"d68zO","../constants/index.js":"iykpK","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cSJJz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function millisecondsToMinutes(milliseconds) {
    _indexJsDefault.default(1, arguments);
    var minutes = milliseconds / _indexJs1.millisecondsInMinute;
    return Math.floor(minutes);
}
exports.default = millisecondsToMinutes;

},{"../_lib/requiredArgs/index.js":"d68zO","../constants/index.js":"iykpK","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"d7Dqb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function millisecondsToSeconds(milliseconds) {
    _indexJsDefault.default(1, arguments);
    var seconds = milliseconds / _indexJs1.millisecondsInSecond;
    return Math.floor(seconds);
}
exports.default = millisecondsToSeconds;

},{"../_lib/requiredArgs/index.js":"d68zO","../constants/index.js":"iykpK","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dc51H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function minutesToHours(minutes) {
    _indexJsDefault.default(1, arguments);
    var hours = minutes / _indexJs1.minutesInHour;
    return Math.floor(hours);
}
exports.default = minutesToHours;

},{"../_lib/requiredArgs/index.js":"d68zO","../constants/index.js":"iykpK","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hUKp8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function minutesToMilliseconds(minutes) {
    _indexJsDefault.default(1, arguments);
    return Math.floor(minutes * _indexJs1.millisecondsInMinute);
}
exports.default = minutesToMilliseconds;

},{"../_lib/requiredArgs/index.js":"d68zO","../constants/index.js":"iykpK","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lSThi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function minutesToSeconds(minutes) {
    _indexJsDefault.default(1, arguments);
    return Math.floor(minutes * _indexJs1.secondsInMinute);
}
exports.default = minutesToSeconds;

},{"../_lib/requiredArgs/index.js":"d68zO","../constants/index.js":"iykpK","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cjUn4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function monthsToQuarters(months) {
    _indexJsDefault.default(1, arguments);
    var quarters = months / _indexJs1.monthsInQuarter;
    return Math.floor(quarters);
}
exports.default = monthsToQuarters;

},{"../_lib/requiredArgs/index.js":"d68zO","../constants/index.js":"iykpK","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"20oA4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function monthsToYears(months) {
    _indexJsDefault.default(1, arguments);
    var years = months / _indexJs1.monthsInYear;
    return Math.floor(years);
}
exports.default = monthsToYears;

},{"../_lib/requiredArgs/index.js":"d68zO","../constants/index.js":"iykpK","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"amwR2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../addDays/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../getDay/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function nextDay(date, day) {
    _indexJsDefault2.default(2, arguments);
    var delta = day - _indexJsDefault1.default(date);
    if (delta <= 0) delta += 7;
    return _indexJsDefault.default(date, delta);
}
exports.default = nextDay;

},{"../addDays/index.js":"6ZRIL","../getDay/index.js":"8bQ00","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lAHgI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../nextDay/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function nextFriday(date) {
    _indexJsDefault1.default(1, arguments);
    return _indexJsDefault.default(date, 5);
}
exports.default = nextFriday;

},{"../nextDay/index.js":"amwR2","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"l9Epm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../nextDay/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function nextMonday(date) {
    _indexJsDefault1.default(1, arguments);
    return _indexJsDefault.default(date, 1);
}
exports.default = nextMonday;

},{"../nextDay/index.js":"amwR2","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bJi1B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../nextDay/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function nextSaturday(date) {
    _indexJsDefault1.default(1, arguments);
    return _indexJsDefault.default(date, 6);
}
exports.default = nextSaturday;

},{"../nextDay/index.js":"amwR2","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2EqlL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../nextDay/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function nextSunday(date) {
    _indexJsDefault1.default(1, arguments);
    return _indexJsDefault.default(date, 0);
}
exports.default = nextSunday;

},{"../nextDay/index.js":"amwR2","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jwMtu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../nextDay/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function nextThursday(date) {
    _indexJsDefault1.default(1, arguments);
    return _indexJsDefault.default(date, 4);
}
exports.default = nextThursday;

},{"../nextDay/index.js":"amwR2","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jDGaM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../nextDay/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function nextTuesday(date) {
    _indexJsDefault1.default(1, arguments);
    return _indexJsDefault.default(date, 2);
}
exports.default = nextTuesday;

},{"../nextDay/index.js":"amwR2","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kkKDu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../nextDay/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function nextWednesday(date) {
    _indexJsDefault1.default(1, arguments);
    return _indexJsDefault.default(date, 3);
}
exports.default = nextWednesday;

},{"../nextDay/index.js":"amwR2","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kAymx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;
var patterns = {
    dateTimeDelimiter: /[T ]/,
    timeZoneDelimiter: /[Z ]/i,
    timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function parseISO(argument, dirtyOptions) {
    _indexJsDefault1.default(1, arguments);
    var options = dirtyOptions || {
    };
    var additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : _indexJsDefault.default(options.additionalDigits);
    if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) throw new RangeError('additionalDigits must be 0, 1 or 2');
    if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) return new Date(NaN);
    var dateStrings = splitDateString(argument);
    var date;
    if (dateStrings.date) {
        var parseYearResult = parseYear(dateStrings.date, additionalDigits);
        date = parseDate(parseYearResult.restDateString, parseYearResult.year);
    }
    if (isNaN(date) || !date) return new Date(NaN);
    var timestamp = date.getTime();
    var time = 0;
    var offset;
    if (dateStrings.time) {
        time = parseTime(dateStrings.time);
        if (isNaN(time) || time === null) return new Date(NaN);
    }
    if (dateStrings.timezone) {
        offset = parseTimezone(dateStrings.timezone);
        if (isNaN(offset)) return new Date(NaN);
    } else {
        var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
        // but we need it to be parsed in our timezone
        // so we use utc values to build date in our timezone.
        // Year values from 0 to 99 map to the years 1900 to 1999
        // so set year explicitly with setFullYear.
        var result = new Date(0);
        result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
        result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
        return result;
    }
    return new Date(timestamp + time + offset);
}
exports.default = parseISO;
function splitDateString(dateString) {
    var dateStrings = {
    };
    var array = dateString.split(patterns.dateTimeDelimiter);
    var timeString; // The regex match should only return at maximum two array elements.
    // [date], [time], or [date, time].
    if (array.length > 2) return dateStrings;
    if (/:/.test(array[0])) {
        dateStrings.date = null;
        timeString = array[0];
    } else {
        dateStrings.date = array[0];
        timeString = array[1];
        if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
            dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
            timeString = dateString.substr(dateStrings.date.length, dateString.length);
        }
    }
    if (timeString) {
        var token = patterns.timezone.exec(timeString);
        if (token) {
            dateStrings.time = timeString.replace(token[1], '');
            dateStrings.timezone = token[1];
        } else dateStrings.time = timeString;
    }
    return dateStrings;
}
function parseYear(dateString, additionalDigits) {
    var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
    var captures = dateString.match(regex); // Invalid ISO-formatted year
    if (!captures) return {
        year: null
    };
    var year = captures[1] && parseInt(captures[1]);
    var century = captures[2] && parseInt(captures[2]);
    return {
        year: century == null ? year : century * 100,
        restDateString: dateString.slice((captures[1] || captures[2]).length)
    };
}
function parseDate(dateString, year) {
    // Invalid ISO-formatted year
    if (year === null) return null;
    var captures = dateString.match(dateRegex); // Invalid ISO-formatted string
    if (!captures) return null;
    var isWeekDate = !!captures[4];
    var dayOfYear = parseDateUnit(captures[1]);
    var month = parseDateUnit(captures[2]) - 1;
    var day = parseDateUnit(captures[3]);
    var week = parseDateUnit(captures[4]);
    var dayOfWeek = parseDateUnit(captures[5]) - 1;
    if (isWeekDate) {
        if (!validateWeekDate(year, week, dayOfWeek)) return new Date(NaN);
        return dayOfISOWeekYear(year, week, dayOfWeek);
    } else {
        var date = new Date(0);
        if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) return new Date(NaN);
        date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
        return date;
    }
}
function parseDateUnit(value) {
    return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
    var captures = timeString.match(timeRegex);
    if (!captures) return null; // Invalid ISO-formatted time
    var hours = parseTimeUnit(captures[1]);
    var minutes = parseTimeUnit(captures[2]);
    var seconds = parseTimeUnit(captures[3]);
    if (!validateTime(hours, minutes, seconds)) return NaN;
    return hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1000;
}
function parseTimeUnit(value) {
    return value && parseFloat(value.replace(',', '.')) || 0;
}
function parseTimezone(timezoneString) {
    if (timezoneString === 'Z') return 0;
    var captures = timezoneString.match(timezoneRegex);
    if (!captures) return 0;
    var sign = captures[1] === '+' ? -1 : 1;
    var hours = parseInt(captures[2]);
    var minutes = captures[3] && parseInt(captures[3]) || 0;
    if (!validateTimezone(hours, minutes)) return NaN;
    return sign * (hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
    var date = new Date(0);
    date.setUTCFullYear(isoWeekYear, 0, 4);
    var fourthOfJanuaryDay = date.getUTCDay() || 7;
    var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
    date.setUTCDate(date.getUTCDate() + diff);
    return date;
} // Validation functions
// February is null to handle the leap year (using ||)
var daysInMonths = [
    31,
    null,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
];
function isLeapYearIndex(year) {
    return year % 400 === 0 || year % 4 === 0 && year % 100;
}
function validateDate(year, month, date) {
    return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
    return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
    return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
    if (hours === 24) return minutes === 0 && seconds === 0;
    return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
    return minutes >= 0 && minutes <= 59;
}

},{"../_lib/toInteger/index.js":"kAD4R","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7J88x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function parseJSON(argument) {
    _indexJsDefault1.default(1, arguments);
    if (typeof argument === 'string') {
        var parts = argument.match(/(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d{0,7}))?(?:Z|(.)(\d{2}):?(\d{2})?)?/);
        if (parts) // Group 8 matches the sign
        return new Date(Date.UTC(+parts[1], +parts[2] - 1, +parts[3], +parts[4] - (+parts[9] || 0) * (parts[8] == '-' ? -1 : 1), +parts[5] - (+parts[10] || 0) * (parts[8] == '-' ? -1 : 1), +parts[6], +((parts[7] || '0') + '00').substring(0, 3)));
        return new Date(NaN);
    }
    return _indexJsDefault.default(argument);
}
exports.default = parseJSON;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hGztQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../getDay/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../subDays/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function previousDay(date, day) {
    _indexJsDefault.default(2, arguments);
    var delta = _indexJsDefault1.default(date) - day;
    if (delta <= 0) delta += 7;
    return _indexJsDefault2.default(date, delta);
}
exports.default = previousDay;

},{"../_lib/requiredArgs/index.js":"d68zO","../getDay/index.js":"8bQ00","../subDays/index.js":"2fUPw","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cWBAz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../previousDay/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function previousFriday(date) {
    _indexJsDefault.default(1, arguments);
    return _indexJsDefault1.default(date, 5);
}
exports.default = previousFriday;

},{"../_lib/requiredArgs/index.js":"d68zO","../previousDay/index.js":"hGztQ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1XL1y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../previousDay/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function previousMonday(date) {
    _indexJsDefault.default(1, arguments);
    return _indexJsDefault1.default(date, 1);
}
exports.default = previousMonday;

},{"../_lib/requiredArgs/index.js":"d68zO","../previousDay/index.js":"hGztQ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eoce0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../previousDay/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function previousSaturday(date) {
    _indexJsDefault.default(1, arguments);
    return _indexJsDefault1.default(date, 6);
}
exports.default = previousSaturday;

},{"../_lib/requiredArgs/index.js":"d68zO","../previousDay/index.js":"hGztQ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"75Ktg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../previousDay/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function previousSunday(date) {
    _indexJsDefault.default(1, arguments);
    return _indexJsDefault1.default(date, 0);
}
exports.default = previousSunday;

},{"../_lib/requiredArgs/index.js":"d68zO","../previousDay/index.js":"hGztQ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lPjVT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../previousDay/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function previousThursday(date) {
    _indexJsDefault.default(1, arguments);
    return _indexJsDefault1.default(date, 4);
}
exports.default = previousThursday;

},{"../_lib/requiredArgs/index.js":"d68zO","../previousDay/index.js":"hGztQ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"81ag6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../previousDay/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function previousTuesday(date) {
    _indexJsDefault.default(1, arguments);
    return _indexJsDefault1.default(date, 2);
}
exports.default = previousTuesday;

},{"../_lib/requiredArgs/index.js":"d68zO","../previousDay/index.js":"hGztQ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"a1OYq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../previousDay/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function previousWednesday(date) {
    _indexJsDefault.default(1, arguments);
    return _indexJsDefault1.default(date, 3);
}
exports.default = previousWednesday;

},{"../_lib/requiredArgs/index.js":"d68zO","../previousDay/index.js":"hGztQ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6r2Px":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function quartersToMonths(quarters) {
    _indexJsDefault.default(1, arguments);
    return Math.floor(quarters * _indexJs1.monthsInQuarter);
}
exports.default = quartersToMonths;

},{"../_lib/requiredArgs/index.js":"d68zO","../constants/index.js":"iykpK","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jWhuD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function quartersToYears(quarters) {
    _indexJsDefault.default(1, arguments);
    var years = quarters / _indexJs1.quartersInYear;
    return Math.floor(years);
}
exports.default = quartersToYears;

},{"../_lib/requiredArgs/index.js":"d68zO","../constants/index.js":"iykpK","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9PjdH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/toInteger/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function roundToNearestMinutes(dirtyDate, options) {
    if (arguments.length < 1) throw new TypeError('1 argument required, but only none provided present');
    var nearestTo = options && 'nearestTo' in options ? _indexJsDefault1.default(options.nearestTo) : 1;
    if (nearestTo < 1 || nearestTo > 30) throw new RangeError('`options.nearestTo` must be between 1 and 30');
    var date = _indexJsDefault.default(dirtyDate);
    var seconds = date.getSeconds(); // relevant if nearestTo is 1, which is the default case
    var minutes = date.getMinutes() + seconds / 60;
    var roundedMinutes = Math.floor(minutes / nearestTo) * nearestTo;
    var remainderMinutes = minutes % nearestTo;
    var addedMinutes = Math.round(remainderMinutes / nearestTo) * nearestTo;
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), roundedMinutes + addedMinutes);
}
exports.default = roundToNearestMinutes;

},{"../toDate/index.js":"8SEUI","../_lib/toInteger/index.js":"kAD4R","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4xDYy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function secondsToHours(seconds) {
    _indexJsDefault.default(1, arguments);
    var hours = seconds / _indexJs1.secondsInHour;
    return Math.floor(hours);
}
exports.default = secondsToHours;

},{"../_lib/requiredArgs/index.js":"d68zO","../constants/index.js":"iykpK","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"Bjn1d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function secondsToMilliseconds(seconds) {
    _indexJsDefault.default(1, arguments);
    return seconds * _indexJs1.millisecondsInSecond;
}
exports.default = secondsToMilliseconds;

},{"../_lib/requiredArgs/index.js":"d68zO","../constants/index.js":"iykpK","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4oryE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function secondsToMinutes(seconds) {
    _indexJsDefault.default(1, arguments);
    var minutes = seconds / _indexJs1.secondsInMinute;
    return Math.floor(minutes);
}
exports.default = secondsToMinutes;

},{"../_lib/requiredArgs/index.js":"d68zO","../constants/index.js":"iykpK","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"joCTO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../setMonth/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/toInteger/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function set(dirtyDate, values) {
    _indexJsDefault3.default(2, arguments);
    if (typeof values !== 'object' || values === null) throw new RangeError('values parameter must be an object');
    var date = _indexJsDefault.default(dirtyDate); // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
    if (isNaN(date.getTime())) return new Date(NaN);
    if (values.year != null) date.setFullYear(values.year);
    if (values.month != null) date = _indexJsDefault1.default(date, values.month);
    if (values.date != null) date.setDate(_indexJsDefault2.default(values.date));
    if (values.hours != null) date.setHours(_indexJsDefault2.default(values.hours));
    if (values.minutes != null) date.setMinutes(_indexJsDefault2.default(values.minutes));
    if (values.seconds != null) date.setSeconds(_indexJsDefault2.default(values.seconds));
    if (values.milliseconds != null) date.setMilliseconds(_indexJsDefault2.default(values.milliseconds));
    return date;
}
exports.default = set;

},{"../toDate/index.js":"8SEUI","../setMonth/index.js":"5hUxz","../_lib/toInteger/index.js":"kAD4R","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5hUxz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../getDaysInMonth/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function setMonth(dirtyDate, dirtyMonth) {
    _indexJsDefault3.default(2, arguments);
    var date = _indexJsDefault1.default(dirtyDate);
    var month = _indexJsDefault.default(dirtyMonth);
    var year = date.getFullYear();
    var day = date.getDate();
    var dateWithDesiredMonth = new Date(0);
    dateWithDesiredMonth.setFullYear(year, month, 15);
    dateWithDesiredMonth.setHours(0, 0, 0, 0);
    var daysInMonth = _indexJsDefault2.default(dateWithDesiredMonth); // Set the last day of the new month
    // if the original date was the last day of the longer month
    date.setMonth(month, Math.min(day, daysInMonth));
    return date;
}
exports.default = setMonth;

},{"../_lib/toInteger/index.js":"kAD4R","../toDate/index.js":"8SEUI","../getDaysInMonth/index.js":"8KDB1","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5o0tz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function setDate(dirtyDate, dirtyDayOfMonth) {
    _indexJsDefault2.default(2, arguments);
    var date = _indexJsDefault1.default(dirtyDate);
    var dayOfMonth = _indexJsDefault.default(dirtyDayOfMonth);
    date.setDate(dayOfMonth);
    return date;
}
exports.default = setDate;

},{"../_lib/toInteger/index.js":"kAD4R","../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gztCo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../addDays/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/toInteger/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function setDay(dirtyDate, dirtyDay, dirtyOptions) {
    _indexJsDefault3.default(2, arguments);
    var options = dirtyOptions || {
    };
    var locale = options.locale;
    var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : _indexJsDefault2.default(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : _indexJsDefault2.default(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    var date = _indexJsDefault1.default(dirtyDate);
    var day = _indexJsDefault2.default(dirtyDay);
    var currentDay = date.getDay();
    var remainder = day % 7;
    var dayIndex = (remainder + 7) % 7;
    var delta = 7 - weekStartsOn;
    var diff = day < 0 || day > 6 ? day - (currentDay + delta) % 7 : (dayIndex + delta) % 7 - (currentDay + delta) % 7;
    return _indexJsDefault.default(date, diff);
}
exports.default = setDay;

},{"../addDays/index.js":"6ZRIL","../toDate/index.js":"8SEUI","../_lib/toInteger/index.js":"kAD4R","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hfnp7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function setDayOfYear(dirtyDate, dirtyDayOfYear) {
    _indexJsDefault2.default(2, arguments);
    var date = _indexJsDefault1.default(dirtyDate);
    var dayOfYear = _indexJsDefault.default(dirtyDayOfYear);
    date.setMonth(0);
    date.setDate(dayOfYear);
    return date;
}
exports.default = setDayOfYear;

},{"../_lib/toInteger/index.js":"kAD4R","../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8PCiH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function setHours(dirtyDate, dirtyHours) {
    _indexJsDefault2.default(2, arguments);
    var date = _indexJsDefault1.default(dirtyDate);
    var hours = _indexJsDefault.default(dirtyHours);
    date.setHours(hours);
    return date;
}
exports.default = setHours;

},{"../_lib/toInteger/index.js":"kAD4R","../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8OU6W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../addDays/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../getISODay/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
function setISODay(dirtyDate, dirtyDay) {
    _indexJsDefault4.default(2, arguments);
    var date = _indexJsDefault1.default(dirtyDate);
    var day = _indexJsDefault.default(dirtyDay);
    var currentDay = _indexJsDefault3.default(date);
    var diff = day - currentDay;
    return _indexJsDefault2.default(date, diff);
}
exports.default = setISODay;

},{"../_lib/toInteger/index.js":"kAD4R","../toDate/index.js":"8SEUI","../addDays/index.js":"6ZRIL","../getISODay/index.js":"csuPW","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9KUfe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../getISOWeek/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function setISOWeek(dirtyDate, dirtyISOWeek) {
    _indexJsDefault3.default(2, arguments);
    var date = _indexJsDefault1.default(dirtyDate);
    var isoWeek = _indexJsDefault.default(dirtyISOWeek);
    var diff = _indexJsDefault2.default(date) - isoWeek;
    date.setDate(date.getDate() - diff * 7);
    return date;
}
exports.default = setISOWeek;

},{"../_lib/toInteger/index.js":"kAD4R","../toDate/index.js":"8SEUI","../getISOWeek/index.js":"ltK9L","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dubt0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function setMilliseconds(dirtyDate, dirtyMilliseconds) {
    _indexJsDefault2.default(2, arguments);
    var date = _indexJsDefault1.default(dirtyDate);
    var milliseconds = _indexJsDefault.default(dirtyMilliseconds);
    date.setMilliseconds(milliseconds);
    return date;
}
exports.default = setMilliseconds;

},{"../_lib/toInteger/index.js":"kAD4R","../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jRqGX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function setMinutes(dirtyDate, dirtyMinutes) {
    _indexJsDefault2.default(2, arguments);
    var date = _indexJsDefault1.default(dirtyDate);
    var minutes = _indexJsDefault.default(dirtyMinutes);
    date.setMinutes(minutes);
    return date;
}
exports.default = setMinutes;

},{"../_lib/toInteger/index.js":"kAD4R","../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jxPuI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../setMonth/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function setQuarter(dirtyDate, dirtyQuarter) {
    _indexJsDefault3.default(2, arguments);
    var date = _indexJsDefault1.default(dirtyDate);
    var quarter = _indexJsDefault.default(dirtyQuarter);
    var oldQuarter = Math.floor(date.getMonth() / 3) + 1;
    var diff = quarter - oldQuarter;
    return _indexJsDefault2.default(date, date.getMonth() + diff * 3);
}
exports.default = setQuarter;

},{"../_lib/toInteger/index.js":"kAD4R","../toDate/index.js":"8SEUI","../setMonth/index.js":"5hUxz","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"OvY6i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function setSeconds(dirtyDate, dirtySeconds) {
    _indexJsDefault2.default(2, arguments);
    var date = _indexJsDefault1.default(dirtyDate);
    var seconds = _indexJsDefault.default(dirtySeconds);
    date.setSeconds(seconds);
    return date;
}
exports.default = setSeconds;

},{"../_lib/toInteger/index.js":"kAD4R","../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"10Fv2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../getWeek/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/toInteger/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
function setWeek(dirtyDate, dirtyWeek, options) {
    _indexJsDefault3.default(2, arguments);
    var date = _indexJsDefault1.default(dirtyDate);
    var week = _indexJsDefault2.default(dirtyWeek);
    var diff = _indexJsDefault.default(date, options) - week;
    date.setDate(date.getDate() - diff * 7);
    return date;
}
exports.default = setWeek;

},{"../getWeek/index.js":"10ich","../toDate/index.js":"8SEUI","../_lib/toInteger/index.js":"kAD4R","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jspoC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../differenceInCalendarDays/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfWeekYear/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../toDate/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/toInteger/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
function setWeekYear(dirtyDate, dirtyWeekYear) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    };
    _indexJsDefault4.default(2, arguments);
    var locale = options.locale;
    var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : _indexJsDefault3.default(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : _indexJsDefault3.default(options.firstWeekContainsDate);
    var date = _indexJsDefault2.default(dirtyDate);
    var weekYear = _indexJsDefault3.default(dirtyWeekYear);
    var diff = _indexJsDefault.default(date, _indexJsDefault1.default(date, options));
    var firstWeek = new Date(0);
    firstWeek.setFullYear(weekYear, 0, firstWeekContainsDate);
    firstWeek.setHours(0, 0, 0, 0);
    date = _indexJsDefault1.default(firstWeek, options);
    date.setDate(date.getDate() + diff);
    return date;
}
exports.default = setWeekYear;

},{"../differenceInCalendarDays/index.js":"3nymD","../startOfWeekYear/index.js":"dqGOa","../toDate/index.js":"8SEUI","../_lib/toInteger/index.js":"kAD4R","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3IB34":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function setYear(dirtyDate, dirtyYear) {
    _indexJsDefault2.default(2, arguments);
    var date = _indexJsDefault1.default(dirtyDate);
    var year = _indexJsDefault.default(dirtyYear); // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
    if (isNaN(date.getTime())) return new Date(NaN);
    date.setFullYear(year);
    return date;
}
exports.default = setYear;

},{"../_lib/toInteger/index.js":"kAD4R","../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ioMCr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function startOfDecade(dirtyDate) {
    _indexJsDefault1.default(1, arguments);
    var date = _indexJsDefault.default(dirtyDate);
    var year = date.getFullYear();
    var decade = Math.floor(year / 10) * 10;
    date.setFullYear(decade, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
}
exports.default = startOfDecade;

},{"../toDate/index.js":"8SEUI","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"b8fOJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../startOfDay/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function startOfToday() {
    return _indexJsDefault.default(Date.now());
}
exports.default = startOfToday;

},{"../startOfDay/index.js":"4pB2U","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7Vn7w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function startOfTomorrow() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var day = now.getDate();
    var date = new Date(0);
    date.setFullYear(year, month, day + 1);
    date.setHours(0, 0, 0, 0);
    return date;
}
exports.default = startOfTomorrow;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"au97L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function startOfYesterday() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var day = now.getDate();
    var date = new Date(0);
    date.setFullYear(year, month, day - 1);
    date.setHours(0, 0, 0, 0);
    return date;
}
exports.default = startOfYesterday;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9O7oH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../addBusinessDays/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/toInteger/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function subBusinessDays(dirtyDate, dirtyAmount) {
    _indexJsDefault1.default(2, arguments);
    var amount = _indexJsDefault2.default(dirtyAmount);
    return _indexJsDefault.default(dirtyDate, -amount);
}
exports.default = subBusinessDays;

},{"../addBusinessDays/index.js":"3OG2i","../_lib/requiredArgs/index.js":"d68zO","../_lib/toInteger/index.js":"kAD4R","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fShW6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addHours/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function subHours(dirtyDate, dirtyAmount) {
    _indexJsDefault2.default(2, arguments);
    var amount = _indexJsDefault.default(dirtyAmount);
    return _indexJsDefault1.default(dirtyDate, -amount);
}
exports.default = subHours;

},{"../_lib/toInteger/index.js":"kAD4R","../addHours/index.js":"fYdRc","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ijbdr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addMinutes/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function subMinutes(dirtyDate, dirtyAmount) {
    _indexJsDefault2.default(2, arguments);
    var amount = _indexJsDefault.default(dirtyAmount);
    return _indexJsDefault1.default(dirtyDate, -amount);
}
exports.default = subMinutes;

},{"../_lib/toInteger/index.js":"kAD4R","../addMinutes/index.js":"eoKpP","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2vDrn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addQuarters/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function subQuarters(dirtyDate, dirtyAmount) {
    _indexJsDefault2.default(2, arguments);
    var amount = _indexJsDefault.default(dirtyAmount);
    return _indexJsDefault1.default(dirtyDate, -amount);
}
exports.default = subQuarters;

},{"../_lib/toInteger/index.js":"kAD4R","../addQuarters/index.js":"7QQhj","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gCbpz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addSeconds/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function subSeconds(dirtyDate, dirtyAmount) {
    _indexJsDefault2.default(2, arguments);
    var amount = _indexJsDefault.default(dirtyAmount);
    return _indexJsDefault1.default(dirtyDate, -amount);
}
exports.default = subSeconds;

},{"../_lib/toInteger/index.js":"kAD4R","../addSeconds/index.js":"hD1t5","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6d6G3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addWeeks/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function subWeeks(dirtyDate, dirtyAmount) {
    _indexJsDefault2.default(2, arguments);
    var amount = _indexJsDefault.default(dirtyAmount);
    return _indexJsDefault1.default(dirtyDate, -amount);
}
exports.default = subWeeks;

},{"../_lib/toInteger/index.js":"kAD4R","../addWeeks/index.js":"5JeVP","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"akvu6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../addYears/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function subYears(dirtyDate, dirtyAmount) {
    _indexJsDefault2.default(2, arguments);
    var amount = _indexJsDefault.default(dirtyAmount);
    return _indexJsDefault1.default(dirtyDate, -amount);
}
exports.default = subYears;

},{"../_lib/toInteger/index.js":"kAD4R","../addYears/index.js":"iJG5U","../_lib/requiredArgs/index.js":"d68zO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ljkFD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function weeksToDays(weeks) {
    _indexJsDefault.default(1, arguments);
    return Math.floor(weeks * _indexJs1.daysInWeek);
}
exports.default = weeksToDays;

},{"../_lib/requiredArgs/index.js":"d68zO","../constants/index.js":"iykpK","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9hHKJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function yearsToMonths(years) {
    _indexJsDefault.default(1, arguments);
    return Math.floor(years * _indexJs1.monthsInYear);
}
exports.default = yearsToMonths;

},{"../_lib/requiredArgs/index.js":"d68zO","../constants/index.js":"iykpK","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2ktFj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../constants/index.js");
function yearsToQuarters(years) {
    _indexJsDefault.default(1, arguments);
    return Math.floor(years * _indexJs1.quartersInYear);
}
exports.default = yearsToQuarters;

},{"../_lib/requiredArgs/index.js":"d68zO","../constants/index.js":"iykpK","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["1bEO8","lzYRN"], "lzYRN", "parcelRequire4e8a")

//# sourceMappingURL=index.833266ea.js.map
