!function(){function t(t){return t&&t.__esModule?t.default:t}var r={};function n(t,r,n,e,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?r(u):Promise.resolve(u).then(e,o)}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(t){return function(){var r=this,e=arguments;return new Promise((function(o,i){var a=t.apply(r,e);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}};var e={},o=function(t){"use strict";var r,n=Object.prototype,e=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,n){return Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(t){u=function(t,r,n){return t[r]=n}}function s(t,r,n,e){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new S(e||[]);return i._invoke=function(t,r,n){var e=h;return function(o,i){if(e===p)throw new Error("Generator is already running");if(e===g){if("throw"===o)throw i;return C()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=_(a,n);if(c){if(c===y)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(e===h)throw e=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);e=p;var u=l(t,r,n);if("normal"===u.type){if(e=n.done?g:f,u.arg===y)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(e=g,n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function l(t,r,n){try{return{type:"normal",arg:t.call(r,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var h="suspendedStart",f="suspendedYield",p="executing",g="completed",y={};function d(){}function v(){}function m(){}var w={};u(w,i,(function(){return this}));var b=Object.getPrototypeOf,k=b&&b(b(P([])));k&&k!==n&&e.call(k,i)&&(w=k);var x=m.prototype=d.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function E(t,r){function n(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&e.call(h,"__await")?r.resolve(h.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):r.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}}function _(t,n){var e=t.iterator[n.method];if(e===r){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=r,_(t,n),"throw"===n.method))return y;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=l(e,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,y;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=r),n.delegate=null,y):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(e.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=r,n.done=!0,n};return a.next=a}}return{next:C}}function C(){return{value:r,done:!0}}return v.prototype=m,u(x,"constructor",m),u(m,"constructor",v),v.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===v||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(E.prototype),u(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(r,n,e,o,i){void 0===i&&(i=Promise);var a=new E(s(r,n,e,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(x),u(x,c,"Generator"),u(x,i,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var n in t)r.push(n);return r.reverse(),function n(){for(;r.length;){var e=r.pop();if(e in t)return n.value=e,n.done=!1,n}return n.done=!0,n}},t.values=P,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(e,o){return c.type="throw",c.arg=t,n.next=e,o&&(n.method="next",n.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=e.call(a,"catchLoc"),s=e.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var e=n.completion;if("throw"===e.type){var o=e.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:P(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=r),y}},t}(e);try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}var i,a={charityOrganizations:document.querySelector(".support"),bookCategoriesList:document.querySelector(".book-categories-list"),booksPopularCategoris:document.querySelector(".popular-books"),mainPage:document.querySelector(".main-content"),seeMoreBtn:document.querySelectorAll(".popular-books-btn")},c=a.charityOrganizations,u=a.bookCategoriesList,s=a.booksPopularCategoris,l=a.mainPage,h=a.seeMoreBtn;i=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:null},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:null},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:null},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:null},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:null},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:null},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:null},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:null},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:null}].reduce((function(t,r,n){var e=r.title,o=r.url,i=n+1;return t.push('<li>\n            <span class="counter">'.concat(i.toString().padStart(2,"0"),'</span>\n            <a class="charity-link" href="').concat(o,'" target="_blank">\n              <img\n                class="charity-icon"\n                src="./images/image ').concat(i,'.png"\n                alt="').concat(e,'"\n              />\n            </a>\n          </li>')),t}),[]),c.innerHTML=i.join(" ");function f(){return(f=t(r)(t(e).mark((function r(n){return t(e).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(n).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()})).then((function(t){console.dir(t),p(t)})).catch((function(t){console.dir(t)}));case 2:t.sent;case 3:case"end":return t.stop()}}),r)})))).apply(this,arguments)}function p(t){var r=t.map((function(t){var r=t.list_name;return'<li>\n          <span class="category">'.concat(r,"</span>\n                    </li>")}));u.innerHTML=r.join(" ")}!function(t){f.apply(this,arguments)}("https://books-backend.p.goit.global/books/category-list ");function g(){return(g=t(r)(t(e).mark((function r(n){return t(e).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(n).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()})).then((function(t){console.dir(t),y(t)})).catch((function(t){console.dir(t)}));case 2:t.sent;case 3:case"end":return t.stop()}}),r)})))).apply(this,arguments)}function y(t){var r=t.map((function(t){var r=t.books,n=t.list_name,e=r.map((function(t){var r=t.author,n=t.book_image,e=t.title;return' <li>\n                    <img class="popular-book-icon" src="'.concat(n,'" alt="').concat(e,'" width = 180px />\n                    <h4 class="popular-book-title">').concat(e,'</h4>\n                    <span class="popular-book-author">').concat(r,"</span>\n                  </li>")}));return'  <div class="popular-books-sections">\n            <h3 class="popular-books-heder">'.concat(n,'</h3>\n            <ul class="popular-books-list">\n                      ').concat(e,'\n            </ul>\n            <button type="submit" class="popular-books-btn">SEE MORE</button>\n          </div>')}));s.innerHTML=r.join(" ")}!function(t){g.apply(this,arguments)}("https://books-backend.p.goit.global/books/top-books ");var d="https://books-backend.p.goit.global/books/category?category=";function v(t,r,n){return m.apply(this,arguments)}function m(){return(m=t(r)(t(e).mark((function r(n,o,i){return t(e).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(n).concat(o)).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()})).then((function(t){console.dir(t),i(t,o)})).catch((function(t){console.dir(t)}));case 2:t.sent;case 3:case"end":return t.stop()}}),r)})))).apply(this,arguments)}function w(t,r){l.firstElementChild.textContent="".concat(r);var n=t.map((function(t){var r=t.author,n=t.book_image,e=t.title;return' <li>\n                    <img class="popular-book-icon" src="'.concat(n,'" alt="').concat(e,'" width = 180px />\n                    <h4 class="popular-book-title">').concat(e,'</h4>\n                    <span class="popular-book-author">').concat(r,"</span>\n                  </li>")}));s.innerHTML=n.join(" "),s.classList.replace("popular-books","groop-book-page")}console.dir(h),s.addEventListener("click",(function(t){if("popular-books-btn"===t.target.className){var r=t.target.parentNode.firstElementChild.textContent;v(d,r,w)}})),u.addEventListener("click",(function(t){var r=t.target.textContent;v(d,r,w)}))}();
//# sourceMappingURL=shop-list.0cd4b281.js.map