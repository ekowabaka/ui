(()=>{"use strict";const t=new Map,e={init:function(){document.querySelectorAll("ul.tabs").forEach((e=>t.set(e,new i(e))))},get:function(e){return"string"==typeof e&&(e=document.getElementById(e)),t.get(e)}};class i{#t;#e;constructor(t){let e=null;this.#t=t,t.querySelectorAll("li").forEach((t=>{null===e&&(e=t),this.#i(t)}));for(const e of t.parentNode.children)e.classList.contains("panes")&&(this.#e=e);null!==this.#e&&this.#e.querySelectorAll("div"),new MutationObserver(((t,e)=>this.#n(t,e))).observe(t,{childList:!0}),e&&this.showTab(e)}#i(t){const e=new CustomEvent("fz-tab-initialized",{detail:t});t.addEventListener("click",(()=>this.showTab(t))),console.log(this.#t),this.#t.dispatchEvent(e)}#n(t){t=t.filter((t=>"childList"===t.type));for(const e of t)e.addedNodes.forEach((t=>{"LI"===t.nodeName&&this.#i(t)}))}showTab(t){let e;this.#t.querySelectorAll("li").forEach(((i,n)=>{i.classList.remove("active"),i===t&&(e=n)})),this.#t.querySelectorAll("li").forEach((t=>t.classList.remove("active"))),t.classList.add("active");let i=0;this.#e.querySelectorAll("div").forEach((t=>t.classList.remove("active")));for(const t of this.#e.childNodes)if(t.nodeType===Node.ELEMENT_NODE&&i++===e){t.classList.add("active");break}}}window.addEventListener("load",(()=>{e.init()})),window.fzui={nav:e}})();