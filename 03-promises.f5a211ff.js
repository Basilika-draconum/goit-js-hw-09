!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=r);var i=r("iU1Pc");({formCreatePromises:document.querySelector(".form"),btnCreatePromise:document.querySelector("button")}).formCreatePromises.addEventListener("submit",(function(t){t.preventDefault();var n=Number(t.target.elements.delay.value),o=Number(t.target.elements.step.value),r=Number(t.target.elements.amount.value),a=1;!function t(){if(!(a<=r))return a=1;var u,l,c;(u=a,l=1===a?n:o,c=Math.random()>.3,new Promise((function(e,t){setTimeout((function(){c?e({position:u,delay:l}):t({position:u,delay:l})}),l)}))).then((function(t){var n=t.position,o=t.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(i).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})).finally((function(){a++,t()}))}()}))}();
//# sourceMappingURL=03-promises.f5a211ff.js.map
