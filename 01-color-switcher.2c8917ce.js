!function(){var t=null,o=!1,n={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),body:document.querySelector("body")};function e(){n.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}n.startBtn.addEventListener("click",(function(){if(o)return;t=setInterval(e,1e3),o=!0,console.log("Started")})),n.stopBtn.addEventListener("click",(function(){console.log("Stoppped"),clearInterval(t),o=!1}))}();
//# sourceMappingURL=01-color-switcher.2c8917ce.js.map
