import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as g,i as x}from"./assets/vendor-651d7991.js";const n="00",s=document.querySelector("[data-start]"),i=document.getElementById("datetime-picker");s.disabled=!0;const u=document.querySelector("[data-days]"),m=document.querySelector("[data-hours]"),l=document.querySelector("[data-minutes]"),h=document.querySelector("[data-seconds]"),I=t=>{const e=t[0].getTime();if(new Date().getTime()>e){x.error({message:"Please choose a date in the future",position:"topRight"});return}s.disabled=!1,f=e};g("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:I});let f=0,y=null;const S=()=>{i.disabled=!0,s.disabled=!0,y=setInterval(()=>{const t=new Date().getTime(),e=f-t;if(0>e){D();return}const{days:r,hours:c,minutes:d,seconds:a}=b(e);u.textContent=o(r),m.textContent=o(c),l.textContent=o(d),h.textContent=o(a)},1e3)},b=t=>{const a=Math.floor(t/864e5),T=Math.floor(t%864e5/36e5),p=Math.floor(t%864e5%36e5/6e4),C=Math.floor(t%864e5%36e5%6e4/1e3);return{days:a,hours:T,minutes:p,seconds:C}},o=t=>t.toString().padStart(2,"0"),D=()=>{clearInterval(y),i.disabled=!1,u.textContent=n,m.textContent=n,l.textContent=n,h.textContent=n};s.addEventListener("click",S);
//# sourceMappingURL=commonHelpers2.js.map
