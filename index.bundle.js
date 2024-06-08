"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./media/bckg.jpg */ "./src/media/bckg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
* {
    box-sizing: border-box;
    margin: 0;
}

:root {
    --main-color: #2C3E50;
    --back-shelves: #f5f0df;
    --shadow-box: rgba(0,0,0,.5);
    --back-header: rgb(255, 255, 255);
    --color-second: #f6f3e9;
    --back-card-not-read: #CC5500;
    --back-card-read: #6ac700;
    --third-color: #f5f0df;
}

body {
    font-family: 'IM FELL English', sans-serif;
    font-size: 22px;
    color: var(--color-second);
}

a {
    color: inherit; /* blue colors for links too */
    text-decoration: inherit; /* no underline */
  }

  button {
    background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}


/* Header parameters */

header {
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 1rem 3rem;
    border-bottom: 1px solid rgb(0,0,0);
    box-shadow: 1rem 0 1rem var(--shadow-box);
    background-color: var(--main-color);
    color: var(--color-second)
}

header h1 {
    font-size: 3rem; 
    margin: 1rem
}

header .btn-nav {
    margin: 0 2rem;
    padding: 0 0.5rem;
    padding-bottom: 1.5rem;
    transition-property: transform;
    transition-duration: 0.3s;
    display: inline-block;
}

header .btn-nav.active {
    font-weight: bold;
    border-bottom: 2px solid black;
    font-size: 1.2rem;
    cursor: default;
}

header .btn-nav:hover:not(.active) {
    transform: translateY(-0.5rem);
    cursor: pointer;
}

header #title-page {
    display: flex
}

header .icon {
    width: 3rem;
    filter: invert(100%);
}

/* Footer */

footer {
    position: fixed;
    bottom: 0;
    background-color: var(--main-color);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    padding: 0.8rem 1.6rem;
    border-top: 1px solid rgb(0,0,0);
    box-shadow: 1rem 0 1rem var(--shadow-box);
    color: var(--color-second)
}



/* Main content */

main {
    min-height: 100dvh;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    display: flex;
    flex-direction: column;
    align-items: center;
}


#content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--third-color);
    width: 60%;
    padding: 2rem;
    margin: .25rem;
    color: var(--main-color);
    border-radius: .8rem;

}

#content img {
    max-width: 15rem;
    display: block;
    border-radius: 2rem;
    margin: 1rem;
    align-self: center;

    box-shadow: 1rem 0 1rem var(--shadow-box);
}

#content card card:not(#tab-meal) {
    padding: 2rem;
    border: 1px solid rgb(0,0,0);
    box-shadow: 1rem 0 1rem var(--shadow-box);
    background-color: var(--main-color);
    display: flex;
    flex-direction: column;
    color: var(--color-second);
    border-radius: 1rem;

    p {
        word-wrap: break-word;
        margin-top: 0.2rem;
        text-align: start;
    }
    
}

#content card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

#content .btn-meal {
    margin: 0 2rem;
    padding: 0 0.5rem;
    padding-bottom: 1.5rem;
    border-spacing: 1rem;
    transition-property: transform;
    transition-duration: 0.3s;
    display: inline-block;
}

#content .btn-meal.active {
    font-weight: bold;
    border-bottom: 2px solid black;
    font-size: 1.2rem;
    cursor: default;
}

#content .btn-meal:hover:not(.active) {
    transform: translateY(-0.5rem);
    cursor: pointer;
}

#content #tab-meal {
    height: 25rem;
    display: flex;
    flex-direction: column;
    gap: .8rem;
    card {
        font-size: 1.5rem;

    }
}

#menu-cont nav {
    margin-bottom: 1rem;
}

