!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s="./src/components/PageCounter/PageCounter.ts")}({"./node_modules/@biotope/element/lib/esm/index.js":function(t,n,e){"use strict";function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t){var n="function"==typeof Map?new Map:void 0;return(i=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return a(t,arguments,u(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,t)})(t)}function a(t,n,e){return(a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&c(o,e.prototype),o}).apply(null,arguments)}function c(t,n){return(c=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(){var t=function(t,n){n||(n=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}(["\n  <style>","</style>\n"]);return l=function(){return t},t}function f(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function s(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.r(n),e.d(n,"createRaw",function(){return Zt}),e.d(n,"createRef",function(){return Kt}),e.d(n,"createRefCallback",function(){return Qt}),e.d(n,"createStyle",function(){return Ut}),e.d(n,"html",function(){return Wt}),e.d(n,"toArray",function(){return b}),e.d(n,"toBoolean",function(){return m}),e.d(n,"toFunction",function(){return _}),e.d(n,"toNumber",function(){return v}),e.d(n,"toObject",function(){return y}),e.d(n,"toString",function(){return x});var p=function(t){var n=t.replace(/-([a-z])/g,function(t,n){return n.toUpperCase()}).replace(/-/g,"");return(n[0]||"").toLowerCase()+n.slice(1)},h=function(t){return"string"==typeof t?t:t&&"function"==typeof t.toString?t.toString():"".concat(t)},g=function(t){try{return JSON.parse(t)}catch(t){return}},m=function(t){return"boolean"==typeof t?t:!!t&&"false"!==t||""===t},v=function(t){if("number"==typeof t)return t;var n=+t;if(n!=n){var e=parseFloat(t);n=e||0===e?e:n}return n},b=function(t){if(Array.isArray(t))return t;if("string"==typeof t){var n=g(t);return"object"!==d(n)?null:Object.keys(n).reduce(function(t,e){return[].concat(s(t),[n[e]])},[])}if(t)try{return Object.keys(t).reduce(function(n,e){return[].concat(s(n),[t[e]])},[])}catch(t){}return s(new Array(t))},y=function(t){if("object"===d(t)&&!Array.isArray(t))return t;if("string"==typeof t){var n=g(t);return"object"!==d(n)?null:Object.keys(n).reduce(function(t,e){return Object.assign(Object.assign({},t),f({},e,n[e]))},{})}if(t)try{return Object.keys(t).reduce(function(n,e){return Object.assign(Object.assign({},n),f({},e,t[e]))},{})}catch(t){}return s(new Array(t)).reduce(function(t,n,e){return Object.assign(Object.assign({},t),f({},e,n))},{})},_=function(t){if("function"==typeof t)return t;try{return new Function("return ".concat(t,";"))()}catch(t){return null}},x=function(t){return"string"==typeof t?t:t&&"function"==typeof t.toString?t.toString():null},w=function(t){return"string"==typeof t?t:t.name},j=function(t,n){var e=function(t){return t.componentName||(t.name||t.toString().match(/^function\s*([^\s(]+)/)[1]).replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}(t);if(t.componentName||(n&&console.warn('Static property "componentName" missing. Setting it to "'.concat(e,'"…')),t.componentName=e),function(t){switch(document.createElement(t).constructor){case HTMLElement:case HTMLUnknownElement:return!1;default:return!0}}(t.componentName))return n&&console.warn('Attempt to re-register component "'.concat(t.componentName,'". Skipping…')),!1;t.dependencies.forEach(function(t){return t.register(n)});var r=(t.attributes&&t.attributes.length?t.attributes:[]).filter(function(t){return t});t.observedAttributes=r.map(w),r.forEach(function(n){var e=w(n),r=p(e),o={get:function(){return this.props[r]},set:function(t){null===t||void 0===t||!1===t||"false"===t?this.removeAttribute(e):"string"==typeof t&&this.setAttribute(e,t),this.attributeChangedCallback(e,this.props[r],t)}};Object.defineProperty(t.prototype,e,o),Object.defineProperty(t.prototype,r,o)});var o=t.prototype.connectedCallback;t.prototype.connectedCallback=function(){for(o.bind(this)();this.__attributeChangedCallbackStack.length;)this.__attributeChangedCallbackStack.pop()();this.__created=!0,this.render(),this.emit("connected",void 0,!0)};var i=t.prototype.attributeChangedCallback;t.prototype.attributeChangedCallback=function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];var r=this,o=function(){i.bind(r).apply(void 0,n),r.emit("attributechanged",void 0,!0)};r.__created?o():r.__attributeChangedCallbackStack.unshift(o)};var a=t.prototype.disconnectedCallback;return t.prototype.disconnectedCallback=function(){a.bind(this)(),this.emit("disconnected",void 0,!0)},customElements.define(t.componentName,t),!0},k={};try{k.WeakMap=WeakMap}catch(t){k.WeakMap=function(t,n){var e=n.defineProperty,r=n.hasOwnProperty,o=i.prototype;return o.delete=function(t){return this.has(t)&&delete t[this._]},o.get=function(t){return this.has(t)?t[this._]:void 0},o.has=function(t){return r.call(t,this._)},o.set=function(t,n){return e(t,this._,{configurable:!0,value:n}),this},i;function i(n){e(this,"_",{value:"_@ungap/weakmap"+t++}),n&&n.forEach(a,this)}function a(t){this.set(t[0],t[1])}}(Math.random(),Object)}var O=k.WeakMap,C="object"!==("undefined"==typeof document?"undefined":d(document)),S=function(t){var n,e=(n=(document.defaultView.navigator||{}).userAgent,/(Firefox|Safari)\/(\d+)/.test(n)&&!/(Chrom[eium]+|Android)\/(\d+)/.test(n)),r=!("raw"in t)||t.propertyIsEnumerable("raw")||!Object.isFrozen(t.raw);if(e||r){var o={},i=function(t){for(var n=".",e=0;e<t.length;e++)n+=t[e].length+"."+t[e];return o[n]||(o[n]=t)};if(r)S=i;else{var a=new O;S=function(t){return a.get(t)||function(t,n){return a.set(t,n),n}(t,i(t))}}}else C=!0;return N(t)};function N(t){return C?t:S(t)}var A,E="-"+Math.random().toFixed(6)+"%",P=!1;try{"content"in(A=document.createElement("template"))&&(A.innerHTML='<p tabindex="'+E+'"></p>',A.content.childNodes[0].getAttribute("tabindex")==E)||(E="_dt: "+E.slice(1,-1)+";",P=!0)}catch(t){}var L="\x3c!--"+E+"--\x3e",R=8,T=1,z=3,M=/^(?:style|textarea)$/i,D=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;var F=" \\f\\n\\r\\t",$="[^"+F+"\\/>\"'=]+",B="["+F+"]+"+$,H="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",G="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+$.replace("\\/","")+"))?)",W=new RegExp(H+B+G+"+)(["+F+"]*/?>)","g"),I=new RegExp(H+B+G+"*)(["+F+"]*/>)","g"),U=new RegExp("("+B+"\\s*=\\s*)(['\"]?)"+L+"\\2","gi");function Z(t,n,e,r){return"<"+n+e.replace(U,q)+r}function q(t,n,e){return n+(e||'"')+E+(e||'"')}function J(t,n,e){return D.test(n)?t:"<"+n+e+"></"+n+">"}var V=function(t){var n="fragment",e="content"in o("template")?function(t){var n=o("template");return n.innerHTML=t,n.content}:function(t){var e=o(n),i=o("template"),a=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){var c=RegExp.$1;i.innerHTML="<table>"+t+"</table>",a=i.querySelectorAll(c)}else i.innerHTML=t,a=i.childNodes;return r(e,a),e};return function(t,i){return("svg"===i?function(t){var e=o(n),i=o("div");return i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+t+"</svg>",r(e,i.firstChild.childNodes),e}:e)(t)};function r(t,n){for(var e=n.length;e--;)t.appendChild(n[0])}function o(e){return e===n?t.createDocumentFragment():t.createElementNS("http://www.w3.org/1999/xhtml",e)}}(document),Y=[].indexOf,K=function(t,n,e,r,o,i){for(var a=("selectedIndex"in n),c=a;r<o;){var u=t(e[r],1);if(n.insertBefore(u,i),a&&c&&u.selected){c=!c;var l=n.selectedIndex;n.selectedIndex=l<0?r:Y.call(n.querySelectorAll("option"),u)}r++}},Q=function(t,n){return t==n},X=function(t){return t},tt=function(t,n,e,r,o,i,a){var c=i-o;if(c<1)return-1;for(;e-n>=c;){for(var u=n,l=o;u<e&&l<i&&a(t[u],r[l]);)u++,l++;if(l===i)return n;n=u+1}return-1},nt=function(t,n,e,r,o){return e<r?t(n[e],0):0<e?t(n[e-1],-0).nextSibling:o},et=function(t,n,e,r){for(;e<r;)it(t(n[e++],-1))},rt=function(t,n,e){for(var r=1,o=n;r<o;){var i=(r+o)/2>>>0;e<t[i]?o=i:r=i+1}return r},ot=function(t,n,e,r,o,i,a,c,u,l,f,s,d){!function(t,n,e,r,o,i,a,c,u){for(var l=[],f=t.length,s=a,d=0;d<f;)switch(t[d++]){case 0:o++,s++;break;case 1:l.push(r[o]),K(n,e,r,o++,o,s<c?n(i[s],0):u);break;case-1:s++}for(d=0;d<f;)switch(t[d++]){case 0:a++;break;case-1:-1<l.indexOf(i[a])?a++:et(n,i,a++,a)}}(function(t,n,e,r,o,i,a){var c,u,l,f,s,d,p,h=e+i,g=[];t:for(c=0;c<=h;c++){if(c>50)return null;for(p=c-1,s=c?g[c-1]:[0,0],d=g[c]=[],u=-c;u<=c;u+=2){for(l=(f=u===-c||u!==c&&s[p+u-1]<s[p+u+1]?s[p+u+1]:s[p+u-1]+1)-u;f<i&&l<e&&a(r[o+f],t[n+l]);)f++,l++;if(f===i&&l===e)break t;d[c+u]=f}}var m=Array(c/2+h/2),v=m.length-1;for(c=g.length-1;c>=0;c--){for(;f>0&&l>0&&a(r[o+f-1],t[n+l-1]);)m[v--]=0,f--,l--;if(!c)break;p=c-1,s=c?g[c-1]:[0,0],(u=f-l)==-c||u!==c&&s[p+u-1]<s[p+u+1]?(l--,m[v--]=1):(f--,m[v--]=-1)}return m}(e,r,i,a,c,l,s)||function(t,n,e,r,o,i,a,c){var u=0,l=r<c?r:c,f=Array(l++),s=Array(l);s[0]=-1;for(var d=1;d<l;d++)s[d]=a;for(var p=o.slice(i,a),h=n;h<e;h++){var g=p.indexOf(t[h]);if(-1<g){var m=g+i;-1<(u=rt(s,l,m))&&(s[u]=m,f[u]={newi:h,oldi:m,prev:f[u-1]})}}for(u=--l,--a;s[u]>a;)--u;l=c+r-u;var v=Array(l),b=f[u];for(--e;b;){for(var y=b,_=y.newi,x=y.oldi;e>_;)v[--l]=1,--e;for(;a>x;)v[--l]=-1,--a;v[--l]=0,--e,--a,b=b.prev}for(;e>=n;)v[--l]=1,--e;for(;a>=i;)v[--l]=-1,--a;return v}(e,r,o,i,a,c,u,l),t,n,e,r,a,c,f,d)},it=function(t){return(t.remove||function(){var t=this.parentNode;t&&t.removeChild(this)}).call(t)};var at=function(t,n,e,r){r||(r={});for(var o=r.compare||Q,i=r.node||X,a=null==r.before?null:i(r.before,0),c=n.length,u=c,l=0,f=e.length,s=0;l<u&&s<f&&o(n[l],e[s]);)l++,s++;for(;l<u&&s<f&&o(n[u-1],e[f-1]);)u--,f--;var d=l===u,p=s===f;if(d&&p)return e;if(d&&s<f)return K(i,t,e,s,f,nt(i,n,l,c,a)),e;if(p&&l<u)return et(i,n,l,u),e;var h=u-l,g=f-s,m=-1;if(h<g){if(-1<(m=tt(e,s,f,n,l,u,o)))return K(i,t,e,s,m,i(n[l],0)),K(i,t,e,m+h,f,nt(i,n,u,c,a)),e}else if(g<h&&-1<(m=tt(n,l,u,e,s,f,o)))return et(i,n,l,m),et(i,n,m+g,u),e;return h<2||g<2?(K(i,t,e,s,f,i(n[l],0)),et(i,n,l,u),e):h===g&&function(t,n,e,r,o,i){for(;r<o&&i(e[r],t[n-1]);)r++,n--;return 0===n}(e,f,n,l,u,o)?(K(i,t,e,s,f,nt(i,n,u,c,a)),e):(ot(i,t,e,s,f,g,n,l,u,h,c,o,a),e)},ct=function(t,n,e,r,o){var i="importNode"in t,a=t.createDocumentFragment();return a.appendChild(t.createTextNode("g")),a.appendChild(t.createTextNode("")),(i?t.importNode(a,!0):a.cloneNode(!0)).childNodes.length<2?function t(n,e){for(var r=n.cloneNode(),o=n.childNodes||[],i=o.length,a=0;e&&a<i;a++)r.appendChild(t(o[a],e));return r}:i?t.importNode:function(t,n){return t.cloneNode(!!n)}}(document),ut="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},lt=P?function(t,n){var e=n.join(" ");return n.slice.call(t,0).sort(function(t,n){return e.indexOf(t.name)<=e.indexOf(n.name)?-1:1})}:function(t,n){return n.slice.call(t,0)};function ft(t,n){for(var e=n.length,r=0;r<e;)t=t.childNodes[n[r++]];return t}function st(t,n,e,r){for(var o=t.attributes,i=[],a=[],c=lt(o,e),u=c.length,l=0;l<u;){var f,s=c[l++],d=s.value===E;if(d||1<(f=s.value.split(L)).length){var p=s.name;if(i.indexOf(p)<0){i.push(p);var h=e.shift().replace(d?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+p+")\\s*=\\s*('|\")[\\S\\s]*","i"),"$1"),g=o[h]||o[h.toLowerCase()];if(d)n.push(pt(g,r,h,null));else{for(var m=f.length-2;m--;)e.shift();n.push(pt(g,r,h,f))}}a.push(s)}}l=0;for(var v=(0<(u=a.length)&&P&&!("ownerSVGElement"in t));l<u;){var b=a[l++];v&&(b.value=""),t.removeAttribute(b.name)}var y=t.nodeName;if(/^script$/i.test(y)){var _=document.createElement(y);for(u=o.length,l=0;l<u;)_.setAttributeNode(o[l++].cloneNode(!0));_.textContent=t.textContent,t.parentNode.replaceChild(_,t)}}function dt(t,n){return{type:"any",node:t,path:n}}function pt(t,n,e,r){return{type:"attr",node:t,path:n,name:e,sparse:r}}function ht(t,n){return{type:"text",node:t,path:n}}var gt=new O;function mt(t,n){var e=(t.convert||function(t){return t.join(L).replace(I,J).replace(W,Z)})(n),r=t.transform;r&&(e=r(e));var o=V(e,t.type);yt(o);var i=[];!function t(n,e,r,o){for(var i=n.childNodes,a=i.length,c=0;c<a;){var u=i[c];switch(u.nodeType){case T:var l=o.concat(c);st(u,e,r,l),t(u,e,r,l);break;case R:var f=u.textContent;if(f===E)r.shift(),e.push(M.test(n.nodeName)?ht(n,o):dt(u,o.concat(c)));else switch(f.slice(0,2)){case"/*":if("*/"!==f.slice(-2))break;case"👻":n.removeChild(u),c--,a--}break;case z:M.test(n.nodeName)&&ut.call(u.textContent)===L&&(r.shift(),e.push(ht(n,o)))}c++}}(o,i,n.slice(0),[]);var a={content:o,updates:function(e){for(var r=[],o=i.length,a=0,c=0;a<o;){var u=i[a++],l=ft(e,u.path);switch(u.type){case"any":r.push({fn:t.any(l,[]),sparse:!1});break;case"attr":var f=u.sparse,s=t.attribute(l,u.name,u.node);null===f?r.push({fn:s,sparse:!1}):(c+=f.length-2,r.push({fn:s,sparse:!0,values:f}));break;case"text":r.push({fn:t.text(l),sparse:!1}),l.textContent=""}}return o+=c,function(){var t=arguments.length;if(o!==t-1)throw new Error(t-1+" values instead of "+o+"\n"+n.join("${value}"));for(var i=1,a=1;i<t;){var c=r[i-a];if(c.sparse){var u=c.values,l=u[0],f=1,s=u.length;for(a+=s-2;f<s;)l+=arguments[i++]+u[f++];c.fn(l)}else c.fn(arguments[i++])}return e}}};return gt.set(n,a),a}var vt=[];function bt(t){var n=vt,e=yt;return function(r){return n!==r&&(e=function(t,n){var e=gt.get(n)||mt(t,n);return e.updates(ct.call(document,e.content,!0))}(t,n=r)),e.apply(null,arguments)}}function yt(t){for(var n=t.childNodes,e=n.length;e--;){var r=n[e];1!==r.nodeType&&0===ut.call(r.textContent).length&&t.removeChild(r)}}var _t=function(){var t=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,n=/([^A-Z])([A-Z]+)/g;return function(t,n){return"ownerSVGElement"in t?function(t,n){var e;n?e=n.cloneNode(!0):(t.setAttribute("style","--hyper:style;"),e=t.getAttributeNode("style"));return e.value="",t.setAttributeNode(e),r(e,!0)}(t,n):r(t.style,!1)};function e(t,n,e){return n+"-"+e.toLowerCase()}function r(r,o){var i,a;return function(c){var u,l,f,s;switch(d(c)){case"object":if(c){if("object"===i){if(!o&&a!==c)for(l in a)l in c||(r[l]="")}else o?r.value="":r.cssText="";for(l in u=o?{}:r,c)f="number"!=typeof(s=c[l])||t.test(l)?s:s+"px",!o&&/^--/.test(l)?u.setProperty(l,f):u[l]=f;i="object",o?r.value=function(t){var r,o=[];for(r in t)o.push(r.replace(n,e),":",t[r],";");return o.join("")}(a=u):a=c;break}default:a!=c&&(i="string",a=c,o?r.value=c||"":r.cssText=c||"")}}}}(),xt=function(t,n){return(n=e.prototype).ELEMENT_NODE=1,n.nodeType=111,n.remove=function(t){var n=this.childNodes,e=this.firstChild,r=this.lastChild;if(this._=null,t&&2===n.length)r.parentNode.removeChild(r);else{var o=this.ownerDocument.createRange();o.setStartBefore(t?n[1]:e),o.setEndAfter(r),o.deleteContents()}return e},n.valueOf=function(t){var n=this._,e=null==n;if(e&&(n=this._=this.ownerDocument.createDocumentFragment()),e||t)for(var r=this.childNodes,o=0,i=r.length;o<i;o++)n.appendChild(r[o]);return n},e;function e(n){var e=this.childNodes=t.call(n,0);this.firstChild=e[0],this.lastChild=e[e.length-1],this.ownerDocument=e[0].ownerDocument,this._=null}}([].slice),wt=Array.isArray,jt=Object.create,kt=Object.freeze,Ot=(Object.keys,xt.prototype.nodeType),Ct=function(t,n){return t.nodeType===Ot?1/n<0?n?t.remove(!0):t.lastChild:n?t.valueOf(!0):t.firstChild:t},St=function(t,n){var e,r=!1,o=n.cloneNode(!0);return function(n){e!==n&&(e=n,o.value!==n&&(null==n?(r&&(r=!1,t.removeAttributeNode(o)),o.value=n):(o.value=n,r||(r=!0,t.setAttributeNode(o)))))}},Nt=function(t,n){var e;return function(r){e!==r&&(e=r,t[n]!==r&&(null==r?(t[n]="",t.removeAttribute(n)):t[n]=r))}},At=/^(?:form|list)$/i,Et=[].slice;function Pt(t){return this.type=t,bt(this)}function Lt(t){return t(this)}Pt.prototype={attribute:function(t,n,e){var r="svg"===this.type;switch(n){case"class":if(r)return St(t,e);n="className";case"data":case"props":return Nt(t,n);case"style":return _t(t,e,r);case"ref":return function(t){return function(n){n.current=t}}(t);default:return"."===n.slice(0,1)?function(t,n,e){return e?function(e){try{t[n]=e}catch(r){t.setAttribute(n,e)}}:function(e){t[n]=e}}(t,n.slice(1),r):"on"===n.slice(0,2)?function(t,n){var e,r=n.slice(2);return n.toLowerCase()in t&&(r=r.toLowerCase()),function(n){e!==n&&(e&&t.removeEventListener(r,e,!1),e=n,n&&t.addEventListener(r,n,!1))}}(t,n):n in t&&!r&&!At.test(n)?Nt(t,n):St(t,e)}},any:function(t,n){var e,r={node:Ct,before:t},o=this.type,i=!1;return function a(c){switch(d(c)){case"string":case"number":case"boolean":i?e!==c&&(e=c,n[0].textContent=c):(i=!0,e=c,n=at(t.parentNode,n,[function(t,n){return t.ownerDocument.createTextNode(n)}(t,c)],r));break;case"function":a(c(t));break;case"object":case"undefined":if(null==c){i=!1,n=at(t.parentNode,n,[],r);break}default:if(i=!1,e=c,wt(c))if(0===c.length)n.length&&(n=at(t.parentNode,n,[],r));else switch(d(c[0])){case"string":case"number":case"boolean":a(String(c));break;case"function":a(c.map(Lt,t));break;case"object":wt(c[0])&&(c=c.concat.apply([],c));default:n=at(t.parentNode,n,c,r)}else!function(t){return"ELEMENT_NODE"in t}(c)?"text"in c?a(String(c.text)):"any"in c?a(c.any):"html"in c?n=at(t.parentNode,n,Et.call(V([].concat(c.html).join(""),o).childNodes),r):"length"in c&&a(Et.call(c)):n=at(t.parentNode,n,11===c.nodeType?Et.call(c.childNodes):[c],r)}}},text:function(t){var n;return function e(r){if(n!==r){n=r;var o=d(r);"object"===o&&r?"text"in r?e(String(r.text)):"any"in r?e(r.any):"html"in r?e([].concat(r.html).join("")):"length"in r&&e(Et.call(r).join("")):"function"===o?e(r(t)):t.textContent=null==r?"":r}}}};var Rt=new O,Tt=function(t,n){var e=new O;return r.for=function(t,o){var i,a=e.get(t)||function(t){var n=jt(null);return e.set(t,n),n}(t);return a[o]||(a[o]=(i={sub:[],stack:[],wire:null},function(){return zt(n,i,r.apply(null,arguments))}))},r.node=function(){return zt(n,{sub:[],stack:[],wire:null},r.apply(null,arguments)).valueOf(!0)},r;function r(){return new Bt(t,function(t){for(var n=arguments.length,e=[N(t)],r=1;r<n;)e.push(arguments[r++]);return e}.apply(null,arguments))}},zt=function(t,n,e){var r=n.sub,o=n.stack,i={a:0,aLength:r.length,i:0,iLength:o.length},a=Dt(t,n,e,i),c=i.a,u=i.i,l=i.iLength;return c<i.aLength&&r.splice(c),u<l&&o.splice(u),a},Mt=function(t){var n={sub:[],stack:[],wire:null};return Rt.set(t,n),n},Dt=function(t,n,e,r){var o=n.stack,i=r.i,a=r.iLength,c=e.type,u=e.args,l=i===a;l&&(r.iLength=o.push({type:c,id:u[0],tag:null,wire:null})),r.i++,Ft(t,n,u,r);var f=o[i];return l||f.id!==u[0]||f.type!==c?(f.type=c,f.id=u[0],f.tag=new t(c),f.wire=$t(f.tag.apply(null,u))):f.tag.apply(null,u),f.wire},Ft=function(t,n,e,r){for(var o=1,i=e.length;o<i;o++){var a=e[o];if("object"===d(a)&&a)if(a instanceof Bt)e[o]=Dt(t,n,a,r);else if(wt(a))for(var c=0,u=a.length;c<u;c++){var l=a[c];if("object"===d(l)&&l&&l instanceof Bt){var f=n.sub,s=r.a;s===r.aLength&&(r.aLength=f.push({sub:[],stack:[],wire:null})),r.a++,a[c]=zt(t,f[s],l)}}}},$t=function(t){var n=t.childNodes,e=n.length;return 1===e?n[0]:e?new xt(n):t};function Bt(t,n){this.type=t,this.args=n}kt(Bt);var Ht=function(t){return{html:Tt("html",t),svg:Tt("svg",t),render:function(n,e){var r="function"==typeof e?e():e,o=Rt.get(n)||Mt(n),i=r instanceof Bt?zt(t,o,r):r;return i!==o.wire&&(o.wire=i,n.textContent="",n.appendChild(i.valueOf(!0))),n}}}(Pt),Gt=Ht.render,Wt=Ht.html,It=(Ht.svg,function(t,n,e){var r=Gt.bind(t,t.shadowRoot||t,function(){var t=n();return setTimeout(e),t});return function(){return t.__created?r():null}}),Ut=function(t){return Wt(l(),h(t))},Zt=function(t){return Wt((n=h(t),Object.freeze(Object.defineProperties([n],{raw:{value:Object.freeze([n])}}))));var n},qt=function(t,n,e,r){var o=t.constructor.attributes.filter(function(t){return w(t)===n})[0];if(o){var i=p(n),a=function(t,n){if("string"==typeof t)return n;if("function"==typeof t.converter)return t.converter(n);switch(t.type||"string"){case"boolean":return m(n);case"number":return v(n);case"array":return b(n);case"object":return y(n);case"function":return _(n);case"string":default:return x(n)}}(o,r);a!==t.props[i]&&(t.__currentProps=Object.assign(Object.assign({},t.props),f({},i,a)),t.render())}},Jt=function(t){t.__ready||(t.__ready=!0,t.ready(),t.emit("ready",void 0,!0))},Vt=function(t){t.rendered(),function t(n,e){e.length&&e.some(function(t){return!t.__rendered})?setTimeout(function(){return t(n,e)}):(n.__rendered=!0,n.emit("rendered",void 0,!0))}(t,s((t.shadowRoot||t).querySelectorAll("*")).filter(function(t){return"boolean"==typeof t.__rendered}))},Yt=function(t,n){return t.__rendered=!1,n()},Kt=function(){return{current:null}},Qt=function(t){return{get current(){return t()}}},Xt=function(t){var n,e;function i(){var n,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];(n=t.call(this)||this).__created=!1,n.__rendered=!1,n.__ready=!1,n.__attributeChangedCallbackStack=[],n.createStyle=Ut,n.createRaw=Zt,e&&n.attachShadow({mode:"open"});var r=n.render.bind(o(n));return n.render=It(o(n),function(){return Yt(o(n),r)},function(){Vt(o(n)),Jt(o(n))}),n}e=t,(n=i).prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e,i.register=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return j(this,t)};var a,c,u,l=i.prototype;return l.connectedCallback=function(){},l.disconnectedCallback=function(){},l.attributeChangedCallback=function(t,n,e){return qt(this,t,0,e)},l.render=function(){return null},l.rendered=function(){},l.ready=function(){},l.addEventListener=function(n,e,r){"ready"===n&&this.__ready?e():t.prototype.addEventListener.call(this,n,e,r)},l.emit=function(t,n){return function(t,n,e,r){if(!n)throw Error("No event name defined. Please provide a name.");return t.dispatchEvent(new CustomEvent(n,Object.assign({bubbles:!r},void 0!==e&&{detail:e})))}(this,t,n,arguments.length>2&&void 0!==arguments[2]&&arguments[2])},l.setState=function(t){this.__currentState=Object.assign(Object.assign({},this.state),"function"==typeof t?t.call(this,this.state):t),this.render()},a=i,(c=[{key:"props",get:function(){return this.__currentProps||(this.__currentProps=this.defaultProps||{}),this.__currentProps}},{key:"state",get:function(){return this.__currentState||(this.__currentState=this.defaultState||{}),this.__currentState}},{key:"html",get:function(){return this.__html||(this.__html=Wt),this.__html}}])&&r(a.prototype,c),u&&r(a,u),i}(i(HTMLElement));Xt.dependencies=[],Xt.attributes=[],n.default=Xt},"./node_modules/css-loader/lib/css-base.js":function(t,n){t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var e=function(t,n){var e=t[1]||"",r=t[3];if(!r)return e;if(n&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[e].concat(i).concat([o]).join("\n")}var a;return[e].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),n.push(a))}},n}},"./src/components/PageCounter/PageCounter.ts":function(t,n,e){"use strict";var r,o=this&&this.__extends||(r=function(t,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)},function(t,n){function e(){this.constructor=t}r(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)};Object.defineProperty(n,"__esModule",{value:!0});var a=e("./node_modules/@biotope/element/lib/esm/index.js"),c=e("./src/components/PageCounter/template.ts"),u=e("./src/resources/js/debounce.js"),l=e("./src/resources/ts/converters.ts"),f=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.methods={},n.refs={counterRef:a.createRef(),counterContainerRef:a.createRef()},n}return o(n,t),n.prototype.rendered=function(){var t=this,n=document.querySelector("section").getBoundingClientRect().height,e=this.refs.counterRef.current,r=this.refs.counterContainerRef.current,o=r.getBoundingClientRect().top,i=r.firstElementChild,a=r.lastElementChild,c=n-o;window.addEventListener("scroll",u.debounce(function(){window.scrollY>=c?(t.props.switchSides&&e.classList.add("counter--left"),i.firstElementChild.classList.remove("counter__link--active"),a.firstElementChild.classList.add("counter__link--active")):(t.props.switchSides&&e.classList.remove("counter--left"),a.firstElementChild.classList.remove("counter__link--active"),i.firstElementChild.classList.add("counter__link--active"))},300))},Object.defineProperty(n.prototype,"defaultState",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"defaultProps",{get:function(){return{switchSides:!1,firstAnchor:"#",secondAnchor:null}},enumerable:!0,configurable:!0}),n.prototype.render=function(){return c.default(this.html,i({},this.props,this.state,this.methods),this.refs,this.createStyle)},n.componentName="page-counter",n.attributes=[{name:"switch-sides",converter:l.toBoolean},"first-anchor","second-anchor"],n}(a.default);n.default=f},"./src/components/PageCounter/styles.scss":function(t,n,e){(t.exports=e("./node_modules/css-loader/lib/css-base.js")(!1)).push([t.i,'/* Global heading styles */\n* {\n  box-sizing: border-box; }\n\nh1, h2, h3, h4, h5 {\n  font-family: "Gilroy-ExtraBold";\n  margin: 0;\n  padding: 0; }\n\nh1 {\n  font-size: 40px;\n  line-height: 1.125; }\n\nh2 {\n  font-size: 22px;\n  line-height: 1.27273; }\n\nh3 {\n  font-size: 20px;\n  line-height: 1.35; }\n\nh4 {\n  font-size: 17px;\n  line-height: 1.47059; }\n\n/* Global paragraph styles */\np {\n  font-size: 2rem; }\n\n/* Global link styles */\na {\n  font-size: 2rem; }\n\n/* Global sup element */\nsup {\n  font-size: 75%; }\n\n/* Screen reader only */\n.sr-only {\n  border: 0 none;\n  clip: rect(0px, 0px, 0px, 0px);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n/* clearfix */\n.row {\n  margin-top: -60px;\n  margin-left: -15px;\n  margin-right: -15px;\n  max-width: none; }\n  @media (min-width: 768px) {\n    .row {\n      margin-top: -60px; } }\n  @media (min-width: 1200px) {\n    .row {\n      margin-top: -80px; } }\n  .row:after {\n    content: " ";\n    display: block;\n    clear: both; }\n  .row + .row,\n  .row .row {\n    margin-top: 0; }\n  .row--reducedWidth {\n    margin-left: calc(6.25% - 15px);\n    margin-right: calc(6.75% - 15px); }\n    @media (min-width: 768px) {\n      .row--reducedWidth {\n        margin-left: calc(1.96% - 15px);\n        margin-right: calc(4.3% - 15px); } }\n    @media (min-width: 1520px) {\n      .row--reducedWidth {\n        max-width: 1470px;\n        margin-left: auto;\n        margin-right: auto; } }\n\n.col {\n  width: 100%;\n  float: left;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-top: 60px; }\n  @media (min-width: 768px) {\n    .col {\n      margin-top: 60px; } }\n  @media (min-width: 1200px) {\n    .col {\n      margin-top: 80px; } }\n\n@media (min-width: 768px) {\n  .col--medium-1 {\n    width: 8.33333%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-1 {\n    margin-left: 8.33333%; }\n  .col--medium-2 {\n    width: 16.66667%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-2 {\n    margin-left: 16.66667%; }\n  .col--medium-3 {\n    width: 25%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-3 {\n    margin-left: 25%; }\n  .col--medium-4 {\n    width: 33.33333%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-4 {\n    margin-left: 33.33333%; }\n  .col--medium-5 {\n    width: 41.66667%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-5 {\n    margin-left: 41.66667%; }\n  .col--medium-6 {\n    width: 50%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-6 {\n    margin-left: 50%; }\n  .col--medium-7 {\n    width: 58.33333%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-7 {\n    margin-left: 58.33333%; }\n  .col--medium-8 {\n    width: 66.66667%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-8 {\n    margin-left: 66.66667%; }\n  .col--medium-9 {\n    width: 75%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-9 {\n    margin-left: 75%; }\n  .col--medium-10 {\n    width: 83.33333%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-10 {\n    margin-left: 83.33333%; }\n  .col--medium-11 {\n    width: 91.66667%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-11 {\n    margin-left: 91.66667%; }\n  .col--medium-12 {\n    width: 100%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-12 {\n    margin-left: 100%; }\n  .hidden-col--medium {\n    display: none; } }\n\n@media (min-width: 992px) {\n  .col--large-1 {\n    width: 8.33333%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-1 {\n    margin-left: 8.33333%; }\n  .col--large-2 {\n    width: 16.66667%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-2 {\n    margin-left: 16.66667%; }\n  .col--large-3 {\n    width: 25%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-3 {\n    margin-left: 25%; }\n  .col--large-4 {\n    width: 33.33333%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-4 {\n    margin-left: 33.33333%; }\n  .col--large-5 {\n    width: 41.66667%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-5 {\n    margin-left: 41.66667%; }\n  .col--large-6 {\n    width: 50%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-6 {\n    margin-left: 50%; }\n  .col--large-7 {\n    width: 58.33333%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-7 {\n    margin-left: 58.33333%; }\n  .col--large-8 {\n    width: 66.66667%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-8 {\n    margin-left: 66.66667%; }\n  .col--large-9 {\n    width: 75%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-9 {\n    margin-left: 75%; }\n  .col--large-10 {\n    width: 83.33333%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-10 {\n    margin-left: 83.33333%; }\n  .col--large-11 {\n    width: 91.66667%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-11 {\n    margin-left: 91.66667%; }\n  .col--large-12 {\n    width: 100%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-12 {\n    margin-left: 100%; }\n  .hidden-col--large {\n    display: none; } }\n\n/* clearfix */\npage-counter .counter {\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  top: 0;\n  bottom: 0;\n  right: 6%;\n  transition: right 0.3s cubic-bezier(1, 0.5, 0, 1);\n  z-index: 12; }\n  page-counter .counter--left {\n    right: calc(94% - 2rem);\n    transition: right 0.3s cubic-bezier(1, 0.5, 0, 1); }\n  page-counter .counter__container {\n    list-style: none;\n    margin-block-start: 0;\n    margin-block-end: 0;\n    padding-inline-start: 0; }\n  page-counter .counter__item {\n    line-height: 1;\n    padding: 2rem 0; }\n    page-counter .counter__item:first-child .counter__link::after {\n      position: absolute;\n      bottom: -1.9rem;\n      left: 0;\n      height: 0.1rem;\n      width: 100%;\n      margin-top: 2rem;\n      content: "";\n      background-color: #f5f5eb; }\n  page-counter .counter__link {\n    position: relative;\n    color: #f5f5eb;\n    text-decoration: none; }\n    page-counter .counter__link--active {\n      color: #de2826;\n      transition: all 0.3s cubic-bezier(1, 0.5, 0, 1); }\n\n:host .counter {\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  top: 0;\n  bottom: 0;\n  right: 6%;\n  transition: right 0.3s cubic-bezier(1, 0.5, 0, 1);\n  z-index: 12; }\n  :host .counter--left {\n    right: calc(94% - 2rem);\n    transition: right 0.3s cubic-bezier(1, 0.5, 0, 1); }\n  :host .counter__container {\n    list-style: none;\n    margin-block-start: 0;\n    margin-block-end: 0;\n    padding-inline-start: 0; }\n  :host .counter__item {\n    line-height: 1;\n    padding: 2rem 0; }\n    :host .counter__item:first-child .counter__link::after {\n      position: absolute;\n      bottom: -1.9rem;\n      left: 0;\n      height: 0.1rem;\n      width: 100%;\n      margin-top: 2rem;\n      content: "";\n      background-color: #f5f5eb; }\n  :host .counter__link {\n    position: relative;\n    color: #f5f5eb;\n    text-decoration: none; }\n    :host .counter__link--active {\n      color: #de2826;\n      transition: all 0.3s cubic-bezier(1, 0.5, 0, 1); }\n',""])},"./src/components/PageCounter/template.ts":function(t,n,e){"use strict";var r=this&&this.__makeTemplateObject||function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t};Object.defineProperty(n,"__esModule",{value:!0});var o,i=e("./src/components/PageCounter/styles.scss");n.default=function(t,n,e,a){return t(o||(o=r(["\n\t\t",'\n\t\t<nav class="counter" ref=','>\n\t\t\t<ul class="counter__container" ref=','>\n\t\t\t\t<li class="counter__item"> \n\t\t\t\t\t<a class="counter__link counter__link--active" href=','>01</a>\n\t\t\t\t</li>\n\t\t\t\t<li class="counter__item">\n\t\t\t\t\t<a class="counter__link" href=',">02</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</nav>\n    "],["\n\t\t",'\n\t\t<nav class="counter" ref=','>\n\t\t\t<ul class="counter__container" ref=','>\n\t\t\t\t<li class="counter__item"> \n\t\t\t\t\t<a class="counter__link counter__link--active" href=','>01</a>\n\t\t\t\t</li>\n\t\t\t\t<li class="counter__item">\n\t\t\t\t\t<a class="counter__link" href=',">02</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</nav>\n    "])),a(i),e.counterRef,e.counterContainerRef,n.firstAnchor,n.secondAnchor)}},"./src/resources/js/debounce.js":function(t,n,e){"use strict";e.r(n),e.d(n,"debounce",function(){return r});var r=function(t,n){var e;return function(){var r=this,o=arguments;clearTimeout(e),e=setTimeout(function(){return t.apply(r,o)},n)}}},"./src/resources/ts/converters.ts":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.toBoolean=function(t){return(t||""===t)&&"false"!==t},n.toObject=function(t){try{return JSON.parse(t||"")}catch(t){return null}},n.toNumber=function(t){var n=+t;if(n!=n){var e=parseFloat(t);n=e||0===e?e:n}return n}}});
//# sourceMappingURL=PageCounter.js.map
