"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/image/bckg.jpg */ "./src/assets/image/bckg.jpg"), __webpack_require__.b);
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
}`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":";AACA;IACI,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,qBAAqB;IACrB,uBAAuB;IACvB,4BAA4B;IAC5B,iCAAiC;IACjC,uBAAuB;IACvB,6BAA6B;IAC7B,yBAAyB;IACzB,sBAAsB;AAC1B;;AAEA;IACI,0CAA0C;IAC1C,eAAe;IACf,0BAA0B;AAC9B;;AAEA;IACI,cAAc,EAAE,8BAA8B;IAC9C,wBAAwB,EAAE,iBAAiB;EAC7C;;EAEA;IACE,gBAAgB;CACnB,cAAc;CACd,YAAY;CACZ,UAAU;CACV,aAAa;CACb,eAAe;CACf,gBAAgB;AACjB;;;AAGA,sBAAsB;;AAEtB;IACI,gBAAgB;IAChB,MAAM;IACN,OAAO;IACP,aAAa;IACb,uBAAuB;IACvB,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,mCAAmC;IACnC,yCAAyC;IACzC,mCAAmC;IACnC;AACJ;;AAEA;IACI,eAAe;IACf;AACJ;;AAEA;IACI,cAAc;IACd,iBAAiB;IACjB,sBAAsB;IACtB,8BAA8B;IAC9B,yBAAyB;IACzB,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;IACjB,8BAA8B;IAC9B,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,8BAA8B;IAC9B,eAAe;AACnB;;AAEA;IACI;AACJ;;AAEA;IACI,WAAW;IACX,oBAAoB;AACxB;;AAEA,WAAW;;AAEX;IACI,eAAe;IACf,SAAS;IACT,mCAAmC;IACnC,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,sBAAsB;IACtB,gCAAgC;IAChC,yCAAyC;IACzC;AACJ;;;;AAIA,iBAAiB;;AAEjB;IACI,kBAAkB;IAClB,yDAA+C;IAC/C,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,oCAAoC;IACpC,UAAU;IACV,aAAa;IACb,cAAc;IACd,wBAAwB;IACxB,oBAAoB;;AAExB;;AAEA;IACI,gBAAgB;IAChB,cAAc;IACd,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;;IAElB,yCAAyC;AAC7C;;AAEA;IACI,aAAa;IACb,4BAA4B;IAC5B,yCAAyC;IACzC,mCAAmC;IACnC,aAAa;IACb,sBAAsB;IACtB,0BAA0B;IAC1B,mBAAmB;;IAEnB;QACI,qBAAqB;QACrB,kBAAkB;QAClB,iBAAiB;IACrB;;AAEJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,cAAc;IACd,iBAAiB;IACjB,sBAAsB;IACtB,oBAAoB;IACpB,8BAA8B;IAC9B,yBAAyB;IACzB,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;IACjB,8BAA8B;IAC9B,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,8BAA8B;IAC9B,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV;QACI,iBAAiB;;IAErB;AACJ;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB","sourcesContent":["\n* {\n    box-sizing: border-box;\n    margin: 0;\n}\n\n:root {\n    --main-color: #2C3E50;\n    --back-shelves: #f5f0df;\n    --shadow-box: rgba(0,0,0,.5);\n    --back-header: rgb(255, 255, 255);\n    --color-second: #f6f3e9;\n    --back-card-not-read: #CC5500;\n    --back-card-read: #6ac700;\n    --third-color: #f5f0df;\n}\n\nbody {\n    font-family: 'IM FELL English', sans-serif;\n    font-size: 22px;\n    color: var(--color-second);\n}\n\na {\n    color: inherit; /* blue colors for links too */\n    text-decoration: inherit; /* no underline */\n  }\n\n  button {\n    background: none;\n\tcolor: inherit;\n\tborder: none;\n\tpadding: 0;\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n}\n\n\n/* Header parameters */\n\nheader {\n    position: sticky;\n    top: 0;\n    left: 0;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    padding: 1rem 3rem;\n    border-bottom: 1px solid rgb(0,0,0);\n    box-shadow: 1rem 0 1rem var(--shadow-box);\n    background-color: var(--main-color);\n    color: var(--color-second)\n}\n\nheader h1 {\n    font-size: 3rem; \n    margin: 1rem\n}\n\nheader .btn-nav {\n    margin: 0 2rem;\n    padding: 0 0.5rem;\n    padding-bottom: 1.5rem;\n    transition-property: transform;\n    transition-duration: 0.3s;\n    display: inline-block;\n}\n\nheader .btn-nav.active {\n    font-weight: bold;\n    border-bottom: 2px solid black;\n    font-size: 1.2rem;\n    cursor: default;\n}\n\nheader .btn-nav:hover:not(.active) {\n    transform: translateY(-0.5rem);\n    cursor: pointer;\n}\n\nheader #title-page {\n    display: flex\n}\n\nheader .icon {\n    width: 3rem;\n    filter: invert(100%);\n}\n\n/* Footer */\n\nfooter {\n    position: fixed;\n    bottom: 0;\n    background-color: var(--main-color);\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 0.8rem;\n    padding: 0.8rem 1.6rem;\n    border-top: 1px solid rgb(0,0,0);\n    box-shadow: 1rem 0 1rem var(--shadow-box);\n    color: var(--color-second)\n}\n\n\n\n/* Main content */\n\nmain {\n    min-height: 100dvh;\n    background-image: url(../assets/image/bckg.jpg);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: var(--third-color);\n    width: 60%;\n    padding: 2rem;\n    margin: .25rem;\n    color: var(--main-color);\n    border-radius: .8rem;\n\n}\n\n#content img {\n    max-width: 15rem;\n    display: block;\n    border-radius: 2rem;\n    margin: 1rem;\n    align-self: center;\n\n    box-shadow: 1rem 0 1rem var(--shadow-box);\n}\n\n#content card card:not(#tab-meal) {\n    padding: 2rem;\n    border: 1px solid rgb(0,0,0);\n    box-shadow: 1rem 0 1rem var(--shadow-box);\n    background-color: var(--main-color);\n    display: flex;\n    flex-direction: column;\n    color: var(--color-second);\n    border-radius: 1rem;\n\n    p {\n        word-wrap: break-word;\n        margin-top: 0.2rem;\n        text-align: start;\n    }\n    \n}\n\n#content card {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n#content .btn-meal {\n    margin: 0 2rem;\n    padding: 0 0.5rem;\n    padding-bottom: 1.5rem;\n    border-spacing: 1rem;\n    transition-property: transform;\n    transition-duration: 0.3s;\n    display: inline-block;\n}\n\n#content .btn-meal.active {\n    font-weight: bold;\n    border-bottom: 2px solid black;\n    font-size: 1.2rem;\n    cursor: default;\n}\n\n#content .btn-meal:hover:not(.active) {\n    transform: translateY(-0.5rem);\n    cursor: pointer;\n}\n\n#content #tab-meal {\n    height: 25rem;\n    display: flex;\n    flex-direction: column;\n    gap: .8rem;\n    card {\n        font-size: 1.5rem;\n\n    }\n}\n\n#menu-cont nav {\n    margin-bottom: 1rem;\n}\n\n#content h5 {\n    font-size: 1.5rem;\n}"],"sourceRoot":""}]);
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

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _pages_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/menu.js */ "./src/pages/menu.js");
/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home.js */ "./src/pages/home.js");
/* harmony import */ var _pages_contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/contact.js */ "./src/pages/contact.js");







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
                tabContainer = (0,_pages_home_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
                break;
            case "contact":
                tabContainer = (0,_pages_contact_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
                break;
            case "menu":
                tabContainer = (0,_pages_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
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

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
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

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homeGen)
/* harmony export */ });
/* harmony import */ var _assets_image_restaurant_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/image/restaurant.jpeg */ "./src/assets/image/restaurant.jpeg");
/* harmony import */ var _assets_image_serving_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/image/serving.jpeg */ "./src/assets/image/serving.jpeg");



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
    
    aboutImage.src = _assets_image_restaurant_jpeg__WEBPACK_IMPORTED_MODULE_0__
    aboutImage.id = "home-gen"

    aboutCard.appendChild(aboutImage);

    container.appendChild(aboutTitle);
    container.appendChild(aboutCard);

    // Restaurant presentation

    restaurantTitle.textContent = "Our Restaurant"
    
    restaurantImage.src = _assets_image_serving_jpeg__WEBPACK_IMPORTED_MODULE_1__

    container.appendChild(restaurantTitle);
    container.appendChild(restaurantImage);



    return container;
}

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
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

        getPrice() {
            return `${this.price} silver coins`;
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
            namePrice.innerHTML = `${meal.name} - ${meal.getPrice()}`
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

/***/ "./src/assets/image/bckg.jpg":
/*!***********************************!*\
  !*** ./src/assets/image/bckg.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0381dfcc34c649722d5.jpg";

/***/ }),

/***/ "./src/assets/image/restaurant.jpeg":
/*!******************************************!*\
  !*** ./src/assets/image/restaurant.jpeg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "00f3cb16a0a5a66174f6.jpeg";

/***/ }),

/***/ "./src/assets/image/serving.jpeg":
/*!***************************************!*\
  !*** ./src/assets/image/serving.jpeg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9bf294ebcbcf19e917db.jpeg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZOztBQUVaLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxXQUFXLElBQUksZ0JBQWdCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFlBQVk7O0FBRVosQ0FBQzs7OztBQUljO0FBQ2Y7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzP2U0NWIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3BhZ2VzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3BhZ2VzL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZS9iY2tnLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXG4qIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMDtcbn1cblxuOnJvb3Qge1xuICAgIC0tbWFpbi1jb2xvcjogIzJDM0U1MDtcbiAgICAtLWJhY2stc2hlbHZlczogI2Y1ZjBkZjtcbiAgICAtLXNoYWRvdy1ib3g6IHJnYmEoMCwwLDAsLjUpO1xuICAgIC0tYmFjay1oZWFkZXI6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICAtLWNvbG9yLXNlY29uZDogI2Y2ZjNlOTtcbiAgICAtLWJhY2stY2FyZC1ub3QtcmVhZDogI0NDNTUwMDtcbiAgICAtLWJhY2stY2FyZC1yZWFkOiAjNmFjNzAwO1xuICAgIC0tdGhpcmQtY29sb3I6ICNmNWYwZGY7XG59XG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAnSU0gRkVMTCBFbmdsaXNoJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZCk7XG59XG5cbmEge1xuICAgIGNvbG9yOiBpbmhlcml0OyAvKiBibHVlIGNvbG9ycyBmb3IgbGlua3MgdG9vICovXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0OyAvKiBubyB1bmRlcmxpbmUgKi9cbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcblx0Y29sb3I6IGluaGVyaXQ7XG5cdGJvcmRlcjogbm9uZTtcblx0cGFkZGluZzogMDtcblx0Zm9udDogaW5oZXJpdDtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRvdXRsaW5lOiBpbmhlcml0O1xufVxuXG5cbi8qIEhlYWRlciBwYXJhbWV0ZXJzICovXG5cbmhlYWRlciB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxcmVtIDNyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigwLDAsMCk7XG4gICAgYm94LXNoYWRvdzogMXJlbSAwIDFyZW0gdmFyKC0tc2hhZG93LWJveCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZClcbn1cblxuaGVhZGVyIGgxIHtcbiAgICBmb250LXNpemU6IDNyZW07IFxuICAgIG1hcmdpbjogMXJlbVxufVxuXG5oZWFkZXIgLmJ0bi1uYXYge1xuICAgIG1hcmdpbjogMCAycmVtO1xuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5oZWFkZXIgLmJ0bi1uYXYuYWN0aXZlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG5oZWFkZXIgLmJ0bi1uYXY6aG92ZXI6bm90KC5hY3RpdmUpIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNXJlbSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5oZWFkZXIgI3RpdGxlLXBhZ2Uge1xuICAgIGRpc3BsYXk6IGZsZXhcbn1cblxuaGVhZGVyIC5pY29uIHtcbiAgICB3aWR0aDogM3JlbTtcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKTtcbn1cblxuLyogRm9vdGVyICovXG5cbmZvb3RlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgcGFkZGluZzogMC44cmVtIDEuNnJlbTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDAsMCwwKTtcbiAgICBib3gtc2hhZG93OiAxcmVtIDAgMXJlbSB2YXIoLS1zaGFkb3ctYm94KTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kKVxufVxuXG5cblxuLyogTWFpbiBjb250ZW50ICovXG5cbm1haW4ge1xuICAgIG1pbi1oZWlnaHQ6IDEwMGR2aDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuI2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoaXJkLWNvbG9yKTtcbiAgICB3aWR0aDogNjAlO1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgbWFyZ2luOiAuMjVyZW07XG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IC44cmVtO1xuXG59XG5cbiNjb250ZW50IGltZyB7XG4gICAgbWF4LXdpZHRoOiAxNXJlbTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG5cbiAgICBib3gtc2hhZG93OiAxcmVtIDAgMXJlbSB2YXIoLS1zaGFkb3ctYm94KTtcbn1cblxuI2NvbnRlbnQgY2FyZCBjYXJkOm5vdCgjdGFiLW1lYWwpIHtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLDAsMCk7XG4gICAgYm94LXNoYWRvdzogMXJlbSAwIDFyZW0gdmFyKC0tc2hhZG93LWJveCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG5cbiAgICBwIHtcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICBtYXJnaW4tdG9wOiAwLjJyZW07XG4gICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgIH1cbiAgICBcbn1cblxuI2NvbnRlbnQgY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTtcbn1cblxuI2NvbnRlbnQgLmJ0bi1tZWFsIHtcbiAgICBtYXJnaW46IDAgMnJlbTtcbiAgICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xuICAgIGJvcmRlci1zcGFjaW5nOiAxcmVtO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuI2NvbnRlbnQgLmJ0bi1tZWFsLmFjdGl2ZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuI2NvbnRlbnQgLmJ0bi1tZWFsOmhvdmVyOm5vdCguYWN0aXZlKSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjVyZW0pO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2NvbnRlbnQgI3RhYi1tZWFsIHtcbiAgICBoZWlnaHQ6IDI1cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IC44cmVtO1xuICAgIGNhcmQge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcblxuICAgIH1cbn1cblxuI21lbnUtY29udCBuYXYge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbiNjb250ZW50IGg1IHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBw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eC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLW1haW4tY29sb3I6ICMyQzNFNTA7XFxuICAgIC0tYmFjay1zaGVsdmVzOiAjZjVmMGRmO1xcbiAgICAtLXNoYWRvdy1ib3g6IHJnYmEoMCwwLDAsLjUpO1xcbiAgICAtLWJhY2staGVhZGVyOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIC0tY29sb3Itc2Vjb25kOiAjZjZmM2U5O1xcbiAgICAtLWJhY2stY2FyZC1ub3QtcmVhZDogI0NDNTUwMDtcXG4gICAgLS1iYWNrLWNhcmQtcmVhZDogIzZhYzcwMDtcXG4gICAgLS10aGlyZC1jb2xvcjogI2Y1ZjBkZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSU0gRkVMTCBFbmdsaXNoJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kKTtcXG59XFxuXFxuYSB7XFxuICAgIGNvbG9yOiBpbmhlcml0OyAvKiBibHVlIGNvbG9ycyBmb3IgbGlua3MgdG9vICovXFxuICAgIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDsgLyogbm8gdW5kZXJsaW5lICovXFxuICB9XFxuXFxuICBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcblxcdGNvbG9yOiBpbmhlcml0O1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdG91dGxpbmU6IGluaGVyaXQ7XFxufVxcblxcblxcbi8qIEhlYWRlciBwYXJhbWV0ZXJzICovXFxuXFxuaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbSAzcmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDAsMCwwKTtcXG4gICAgYm94LXNoYWRvdzogMXJlbSAwIDFyZW0gdmFyKC0tc2hhZG93LWJveCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kKVxcbn1cXG5cXG5oZWFkZXIgaDEge1xcbiAgICBmb250LXNpemU6IDNyZW07IFxcbiAgICBtYXJnaW46IDFyZW1cXG59XFxuXFxuaGVhZGVyIC5idG4tbmF2IHtcXG4gICAgbWFyZ2luOiAwIDJyZW07XFxuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuaGVhZGVyIC5idG4tbmF2LmFjdGl2ZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbmhlYWRlciAuYnRuLW5hdjpob3Zlcjpub3QoLmFjdGl2ZSkge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNXJlbSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaGVhZGVyICN0aXRsZS1wYWdlIHtcXG4gICAgZGlzcGxheTogZmxleFxcbn1cXG5cXG5oZWFkZXIgLmljb24ge1xcbiAgICB3aWR0aDogM3JlbTtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XFxufVxcblxcbi8qIEZvb3RlciAqL1xcblxcbmZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgcGFkZGluZzogMC44cmVtIDEuNnJlbTtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigwLDAsMCk7XFxuICAgIGJveC1zaGFkb3c6IDFyZW0gMCAxcmVtIHZhcigtLXNoYWRvdy1ib3gpO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kKVxcbn1cXG5cXG5cXG5cXG4vKiBNYWluIGNvbnRlbnQgKi9cXG5cXG5tYWluIHtcXG4gICAgbWluLWhlaWdodDogMTAwZHZoO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2ltYWdlL2Jja2cuanBnKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhpcmQtY29sb3IpO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBtYXJnaW46IC4yNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAuOHJlbTtcXG5cXG59XFxuXFxuI2NvbnRlbnQgaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxNXJlbTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcblxcbiAgICBib3gtc2hhZG93OiAxcmVtIDAgMXJlbSB2YXIoLS1zaGFkb3ctYm94KTtcXG59XFxuXFxuI2NvbnRlbnQgY2FyZCBjYXJkOm5vdCgjdGFiLW1lYWwpIHtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsMCwwKTtcXG4gICAgYm94LXNoYWRvdzogMXJlbSAwIDFyZW0gdmFyKC0tc2hhZG93LWJveCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG5cXG4gICAgcCB7XFxuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgICAgICBtYXJnaW4tdG9wOiAwLjJyZW07XFxuICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgfVxcbiAgICBcXG59XFxuXFxuI2NvbnRlbnQgY2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuI2NvbnRlbnQgLmJ0bi1tZWFsIHtcXG4gICAgbWFyZ2luOiAwIDJyZW07XFxuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xcbiAgICBib3JkZXItc3BhY2luZzogMXJlbTtcXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbiNjb250ZW50IC5idG4tbWVhbC5hY3RpdmUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4jY29udGVudCAuYnRuLW1lYWw6aG92ZXI6bm90KC5hY3RpdmUpIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjVyZW0pO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjb250ZW50ICN0YWItbWVhbCB7XFxuICAgIGhlaWdodDogMjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogLjhyZW07XFxuICAgIGNhcmQge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuXFxuICAgIH1cXG59XFxuXFxuI21lbnUtY29udCBuYXYge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4jY29udGVudCBoNSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGVzLmNzcyc7XG5cbmltcG9ydCBtZW51R2VuIGZyb20gJy4vcGFnZXMvbWVudS5qcyc7XG5pbXBvcnQgaG9tZUdlbiBmcm9tICcuL3BhZ2VzL2hvbWUuanMnO1xuaW1wb3J0IGNvbnRhY3RHZW4gZnJvbSAnLi9wYWdlcy9jb250YWN0LmpzJztcblxuXG5jb25zdCBnZW5lcmF0ZVBhZ2UgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICBjb25zdCB0b2dnbGVBY3RpdmUgPSAoYnV0dG9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ0bl9hY3RpdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYnRuLW5hdiBhY3RpdmVcIilbMF07XG4gICAgICAgIGJ0bl9hY3RpdmUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlVGFiID0gKGJ1dHRvbikgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgICAgIGxldCB0YWJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzd2l0Y2ggKGJ1dHRvbi5pZCkge1xuICAgICAgICAgICAgY2FzZSBcImhvbWVcIjpcbiAgICAgICAgICAgICAgICB0YWJDb250YWluZXIgPSBob21lR2VuKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY29udGFjdFwiOlxuICAgICAgICAgICAgICAgIHRhYkNvbnRhaW5lciA9IGNvbnRhY3RHZW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtZW51XCI6XG4gICAgICAgICAgICAgICAgdGFiQ29udGFpbmVyID0gbWVudUdlbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFiQ29udGFpbmVyKSAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIFxuICAgIGNvbnN0IGJ1dHRvbkxpbmsgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYnRuLW5hdlwiKTtcbiAgICBcbiAgICAgICAgZm9yIChjb25zdCBidXR0b24gb2YgYnV0dG9ucykge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkpe1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVBY3RpdmUoZS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VUYWIoZS50YXJnZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGRpc3BsYXlUYWIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ0bl9hY3RpdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYnRuLW5hdiBhY3RpdmVcIilbMF07XG4gICAgICAgIGNoYW5nZVRhYihidG5fYWN0aXZlKTtcbiAgICAgICAgYnV0dG9uTGluaygpO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIHtkaXNwbGF5VGFifVxuXG59KSgpXG5cbmdlbmVyYXRlUGFnZS5kaXNwbGF5VGFiKClcblxuIiwiXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3RHZW4oKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhcmRcIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhcmRcIik7XG5cbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQWRkcmVzc1wiO1xuICAgIGFkZHJlc3MudGV4dENvbnRlbnQgPSBgVGhlIEVuY2hhbnRlZCBHZWFyICYgR29ibGV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRmxvYXRpbmcgRGlzdHJpY3QsIFNreXdhcmQgUGxhemEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRWlsZWFuYXJgXG5cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn0iLCJpbXBvcnQgUmVzdGF1cmFudCBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlL3Jlc3RhdXJhbnQuanBlZ1wiO1xuaW1wb3J0IFNlcnZpbmcgZnJvbSAnLi4vYXNzZXRzL2ltYWdlL3NlcnZpbmcuanBlZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZUdlbigpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FyZFwiKTtcblxuICAgIGNvbnN0IGFib3V0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgY29uc3QgYWJvdXRDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhcmRcIik7XG4gICAgY29uc3QgYWJvdXRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgICBjb25zdCByZXN0YXVyYW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgY29uc3QgcmVzdGF1cmFudEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICAgIC8vIEFib3V0IFBhcnRcblxuICAgIGFib3V0VGl0bGUudGV4dENvbnRlbnQgPSBcIkFib3V0XCJcblxuICAgIGFib3V0Q2FyZC5pbm5lckhUTUwgPSBgPHA+VGhlIEVuY2hhbnRlZCBHZWFyICYgR29ibGV0IGlzIGEgY2FwdGl2YXRpbmcgZnVzaW9uIG9mIG1hZ2ljYWwgYW5kIG1lY2hhbmljYWwgdGhlbWVzLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyaW5nIGFuIGVuY2hhbnRpbmcgZXh0ZXJpb3IgdGhhdCBsZXZpdGF0ZXMgc2xpZ2h0bHkgYWJvdmUgdGhlIGdyb3VuZC48L3A+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkluc2lkZSwgZmxvYXRpbmcgY2hhbmRlbGllcnMgY2FzdCBhIHdhcm0gZ2xvdyBvdmVyIGVsZWdhbnRseSBjYXJ2ZWQgd29vZGVuIHRhYmxlcyBhbmQgc2hlbHZlcyBsaW5lZCB3aXRoIGFyY2FuZSBhcnRpZmFjdHMuIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdXRvbWF0b24gc2VydmVycyBhdHRlbmQgdG8gZ3Vlc3RzIHdpdGggcHJlY2lzaW9uIGFuZCBjaGFybSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0aW5nIGEgc2VhbWxlc3MgYmxlbmQgb2YgdHJhZGl0aW9uYWwgaG9zcGl0YWxpdHkgYW5kIG1hZ2ljYWwgZWZmaWNpZW5jeS4gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICBcbiAgICBhYm91dEltYWdlLnNyYyA9IFJlc3RhdXJhbnRcbiAgICBhYm91dEltYWdlLmlkID0gXCJob21lLWdlblwiXG5cbiAgICBhYm91dENhcmQuYXBwZW5kQ2hpbGQoYWJvdXRJbWFnZSk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRUaXRsZSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0Q2FyZCk7XG5cbiAgICAvLyBSZXN0YXVyYW50IHByZXNlbnRhdGlvblxuXG4gICAgcmVzdGF1cmFudFRpdGxlLnRleHRDb250ZW50ID0gXCJPdXIgUmVzdGF1cmFudFwiXG4gICAgXG4gICAgcmVzdGF1cmFudEltYWdlLnNyYyA9IFNlcnZpbmdcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN0YXVyYW50VGl0bGUpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN0YXVyYW50SW1hZ2UpO1xuXG5cblxuICAgIHJldHVybiBjb250YWluZXI7XG59IiwiXG5jb25zdCBtZWFsR2VuZXJhdGlvbiA9IChmdW5jdGlvbigpe1xuXG5cbiAgICBjbGFzcyBNZW51IHtcbiAgICAgICAgY29uc3RydWN0b3IobWVhbCwgbmFtZSwgcHJpY2UpIHtcbiAgICAgICAgICAgIHRoaXMubWVhbCA9IG1lYWw7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0UHJpY2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5wcmljZX0gc2lsdmVyIGNvaW5zYDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG1lYWxzID0ge1xuICAgICAgICBcIlN0YXJ0ZXJzXCI6IFtcbiAgICAgICAgICAgIG5ldyBNZW51KFwiU3RhcnRlcnNcIiwgXCJNeXN0aWMgTXVzaHJvb20gTWVkbGV5XCIsIDUpLFxuICAgICAgICAgICAgbmV3IE1lbnUoXCJTdGFydGVyc1wiLCBcIkNsb2Nrd29yayBDYWxhbWFyaVwiLCA2KSxcbiAgICAgICAgXSxcbiAgICAgICAgXCJNYWluIENvdXJzZVwiOiBbXG4gICAgICAgICAgICBuZXcgTWVudShcIk1haW4gQ291cnNlc1wiLCBcIkFyY2FuZSBTdGV3XCIsIDEyKSxcbiAgICAgICAgICAgIG5ldyBNZW51KFwiTWFpbiBDb3Vyc2VzXCIsIFwiR3JpbGxlZCBEcmFnb24gU3RlYWtcIiwgMjApLFxuICAgICAgICAgICAgbmV3IE1lbnUoXCJNYWluIENvdXJzZXNcIiwgXCJNYWdl4oCZcyBNdXNocm9vbSBSaXNvdHRvXCIsIDE1KSxcbiAgICAgICAgXSxcbiAgICAgICAgXCJEZXNzZXJ0c1wiOiBbXG4gICAgICAgICAgICBuZXcgTWVudShcIkRlc3NlcnRzXCIsIFwiU3BlbGxib3VuZCBTd2VldHJvbGxzIFwiLCA0KSxcbiAgICAgICAgICAgIG5ldyBNZW51KFwiRGVzc2VydHNcIiwgXCJFbmNoYW50ZWQgQ2FrZVwiLCA3KSxcbiAgICAgICAgXSxcbiAgICAgICAgXCJEcmlua3NcIjogW1xuICAgICAgICAgICAgbmV3IE1lbnUoXCJEcmlua3NcIiwgXCJXaXphcmTigJlzIFdpbmVcIiwgOCksXG4gICAgICAgICAgICBuZXcgTWVudShcIkRyaW5rc1wiLCBcIlBvdGlvbiBvZiBCbGlzc1wiLCA1KSxcbiAgICAgICAgICAgIG5ldyBNZW51KFwiRHJpbmtzXCIsIFwiQ2xvY2t3b3JrIENvZmZlZVwiLCAzKSxcbiAgICAgICAgXVxuICAgIH1cblxuICAgIHJldHVybiB7bWVhbHN9O1xuXG59KSgpO1xuXG5jb25zdCBnZW5lcmF0ZVBhZ2UgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICBsZXQgY29udGFpbmVyO1xuICAgIGxldCBuYXY7XG4gICAgbGV0IHRhYkNvbnRhaW5lcjtcblxuICAgIGNvbnN0IG1lYWxzID0gbWVhbEdlbmVyYXRpb24ubWVhbHM7XG5cbiAgICBjb25zdCB0b2dnbGVBY3RpdmUgPSAoYnV0dG9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ0bl9hY3RpdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYnRuLW1lYWwgYWN0aXZlXCIpWzBdO1xuICAgICAgICBidG5fYWN0aXZlLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGdlblRhYiA9IChhcnIsIG1lYWxUeXBlKSA9PiB7XG4gICAgICAgIFxuICAgICAgICB0YWJDb250YWluZXIuaWQgPSBcInRhYi1tZWFsXCJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG4gICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IG1lYWxUeXBlO1xuICAgICAgICB0YWJDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBmb3IgKGxldCBtZWFsIG9mIGFycikge1xuICAgICAgICAgICAgY29uc3QgbmFtZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhcmRcIik7XG4gICAgICAgICAgICBuYW1lUHJpY2UuaW5uZXJIVE1MID0gYCR7bWVhbC5uYW1lfSAtICR7bWVhbC5nZXRQcmljZSgpfWBcbiAgICAgICAgICAgIHRhYkNvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lUHJpY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YWJDb250YWluZXI7XG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlVGFiID0gKGJ1dHRvbikgPT4ge1xuICAgICAgICB0YWJDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgZ2VuVGFiKG1lYWxzW2J1dHRvbi5pZF0sIGJ1dHRvbi5pZCk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJDb250YWluZXIpICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVCdXR0b25zID0gKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMobWVhbHMpKSB7XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgYnV0dG9uLmlkID0ga2V5O1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidG4tbWVhbFwiKVxuICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0ga2V5O1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkpe1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVBY3RpdmUoZS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VUYWIoZS50YXJnZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gXCJTdGFydGVyc1wiKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5hdi5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmF2KTtcbiAgICB9XG5cbiAgICBjb25zdCBpbml0RWxlbWVudHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYXJkXCIpO1xuICAgICAgICBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgICAgICB0YWJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FyZFwiKTtcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCJcbiAgICAgICAgY29udGFpbmVyLmlkID0gXCJtZW51LWNvbnRcIjtcbiAgICAgICAgY3JlYXRlQnV0dG9ucygpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBkaXNwbGF5VGFiID0gKCkgPT4ge1xuICAgICAgICBpbml0RWxlbWVudHMoKTtcbiAgICAgICAgY29uc3QgYnRuX2FjdGl2ZSA9IGNvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYnRuLW1lYWwgYWN0aXZlXCIpWzBdO1xuICAgICAgICBjaGFuZ2VUYWIoYnRuX2FjdGl2ZSk7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG5cbiAgICB9XG5cbiAgICByZXR1cm4ge2Rpc3BsYXlUYWJ9XG5cbn0pKClcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVHZW4oKSB7XG4gICAgcmV0dXJuIGdlbmVyYXRlUGFnZS5kaXNwbGF5VGFiKCk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9