#content h5 {
    font-size: 1.5rem;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":";AACA;IACI,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,qBAAqB;IACrB,uBAAuB;IACvB,4BAA4B;IAC5B,iCAAiC;IACjC,uBAAuB;IACvB,6BAA6B;IAC7B,yBAAyB;IACzB,sBAAsB;AAC1B;;AAEA;IACI,0CAA0C;IAC1C,eAAe;IACf,0BAA0B;AAC9B;;AAEA;IACI,cAAc,EAAE,8BAA8B;IAC9C,wBAAwB,EAAE,iBAAiB;EAC7C;;EAEA;IACE,gBAAgB;CACnB,cAAc;CACd,YAAY;CACZ,UAAU;CACV,aAAa;CACb,eAAe;CACf,gBAAgB;AACjB;;;AAGA,sBAAsB;;AAEtB;IACI,gBAAgB;IAChB,MAAM;IACN,OAAO;IACP,aAAa;IACb,uBAAuB;IACvB,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,mCAAmC;IACnC,yCAAyC;IACzC,mCAAmC;IACnC;AACJ;;AAEA;IACI,eAAe;IACf;AACJ;;AAEA;IACI,cAAc;IACd,iBAAiB;IACjB,sBAAsB;IACtB,8BAA8B;IAC9B,yBAAyB;IACzB,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;IACjB,8BAA8B;IAC9B,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,8BAA8B;IAC9B,eAAe;AACnB;;AAEA;IACI;AACJ;;AAEA;IACI,WAAW;IACX,oBAAoB;AACxB;;AAEA,WAAW;;AAEX;IACI,eAAe;IACf,SAAS;IACT,mCAAmC;IACnC,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,sBAAsB;IACtB,gCAAgC;IAChC,yCAAyC;IACzC;AACJ;;;;AAIA,iBAAiB;;AAEjB;IACI,kBAAkB;IAClB,yDAAuC;IACvC,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,oCAAoC;IACpC,UAAU;IACV,aAAa;IACb,cAAc;IACd,wBAAwB;IACxB,oBAAoB;;AAExB;;AAEA;IACI,gBAAgB;IAChB,cAAc;IACd,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;;IAElB,yCAAyC;AAC7C;;AAEA;IACI,aAAa;IACb,4BAA4B;IAC5B,yCAAyC;IACzC,mCAAmC;IACnC,aAAa;IACb,sBAAsB;IACtB,0BAA0B;IAC1B,mBAAmB;;IAEnB;QACI,qBAAqB;QACrB,kBAAkB;QAClB,iBAAiB;IACrB;;AAEJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,cAAc;IACd,iBAAiB;IACjB,sBAAsB;IACtB,oBAAoB;IACpB,8BAA8B;IAC9B,yBAAyB;IACzB,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;IACjB,8BAA8B;IAC9B,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,8BAA8B;IAC9B,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV;QACI,iBAAiB;;IAErB;AACJ;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB","sourcesContent":["\n* {\n    box-sizing: border-box;\n    margin: 0;\n}\n\n:root {\n    --main-color: #2C3E50;\n    --back-shelves: #f5f0df;\n    --shadow-box: rgba(0,0,0,.5);\n    --back-header: rgb(255, 255, 255);\n    --color-second: #f6f3e9;\n    --back-card-not-read: #CC5500;\n    --back-card-read: #6ac700;\n    --third-color: #f5f0df;\n}\n\nbody {\n    font-family: 'IM FELL English', sans-serif;\n    font-size: 22px;\n    color: var(--color-second);\n}\n\na {\n    color: inherit; /* blue colors for links too */\n    text-decoration: inherit; /* no underline */\n  }\n\n  button {\n    background: none;\n\tcolor: inherit;\n\tborder: none;\n\tpadding: 0;\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n}\n\n\n/* Header parameters */\n\nheader {\n    position: sticky;\n    top: 0;\n    left: 0;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    padding: 1rem 3rem;\n    border-bottom: 1px solid rgb(0,0,0);\n    box-shadow: 1rem 0 1rem var(--shadow-box);\n    background-color: var(--main-color);\n    color: var(--color-second)\n}\n\nheader h1 {\n    font-size: 3rem; \n    margin: 1rem\n}\n\nheader .btn-nav {\n    margin: 0 2rem;\n    padding: 0 0.5rem;\n    padding-bottom: 1.5rem;\n    transition-property: transform;\n    transition-duration: 0.3s;\n    display: inline-block;\n}\n\nheader .btn-nav.active {\n    font-weight: bold;\n    border-bottom: 2px solid black;\n    font-size: 1.2rem;\n    cursor: default;\n}\n\nheader .btn-nav:hover:not(.active) {\n    transform: translateY(-0.5rem);\n    cursor: pointer;\n}\n\nheader #title-page {\n    display: flex\n}\n\nheader .icon {\n    width: 3rem;\n    filter: invert(100%);\n}\n\n/* Footer */\n\nfooter {\n    position: fixed;\n    bottom: 0;\n    background-color: var(--main-color);\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 0.8rem;\n    padding: 0.8rem 1.6rem;\n    border-top: 1px solid rgb(0,0,0);\n    box-shadow: 1rem 0 1rem var(--shadow-box);\n    color: var(--color-second)\n}\n\n\n\n/* Main content */\n\nmain {\n    min-height: 100dvh;\n    background-image: url(./media/bckg.jpg);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: var(--third-color);\n    width: 60%;\n    padding: 2rem;\n    margin: .25rem;\n    color: var(--main-color);\n    border-radius: .8rem;\n\n}\n\n#content img {\n    max-width: 15rem;\n    display: block;\n    border-radius: 2rem;\n    margin: 1rem;\n    align-self: center;\n\n    box-shadow: 1rem 0 1rem var(--shadow-box);\n}\n\n#content card card:not(#tab-meal) {\n    padding: 2rem;\n    border: 1px solid rgb(0,0,0);\n    box-shadow: 1rem 0 1rem var(--shadow-box);\n    background-color: var(--main-color);\n    display: flex;\n    flex-direction: column;\n    color: var(--color-second);\n    border-radius: 1rem;\n\n    p {\n        word-wrap: break-word;\n        margin-top: 0.2rem;\n        text-align: start;\n    }\n    \n}\n\n#content card {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n#content .btn-meal {\n    margin: 0 2rem;\n    padding: 0 0.5rem;\n    padding-bottom: 1.5rem;\n    border-spacing: 1rem;\n    transition-property: transform;\n    transition-duration: 0.3s;\n    display: inline-block;\n}\n\n#content .btn-meal.active {\n    font-weight: bold;\n    border-bottom: 2px solid black;\n    font-size: 1.2rem;\n    cursor: default;\n}\n\n#content .btn-meal:hover:not(.active) {\n    transform: translateY(-0.5rem);\n    cursor: pointer;\n}\n\n#content #tab-meal {\n    height: 25rem;\n    display: flex;\n    flex-direction: column;\n    gap: .8rem;\n    card {\n        font-size: 1.5rem;\n\n    }\n}\n\n#menu-cont nav {\n    margin-bottom: 1rem;\n}\n\n#content h5 {\n    font-size: 1.5rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactGen)
/* harmony export */ });





