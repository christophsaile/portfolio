!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s="./src/resources/ts/helper.ts")}({"./src/resources/ts/helper.ts":function(e,t){biotope.configuration.set("biotope.iOS",navigator.userAgent.match(/(iPad|iPhone|iPod)/g)&&!navigator.userAgent.match(/(Windows Phone)/g)),biotope.configuration.set("biotope.iOS7",/ os 7_/.test(navigator.userAgent.toLowerCase())),biotope.configuration.set("biotope.safari",navigator.userAgent.search("Safari")>=0&&navigator.userAgent.search("Chrome")<0),biotope.configuration.set("biotope.IEMobile",navigator.userAgent.match(/iemobile/i)),window.navigator.userAgent.indexOf("MSIE ")>0||navigator.userAgent.match(/Trident.*rv\:11\./)?(biotope.configuration.set("biotope.IE",!0),document.querySelector("html").classList.add("ie")):biotope.configuration.set("biotope.IE",!1),biotope.configuration.set("biotope.touch",Modernizr.touchevents||"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}});
//# sourceMappingURL=helper.js.map