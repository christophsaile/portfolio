!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s="./src/components/NewAccordion/NewAccordion.ts")}({"./node_modules/@biotope/element/lib/esm/index.js":function(n,e,t){"use strict";function r(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function o(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function i(n){var e="function"==typeof Map?new Map:void 0;return(i=function(n){if(null===n||(t=n,-1===Function.toString.call(t).indexOf("[native code]")))return n;var t;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(n))return e.get(n);e.set(n,r)}function r(){return a(n,arguments,u(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,n)})(n)}function a(n,e,t){return(a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(n){return!1}}()?Reflect.construct:function(n,e,t){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(n,r));return t&&c(o,t.prototype),o}).apply(null,arguments)}function c(n,e){return(c=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function u(n){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function l(){var n=function(n,e){e||(e=n.slice(0));return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n  <style>","</style>\n"]);return l=function(){return n},n}function f(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n){return function(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(n){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}t.r(e),t.d(e,"createRaw",function(){return Bn}),t.d(e,"createRef",function(){return Xn}),t.d(e,"createRefCallback",function(){return Yn}),t.d(e,"createStyle",function(){return Zn}),t.d(e,"html",function(){return In}),t.d(e,"toArray",function(){return v}),t.d(e,"toBoolean",function(){return m}),t.d(e,"toFunction",function(){return w}),t.d(e,"toNumber",function(){return b}),t.d(e,"toObject",function(){return y}),t.d(e,"toString",function(){return _});var p=function(n){var e=n.replace(/-([a-z])/g,function(n,e){return e.toUpperCase()}).replace(/-/g,"");return(e[0]||"").toLowerCase()+e.slice(1)},h=function(n){return"string"==typeof n?n:n&&"function"==typeof n.toString?n.toString():"".concat(n)},g=function(n){try{return JSON.parse(n)}catch(n){return}},m=function(n){return"boolean"==typeof n?n:!!n&&"false"!==n||""===n},b=function(n){if("number"==typeof n)return n;var e=+n;if(e!=e){var t=parseFloat(n);e=t||0===t?t:e}return e},v=function(n){if(Array.isArray(n))return n;if("string"==typeof n){var e=g(n);return"object"!==d(e)?null:Object.keys(e).reduce(function(n,t){return[].concat(s(n),[e[t]])},[])}if(n)try{return Object.keys(n).reduce(function(e,t){return[].concat(s(e),[n[t]])},[])}catch(n){}return s(new Array(n))},y=function(n){if("object"===d(n)&&!Array.isArray(n))return n;if("string"==typeof n){var e=g(n);return"object"!==d(e)?null:Object.keys(e).reduce(function(n,t){return Object.assign(Object.assign({},n),f({},t,e[t]))},{})}if(n)try{return Object.keys(n).reduce(function(e,t){return Object.assign(Object.assign({},e),f({},t,n[t]))},{})}catch(n){}return s(new Array(n)).reduce(function(n,e,t){return Object.assign(Object.assign({},n),f({},t,e))},{})},w=function(n){if("function"==typeof n)return n;try{return new Function("return ".concat(n,";"))()}catch(n){return null}},_=function(n){return"string"==typeof n?n:n&&"function"==typeof n.toString?n.toString():null},x=function(n){return"string"==typeof n?n:n.name},j=function(n,e){var t=function(n){return n.componentName||(n.name||n.toString().match(/^function\s*([^\s(]+)/)[1]).replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}(n);if(n.componentName||(e&&console.warn('Static property "componentName" missing. Setting it to "'.concat(t,'"…')),n.componentName=t),function(n){switch(document.createElement(n).constructor){case HTMLElement:case HTMLUnknownElement:return!1;default:return!0}}(n.componentName))return e&&console.warn('Attempt to re-register component "'.concat(n.componentName,'". Skipping…')),!1;n.dependencies.forEach(function(n){return n.register(e)});var r=(n.attributes&&n.attributes.length?n.attributes:[]).filter(function(n){return n});n.observedAttributes=r.map(x),r.forEach(function(e){var t=x(e),r=p(t),o={get:function(){return this.props[r]},set:function(n){null===n||void 0===n||!1===n||"false"===n?this.removeAttribute(t):"string"==typeof n&&this.setAttribute(t,n),this.attributeChangedCallback(t,this.props[r],n)}};Object.defineProperty(n.prototype,t,o),Object.defineProperty(n.prototype,r,o)});var o=n.prototype.connectedCallback;n.prototype.connectedCallback=function(){for(o.bind(this)();this.__attributeChangedCallbackStack.length;)this.__attributeChangedCallbackStack.pop()();this.__created=!0,this.render(),this.emit("connected",void 0,!0)};var i=n.prototype.attributeChangedCallback;n.prototype.attributeChangedCallback=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];var r=this,o=function(){i.bind(r).apply(void 0,e),r.emit("attributechanged",void 0,!0)};r.__created?o():r.__attributeChangedCallbackStack.unshift(o)};var a=n.prototype.disconnectedCallback;return n.prototype.disconnectedCallback=function(){a.bind(this)(),this.emit("disconnected",void 0,!0)},customElements.define(n.componentName,n),!0},O={};try{O.WeakMap=WeakMap}catch(n){O.WeakMap=function(n,e){var t=e.defineProperty,r=e.hasOwnProperty,o=i.prototype;return o.delete=function(n){return this.has(n)&&delete n[this._]},o.get=function(n){return this.has(n)?n[this._]:void 0},o.has=function(n){return r.call(n,this._)},o.set=function(n,e){return t(n,this._,{configurable:!0,value:e}),this},i;function i(e){t(this,"_",{value:"_@ungap/weakmap"+n++}),e&&e.forEach(a,this)}function a(n){this.set(n[0],n[1])}}(Math.random(),Object)}var k=O.WeakMap,N="object"!==("undefined"==typeof document?"undefined":d(document)),S=function(n){var e,t=(e=(document.defaultView.navigator||{}).userAgent,/(Firefox|Safari)\/(\d+)/.test(e)&&!/(Chrom[eium]+|Android)\/(\d+)/.test(e)),r=!("raw"in n)||n.propertyIsEnumerable("raw")||!Object.isFrozen(n.raw);if(t||r){var o={},i=function(n){for(var e=".",t=0;t<n.length;t++)e+=n[t].length+"."+n[t];return o[e]||(o[e]=n)};if(r)S=i;else{var a=new k;S=function(n){return a.get(n)||function(n,e){return a.set(n,e),e}(n,i(n))}}}else N=!0;return C(n)};function C(n){return N?n:S(n)}var A,E="-"+Math.random().toFixed(6)+"%",L=!1;try{"content"in(A=document.createElement("template"))&&(A.innerHTML='<p tabindex="'+E+'"></p>',A.content.childNodes[0].getAttribute("tabindex")==E)||(E="_dt: "+E.slice(1,-1)+";",L=!0)}catch(n){}var P="\x3c!--"+E+"--\x3e",T=8,M=1,R=3,z=/^(?:style|textarea)$/i,D=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;var F=" \\f\\n\\r\\t",$="[^"+F+"\\/>\"'=]+",H="["+F+"]+"+$,q="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",G="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+$.replace("\\/","")+"))?)",W=new RegExp(q+H+G+"+)(["+F+"]*/?>)","g"),I=new RegExp(q+H+G+"*)(["+F+"]*/>)","g"),U=new RegExp("("+H+"\\s*=\\s*)(['\"]?)"+P+"\\2","gi");function Z(n,e,t,r){return"<"+e+t.replace(U,B)+r}function B(n,e,t){return e+(t||'"')+E+(t||'"')}function V(n,e,t){return D.test(e)?n:"<"+e+t+"></"+e+">"}var J=function(n){var e="fragment",t="content"in o("template")?function(n){var e=o("template");return e.innerHTML=n,e.content}:function(n){var t=o(e),i=o("template"),a=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(n)){var c=RegExp.$1;i.innerHTML="<table>"+n+"</table>",a=i.querySelectorAll(c)}else i.innerHTML=n,a=i.childNodes;return r(t,a),t};return function(n,i){return("svg"===i?function(n){var t=o(e),i=o("div");return i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+n+"</svg>",r(t,i.firstChild.childNodes),t}:t)(n)};function r(n,e){for(var t=e.length;t--;)n.appendChild(e[0])}function o(t){return t===e?n.createDocumentFragment():n.createElementNS("http://www.w3.org/1999/xhtml",t)}}(document),K=[].indexOf,Q=function(n,e,t,r,o,i){for(var a=("selectedIndex"in e),c=a;r<o;){var u=n(t[r],1);if(e.insertBefore(u,i),a&&c&&u.selected){c=!c;var l=e.selectedIndex;e.selectedIndex=l<0?r:K.call(e.querySelectorAll("option"),u)}r++}},X=function(n,e){return n==e},Y=function(n){return n},nn=function(n,e,t,r,o,i,a){var c=i-o;if(c<1)return-1;for(;t-e>=c;){for(var u=e,l=o;u<t&&l<i&&a(n[u],r[l]);)u++,l++;if(l===i)return e;e=u+1}return-1},en=function(n,e,t,r,o){return t<r?n(e[t],0):0<t?n(e[t-1],-0).nextSibling:o},tn=function(n,e,t,r){for(;t<r;)an(n(e[t++],-1))},rn=function(n,e,t){for(var r=1,o=e;r<o;){var i=(r+o)/2>>>0;t<n[i]?o=i:r=i+1}return r},on=function(n,e,t,r,o,i,a,c,u,l,f,s,d){!function(n,e,t,r,o,i,a,c,u){for(var l=[],f=n.length,s=a,d=0;d<f;)switch(n[d++]){case 0:o++,s++;break;case 1:l.push(r[o]),Q(e,t,r,o++,o,s<c?e(i[s],0):u);break;case-1:s++}for(d=0;d<f;)switch(n[d++]){case 0:a++;break;case-1:-1<l.indexOf(i[a])?a++:tn(e,i,a++,a)}}(function(n,e,t,r,o,i,a){var c,u,l,f,s,d,p,h=t+i,g=[];n:for(c=0;c<=h;c++){if(c>50)return null;for(p=c-1,s=c?g[c-1]:[0,0],d=g[c]=[],u=-c;u<=c;u+=2){for(l=(f=u===-c||u!==c&&s[p+u-1]<s[p+u+1]?s[p+u+1]:s[p+u-1]+1)-u;f<i&&l<t&&a(r[o+f],n[e+l]);)f++,l++;if(f===i&&l===t)break n;d[c+u]=f}}var m=Array(c/2+h/2),b=m.length-1;for(c=g.length-1;c>=0;c--){for(;f>0&&l>0&&a(r[o+f-1],n[e+l-1]);)m[b--]=0,f--,l--;if(!c)break;p=c-1,s=c?g[c-1]:[0,0],(u=f-l)==-c||u!==c&&s[p+u-1]<s[p+u+1]?(l--,m[b--]=1):(f--,m[b--]=-1)}return m}(t,r,i,a,c,l,s)||function(n,e,t,r,o,i,a,c){var u=0,l=r<c?r:c,f=Array(l++),s=Array(l);s[0]=-1;for(var d=1;d<l;d++)s[d]=a;for(var p=o.slice(i,a),h=e;h<t;h++){var g=p.indexOf(n[h]);if(-1<g){var m=g+i;-1<(u=rn(s,l,m))&&(s[u]=m,f[u]={newi:h,oldi:m,prev:f[u-1]})}}for(u=--l,--a;s[u]>a;)--u;l=c+r-u;var b=Array(l),v=f[u];for(--t;v;){for(var y=v,w=y.newi,_=y.oldi;t>w;)b[--l]=1,--t;for(;a>_;)b[--l]=-1,--a;b[--l]=0,--t,--a,v=v.prev}for(;t>=e;)b[--l]=1,--t;for(;a>=i;)b[--l]=-1,--a;return b}(t,r,o,i,a,c,u,l),n,e,t,r,a,c,f,d)},an=function(n){return(n.remove||function(){var n=this.parentNode;n&&n.removeChild(this)}).call(n)};var cn=function(n,e,t,r){r||(r={});for(var o=r.compare||X,i=r.node||Y,a=null==r.before?null:i(r.before,0),c=e.length,u=c,l=0,f=t.length,s=0;l<u&&s<f&&o(e[l],t[s]);)l++,s++;for(;l<u&&s<f&&o(e[u-1],t[f-1]);)u--,f--;var d=l===u,p=s===f;if(d&&p)return t;if(d&&s<f)return Q(i,n,t,s,f,en(i,e,l,c,a)),t;if(p&&l<u)return tn(i,e,l,u),t;var h=u-l,g=f-s,m=-1;if(h<g){if(-1<(m=nn(t,s,f,e,l,u,o)))return Q(i,n,t,s,m,i(e[l],0)),Q(i,n,t,m+h,f,en(i,e,u,c,a)),t}else if(g<h&&-1<(m=nn(e,l,u,t,s,f,o)))return tn(i,e,l,m),tn(i,e,m+g,u),t;return h<2||g<2?(Q(i,n,t,s,f,i(e[l],0)),tn(i,e,l,u),t):h===g&&function(n,e,t,r,o,i){for(;r<o&&i(t[r],n[e-1]);)r++,e--;return 0===e}(t,f,e,l,u,o)?(Q(i,n,t,s,f,en(i,e,u,c,a)),t):(on(i,n,t,s,f,g,e,l,u,h,c,o,a),t)},un=function(n,e,t,r,o){var i="importNode"in n,a=n.createDocumentFragment();return a.appendChild(n.createTextNode("g")),a.appendChild(n.createTextNode("")),(i?n.importNode(a,!0):a.cloneNode(!0)).childNodes.length<2?function n(e,t){for(var r=e.cloneNode(),o=e.childNodes||[],i=o.length,a=0;t&&a<i;a++)r.appendChild(n(o[a],t));return r}:i?n.importNode:function(n,e){return n.cloneNode(!!e)}}(document),ln="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},fn=L?function(n,e){var t=e.join(" ");return e.slice.call(n,0).sort(function(n,e){return t.indexOf(n.name)<=t.indexOf(e.name)?-1:1})}:function(n,e){return e.slice.call(n,0)};function sn(n,e){for(var t=e.length,r=0;r<t;)n=n.childNodes[e[r++]];return n}function dn(n,e,t,r){for(var o=n.attributes,i=[],a=[],c=fn(o,t),u=c.length,l=0;l<u;){var f,s=c[l++],d=s.value===E;if(d||1<(f=s.value.split(P)).length){var p=s.name;if(i.indexOf(p)<0){i.push(p);var h=t.shift().replace(d?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+p+")\\s*=\\s*('|\")[\\S\\s]*","i"),"$1"),g=o[h]||o[h.toLowerCase()];if(d)e.push(hn(g,r,h,null));else{for(var m=f.length-2;m--;)t.shift();e.push(hn(g,r,h,f))}}a.push(s)}}l=0;for(var b=(0<(u=a.length)&&L&&!("ownerSVGElement"in n));l<u;){var v=a[l++];b&&(v.value=""),n.removeAttribute(v.name)}var y=n.nodeName;if(/^script$/i.test(y)){var w=document.createElement(y);for(u=o.length,l=0;l<u;)w.setAttributeNode(o[l++].cloneNode(!0));w.textContent=n.textContent,n.parentNode.replaceChild(w,n)}}function pn(n,e){return{type:"any",node:n,path:e}}function hn(n,e,t,r){return{type:"attr",node:n,path:e,name:t,sparse:r}}function gn(n,e){return{type:"text",node:n,path:e}}var mn=new k;function bn(n,e){var t=(n.convert||function(n){return n.join(P).replace(I,V).replace(W,Z)})(e),r=n.transform;r&&(t=r(t));var o=J(t,n.type);wn(o);var i=[];!function n(e,t,r,o){for(var i=e.childNodes,a=i.length,c=0;c<a;){var u=i[c];switch(u.nodeType){case M:var l=o.concat(c);dn(u,t,r,l),n(u,t,r,l);break;case T:var f=u.textContent;if(f===E)r.shift(),t.push(z.test(e.nodeName)?gn(e,o):pn(u,o.concat(c)));else switch(f.slice(0,2)){case"/*":if("*/"!==f.slice(-2))break;case"👻":e.removeChild(u),c--,a--}break;case R:z.test(e.nodeName)&&ln.call(u.textContent)===P&&(r.shift(),t.push(gn(e,o)))}c++}}(o,i,e.slice(0),[]);var a={content:o,updates:function(t){for(var r=[],o=i.length,a=0,c=0;a<o;){var u=i[a++],l=sn(t,u.path);switch(u.type){case"any":r.push({fn:n.any(l,[]),sparse:!1});break;case"attr":var f=u.sparse,s=n.attribute(l,u.name,u.node);null===f?r.push({fn:s,sparse:!1}):(c+=f.length-2,r.push({fn:s,sparse:!0,values:f}));break;case"text":r.push({fn:n.text(l),sparse:!1}),l.textContent=""}}return o+=c,function(){var n=arguments.length;if(o!==n-1)throw new Error(n-1+" values instead of "+o+"\n"+e.join("${value}"));for(var i=1,a=1;i<n;){var c=r[i-a];if(c.sparse){var u=c.values,l=u[0],f=1,s=u.length;for(a+=s-2;f<s;)l+=arguments[i++]+u[f++];c.fn(l)}else c.fn(arguments[i++])}return t}}};return mn.set(e,a),a}var vn=[];function yn(n){var e=vn,t=wn;return function(r){return e!==r&&(t=function(n,e){var t=mn.get(e)||bn(n,e);return t.updates(un.call(document,t.content,!0))}(n,e=r)),t.apply(null,arguments)}}function wn(n){for(var e=n.childNodes,t=e.length;t--;){var r=e[t];1!==r.nodeType&&0===ln.call(r.textContent).length&&n.removeChild(r)}}var _n=function(){var n=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,e=/([^A-Z])([A-Z]+)/g;return function(n,e){return"ownerSVGElement"in n?function(n,e){var t;e?t=e.cloneNode(!0):(n.setAttribute("style","--hyper:style;"),t=n.getAttributeNode("style"));return t.value="",n.setAttributeNode(t),r(t,!0)}(n,e):r(n.style,!1)};function t(n,e,t){return e+"-"+t.toLowerCase()}function r(r,o){var i,a;return function(c){var u,l,f,s;switch(d(c)){case"object":if(c){if("object"===i){if(!o&&a!==c)for(l in a)l in c||(r[l]="")}else o?r.value="":r.cssText="";for(l in u=o?{}:r,c)f="number"!=typeof(s=c[l])||n.test(l)?s:s+"px",!o&&/^--/.test(l)?u.setProperty(l,f):u[l]=f;i="object",o?r.value=function(n){var r,o=[];for(r in n)o.push(r.replace(e,t),":",n[r],";");return o.join("")}(a=u):a=c;break}default:a!=c&&(i="string",a=c,o?r.value=c||"":r.cssText=c||"")}}}}(),xn=function(n,e){return(e=t.prototype).ELEMENT_NODE=1,e.nodeType=111,e.remove=function(n){var e=this.childNodes,t=this.firstChild,r=this.lastChild;if(this._=null,n&&2===e.length)r.parentNode.removeChild(r);else{var o=this.ownerDocument.createRange();o.setStartBefore(n?e[1]:t),o.setEndAfter(r),o.deleteContents()}return t},e.valueOf=function(n){var e=this._,t=null==e;if(t&&(e=this._=this.ownerDocument.createDocumentFragment()),t||n)for(var r=this.childNodes,o=0,i=r.length;o<i;o++)e.appendChild(r[o]);return e},t;function t(e){var t=this.childNodes=n.call(e,0);this.firstChild=t[0],this.lastChild=t[t.length-1],this.ownerDocument=t[0].ownerDocument,this._=null}}([].slice),jn=Array.isArray,On=Object.create,kn=Object.freeze,Nn=(Object.keys,xn.prototype.nodeType),Sn=function(n,e){return n.nodeType===Nn?1/e<0?e?n.remove(!0):n.lastChild:e?n.valueOf(!0):n.firstChild:n},Cn=function(n,e){var t,r=!1,o=e.cloneNode(!0);return function(e){t!==e&&(t=e,o.value!==e&&(null==e?(r&&(r=!1,n.removeAttributeNode(o)),o.value=e):(o.value=e,r||(r=!0,n.setAttributeNode(o)))))}},An=function(n,e){var t;return function(r){t!==r&&(t=r,n[e]!==r&&(null==r?(n[e]="",n.removeAttribute(e)):n[e]=r))}},En=/^(?:form|list)$/i,Ln=[].slice;function Pn(n){return this.type=n,yn(this)}function Tn(n){return n(this)}Pn.prototype={attribute:function(n,e,t){var r="svg"===this.type;switch(e){case"class":if(r)return Cn(n,t);e="className";case"data":case"props":return An(n,e);case"style":return _n(n,t,r);case"ref":return function(n){return function(e){e.current=n}}(n);default:return"."===e.slice(0,1)?function(n,e,t){return t?function(t){try{n[e]=t}catch(r){n.setAttribute(e,t)}}:function(t){n[e]=t}}(n,e.slice(1),r):"on"===e.slice(0,2)?function(n,e){var t,r=e.slice(2);return e.toLowerCase()in n&&(r=r.toLowerCase()),function(e){t!==e&&(t&&n.removeEventListener(r,t,!1),t=e,e&&n.addEventListener(r,e,!1))}}(n,e):e in n&&!r&&!En.test(e)?An(n,e):Cn(n,t)}},any:function(n,e){var t,r={node:Sn,before:n},o=this.type,i=!1;return function a(c){switch(d(c)){case"string":case"number":case"boolean":i?t!==c&&(t=c,e[0].textContent=c):(i=!0,t=c,e=cn(n.parentNode,e,[function(n,e){return n.ownerDocument.createTextNode(e)}(n,c)],r));break;case"function":a(c(n));break;case"object":case"undefined":if(null==c){i=!1,e=cn(n.parentNode,e,[],r);break}default:if(i=!1,t=c,jn(c))if(0===c.length)e.length&&(e=cn(n.parentNode,e,[],r));else switch(d(c[0])){case"string":case"number":case"boolean":a(String(c));break;case"function":a(c.map(Tn,n));break;case"object":jn(c[0])&&(c=c.concat.apply([],c));default:e=cn(n.parentNode,e,c,r)}else!function(n){return"ELEMENT_NODE"in n}(c)?"text"in c?a(String(c.text)):"any"in c?a(c.any):"html"in c?e=cn(n.parentNode,e,Ln.call(J([].concat(c.html).join(""),o).childNodes),r):"length"in c&&a(Ln.call(c)):e=cn(n.parentNode,e,11===c.nodeType?Ln.call(c.childNodes):[c],r)}}},text:function(n){var e;return function t(r){if(e!==r){e=r;var o=d(r);"object"===o&&r?"text"in r?t(String(r.text)):"any"in r?t(r.any):"html"in r?t([].concat(r.html).join("")):"length"in r&&t(Ln.call(r).join("")):"function"===o?t(r(n)):n.textContent=null==r?"":r}}}};var Mn=new k,Rn=function(n,e){var t=new k;return r.for=function(n,o){var i,a=t.get(n)||function(n){var e=On(null);return t.set(n,e),e}(n);return a[o]||(a[o]=(i={sub:[],stack:[],wire:null},function(){return zn(e,i,r.apply(null,arguments))}))},r.node=function(){return zn(e,{sub:[],stack:[],wire:null},r.apply(null,arguments)).valueOf(!0)},r;function r(){return new qn(n,function(n){for(var e=arguments.length,t=[C(n)],r=1;r<e;)t.push(arguments[r++]);return t}.apply(null,arguments))}},zn=function(n,e,t){var r=e.sub,o=e.stack,i={a:0,aLength:r.length,i:0,iLength:o.length},a=Fn(n,e,t,i),c=i.a,u=i.i,l=i.iLength;return c<i.aLength&&r.splice(c),u<l&&o.splice(u),a},Dn=function(n){var e={sub:[],stack:[],wire:null};return Mn.set(n,e),e},Fn=function(n,e,t,r){var o=e.stack,i=r.i,a=r.iLength,c=t.type,u=t.args,l=i===a;l&&(r.iLength=o.push({type:c,id:u[0],tag:null,wire:null})),r.i++,$n(n,e,u,r);var f=o[i];return l||f.id!==u[0]||f.type!==c?(f.type=c,f.id=u[0],f.tag=new n(c),f.wire=Hn(f.tag.apply(null,u))):f.tag.apply(null,u),f.wire},$n=function(n,e,t,r){for(var o=1,i=t.length;o<i;o++){var a=t[o];if("object"===d(a)&&a)if(a instanceof qn)t[o]=Fn(n,e,a,r);else if(jn(a))for(var c=0,u=a.length;c<u;c++){var l=a[c];if("object"===d(l)&&l&&l instanceof qn){var f=e.sub,s=r.a;s===r.aLength&&(r.aLength=f.push({sub:[],stack:[],wire:null})),r.a++,a[c]=zn(n,f[s],l)}}}},Hn=function(n){var e=n.childNodes,t=e.length;return 1===t?e[0]:t?new xn(e):n};function qn(n,e){this.type=n,this.args=e}kn(qn);var Gn=function(n){return{html:Rn("html",n),svg:Rn("svg",n),render:function(e,t){var r="function"==typeof t?t():t,o=Mn.get(e)||Dn(e),i=r instanceof qn?zn(n,o,r):r;return i!==o.wire&&(o.wire=i,e.textContent="",e.appendChild(i.valueOf(!0))),e}}}(Pn),Wn=Gn.render,In=Gn.html,Un=(Gn.svg,function(n,e,t){var r=Wn.bind(n,n.shadowRoot||n,function(){var n=e();return setTimeout(t),n});return function(){return n.__created?r():null}}),Zn=function(n){return In(l(),h(n))},Bn=function(n){return In((e=h(n),Object.freeze(Object.defineProperties([e],{raw:{value:Object.freeze([e])}}))));var e},Vn=function(n,e,t,r){var o=n.constructor.attributes.filter(function(n){return x(n)===e})[0];if(o){var i=p(e),a=function(n,e){if("string"==typeof n)return e;if("function"==typeof n.converter)return n.converter(e);switch(n.type||"string"){case"boolean":return m(e);case"number":return b(e);case"array":return v(e);case"object":return y(e);case"function":return w(e);case"string":default:return _(e)}}(o,r);a!==n.props[i]&&(n.__currentProps=Object.assign(Object.assign({},n.props),f({},i,a)),n.render())}},Jn=function(n){n.__ready||(n.__ready=!0,n.ready(),n.emit("ready",void 0,!0))},Kn=function(n){n.rendered(),function n(e,t){t.length&&t.some(function(n){return!n.__rendered})?setTimeout(function(){return n(e,t)}):(e.__rendered=!0,e.emit("rendered",void 0,!0))}(n,s((n.shadowRoot||n).querySelectorAll("*")).filter(function(n){return"boolean"==typeof n.__rendered}))},Qn=function(n,e){return n.__rendered=!1,e()},Xn=function(){return{current:null}},Yn=function(n){return{get current(){return n()}}},ne=function(n){var e,t;function i(){var e,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];(e=n.call(this)||this).__created=!1,e.__rendered=!1,e.__ready=!1,e.__attributeChangedCallbackStack=[],e.createStyle=Zn,e.createRaw=Bn,t&&e.attachShadow({mode:"open"});var r=e.render.bind(o(e));return e.render=Un(o(e),function(){return Qn(o(e),r)},function(){Kn(o(e)),Jn(o(e))}),e}t=n,(e=i).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t,i.register=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return j(this,n)};var a,c,u,l=i.prototype;return l.connectedCallback=function(){},l.disconnectedCallback=function(){},l.attributeChangedCallback=function(n,e,t){return Vn(this,n,0,t)},l.render=function(){return null},l.rendered=function(){},l.ready=function(){},l.addEventListener=function(e,t,r){"ready"===e&&this.__ready?t():n.prototype.addEventListener.call(this,e,t,r)},l.emit=function(n,e){return function(n,e,t,r){if(!e)throw Error("No event name defined. Please provide a name.");return n.dispatchEvent(new CustomEvent(e,Object.assign({bubbles:!r},void 0!==t&&{detail:t})))}(this,n,e,arguments.length>2&&void 0!==arguments[2]&&arguments[2])},l.setState=function(n){this.__currentState=Object.assign(Object.assign({},this.state),"function"==typeof n?n.call(this,this.state):n),this.render()},a=i,(c=[{key:"props",get:function(){return this.__currentProps||(this.__currentProps=this.defaultProps||{}),this.__currentProps}},{key:"state",get:function(){return this.__currentState||(this.__currentState=this.defaultState||{}),this.__currentState}},{key:"html",get:function(){return this.__html||(this.__html=In),this.__html}}])&&r(a.prototype,c),u&&r(a,u),i}(i(HTMLElement));ne.dependencies=[],ne.attributes=[],e.default=ne},"./node_modules/css-loader/lib/css-base.js":function(n,e){n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[t].concat(i).concat([o]).join("\n")}var a;return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];"number"==typeof a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},"./src/components/NewAccordion/NewAccordion.ts":function(n,e,t){"use strict";var r,o=this&&this.__extends||(r=function(n,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])})(n,e)},function(n,e){function t(){this.constructor=n}r(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}),i=this&&this.__assign||function(){return(i=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var a=t("./node_modules/@biotope/element/lib/esm/index.js"),c=t("./src/components/NewAccordion/template.ts"),u=function(n){function e(){var e=null!==n&&n.apply(this,arguments)||this;return e.methods={},e}return o(e,n),e.prototype.rendered=function(){var n=this;this.shadowRoot.querySelectorAll(".accordion").forEach(function(e){e.innerHTML=n.innerHTML});var e=this.shadowRoot.querySelectorAll(".accordion__item");e.forEach(function(n){n.firstElementChild.addEventListener("click",function(){this.parentElement.classList.contains("hidden")?(e.forEach(function(n){n.classList.add("hidden")}),this.parentElement.classList.remove("hidden")):this.parentElement.classList.add("hidden")})})},Object.defineProperty(e.prototype,"defaultState",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"defaultProps",{get:function(){return{modifier:null}},enumerable:!0,configurable:!0}),e.prototype.render=function(){return c.default(this.html,i({},this.props,this.state,this.methods),this.createStyle)},e.componentName="new-accordion",e.attributes=["modifier"],e}(a.default);e.default=u},"./src/components/NewAccordion/styles.scss":function(n,e,t){(n.exports=t("./node_modules/css-loader/lib/css-base.js")(!1)).push([n.i,'/* Global heading styles */\n* {\n  box-sizing: border-box; }\n\nh1, h2, h3, h4, h5 {\n  font-family: "Gilroy-ExtraBold";\n  margin: 0;\n  padding: 0; }\n\nh1 {\n  font-size: 40px;\n  line-height: 1.125; }\n\nh2 {\n  font-size: 22px;\n  line-height: 1.27273; }\n\nh3 {\n  font-size: 20px;\n  line-height: 1.35; }\n\nh4 {\n  font-size: 17px;\n  line-height: 1.47059; }\n\n/* Global paragraph styles */\np {\n  font-size: 2rem; }\n\n/* Global link styles */\na {\n  font-size: 2rem; }\n\n/* Global sup element */\nsup {\n  font-size: 75%; }\n\n/* Screen reader only */\n.sr-only {\n  border: 0 none;\n  clip: rect(0px, 0px, 0px, 0px);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n/* clearfix */\n.row {\n  margin-top: -60px;\n  margin-left: -15px;\n  margin-right: -15px;\n  max-width: none; }\n  @media (min-width: 768px) {\n    .row {\n      margin-top: -60px; } }\n  @media (min-width: 1200px) {\n    .row {\n      margin-top: -80px; } }\n  .row:after {\n    content: " ";\n    display: block;\n    clear: both; }\n  .row + .row,\n  .row .row {\n    margin-top: 0; }\n  .row--reducedWidth {\n    margin-left: calc(6.25% - 15px);\n    margin-right: calc(6.75% - 15px); }\n    @media (min-width: 768px) {\n      .row--reducedWidth {\n        margin-left: calc(1.96% - 15px);\n        margin-right: calc(4.3% - 15px); } }\n    @media (min-width: 1520px) {\n      .row--reducedWidth {\n        max-width: 1470px;\n        margin-left: auto;\n        margin-right: auto; } }\n\n.col {\n  width: 100%;\n  float: left;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-top: 60px; }\n  @media (min-width: 768px) {\n    .col {\n      margin-top: 60px; } }\n  @media (min-width: 1200px) {\n    .col {\n      margin-top: 80px; } }\n\n@media (min-width: 768px) {\n  .col--medium-1 {\n    width: 8.33333%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-1 {\n    margin-left: 8.33333%; }\n  .col--medium-2 {\n    width: 16.66667%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-2 {\n    margin-left: 16.66667%; }\n  .col--medium-3 {\n    width: 25%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-3 {\n    margin-left: 25%; }\n  .col--medium-4 {\n    width: 33.33333%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-4 {\n    margin-left: 33.33333%; }\n  .col--medium-5 {\n    width: 41.66667%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-5 {\n    margin-left: 41.66667%; }\n  .col--medium-6 {\n    width: 50%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-6 {\n    margin-left: 50%; }\n  .col--medium-7 {\n    width: 58.33333%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-7 {\n    margin-left: 58.33333%; }\n  .col--medium-8 {\n    width: 66.66667%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-8 {\n    margin-left: 66.66667%; }\n  .col--medium-9 {\n    width: 75%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-9 {\n    margin-left: 75%; }\n  .col--medium-10 {\n    width: 83.33333%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-10 {\n    margin-left: 83.33333%; }\n  .col--medium-11 {\n    width: 91.66667%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-11 {\n    margin-left: 91.66667%; }\n  .col--medium-12 {\n    width: 100%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-12 {\n    margin-left: 100%; }\n  .hidden-col--medium {\n    display: none; } }\n\n@media (min-width: 992px) {\n  .col--large-1 {\n    width: 8.33333%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-1 {\n    margin-left: 8.33333%; }\n  .col--large-2 {\n    width: 16.66667%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-2 {\n    margin-left: 16.66667%; }\n  .col--large-3 {\n    width: 25%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-3 {\n    margin-left: 25%; }\n  .col--large-4 {\n    width: 33.33333%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-4 {\n    margin-left: 33.33333%; }\n  .col--large-5 {\n    width: 41.66667%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-5 {\n    margin-left: 41.66667%; }\n  .col--large-6 {\n    width: 50%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-6 {\n    margin-left: 50%; }\n  .col--large-7 {\n    width: 58.33333%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-7 {\n    margin-left: 58.33333%; }\n  .col--large-8 {\n    width: 66.66667%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-8 {\n    margin-left: 66.66667%; }\n  .col--large-9 {\n    width: 75%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-9 {\n    margin-left: 75%; }\n  .col--large-10 {\n    width: 83.33333%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-10 {\n    margin-left: 83.33333%; }\n  .col--large-11 {\n    width: 91.66667%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-11 {\n    margin-left: 91.66667%; }\n  .col--large-12 {\n    width: 100%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-12 {\n    margin-left: 100%; }\n  .hidden-col--large {\n    display: none; } }\n\n/* clearfix */\nnew-accordion .accordion {\n  width: 100%;\n  min-height: 50vh; }\n  new-accordion .accordion__item {\n    height: 20vh;\n    overflow: hidden;\n    transition: height 0.3s cubic-bezier(1, 0.5, 0, 1);\n    box-shadow: 0.3rem 0.3rem 0.7rem #0000001a; }\n    new-accordion .accordion__item:first-child {\n      margin-top: 0.5rem; }\n    new-accordion .accordion__item:not(.hidden) .accordion__icon::before {\n      transform: rotate(45deg); }\n    new-accordion .accordion__item.hidden {\n      height: 7vh; }\n  new-accordion .accordion__header {\n    display: flex;\n    height: 7vh;\n    padding: 1rem 2rem;\n    cursor: pointer;\n    background-color: #f5f5eb;\n    color: #181717;\n    transition: all 0.4s;\n    border-bottom: 0.1rem solid #0000001c; }\n    new-accordion .accordion__header:hover {\n      padding-left: 2.7rem; }\n    new-accordion .accordion__header heading-comp {\n      margin: auto 0;\n      padding-left: 3rem; }\n  new-accordion .accordion__icon {\n    position: relative;\n    bottom: 0;\n    top: 0;\n    margin: auto 0; }\n    new-accordion .accordion__icon::before {\n      content: "";\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      margin: auto 0;\n      display: inline-block;\n      height: 0.7rem;\n      width: 0.7rem;\n      border-right: 0.1rem solid;\n      border-bottom: 0.1rem solid;\n      transform: rotate(-45deg);\n      transition: transform 0.3s cubic-bezier(1, 0.5, 0, 1); }\n  new-accordion .accordion--coral .accordion__body {\n    background-color: #ffa489; }\n  new-accordion .accordion--turquoise .accordion__body {\n    background-color: #9fd4ca; }\n  new-accordion .accordion__body {\n    height: 20vh;\n    padding: 1rem 2rem; }\n    new-accordion .accordion__body p {\n      margin-block-end: 0;\n      margin-block-start: 0; }\n\n:host .accordion {\n  width: 100%;\n  min-height: 50vh; }\n  :host .accordion__item {\n    height: 20vh;\n    overflow: hidden;\n    transition: height 0.3s cubic-bezier(1, 0.5, 0, 1);\n    box-shadow: 0.3rem 0.3rem 0.7rem #0000001a; }\n    :host .accordion__item:first-child {\n      margin-top: 0.5rem; }\n    :host .accordion__item:not(.hidden) .accordion__icon::before {\n      transform: rotate(45deg); }\n    :host .accordion__item.hidden {\n      height: 7vh; }\n  :host .accordion__header {\n    display: flex;\n    height: 7vh;\n    padding: 1rem 2rem;\n    cursor: pointer;\n    background-color: #f5f5eb;\n    color: #181717;\n    transition: all 0.4s;\n    border-bottom: 0.1rem solid #0000001c; }\n    :host .accordion__header:hover {\n      padding-left: 2.7rem; }\n    :host .accordion__header heading-comp {\n      margin: auto 0;\n      padding-left: 3rem; }\n  :host .accordion__icon {\n    position: relative;\n    bottom: 0;\n    top: 0;\n    margin: auto 0; }\n    :host .accordion__icon::before {\n      content: "";\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      margin: auto 0;\n      display: inline-block;\n      height: 0.7rem;\n      width: 0.7rem;\n      border-right: 0.1rem solid;\n      border-bottom: 0.1rem solid;\n      transform: rotate(-45deg);\n      transition: transform 0.3s cubic-bezier(1, 0.5, 0, 1); }\n  :host .accordion--coral .accordion__body {\n    background-color: #ffa489; }\n  :host .accordion--turquoise .accordion__body {\n    background-color: #9fd4ca; }\n  :host .accordion__body {\n    height: 20vh;\n    padding: 1rem 2rem; }\n    :host .accordion__body p {\n      margin-block-end: 0;\n      margin-block-start: 0; }\n',""])},"./src/components/NewAccordion/template.ts":function(n,e,t){"use strict";var r=this&&this.__makeTemplateObject||function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n};Object.defineProperty(e,"__esModule",{value:!0});var o,i=t("./src/components/NewAccordion/styles.scss");e.default=function(n,e,t){return n(o||(o=r(["\n\t\t","\n\t\t<section class=",">\n\t\t</section>\n    "],["\n\t\t","\n\t\t<section class=",">\n\t\t</section>\n    "])),t(i),"accordion "+e.modifier)}}});
//# sourceMappingURL=NewAccordion.js.map
