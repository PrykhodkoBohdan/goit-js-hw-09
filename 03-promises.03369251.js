function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){n[e]=o},o.parcelRequired7c6=r);var l=r("eWCmQ");const u={delay:document.querySelector("[name=delay]"),step:document.querySelector("[name=step]"),amount:document.querySelector("[name=amount]"),form:document.querySelector(".form")};let{delay:i,step:a,amount:d,form:s}=u;function f(e,o){return new Promise(((t,n)=>setTimeout((()=>{Math.random()>.3?t({position:e,delay:o}):n({position:e,delay:o})}),o)))}s.addEventListener("submit",(function(o){o.preventDefault(),a=Number(a.value),i=Number(i.value),d=Number(d.value),console.log("я then",a.value);for(let o=1;o<=d;o++)console.log("я then"),f(o,i).then((({position:o,delay:t})=>{e(l).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`)})).catch((({position:o,delay:t})=>{e(l).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`)})),i+=a}));
//# sourceMappingURL=03-promises.03369251.js.map