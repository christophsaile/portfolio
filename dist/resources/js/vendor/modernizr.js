!function(e,n,t){var o=[],i={_version:"3.7.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){o.push({name:e,fn:n,options:t})},addAsyncTest:function(e){o.push({name:null,fn:e})}},a=function(){};a.prototype=i,a=new a;var s=[];function r(e,n){return typeof e===n}var l,c,f=n.documentElement,d="svg"===f.nodeName.toLowerCase();function u(e){var n=f.className,t=a._config.classPrefix||"";if(d&&(n=n.baseVal),a._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}a._config.enableClasses&&(e.length>0&&(n+=" "+t+e.join(" "+t)),d?f.className.baseVal=n:f.className=n)}function p(e,n){if("object"==typeof e)for(var t in e)l(e,t)&&p(t,e[t]);else{var o=(e=e.toLowerCase()).split("."),i=a[o[0]];if(2===o.length&&(i=i[o[1]]),void 0!==i)return a;n="function"==typeof n?n():n,1===o.length?a[o[0]]=n:(!a[o[0]]||a[o[0]]instanceof Boolean||(a[o[0]]=new Boolean(a[o[0]])),a[o[0]][o[1]]=n),u([(n&&!1!==n?"":"no-")+o.join("-")]),a._trigger(e,n)}return a}l=r(c={}.hasOwnProperty,"undefined")||r(c.call,"undefined")?function(e,n){return n in e&&r(e.constructor.prototype[n],"undefined")}:function(e,n){return c.call(e,n)},i._l={},i.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),a.hasOwnProperty(e)&&setTimeout(function(){a._trigger(e,a[e])},0)},i._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e;for(e=0;e<t.length;e++)(0,t[e])(n)},0),delete this._l[e]}},a._q.push(function(){i.addTest=p});var h=i._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];function v(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):d?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function m(){var e=n.body;return e||((e=v(d?"svg":"body")).fake=!0),e}i._prefixes=h;var g,w=(g=e.matchMedia||e.msMatchMedia)?function(e){var n=g(e);return n&&n.matches||!1}:function(t){var o=!1;return function(e,t,o,i){var a,s,r,l="modernizr",c=v("div"),d=m();if(parseInt(o,10))for(;o--;)(s=v("div")).id=i?i[o]:l+(o+1),c.appendChild(s);(a=v("style")).type="text/css",a.id="s"+l,(d.fake?d:c).appendChild(a),d.appendChild(c),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),c.id=l,d.fake&&(d.style.background="",d.style.overflow="hidden",r=f.style.overflow,f.style.overflow="hidden",f.appendChild(d)),t(c,e),d.fake?(d.parentNode.removeChild(d),f.style.overflow=r,f.offsetHeight):c.parentNode.removeChild(c)}("@media "+t+" { #modernizr { position: absolute; } }",function(n){o="absolute"===(e.getComputedStyle?e.getComputedStyle(n,null):n.currentStyle).position}),o};i.mq=w,a.addTest("touchevents",function(){if("ontouchstart"in e||e.TouchEvent||e.DocumentTouch&&n instanceof DocumentTouch)return!0;var t=["(",h.join("touch-enabled),("),"heartz",")"].join("");return w(t)}),a.addTest("svg",!!n.createElementNS&&!!n.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),a.addAsyncTest(function(){var t,o=function(e){f.contains(e)||f.appendChild(e)},i=function(e){e.fake&&e.parentNode&&e.parentNode.removeChild(e)},a=function(e,n){var t=!!e;if(t&&((t=new Boolean(t)).blocked="blocked"===e),p("flash",function(){return t}),n&&c.contains(n)){for(;n.parentNode!==c;)n=n.parentNode;c.removeChild(n)}};try{t="ActiveXObject"in e&&"Pan"in new e.ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(e){}if(!("plugins"in navigator&&"Shockwave Flash"in navigator.plugins||t)||d)a(!1);else{var s,r,l=v("embed"),c=m();if(l.type="application/x-shockwave-flash",c.appendChild(l),!("Pan"in l||t))return o(c),a("blocked",l),void i(c);s=function(){if(o(c),!f.contains(c))return c=n.body||c,(l=v("embed")).type="application/x-shockwave-flash",c.appendChild(l),setTimeout(s,1e3);f.contains(l)?(r=l.style.cssText,a(""===r||"blocked",l)):a("blocked"),i(c)},setTimeout(s,10)}}),function(){var e,n,t,i,l,c;for(var f in o)if(o.hasOwnProperty(f)){if(e=[],(n=o[f]).name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(i=r(n.fn,"function")?n.fn():n.fn,l=0;l<e.length;l++)1===(c=e[l].split(".")).length?a[c[0]]=i:(!a[c[0]]||a[c[0]]instanceof Boolean||(a[c[0]]=new Boolean(a[c[0]])),a[c[0]][c[1]]=i),s.push((i?"":"no-")+c.join("-"))}}(),u(s),delete i.addTest,delete i.addAsyncTest;for(var y=0;y<a._q.length;y++)a._q[y]();e.Modernizr=a}(window,document);
//# sourceMappingURL=modernizr.js.map
