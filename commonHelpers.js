import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let a=null;t.disabled=!1;e.disabled=!0;const d=()=>{t.disabled=!t.disabled,e.disabled=!e.disabled},n=()=>{a=setInterval(()=>{document.body.style.backgroundColor=r()},1e3),d()},o=()=>{clearInterval(a),d()};t.addEventListener("click",n);e.addEventListener("click",o);function r(){return`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,0)}`}
//# sourceMappingURL=commonHelpers.js.map