function contactGen() {
    const container = document.createElement("card");

    const title = document.createElement("h3");
    const address = document.createElement("card");

    title.textContent = "Address";
    address.textContent = `The Enchanted Gear & Goblet
                            Floating District, Skyward Plaza,
                            Eileanar`


    container.appendChild(title);
    container.appendChild(address);

    return container;
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homeGen)
/* harmony export */ });
/* harmony import */ var _media_restaurant_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/restaurant.jpeg */ "./src/media/restaurant.jpeg");
/* harmony import */ var _media_serving_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media/serving.jpeg */ "./src/media/serving.jpeg");



function homeGen() {
    const container = document.createElement("card");

    const aboutTitle = document.createElement("h3");
    const aboutCard = document.createElement("card");
    const aboutImage = document.createElement("img");

    const restaurantTitle = document.createElement("h3");
    const restaurantImage = document.createElement("img");

    // About Part

    aboutTitle.textContent = "About"

    aboutCard.innerHTML = `<p>The Enchanted Gear & Goblet is a captivating fusion of magical and mechanical themes, 
                                featuring an enchanting exterior that levitates slightly above the ground.</p> 
                            <p>Inside, floating chandeliers cast a warm glow over elegantly carved wooden tables and shelves lined with arcane artifacts. 
                                Automaton servers attend to guests with precision and charm, 
                                creating a seamless blend of traditional hospitality and magical efficiency. </p>
                            `
    
    aboutImage.src = _media_restaurant_jpeg__WEBPACK_IMPORTED_MODULE_0__
    aboutImage.id = "home-gen"

    aboutCard.appendChild(aboutImage);

    container.appendChild(aboutTitle);
    container.appendChild(aboutCard);

    // Restaurant presentation

    restaurantTitle.textContent = "Our Restaurant"
    
    restaurantImage.src = _media_serving_jpeg__WEBPACK_IMPORTED_MODULE_1__

    container.appendChild(restaurantTitle);
    container.appendChild(restaurantImage);



    return container;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");








const generatePage = (function() {

    const toggleActive = (button) => {
        const btn_active = document.getElementsByClassName("btn-nav active")[0];
        btn_active.classList.toggle("active");
        button.classList.toggle("active");
    }

    const changeTab = (button) => {
        const container = document.getElementById("content");
        let tabContainer = document.createElement("div");
        switch (button.id) {
            case "home":
                tabContainer = (0,_home_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
                break;
            case "contact":
                tabContainer = (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
                break;
            case "menu":
                tabContainer = (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
                break;
                
        }
        container.innerHTML = "";
        container.appendChild(tabContainer)        
    }
    
    
    const buttonLink = () => {
        const buttons = document.getElementsByClassName("btn-nav");
    
        for (const button of buttons) {
            button.addEventListener("click", (e) => {
                if (!(e.target.classList.contains("active"))){
                    toggleActive(e.target);
                    changeTab(e.target);
                }
            });
        }
    }
    
    const displayTab = () => {
        const btn_active = document.getElementsByClassName("btn-nav active")[0];
        changeTab(btn_active);
        buttonLink();

    }

    return {displayTab}

})()

generatePage.displayTab()



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuGen)
/* harmony export */ });

const mealGeneration = (function(){


    class Menu {
        constructor(meal, name, price) {
            this.meal = meal;
            this.name = name;
            this.price = price;
        }
    }

    const meals = {
        "Starters": [
            new Menu("Starters", "Mystic Mushroom Medley", 5),
            new Menu("Starters", "Clockwork Calamari", 6),
        ],
        "Main Course": [
            new Menu("Main Courses", "Arcane Stew", 12),
            new Menu("Main Courses", "Grilled Dragon Steak", 20),
            new Menu("Main Courses", "Mage’s Mushroom Risotto", 15),
        ],
        "Desserts": [
            new Menu("Desserts", "Spellbound Sweetrolls ", 4),
            new Menu("Desserts", "Enchanted Cake", 7),
        ],
        "Drinks": [
            new Menu("Drinks", "Wizard’s Wine", 8),
            new Menu("Drinks", "Potion of Bliss", 5),
            new Menu("Drinks", "Clockwork Coffee", 3),
        ]
    }

    return {meals};

})();

const generatePage = (function() {

    let container;
    let nav;
    let tabContainer;

    const meals = mealGeneration.meals;

    const toggleActive = (button) => {
        const btn_active = document.getElementsByClassName("btn-meal active")[0];
        btn_active.classList.toggle("active");
        button.classList.toggle("active");
    }

    const genTab = (arr, mealType) => {
        
        tabContainer.id = "tab-meal"
        const title = document.createElement("h5");
        title.innerText = mealType;
        tabContainer.appendChild(title);
        for (let meal of arr) {
            const namePrice = document.createElement("card");
            namePrice.innerHTML = `${meal.name} - ${meal.price} silver coins`
            tabContainer.appendChild(namePrice);
        }
        return tabContainer;
    }

    const changeTab = (button) => {
        tabContainer.innerHTML = "";
        genTab(meals[button.id], button.id);
        container.appendChild(tabContainer)        
    }

    const createButtons = () => {
        for (let key of Object.keys(meals)) {
            const button = document.createElement("button");
            button.id = key;
            button.classList.add("btn-meal")
            button.textContent = key;
            button.addEventListener("click", (e) => {
                if (!(e.target.classList.contains("active"))){
                    toggleActive(e.target);
                    changeTab(e.target);
                }
            });
            if (key === "Starters") {
                button.classList.toggle("active")
            }
            nav.appendChild(button);
          }
          container.appendChild(nav);
    }

    const initElements = () => {
        container = document.createElement("card");
        nav = document.createElement("nav");
        tabContainer = document.createElement("card");
        container.innerHTML = ""
        container.id = "menu-cont";
        createButtons();
    }
    
    const displayTab = () => {
        initElements();
        const btn_active = container.getElementsByClassName("btn-meal active")[0];
        changeTab(btn_active);
        return container;

    }

    return {displayTab}

})()



function menuGen() {
    return generatePage.displayTab();
}

/***/ }),

