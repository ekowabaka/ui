(()=>{"use strict";const e=new Map,t={init:function(){document.querySelectorAll("ul.tabs").forEach((t=>e.set(t,new i(t))))},get:function(t){return"string"==typeof t&&(t=document.getElementById(t)),e.get(t)}};class i{#e;#t;constructor(e){let t=null;this.#e=e,e.querySelectorAll("li").forEach((e=>{null===t&&(t=e),this.#i(e)}));for(const t of e.parentNode.children)t.classList.contains("panes")&&(this.#t=t);null!==this.#t&&this.#t.querySelectorAll("div"),new MutationObserver(((e,t)=>this.#n(e,t))).observe(e,{childList:!0}),t&&this.showTab(t)}#i(e,t){const i=new CustomEvent("fz-tab-initialized",{detail:t});e.addEventListener("click",(()=>this.showTab(e))),this.#e.dispatchEvent(i)}#n(e){e=e.filter((e=>"childList"===e.type));for(const t of e)t.addedNodes.forEach((e=>{if("LI"===e.nodeName){let t=0,i=e;for(;i.previousElementSibling;)t+=1,i=i.previousElementSibling;this.#i(e,t)}}))}showTab(e){let t;this.#e.querySelectorAll("li").forEach(((i,n)=>{i.classList.remove("active"),"object"==typeof e&&i===e?t=n:"number"==typeof e&&n==e&&(t=n,e=i)})),this.#e.querySelectorAll("li").forEach((e=>e.classList.remove("active"))),e.classList.add("active");let i=0;this.#t.querySelectorAll("div").forEach((e=>e.classList.remove("active")));for(const e of this.#t.childNodes)if(e.nodeType===Node.ELEMENT_NODE&&i++===t){e.classList.add("active");break}}}window.addEventListener("load",(()=>{t.init()})),window.fzui={nav:t}})();