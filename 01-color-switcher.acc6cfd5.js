const t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),interval:null};t.startBtn.addEventListener("click",(()=>{t.interval=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),console.log(t.interval),t.startBtn.setAttribute("disabled",!0),t.stopBtn.removeAttribute("disabled")})),t.stopBtn.addEventListener("click",(()=>{clearInterval(t.interval),t.stopBtn.setAttribute("disabled",!0),t.startBtn.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.acc6cfd5.js.map
