(function(f){typeof define==="function"?define("stylefix",f):f()})(function(require,exports,module){"use strict";!function(e,t){function n(){}function r(t,n){n=n||E;var r;for(var o in v){var c,i,s=e;if(e[o]){for(c=v[o].replace("*",o).split(".");(i=c.shift())&&(s=s[i]););if("function"==typeof s)try{if(r=s(t,n),r&&r.length)break}catch(a){}}}return[].slice.call(r||(n.querySelectorAll?n.querySelectorAll(t):[]),0)}function o(t,r,c){S=!1;var i,s,a,l,u=/^\w+:\/\/[^\/]+/;if(c=c||n,l=T[t])setTimeout(function(){r(l)});else if(a=q[t])a.push(r);else{q[t]=[r],i=e.mOxie&&!S?new mOxie.XMLHttpRequest:x?new x:new ActiveXObject("Microsoft.XMLHTTP"),i.onreadystatechange=function(){4===i.readyState&&s()},s=function(){var e=i.responseText.replace(/(^\s+|\s+$)/g,"");e&&(!i.status||i.status<400||i.status>600)?(T[t]=e,q[t].forEach(function(t){t(e)})):c(i)};try{i.open("GET",t),i.send()}catch(f){g?(i=new g,i.onerror=c,i.onprogress=n,i.onload=s,i.open("GET",t),i.send()):u.test(t)&&o(t.replace(u,""),r,c)}}}function c(e,n){var r=e.textContent;return n===t?r||(e.textContent=e.innerText):(e.styleSheet&&n!==r&&(e.styleSheet.cssText=n),void(e.textContent=n))}function i(e,t){t=t||{};var n=e.replace(/[^\/]+$/,""),r=(/^[a-z]{3,10}:/.exec(n)||[""])[0],i=(/^[a-z]{3,10}:\/\/[^\/]+/.exec(n)||[""])[0],s=/^([^?]*)\??/.exec(e)[1],a=t.callback,l=t.before;o(e,function(t){n&&(t=t.replace(/url\(\s*?((?:"|')?)(.+?)\1\s*?\)/gi,function(e,t,o){return/^([a-z]{3,10}:|#)/i.test(o)?e:/^\/\//.test(o)?'url("'+r+o+'")':/^\//.test(o)?'url("'+i+o+'")':/^\?/.test(o)?'url("'+s+o+'")':'url("'+n+o+'")'}));var o=n.replace(/([\\\^\$*+[\]?{}.=!:(|)])/g,"\\$1");t=t.replace(new RegExp("\\b(behavior:\\s*?url\\('?\"?)"+o,"gi"),"$1");var u=E.createElement("style");u.setAttribute("data-href",e),l&&l.parentNode?l.parentNode.insertBefore(u,l):E.documentElement.childNodes[0].appendChild(u),t=d(t,!0,u),c(u,t),a&&a(u)},function(){if(!l){var t=E.createElement("link");t.rel="stylesheet",t.href=e,E.documentElement.childNodes[0].appendChild(t)}})}function s(e){e["data-ignore"]||(e["data-ignore"]=!0,i(e.href,{callback:function(t){t.media=e.media,t.disabled=e.disabled},before:e}))}function a(e){var t=e.disabled;c(e,d(c(e),!0,e)),e.disabled=t}function l(e){var t,n;8>b?(t=e.style.cssText,n=d(t,!1,e),t!==n&&(e.style.cssText=n)):(t=e.getAttribute("style"),n=d(t,!1,e),t!==n&&e.setAttribute("style",n))}function u(){A.length&&(r('link[rel="stylesheet"]').forEach(s),r("style").forEach(a),r("[style]").forEach(l))}function f(e,n){A.splice(n===t?A.length:n,0,e)}function d(e,t,n){return A.forEach(function(r){e=r(e,t,n)||e}),e}function y(){M.forEach(function(e){e()}),setTimeout(u,0)}function h(t){function n(){C||(C=!0,t())}try{return $(n)}catch(r){}if(p())setTimeout(n,0);else if(E.addEventListener)E.addEventListener("DOMContentLoaded",n,!1);else{E.attachEvent("onreadystatechange",function(){p()&&n()});var o;try{o=!e.frameElement&&E.documentElement}catch(c){}o&&o.doScroll&&!function i(){if(!C){try{o.doScroll("left")}catch(e){return setTimeout(i,50)}n()}}()}}function p(){return/^(complete|interactive)$/.test(E.readyState)}var m,v={NW:"*.Dom.select",MooTools:"$$",DOMAssistant:"*.$",Prototype:"$$",YAHOO:"*.util.Selector.query",Sizzle:"*",jQuery:"*",dojo:"*.query"},E=e.document,g=e.XDomainRequest,x=e.XMLHttpRequest,b=E.querySelector?E.documentMode:"CSS1Compat"===E.compatMode?"XMLHttpRequest"in e?7:6:5,S=E.querySelector||g,T={},q={},M=[],A=[];f(function(e){return e.replace(/(\/\*[^*]*\*+([^\/][^*]*\*+)*\/)\s*?/g,"")});var C=!1;h(y),m={query:r,get:o,cssContent:c,load:i,linkElement:s,styleElement:a,styleAttribute:l,ieVersion:b,process:u,register:f,fix:d,ready:function(e){C?e():M.push(e)}};try{module.exports=m}catch(w){e.stylefix=m}}(window);});