/***/ "./src/media/bckg.jpg":
/*!****************************!*\
  !*** ./src/media/bckg.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0381dfcc34c649722d5.jpg";

/***/ }),

/***/ "./src/media/restaurant.jpeg":
/*!***********************************!*\
  !*** ./src/media/restaurant.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "00f3cb16a0a5a66174f6.jpeg";

/***/ }),

/***/ "./src/media/serving.jpeg":
/*!********************************!*\
  !*** ./src/media/serving.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9bf294ebcbcf19e917db.jpeg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0Qyw2R0FBbUM7QUFDL0UsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCLDhCQUE4QjtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sNkVBQTZFLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxzQkFBc0IseUJBQXlCLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFFBQVEsYUFBYSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxRQUFRLGFBQWEsTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGNBQWMsTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0s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QUVBLFlBQVk7O0FBRVosQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFdBQVcsSUFBSSxZQUFZO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFlBQVk7O0FBRVosQ0FBQzs7OztBQUljO0FBQ2Y7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL21lZGlhL2Jja2cuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcbioge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xufVxuXG46cm9vdCB7XG4gICAgLS1tYWluLWNvbG9yOiAjMkMzRTUwO1xuICAgIC0tYmFjay1zaGVsdmVzOiAjZjVmMGRmO1xuICAgIC0tc2hhZG93LWJveDogcmdiYSgwLDAsMCwuNSk7XG4gICAgLS1iYWNrLWhlYWRlcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIC0tY29sb3Itc2Vjb25kOiAjZjZmM2U5O1xuICAgIC0tYmFjay1jYXJkLW5vdC1yZWFkOiAjQ0M1NTAwO1xuICAgIC0tYmFjay1jYXJkLXJlYWQ6ICM2YWM3MDA7XG4gICAgLS10aGlyZC1jb2xvcjogI2Y1ZjBkZjtcbn1cblxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6ICdJTSBGRUxMIEVuZ2xpc2gnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kKTtcbn1cblxuYSB7XG4gICAgY29sb3I6IGluaGVyaXQ7IC8qIGJsdWUgY29sb3JzIGZvciBsaW5rcyB0b28gKi9cbiAgICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7IC8qIG5vIHVuZGVybGluZSAqL1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuXHRjb2xvcjogaW5oZXJpdDtcblx0Ym9yZGVyOiBub25lO1xuXHRwYWRkaW5nOiAwO1xuXHRmb250OiBpbmhlcml0O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdG91dGxpbmU6IGluaGVyaXQ7XG59XG5cblxuLyogSGVhZGVyIHBhcmFtZXRlcnMgKi9cblxuaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDFyZW0gM3JlbTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDAsMCwwKTtcbiAgICBib3gtc2hhZG93OiAxcmVtIDAgMXJlbSB2YXIoLS1zaGFkb3ctYm94KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kKVxufVxuXG5oZWFkZXIgaDEge1xuICAgIGZvbnQtc2l6ZTogM3JlbTsgXG4gICAgbWFyZ2luOiAxcmVtXG59XG5cbmhlYWRlciAuYnRuLW5hdiB7XG4gICAgbWFyZ2luOiAwIDJyZW07XG4gICAgcGFkZGluZzogMCAwLjVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmhlYWRlciAuYnRuLW5hdi5hY3RpdmUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbmhlYWRlciAuYnRuLW5hdjpob3Zlcjpub3QoLmFjdGl2ZSkge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC41cmVtKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmhlYWRlciAjdGl0bGUtcGFnZSB7XG4gICAgZGlzcGxheTogZmxleFxufVxuXG5oZWFkZXIgLmljb24ge1xuICAgIHdpZHRoOiAzcmVtO1xuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xufVxuXG4vKiBGb290ZXIgKi9cblxuZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBwYWRkaW5nOiAwLjhyZW0gMS42cmVtO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMCwwLDApO1xuICAgIGJveC1zaGFkb3c6IDFyZW0gMCAxcmVtIHZhcigtLXNoYWRvdy1ib3gpO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmQpXG59XG5cblxuXG4vKiBNYWluIGNvbnRlbnQgKi9cblxubWFpbiB7XG4gICAgbWluLWhlaWdodDogMTAwZHZoO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuXG4jY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhpcmQtY29sb3IpO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBtYXJnaW46IC4yNXJlbTtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogLjhyZW07XG5cbn1cblxuI2NvbnRlbnQgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDE1cmVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcblxuICAgIGJveC1zaGFkb3c6IDFyZW0gMCAxcmVtIHZhcigtLXNoYWRvdy1ib3gpO1xufVxuXG4jY29udGVudCBjYXJkIGNhcmQ6bm90KCN0YWItbWVhbCkge1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsMCwwKTtcbiAgICBib3gtc2hhZG93OiAxcmVtIDAgMXJlbSB2YXIoLS1zaGFkb3ctYm94KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZCk7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcblxuICAgIHAge1xuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDAuMnJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgfVxuICAgIFxufVxuXG4jY29udGVudCBjYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4jY29udGVudCAuYnRuLW1lYWwge1xuICAgIG1hcmdpbjogMCAycmVtO1xuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XG4gICAgYm9yZGVyLXNwYWNpbmc6IDFyZW07XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4jY29udGVudCAuYnRuLW1lYWwuYWN0aXZlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4jY29udGVudCAuYnRuLW1lYWw6aG92ZXI6bm90KC5hY3RpdmUpIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNXJlbSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jY29udGVudCAjdGFiLW1lYWwge1xuICAgIGhlaWdodDogMjVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogLjhyZW07XG4gICAgY2FyZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuXG4gICAgfVxufVxuXG4jbWVudS1jb250IG5hdiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuI2NvbnRlbnQgaDUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLGlDQUFpQztJQUNqQyx1QkFBdUI7SUFDdkIsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsZUFBZTtJQUNmLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGNBQWMsRUFBRSw4QkFBOEI7SUFDOUMsd0JBQXdCLEVBQUUsaUJBQWlCO0VBQzdDOztFQUVBO0lBQ0UsZ0JBQWdCO0NBQ25CLGNBQWM7Q0FDZCxZQUFZO0NBQ1osVUFBVTtDQUNWLGFBQWE7Q0FDYixlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCOzs7QUFHQSxzQkFBc0I7O0FBRXRCO0lBQ0ksZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixPQUFPO0lBQ1AsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMseUNBQXlDO0lBQ3pDLG1DQUFtQztJQUNuQztBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0FBQ3hCOztBQUVBLFdBQVc7O0FBRVg7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULG1DQUFtQztJQUNuQyxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixnQ0FBZ0M7SUFDaEMseUNBQXlDO0lBQ3pDO0FBQ0o7Ozs7QUFJQSxpQkFBaUI7O0FBRWpCO0lBQ0ksa0JBQWtCO0lBQ2xCLHlEQUF1QztJQUN2QyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsb0NBQW9DO0lBQ3BDLFVBQVU7SUFDVixhQUFhO0lBQ2IsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixvQkFBb0I7O0FBRXhCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjs7SUFFbEIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDRCQUE0QjtJQUM1Qix5Q0FBeUM7SUFDekMsbUNBQW1DO0lBQ25DLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLG1CQUFtQjs7SUFFbkI7UUFDSSxxQkFBcUI7UUFDckIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtJQUNyQjs7QUFFSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWO1FBQ0ksaUJBQWlCOztJQUVyQjtBQUNKOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1tYWluLWNvbG9yOiAjMkMzRTUwO1xcbiAgICAtLWJhY2stc2hlbHZlczogI2Y1ZjBkZjtcXG4gICAgLS1zaGFkb3ctYm94OiByZ2JhKDAsMCwwLC41KTtcXG4gICAgLS1iYWNrLWhlYWRlcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICAtLWNvbG9yLXNlY29uZDogI2Y2ZjNlOTtcXG4gICAgLS1iYWNrLWNhcmQtbm90LXJlYWQ6ICNDQzU1MDA7XFxuICAgIC0tYmFjay1jYXJkLXJlYWQ6ICM2YWM3MDA7XFxuICAgIC0tdGhpcmQtY29sb3I6ICNmNWYwZGY7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ0lNIEZFTEwgRW5nbGlzaCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZCk7XFxufVxcblxcbmEge1xcbiAgICBjb2xvcjogaW5oZXJpdDsgLyogYmx1ZSBjb2xvcnMgZm9yIGxpbmtzIHRvbyAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7IC8qIG5vIHVuZGVybGluZSAqL1xcbiAgfVxcblxcbiAgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG5cXHRjb2xvcjogaW5oZXJpdDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRvdXRsaW5lOiBpbmhlcml0O1xcbn1cXG5cXG5cXG4vKiBIZWFkZXIgcGFyYW1ldGVycyAqL1xcblxcbmhlYWRlciB7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW0gM3JlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigwLDAsMCk7XFxuICAgIGJveC1zaGFkb3c6IDFyZW0gMCAxcmVtIHZhcigtLXNoYWRvdy1ib3gpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZClcXG59XFxuXFxuaGVhZGVyIGgxIHtcXG4gICAgZm9udC1zaXplOiAzcmVtOyBcXG4gICAgbWFyZ2luOiAxcmVtXFxufVxcblxcbmhlYWRlciAuYnRuLW5hdiB7XFxuICAgIG1hcmdpbjogMCAycmVtO1xcbiAgICBwYWRkaW5nOiAwIDAuNXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbmhlYWRlciAuYnRuLW5hdi5hY3RpdmUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG5oZWFkZXIgLmJ0bi1uYXY6aG92ZXI6bm90KC5hY3RpdmUpIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjVyZW0pO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmhlYWRlciAjdGl0bGUtcGFnZSB7XFxuICAgIGRpc3BsYXk6IGZsZXhcXG59XFxuXFxuaGVhZGVyIC5pY29uIHtcXG4gICAgd2lkdGg6IDNyZW07XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cXG5cXG5mb290ZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIHBhZGRpbmc6IDAuOHJlbSAxLjZyZW07XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMCwwLDApO1xcbiAgICBib3gtc2hhZG93OiAxcmVtIDAgMXJlbSB2YXIoLS1zaGFkb3ctYm94KTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZClcXG59XFxuXFxuXFxuXFxuLyogTWFpbiBjb250ZW50ICovXFxuXFxubWFpbiB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMGR2aDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vbWVkaWEvYmNrZy5qcGcpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGlyZC1jb2xvcik7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIG1hcmdpbjogLjI1cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IC44cmVtO1xcblxcbn1cXG5cXG4jY29udGVudCBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDE1cmVtO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFxuICAgIGJveC1zaGFkb3c6IDFyZW0gMCAxcmVtIHZhcigtLXNoYWRvdy1ib3gpO1xcbn1cXG5cXG4jY29udGVudCBjYXJkIGNhcmQ6bm90KCN0YWItbWVhbCkge1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwwLDApO1xcbiAgICBib3gtc2hhZG93OiAxcmVtIDAgMXJlbSB2YXIoLS1zaGFkb3ctYm94KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmQpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcblxcbiAgICBwIHtcXG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDAuMnJlbTtcXG4gICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICB9XFxuICAgIFxcbn1cXG5cXG4jY29udGVudCBjYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jY29udGVudCAuYnRuLW1lYWwge1xcbiAgICBtYXJnaW46IDAgMnJlbTtcXG4gICAgcGFkZGluZzogMCAwLjVyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XFxuICAgIGJvcmRlci1zcGFjaW5nOiAxcmVtO1xcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuI2NvbnRlbnQgLmJ0bi1tZWFsLmFjdGl2ZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbiNjb250ZW50IC5idG4tbWVhbDpob3Zlcjpub3QoLmFjdGl2ZSkge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNXJlbSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQgI3RhYi1tZWFsIHtcXG4gICAgaGVpZ2h0OiAyNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAuOHJlbTtcXG4gICAgY2FyZCB7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG5cXG4gICAgfVxcbn1cXG5cXG4jbWVudS1jb250IG5hdiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbiNjb250ZW50IGg1IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3RHZW4oKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhcmRcIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhcmRcIik7XG5cbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQWRkcmVzc1wiO1xuICAgIGFkZHJlc3MudGV4dENvbnRlbnQgPSBgVGhlIEVuY2hhbnRlZCBHZWFyICYgR29ibGV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRmxvYXRpbmcgRGlzdHJpY3QsIFNreXdhcmQgUGxhemEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRWlsZWFuYXJgXG5cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn0iLCJpbXBvcnQgUmVzdGF1cmFudCBmcm9tIFwiLi9tZWRpYS9yZXN0YXVyYW50LmpwZWdcIjtcbmltcG9ydCBTZXJ2aW5nIGZyb20gJy4vbWVkaWEvc2VydmluZy5qcGVnJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lR2VuKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYXJkXCIpO1xuXG4gICAgY29uc3QgYWJvdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBjb25zdCBhYm91dENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FyZFwiKTtcbiAgICBjb25zdCBhYm91dEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICAgIGNvbnN0IHJlc3RhdXJhbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBjb25zdCByZXN0YXVyYW50SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gICAgLy8gQWJvdXQgUGFydFxuXG4gICAgYWJvdXRUaXRsZS50ZXh0Q29udGVudCA9IFwiQWJvdXRcIlxuXG4gICAgYWJvdXRDYXJkLmlubmVySFRNTCA9IGA8cD5UaGUgRW5jaGFudGVkIEdlYXIgJiBHb2JsZXQgaXMgYSBjYXB0aXZhdGluZyBmdXNpb24gb2YgbWFnaWNhbCBhbmQgbWVjaGFuaWNhbCB0aGVtZXMsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJpbmcgYW4gZW5jaGFudGluZyBleHRlcmlvciB0aGF0IGxldml0YXRlcyBzbGlnaHRseSBhYm92ZSB0aGUgZ3JvdW5kLjwvcD4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SW5zaWRlLCBmbG9hdGluZyBjaGFuZGVsaWVycyBjYXN0IGEgd2FybSBnbG93IG92ZXIgZWxlZ2FudGx5IGNhcnZlZCB3b29kZW4gdGFibGVzIGFuZCBzaGVsdmVzIGxpbmVkIHdpdGggYXJjYW5lIGFydGlmYWN0cy4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF1dG9tYXRvbiBzZXJ2ZXJzIGF0dGVuZCB0byBndWVzdHMgd2l0aCBwcmVjaXNpb24gYW5kIGNoYXJtLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRpbmcgYSBzZWFtbGVzcyBibGVuZCBvZiB0cmFkaXRpb25hbCBob3NwaXRhbGl0eSBhbmQgbWFnaWNhbCBlZmZpY2llbmN5LiA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxuICAgIFxuICAgIGFib3V0SW1hZ2Uuc3JjID0gUmVzdGF1cmFudFxuICAgIGFib3V0SW1hZ2UuaWQgPSBcImhvbWUtZ2VuXCJcblxuICAgIGFib3V0Q2FyZC5hcHBlbmRDaGlsZChhYm91dEltYWdlKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dFRpdGxlKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRDYXJkKTtcblxuICAgIC8vIFJlc3RhdXJhbnQgcHJlc2VudGF0aW9uXG5cbiAgICByZXN0YXVyYW50VGl0bGUudGV4dENvbnRlbnQgPSBcIk91ciBSZXN0YXVyYW50XCJcbiAgICBcbiAgICByZXN0YXVyYW50SW1hZ2Uuc3JjID0gU2VydmluZ1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRUaXRsZSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRJbWFnZSk7XG5cblxuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn0iLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmltcG9ydCBtZW51R2VuIGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgaG9tZUdlbiBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IGNvbnRhY3RHZW4gZnJvbSAnLi9jb250YWN0LmpzJztcblxuXG5cbmNvbnN0IGdlbmVyYXRlUGFnZSA9IChmdW5jdGlvbigpIHtcblxuICAgIGNvbnN0IHRvZ2dsZUFjdGl2ZSA9IChidXR0b24pID0+IHtcbiAgICAgICAgY29uc3QgYnRuX2FjdGl2ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG4tbmF2IGFjdGl2ZVwiKVswXTtcbiAgICAgICAgYnRuX2FjdGl2ZS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBjaGFuZ2VUYWIgPSAoYnV0dG9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICAgICAgbGV0IHRhYkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHN3aXRjaCAoYnV0dG9uLmlkKSB7XG4gICAgICAgICAgICBjYXNlIFwiaG9tZVwiOlxuICAgICAgICAgICAgICAgIHRhYkNvbnRhaW5lciA9IGhvbWVHZW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjb250YWN0XCI6XG4gICAgICAgICAgICAgICAgdGFiQ29udGFpbmVyID0gY29udGFjdEdlbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1lbnVcIjpcbiAgICAgICAgICAgICAgICB0YWJDb250YWluZXIgPSBtZW51R2VuKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJDb250YWluZXIpICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgXG4gICAgY29uc3QgYnV0dG9uTGluayA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG4tbmF2XCIpO1xuICAgIFxuICAgICAgICBmb3IgKGNvbnN0IGJ1dHRvbiBvZiBidXR0b25zKSB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCEoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSl7XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUFjdGl2ZShlLnRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZVRhYihlLnRhcmdldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY29uc3QgZGlzcGxheVRhYiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYnRuX2FjdGl2ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG4tbmF2IGFjdGl2ZVwiKVswXTtcbiAgICAgICAgY2hhbmdlVGFiKGJ0bl9hY3RpdmUpO1xuICAgICAgICBidXR0b25MaW5rKCk7XG5cbiAgICB9XG5cbiAgICByZXR1cm4ge2Rpc3BsYXlUYWJ9XG5cbn0pKClcblxuZ2VuZXJhdGVQYWdlLmRpc3BsYXlUYWIoKVxuXG4iLCJcbmNvbnN0IG1lYWxHZW5lcmF0aW9uID0gKGZ1bmN0aW9uKCl7XG5cblxuICAgIGNsYXNzIE1lbnUge1xuICAgICAgICBjb25zdHJ1Y3RvcihtZWFsLCBuYW1lLCBwcmljZSkge1xuICAgICAgICAgICAgdGhpcy5tZWFsID0gbWVhbDtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBtZWFscyA9IHtcbiAgICAgICAgXCJTdGFydGVyc1wiOiBbXG4gICAgICAgICAgICBuZXcgTWVudShcIlN0YXJ0ZXJzXCIsIFwiTXlzdGljIE11c2hyb29tIE1lZGxleVwiLCA1KSxcbiAgICAgICAgICAgIG5ldyBNZW51KFwiU3RhcnRlcnNcIiwgXCJDbG9ja3dvcmsgQ2FsYW1hcmlcIiwgNiksXG4gICAgICAgIF0sXG4gICAgICAgIFwiTWFpbiBDb3Vyc2VcIjogW1xuICAgICAgICAgICAgbmV3IE1lbnUoXCJNYWluIENvdXJzZXNcIiwgXCJBcmNhbmUgU3Rld1wiLCAxMiksXG4gICAgICAgICAgICBuZXcgTWVudShcIk1haW4gQ291cnNlc1wiLCBcIkdyaWxsZWQgRHJhZ29uIFN0ZWFrXCIsIDIwKSxcbiAgICAgICAgICAgIG5ldyBNZW51KFwiTWFpbiBDb3Vyc2VzXCIsIFwiTWFnZeKAmXMgTXVzaHJvb20gUmlzb3R0b1wiLCAxNSksXG4gICAgICAgIF0sXG4gICAgICAgIFwiRGVzc2VydHNcIjogW1xuICAgICAgICAgICAgbmV3IE1lbnUoXCJEZXNzZXJ0c1wiLCBcIlNwZWxsYm91bmQgU3dlZXRyb2xscyBcIiwgNCksXG4gICAgICAgICAgICBuZXcgTWVudShcIkRlc3NlcnRzXCIsIFwiRW5jaGFudGVkIENha2VcIiwgNyksXG4gICAgICAgIF0sXG4gICAgICAgIFwiRHJpbmtzXCI6IFtcbiAgICAgICAgICAgIG5ldyBNZW51KFwiRHJpbmtzXCIsIFwiV2l6YXJk4oCZcyBXaW5lXCIsIDgpLFxuICAgICAgICAgICAgbmV3IE1lbnUoXCJEcmlua3NcIiwgXCJQb3Rpb24gb2YgQmxpc3NcIiwgNSksXG4gICAgICAgICAgICBuZXcgTWVudShcIkRyaW5rc1wiLCBcIkNsb2Nrd29yayBDb2ZmZWVcIiwgMyksXG4gICAgICAgIF1cbiAgICB9XG5cbiAgICByZXR1cm4ge21lYWxzfTtcblxufSkoKTtcblxuY29uc3QgZ2VuZXJhdGVQYWdlID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgbGV0IGNvbnRhaW5lcjtcbiAgICBsZXQgbmF2O1xuICAgIGxldCB0YWJDb250YWluZXI7XG5cbiAgICBjb25zdCBtZWFscyA9IG1lYWxHZW5lcmF0aW9uLm1lYWxzO1xuXG4gICAgY29uc3QgdG9nZ2xlQWN0aXZlID0gKGJ1dHRvbikgPT4ge1xuICAgICAgICBjb25zdCBidG5fYWN0aXZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJ0bi1tZWFsIGFjdGl2ZVwiKVswXTtcbiAgICAgICAgYnRuX2FjdGl2ZS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZW5UYWIgPSAoYXJyLCBtZWFsVHlwZSkgPT4ge1xuICAgICAgICBcbiAgICAgICAgdGFiQ29udGFpbmVyLmlkID0gXCJ0YWItbWVhbFwiXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xuICAgICAgICB0aXRsZS5pbm5lclRleHQgPSBtZWFsVHlwZTtcbiAgICAgICAgdGFiQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgZm9yIChsZXQgbWVhbCBvZiBhcnIpIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWVQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYXJkXCIpO1xuICAgICAgICAgICAgbmFtZVByaWNlLmlubmVySFRNTCA9IGAke21lYWwubmFtZX0gLSAke21lYWwucHJpY2V9IHNpbHZlciBjb2luc2BcbiAgICAgICAgICAgIHRhYkNvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lUHJpY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YWJDb250YWluZXI7XG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlVGFiID0gKGJ1dHRvbikgPT4ge1xuICAgICAgICB0YWJDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgZ2VuVGFiKG1lYWxzW2J1dHRvbi5pZF0sIGJ1dHRvbi5pZCk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJDb250YWluZXIpICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVCdXR0b25zID0gKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMobWVhbHMpKSB7XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgYnV0dG9uLmlkID0ga2V5O1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidG4tbWVhbFwiKVxuICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0ga2V5O1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkpe1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVBY3RpdmUoZS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VUYWIoZS50YXJnZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gXCJTdGFydGVyc1wiKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5hdi5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmF2KTtcbiAgICB9XG5cbiAgICBjb25zdCBpbml0RWxlbWVudHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYXJkXCIpO1xuICAgICAgICBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgICAgICB0YWJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FyZFwiKTtcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCJcbiAgICAgICAgY29udGFpbmVyLmlkID0gXCJtZW51LWNvbnRcIjtcbiAgICAgICAgY3JlYXRlQnV0dG9ucygpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBkaXNwbGF5VGFiID0gKCkgPT4ge1xuICAgICAgICBpbml0RWxlbWVudHMoKTtcbiAgICAgICAgY29uc3QgYnRuX2FjdGl2ZSA9IGNvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYnRuLW1lYWwgYWN0aXZlXCIpWzBdO1xuICAgICAgICBjaGFuZ2VUYWIoYnRuX2FjdGl2ZSk7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG5cbiAgICB9XG5cbiAgICByZXR1cm4ge2Rpc3BsYXlUYWJ9XG5cbn0pKClcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVHZW4oKSB7XG4gICAgcmV0dXJuIGdlbmVyYXRlUGFnZS5kaXNwbGF5VGFiKCk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9