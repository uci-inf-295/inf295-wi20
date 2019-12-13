(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "\n@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400,700\");\n/* You can add global styles to this file, and also import other style files */\n/* Palette URL: http://paletton.com/#uid=70u0u0kvlufj-BeoPvVx4nPDgiF */\n/* As hex codes */\n:root{\n\t--color-primary-0: #AA3939;\t/* Main Primary color */\n\t--color-primary-1: #FFAAAA;\n\t--color-primary-2: #D46A6A;\n\t--color-primary-3: #801515;\n\t--color-primary-4: #550000;\n\n\t--color-secondary-1-0: #AA7639;\t/* Main Secondary color (1) */\n\t--color-secondary-1-1: #FFD8AA;\n\t--color-secondary-1-2: #D4A46A;\n\t--color-secondary-1-3: #804F15;\n\t--color-secondary-1-4: #552E00;\n\n\t--color-secondary-2-0: #28546C;\t/* Main Secondary color (2) */\n\t--color-secondary-2-1: #6F90A2;\n\t--color-secondary-2-2: #477187;\n\t--color-secondary-2-3: #113B51;\n\t--color-secondary-2-4: #032436;\n\t\n\t--color-complement-0: #2D882D;\t/* Main Complement color */\n\t--color-complement-1: #88CC88;\n\t--color-complement-2: #55AA55;\n\t--color-complement-3: #116611;\n\t--color-complement-4: #004400;\n}\n@font-face {\n\tfont-family: ChaparralPro;\n\tfont-style: normal;\n\tsrc: url('ChaparralPro-Regular.woff') format(\"woff\");\n}\n@font-face {\n\tfont-family: ChaparralPro;\n\tfont-style: italic;\n\tsrc: url('ChaparralPro-Italic.woff') format(\"woff\");\n}\nhr {\n\tborder-top: 5px double #888;\n}\nbody {\n\tpadding: 50px;\n\tfont-family: 'ChaparralPro', serif;\n}\n.container {\n\tmax-width: 1000px;\n}\nnav {\n\ttext-align: right;\n}\n@media screen and (max-width : 800px)\n{\n\t.name > h1 {\n\t\tfont-size: 400%;\n\t}\n\tnav {\n\t\ttext-align: left;\n\t\tfont-size: 200%;\n\t}\n  main {\n  \tfont-size:200%;\n  }\n  footer {\n  \tfont-size:200%;\n  }\n}\nnav > a {\n\tfont-family: 'Lato', sans-serif;\n\tfont-weight: 700;\n}\n.name > h1 {\n\tfont-weight: 700;\n\tmargin:0px;\n}\nh1, h2, h3, h4, h5, h6 {\n\tfont-family: 'Lato', sans-serif;\n\tfont-weight: 300;\n}\nh1 {\n\tfont-size: 1.3em;\n\tfont-weight: 900;\n}\nh2 {\n\tfont-size: 1.2em;\n\tfont-weight: 700;\n}\nh3 {\n\tfont-size: 1.1em;\n\tfont-weight: 400;\n}\nh4 {\n\tfont-size: 1.0em;\n}\naside {\n\tfont-family: 'Lato', sans-serif;\n\tfont-size: 0.7em;\n}\naside > h2 {\n\tfont-weight: 700;\n\tfont-size: 1.2em;\n\tmargin: 10px 0px 5px 0px;\n}\naside > p {\n\tmargin: 2px 2px 5px 2px;\n\tfont-size: 1.0em;\n}\naside > a {\n\tdisplay: block;\n}\naside > a > span {\n\tvertical-align: top;\n\tline-height: 16px;\n}\nimg.maxwidth {\n\tmax-width: 100%;\n\tdisplay: block;\n}\ncode {\n\tcolor: var(--color-complement-0);\n}\nhr {\n\tborder-top: 1px solid #888;\n}\na {\n\tcolor: var(--color-primary-0);\n}\na:hover {\n\tcolor: var(--color-primary-1);\n}\na:active {\n\tcolor: var(--color-primary-2);\n}\na:visited {\n\tcolor: var(--color-primary-0);\n}\nspan.note {\n\tfont-family: 'Lato', sans-serif;\n\tcolor: var(--color-complement-0);\n}\np.leaders {\n\tfont-family: 'Lato', sans-serif;\n\tcolor: var(--color-complement-0);\n}\nblockquote {\n\tfont-family: 'Lato', sans-serif;\n\tfont-size: 0.8em;\n\tmargin: 0 0 0 1em;\n}\n.tbd {\n\tcolor: var(--color-secondary-1-0);\n}\n.emph {\n\tfont-family: 'Lato', sans-serif;\n\tcolor: var(--color-complement-0);\n}\n.row-eq-height {\n  display:         flex;\n}\n.day {\n\tborder-style: solid;\n\tborder-width: 1px;\n\tmargin: 1px;\n}\n.today {\n\tbackground-color: var(--color-primary-1);\n}\n.event {\n\tmargin: 0px 0px 5px 0px;\n\tpadding: 0px 5px;\n}\n.class {\n\t\n}\n.holiday {\n\tbackground-color: #FFF275;\n}\n.project {\n\tbackground-color: #DAEDBD;\n}\n.due {\n\tbackground-color: #DAEDBD;\n}\n.absence {\n\tbackground-color: #F4B9B2;\n\tfont-weight: 300;\n}\n.officehours_daniel {\n\tbackground-color: #967D69;\n}\n/*# sourceMappingURL=data:application/json;base64,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b3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAsNzAwXCIpO1xuXG4vKiBQYWxldHRlIFVSTDogaHR0cDovL3BhbGV0dG9uLmNvbS8jdWlkPTcwdTB1MGt2bHVmai1CZW9QdlZ4NG5QRGdpRiAqL1xuLyogQXMgaGV4IGNvZGVzICovXG5cblxuOnJvb3R7XG5cdC0tY29sb3ItcHJpbWFyeS0wOiAjQUEzOTM5O1x0LyogTWFpbiBQcmltYXJ5IGNvbG9yICovXG5cdC0tY29sb3ItcHJpbWFyeS0xOiAjRkZBQUFBO1xuXHQtLWNvbG9yLXByaW1hcnktMjogI0Q0NkE2QTtcblx0LS1jb2xvci1wcmltYXJ5LTM6ICM4MDE1MTU7XG5cdC0tY29sb3ItcHJpbWFyeS00OiAjNTUwMDAwO1xuXG5cdC0tY29sb3Itc2Vjb25kYXJ5LTEtMDogI0FBNzYzOTtcdC8qIE1haW4gU2Vjb25kYXJ5IGNvbG9yICgxKSAqL1xuXHQtLWNvbG9yLXNlY29uZGFyeS0xLTE6ICNGRkQ4QUE7XG5cdC0tY29sb3Itc2Vjb25kYXJ5LTEtMjogI0Q0QTQ2QTtcblx0LS1jb2xvci1zZWNvbmRhcnktMS0zOiAjODA0RjE1O1xuXHQtLWNvbG9yLXNlY29uZGFyeS0xLTQ6ICM1NTJFMDA7XG5cblx0LS1jb2xvci1zZWNvbmRhcnktMi0wOiAjMjg1NDZDO1x0LyogTWFpbiBTZWNvbmRhcnkgY29sb3IgKDIpICovXG5cdC0tY29sb3Itc2Vjb25kYXJ5LTItMTogIzZGOTBBMjtcblx0LS1jb2xvci1zZWNvbmRhcnktMi0yOiAjNDc3MTg3O1xuXHQtLWNvbG9yLXNlY29uZGFyeS0yLTM6ICMxMTNCNTE7XG5cdC0tY29sb3Itc2Vjb25kYXJ5LTItNDogIzAzMjQzNjtcblx0XG5cdC0tY29sb3ItY29tcGxlbWVudC0wOiAjMkQ4ODJEO1x0LyogTWFpbiBDb21wbGVtZW50IGNvbG9yICovXG5cdC0tY29sb3ItY29tcGxlbWVudC0xOiAjODhDQzg4O1xuXHQtLWNvbG9yLWNvbXBsZW1lbnQtMjogIzU1QUE1NTtcblx0LS1jb2xvci1jb21wbGVtZW50LTM6ICMxMTY2MTE7XG5cdC0tY29sb3ItY29tcGxlbWVudC00OiAjMDA0NDAwO1xufVxuXG5AZm9udC1mYWNlIHtcblx0Zm9udC1mYW1pbHk6IENoYXBhcnJhbFBybztcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xuXHRzcmM6IHVybChcImFzc2V0cy9mb250cy9DaGFwYXJyYWxQcm8tUmVndWxhci53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG59XG5cbkBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogQ2hhcGFycmFsUHJvO1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdHNyYzogdXJsKFwiYXNzZXRzL2ZvbnRzL0NoYXBhcnJhbFByby1JdGFsaWMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xufVxuXG5ociB7XG5cdGJvcmRlci10b3A6IDVweCBkb3VibGUgIzg4ODtcbn1cblxuYm9keSB7XG5cdHBhZGRpbmc6IDUwcHg7XG5cdGZvbnQtZmFtaWx5OiAnQ2hhcGFycmFsUHJvJywgc2VyaWY7XG59XG5cbi5jb250YWluZXIge1xuXHRtYXgtd2lkdGg6IDEwMDBweDtcbn1cblxubmF2IHtcblx0dGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA4MDBweClcbntcblx0Lm5hbWUgPiBoMSB7XG5cdFx0Zm9udC1zaXplOiA0MDAlO1xuXHR9XG5cdG5hdiB7XG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHRmb250LXNpemU6IDIwMCU7XG5cdH1cbiAgbWFpbiB7XG4gIFx0Zm9udC1zaXplOjIwMCU7XG4gIH1cbiAgZm9vdGVyIHtcbiAgXHRmb250LXNpemU6MjAwJTtcbiAgfVxufVxuXG5uYXYgPiBhIHtcblx0Zm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLm5hbWUgPiBoMSB7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdG1hcmdpbjowcHg7XG59XG5cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuXHRmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuXHRmb250LXdlaWdodDogMzAwO1xufVxuXG5oMSB7XG5cdGZvbnQtc2l6ZTogMS4zZW07XG5cdGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbmgyIHtcblx0Zm9udC1zaXplOiAxLjJlbTtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuaDMge1xuXHRmb250LXNpemU6IDEuMWVtO1xuXHRmb250LXdlaWdodDogNDAwO1xufVxuXG5oNCB7XG5cdGZvbnQtc2l6ZTogMS4wZW07XG59XG5cbmFzaWRlIHtcblx0Zm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcblx0Zm9udC1zaXplOiAwLjdlbTtcbn1cblxuYXNpZGUgPiBoMiB7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdGZvbnQtc2l6ZTogMS4yZW07XG5cdG1hcmdpbjogMTBweCAwcHggNXB4IDBweDtcbn1cblxuYXNpZGUgPiBwIHtcblx0bWFyZ2luOiAycHggMnB4IDVweCAycHg7XG5cdGZvbnQtc2l6ZTogMS4wZW07XG59XG5cbmFzaWRlID4gYSB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG5hc2lkZSA+IGEgPiBzcGFuIHtcblx0dmVydGljYWwtYWxpZ246IHRvcDtcblx0bGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbmltZy5tYXh3aWR0aCB7XG5cdG1heC13aWR0aDogMTAwJTtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5cbmNvZGUge1xuXHRjb2xvcjogdmFyKC0tY29sb3ItY29tcGxlbWVudC0wKTtcbn1cblxuaHIge1xuXHRib3JkZXItdG9wOiAxcHggc29saWQgIzg4ODtcbn1cblxuYSB7XG5cdGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LTApO1xufVxuXG5hOmhvdmVyIHtcblx0Y29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktMSk7XG59XG5cbmE6YWN0aXZlIHtcblx0Y29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktMik7XG59XG5cbmE6dmlzaXRlZCB7XG5cdGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LTApO1xufVxuXG5zcGFuLm5vdGUge1xuXHRmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuXHRjb2xvcjogdmFyKC0tY29sb3ItY29tcGxlbWVudC0wKTtcbn1cblxucC5sZWFkZXJzIHtcblx0Zm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcblx0Y29sb3I6IHZhcigtLWNvbG9yLWNvbXBsZW1lbnQtMCk7XG59XG5cbmJsb2NrcXVvdGUge1xuXHRmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuXHRmb250LXNpemU6IDAuOGVtO1xuXHRtYXJnaW46IDAgMCAwIDFlbTtcbn1cblxuLnRiZCB7XG5cdGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnktMS0wKTtcbn1cblxuLmVtcGgge1xuXHRmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuXHRjb2xvcjogdmFyKC0tY29sb3ItY29tcGxlbWVudC0wKTtcbn1cblxuLnJvdy1lcS1oZWlnaHQge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogICAgICAgICBmbGV4O1xufVxuXG4uZGF5IHtcblx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcblx0Ym9yZGVyLXdpZHRoOiAxcHg7XG5cdG1hcmdpbjogMXB4O1xufVxuXG4udG9kYXkge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LTEpO1xufVxuXG4uZXZlbnQge1xuXHRtYXJnaW46IDBweCAwcHggNXB4IDBweDtcblx0cGFkZGluZzogMHB4IDVweDtcbn1cblxuLmNsYXNzIHtcblx0XG59XG5cbi5ob2xpZGF5IHtcblx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRjI3NTtcbn1cblxuLnByb2plY3Qge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjREFFREJEO1xufVxuXG4uZHVlIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI0RBRURCRDtcbn1cblxuLmFic2VuY2Uge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjRCOUIyO1xuXHRmb250LXdlaWdodDogMzAwO1xufVxuXG4ub2ZmaWNlaG91cnNfZGFuaWVsIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzk2N0Q2OTtcbn0iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/danielepstein/Documents/GitHub/inf295-wi20/src/styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map