!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vue-flat-calendar",[],t):"object"==typeof exports?exports["vue-flat-calendar"]=t():e["vue-flat-calendar"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,a){"use strict";t.a={name:"vue-flat-calendar",props:{showCalendar:{type:Boolean,default:!1},defaultDate:{type:Date,default:new Date}},model:{prop:"showCalendar",event:"toggleShowCalendar"},data:function(){return{currentYear:"",selectedDate:"",week:["日","一","二","三","四","五","六"],datesInYear:[]}},computed:{getFirstDayInMonth:function(e){var t=this;return function(e){return new Date(t.currentYear,e,1).getDay()}}},methods:{emitToggle:function(){this.$emit("toggleShowCalendar",!this.showCalendar)},clickDate:function(e,t){t&&(this.$emit("change",new Date(this.currentYear,e,t)),this.emitToggle())},getDatesInYear:function(e,t){for(var a=this,n=0;n<12;n++){var r=[],i=new Date(+e,n+1,0).getDate(),s=this.getFirstDayInMonth(n);this.$set(this.datesInYear,n,[]);for(var o=1;o<=i;o++)r.push(o);for(var l=0;l<s;l++)r.unshift("");if(r.length%this.week.length)for(var c=this.week.length-r.length%this.week.length,d=0;d<c;d++)r.push("");for(var u=0;u<r.length/this.week.length;u++){var p=r.slice(this.week.length*u,this.week.length*(u+1));this.datesInYear[n].push(p)}}t&&this.$nextTick(function(){a.scrollToCurMonth()})},prevYear:function(){this.getDatesInYear(--this.currentYear)},nextYear:function(){this.getDatesInYear(++this.currentYear)},scrollToCurMonth:function(){this.$refs.months.scrollTop=this.$refs.curRow[0].offsetTop-90}},mounted:function(){},watch:{showCalendar:function(e,t){e&&(this.selectedDate=this.defaultDate,this.currentYear=this.selectedDate.getFullYear(),this.getDatesInYear(this.currentYear,!0))}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),r={install:function(e,t){e.component(n.a.name,n.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(r),t.default=r},function(e,t,a){"use strict";function n(e){a(3)}var r=a(0),i=a(9),s=a(8),o=n,l=s(r.a,i.a,!1,o,"data-v-a15187da",null);t.a=l.exports},function(e,t,a){var n=a(4);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(6)("1d427a7a",n,!0,{})},function(e,t,a){t=e.exports=a(5)(!1),t.push([e.i,".slide-enter-active[data-v-a15187da],.slide-leave-active[data-v-a15187da]{transition:transform .3s}.slide-enter[data-v-a15187da],.slide-leave-to[data-v-a15187da]{transform:translate3d(0,100%,0)}.calendar-wrapper[data-v-a15187da]{user-select:none;-webkit-touch-callout:none;display:block;position:fixed;left:0;bottom:0;width:100%;height:100%;display:flex;flex-direction:column;background:#fff}.calendar-wrapper>.title[data-v-a15187da]{position:relative;text-align:center;padding:5px 0;background:#f9f9f9}.calendar-wrapper>.title .close-icon[data-v-a15187da]{position:absolute;left:0;top:0;height:22px;width:auto;padding:5px}.calendar-wrapper>.title span[data-v-a15187da]{font-size:16px;font-weight:500}.calendar-wrapper .calendar[data-v-a15187da]{flex:1;display:flex;flex-direction:column}.calendar-wrapper .calendar .year-select-panel[data-v-a15187da]{display:flex;align-items:center;background:#f9f9f9}.calendar-wrapper .calendar .year-select-panel .icon[data-v-a15187da]{height:20px;width:auto;padding:5px}.calendar-wrapper .calendar .year-select-panel span[data-v-a15187da]{flex:1;text-align:center;font-size:18px;font-weight:500;color:#ff3b30}.calendar-wrapper .calendar .week-panel[data-v-a15187da]{display:flex;align-items:center;background:#f9f9f9;padding:5px 0;border-bottom:1px solid #ccc}.calendar-wrapper .calendar .week-panel .cell[data-v-a15187da]{flex:1;text-align:center;font-size:12px}.calendar-wrapper .calendar .months[data-v-a15187da]{flex:1;overflow:auto;-webkit-overflow-scrolling:touch}.calendar-wrapper .calendar .months .single-month .month-title[data-v-a15187da]{font-size:16px;font-weight:500;color:#ff3b30}.calendar-wrapper .calendar .months .single-month .row[data-v-a15187da]{display:flex;align-items:center}.calendar-wrapper .calendar .months .single-month .row .cell[data-v-a15187da]{flex:1;text-align:center;font-size:16px;padding:6px 0}.calendar-wrapper .calendar .months .single-month .row .cell span[data-v-a15187da]{display:inline-block;width:28px;height:28px;line-height:28px}.calendar-wrapper .calendar .months .single-month .row .cell span.gray[data-v-a15187da]{color:#a3a3a3}.calendar-wrapper .calendar .months .single-month .row .cell span.date-selected[data-v-a15187da]{background:#ff3b30;color:#fff;border-radius:50%}",""])},function(e,t){function a(e,t){var a=e[1]||"",r=e[3];if(!r)return a;if(t&&"function"==typeof btoa){var i=n(r);return[a].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[a].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=a(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,a){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(n[i]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&n[s[0]]||(a&&!s[2]?s[2]=a:a&&(s[2]="("+s[2]+") and ("+a+")"),t.push(s))}},t}},function(e,t,a){function n(e){for(var t=0;t<e.length;t++){var a=e[t],n=d[a.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](a.parts[r]);for(;r<a.parts.length;r++)n.parts.push(i(a.parts[r]));n.parts.length>a.parts.length&&(n.parts.length=a.parts.length)}else{for(var s=[],r=0;r<a.parts.length;r++)s.push(i(a.parts[r]));d[a.id]={id:a.id,refs:1,parts:s}}}}function r(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function i(e){var t,a,n=document.querySelector("style["+v+'~="'+e.id+'"]');if(n){if(O)return h;n.parentNode.removeChild(n)}if(y){var i=f++;n=p||(p=r()),t=s.bind(null,n,i,!1),a=s.bind(null,n,i,!0)}else n=r(),t=o.bind(null,n),a=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else a()}}function s(e,t,a,n){var r=a?"":n.css;if(e.styleSheet)e.styleSheet.cssText=D(t,r);else{var i=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function o(e,t){var a=t.css,n=t.media,r=t.sourceMap;if(n&&e.setAttribute("media",n),g.ssrId&&e.setAttribute(v,t.id),r&&(a+="\n/*# sourceURL="+r.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=a(7),d={},u=l&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,O=!1,h=function(){},g=null,v="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,a,r){O=a,g=r||{};var i=c(e,t);return n(i),function(t){for(var a=[],r=0;r<i.length;r++){var s=i[r],o=d[s.id];o.refs--,a.push(o)}t?(i=c(e,t),n(i)):i=[];for(var r=0;r<a.length;r++){var o=a[r];if(0===o.refs){for(var l=0;l<o.parts.length;l++)o.parts[l]();delete d[o.id]}}}};var D=function(){var e=[];return function(t,a){return e[t]=a,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var a=[],n={},r=0;r<t.length;r++){var i=t[r],s=i[0],o=i[1],l=i[2],c=i[3],d={id:e+":"+r,css:o,media:l,sourceMap:c};n[s]?n[s].parts.push(d):a.push(n[s]={id:s,parts:[d]})}return a}},function(e,t){e.exports=function(e,t,a,n,r,i){var s,o=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(s=e,o=e.default);var c="function"==typeof o?o.options:o;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),a&&(c.functional=!0),r&&(c._scopeId=r);var d;if(i?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=d):n&&(d=n),d){var u=c.functional,p=u?c.render:c.beforeCreate;u?(c._injectStyles=d,c.render=function(e,t){return d.call(t),p(e,t)}):c.beforeCreate=p?[].concat(p,d):[d]}return{esModule:s,exports:o,options:c}}},function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"slide"}},[e.showCalendar?n("div",{staticClass:"calendar-wrapper"},[n("div",{staticClass:"title"},[n("img",{staticClass:"close-icon",attrs:{src:a(10)},on:{click:e.emitToggle}}),e._v(" "),n("span",[e._v("日期选择")])]),e._v(" "),n("div",{staticClass:"calendar"},[n("div",{staticClass:"year-select-panel"},[n("img",{staticClass:"icon",attrs:{src:a(11)},on:{click:e.prevYear}}),e._v(" "),n("span",[e._v(e._s(e.currentYear))]),e._v(" "),n("img",{staticClass:"icon",attrs:{src:a(12)},on:{click:e.nextYear}})]),e._v(" "),n("div",{staticClass:"week-panel"},e._l(e.week,function(t,a){return n("span",{key:a,staticClass:"cell"},[e._v(e._s(t))])})),e._v(" "),n("div",{ref:"months",staticClass:"months"},e._l(e.datesInYear,function(t,a){return n("div",{key:a,staticClass:"single-month"},[n("div",{staticClass:"month-title"},[n("div",{ref:e.selectedDate.getFullYear()==e.currentYear&&e.selectedDate.getMonth()==a?"curRow":"",refInFor:!0,staticClass:"row"},e._l(e.week,function(t,r){return n("div",{key:r,staticClass:"cell"},[e._v(e._s(e.getFirstDayInMonth(a)==r?a+1+"月":""))])}))]),e._v(" "),n("div",{staticClass:"date"},e._l(t,function(t,r){return n("div",{key:r,staticClass:"row"},e._l(t,function(t,r){return n("div",{key:r,staticClass:"cell"},[n("span",{class:{"date-selected":e.selectedDate.getFullYear()==e.currentYear&&e.selectedDate.getMonth()==a&&e.selectedDate.getDate()==t,gray:0===r||6===r},on:{click:function(n){e.clickDate(a,t)}}},[e._v(e._s(t))])])}))}))])}))])]):e._e()])},r=[],i={render:n,staticRenderFns:r};t.a=i},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAABVlBMVEVMaXH/QCD/Oyf/Oy//OjD/ORz/OjD/Li7/OjD/Oy//JCT/Oi//Oi//OzD/Kyv/NyT/MDD/AAD/OzD/MzP/Oy//Oi//OjD/Oi//PC3/Oi//QAD/OSv/PCv/OjD/OjD/Oy//Myb/OjD/OS//OzD/OzD/OjD/Oy//Oy//ODD/Oi//OjD/OS7/Oy//Oi//OTD/PTH/OTD/OSr/OjD/OzD/OjD/OzD/OzD/Oy//Oi//OzD/OS//Oi//Oi7/Oi//OjH/NzD/OS//Nyz/OjD/OS//Oy7/Oi//Oi//OzD/OzH/OzD/Oi//Oi//OS//Oi7/OC7/OjD/OjD/Oy//Oy//Oy//Oi//Oi//OCz/OjD/Oyz/Oi//Oi//ODD/Oi//Oi//OjD/Oy7/OTH/OjD/Oi//Ni7/OzD/Oi//AAD/OzD/AAD/Oi//Oy//OzD/NzH/OzD/Oi//OjD/OjD/OzDgq/PCAAAAcXRSTlMACA3DxQnPC8rIB73NvwYOEALMD9TC9rgR0gQSHtZPtxTwNvzV+uLzIP17dMfXbxVQJPGGwUqPaIOleLxuuR8lURfcG3m0s9AaunPOMRY39cbyfWyjnSlgNOOnQIhdkD0/wEYhy3cBoQNyfnUqtpEwhY8hCQcAAAN2SURBVHja7dxVc+MwFIZhJW3qpA24lHK33C0sM3aZmZmZz/+/2ZvMTuraahyfo0ja773NjNKnDtiOJKUQQgghhBBCCCGEEEIIIYQQQgghhBBCqKmJH3MeKM6uPiUiGng1yTzw3hdvl3d9PrnTDKN/rU6N7h7hHHj6XGPY+td+E5Ad1NSJkO3FOtI07B0DB+Ujbapc4xm2NrZp2MtfpB3nKdLAIMewgwORYY9KQy5EISzHpFaOjrryRBgyRVslmd8nYXnrqA9lHVWKKesxqcU4aF0WcoP4JbEOWpaFzMVCqJjhHT9YjB9TFjIZ/6QZjkn88SBakIWMU5Ik4HXQMZPf682V2pIESQ76Lgz5TZySoJQ02v490t+IvxglyQ56KX/yu84m0Th+Gjj7DYeYJBrHUKhMSHpYJBpHjxGHUnkOic6RN3WtyyCxwsEgscShlxQccmglXdtKCvY4MkkKXRY5Mkgsc7Qtsc7RpkTjKHbIoVS+mFqicwSqYwVpJZY6UkusdeglvQ45tJK+iKTXZkcKSW+f1Y6WJdY7WpQ44GhJonF0W+NoQaJz5JRyRuKMQ6mgWyNxyKFUMJz4x45cTXxoOFDWlUs+Jg4dj/YkdjrSS2x1pJXY60gnqVjsSCOpVJXyQWK7o1WJ/Y7WJC44lMpV/HAoVa344dhO4o5DL3HJ4Q3El5eWL2/2qicfv9s7HPlir/xPp1r+nPz6cznizwWiP5fs/txE8ee2lp2SguaW6UjiQwcLDh0Pp25ia2/G+/PziDOSjD+95RxyOPEjoi8/T/syYcCXKRy+TKrxZZpT3pOJZ21MarRSwj45M3DIYaFEYgJzJyRZppSXLJr6m2mSvxuLFZxaduHLQpjQk6VJLAv4LJAwLUTsuMTEgkoTkvGiiSWuF+UhDzgXHScuAqfH0o43rMvAE5fl0+wVYcgl3oX5yZLjso7+eVNbJTyThWwY27xiShZyKP5Zs2wgFJY7sZ3IO2MbvMzKQkaNbblzSvhTayHmdRVKnIQeEIZcE9mWanQsOmp9UhgysyjgiJGsiZ+i7JbZui0i6TGwnd6fTes/Qq5hJ5on43x4b+I8/sy/7Q3nvzH+4z7dv90YdvHeuJkrq5urS0REtHSLd9zTJaKV64ena8pc+56/fjSjEEIIIYQQQgghhBBCCCGEEEIIIYQQQki+v0mYCOS8j/BAAAAAAElFTkSuQmCC"},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAe1BMVEVMaXH/NyT/Li7/OjD/Nyz/AAD/OjD/Oi//Myb/ORz/AAD/Oy//OjD/MzP/OzD/JCT/Oi//Oy//Oy//AAD/OjD/Oy//Oi//Oi//PC3/Oi//OzD/OTD/Oy//Oy//OS//Oi//OjD/PTH/MzP/Ny7/OS7/OS//OjD/OzD/OzA9HSXIAAAAKHRSTlMADgvbFwKW1xQJA8jfBbEHvbekAavDndIRzY9vaIcbd4AVDxxZeNbVDI07MgAAAYJJREFUeNrt3ddKA0EAhWETS6KJKZYUe6zz/k/ohYItw14pzPH73+BjF5ZhB87OjiRJkiRJ0pbuQxwP46cIx824lNsQR4LkzdG+ZO/dUcpl247dUhIknx0tS7462pV8d5Ry1aRj+MPRpmQ4KCVBst3RnmTzXCo9RjyPUgbDlhyrFMeSg4OjVi/Fsebg4KjVT3GMODg4ah2mOM45ODhqTVMcMw4OjlrHKY45BwdHraMUx4SDg6PWforjjIODo9ZpiuOEg4OjWopjwcHBEe844ODgiHdccHBwVLvm4OCodhfiyIHEvFokPuwkJCSOuiQkJH/VgoSE5B9JUn5P51wYICH5TclZimSfhISkWzJJkRyRkJB0S+YpkmMSEpJuySxFMiUhIemWnKdIDklISLoloxRJn4SEpFuyTpH0SEhIuiXLFMmKhISkWzJIkQxjJJuXjLGhnPmnnEGunIm0nNG6nBnBnGHHnKnNnPHTjzna1h05A8E5k805I9o5s+aSJEmSJGl7rwOZOvFta1jlAAAAAElFTkSuQmCC"},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAhFBMVEVMaXH/Oy//Oy//NyT/ORz/AAD/Oi//Oi//Myb/OTD/OjD/Oy//OjD/PC3/OzD/MzP/AAD/OjD/OjD/Li7/Oy//JCT/Nyz/Oi//AAD/Oi//Oi//OzD/Oy//OS//Oi//Oy//PTH/OjD/OzD/OzD/Ny7/OSv/OjD/OS7/OjD/OS//MzP/OzBylZl1AAAAK3RSTlMApLcOCQK91xRv28PfEbEFAauWC8gHF50DzdKPhxt3aBWA1VscEn9Z1ngPTv29/gAAAYtJREFUeNrt3UdOQzEARVGHGkLoJJQECL14//tjgpAowbNIfpy7g6P/h7ZfKZIkSZIkKbm3EMfr+CHCcV3r+CrDESG5rjVCslM/Gk8zHLWOphmOriVfHB1Lvjm6lfxw1Doadui4qb+0PcxwdCi5r0t6WfQFGW4vk/T2Tf6Q7KVILklISNqS9RTJBQkJSVtykiI5JSEhaUs2UiS7JCQkbckkRbJFQkLSlhykSNZISEjakvMUyT4JCUlbspkiOSIhIWlLDlMkAxISkrakpEjOSEhI/pHkmISE5B9JZiQkJE3JnISEpCm5BfFrceQ7ZhwcHPGOYw4OjnjHGQcHR7xjkOI45ODgyDh4lnIUkINjtY79FMc5BwdHxmWxlOt7HByrdWylOCYcHBwZD7ykPLnDwbFax2mK44SDgyPjUdaUZ3I5OFbruExx7HFwcGQMqcRM2zwvc9wtSl+lzD/lDHLlTKTljNblzAjmDDvmTG1+jrh2P36aM0ebMxBcylOIo5R5iKOUxyJJkiRJkvRL77vAY6r8nkthAAAAAElFTkSuQmCC"}])});
//# sourceMappingURL=vue-flat-calendar.js.map