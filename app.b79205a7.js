parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"A2T1":[function(require,module,exports) {
const t=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],e=document.querySelector(".gallery"),o=document.querySelector(".gallery__link"),i=document.querySelector(".js-lightbox"),n=document.querySelector(".lightbox__image"),a=i.querySelector(".lightbox__button"),p=document.querySelector(".lightbox__overlay"),c=t=>{let e="";return t.forEach(({preview:t,original:o,description:i})=>{e+=`<li class="gallery__item">\n      <a\n        class="gallery__link"\n        href="${o}"\n      >\n        <img\n          class="gallery__image"\n          src="${t}"\n          data-source="${o}"\n          alt="${i}"\n        />\n      </a>\n    </li>`}),e},r=c(t);function s(t){t.preventDefault(),"IMG"===t.target.nodeName&&(i.classList.add("is-open"),n.src=t.target.dataset.source,n.alt=t.target.alt)}function l(){i.classList.remove("is-open"),n.src="",n.alt=""}e.insertAdjacentHTML("afterbegin",r),e.addEventListener("click",s),a.addEventListener("click",l),p.addEventListener("click",l),window.addEventListener("keydown",t=>{"Escape"===t.key&&i.classList.contains("is-open")&&l()});const d=t.map(t=>t.original);function h(t){let e=t-1;-1===e&&(e=d.length-1),n.src=d[e]}function g(t){let e=t+1;e===d.length&&(e=0),n.src=d[e]}document.addEventListener("keydown",t=>{if(!i.classList.contains("is-open"))return;const e=d.indexOf(n.src);"ArrowLeft"===t.key?h(e):"ArrowRight"===t.key&&g(e)});
},{}]},{},["A2T1"], null)
//# sourceMappingURL=/goit-js-hw-09-gallery/app.b79205a7.js.map