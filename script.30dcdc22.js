parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mpVp":[function(require,module,exports) {
function t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function e(e){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?t(Object(i),!0).forEach(function(t){n(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function n(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}!function(){var t=document.getElementById("canvas");t.height=document.body.clientHeight,t.width=document.body.clientWidth;var n=t.getContext("2d"),i=[],o=5,c=.5,a=.8/60;t.onclick=function(t){var e=t.clientX,n=t.clientY;i.push(new l(e,n,y(),y()))};var l=function t(e,n,i,o){r(this,t),this.position={x:e,y:n},this.velocity={x:i,y:o}};function y(){return Math.floor(20*Math.random())-10}setInterval(function(){if(!i.length)return;n.clearRect(0,0,t.width,t.height),i.forEach(function(r){var i=r.position,l=i.x,y=i.y;n.beginPath(),n.arc(l,y,o,0,2*Math.PI),n.fillStyle="#000",n.fill(),n.closePath(),function(n){var r=e({},n),i=r.position,l=r.velocity;i.x+=l.x,i.y+=l.y,(i.x-o<0||i.x>t.width-o)&&(l.x*=-1);i.y+o>t.height&&(i.y=t.height-o,l.y*=-1,l.y*=.8,l.y<0&&l.y>-3.5&&0===l.x&&(l.y=0),Math.abs(l.x)<1.1&&(l.x=0));l.y+=c,l.x>0&&(l.x-=a);l.x<0&&(l.x+=a);n.position=i,n.velocity=l}(r)})},1/60*1e3)}();
},{}]},{},["mpVp"], null)
//# sourceMappingURL=/script.30dcdc22.js.map