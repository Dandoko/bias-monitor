(()=>{var t={766:t=>{t.exports={environment:"prod",api_url:"https://api.thebipartisanpress.com/api/endpoints/beta/robert",api_key:"gAAAAABeVpQJKRM5BqPX91XW2AKfz8pJosk182maAweJcm5ORAkkBFj__d2feG4H5KIeOKFyhUVSY_uGImiaSBCwy2L6nWxx4g=="}}},e={};function r(o){var s=e[o];if(void 0!==s)return s.exports;var n=e[o]={exports:{}};return t[o](n,n.exports,r),n.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=r(766),e=r.n(t);class o{constructor(t=""){this.name="NotImplementedError",this.message=t}}class s{build_url(t,...e){throw new o}build_body(...t){throw new o}get_headers(){throw new o}}const n=class extends s{build_url(t){return t}build_body(t,e){return`API=${t}&Text=${e}`}get_headers(){return[["Content-type","application/x-www-form-urlencoded; charset=utf-8"]]}},a=["h1"];let i="";for(const t of a){const e=document.getElementsByTagName(t);for(const t of e)i+=t.textContent,i+=" "}i.split(" ").length>5&&async function(){const t=new n,r=t.build_url(e().api_url),o=t.build_body(e().api_key,i),s=t.get_headers(),a=await class{static async post_to_api(t,r,o=null){if("prod"!=e().environment)return 80*Math.random()-40;let s;try{s=await this._post(t,r,o)}catch(t){s="Error posting data",console.error(`${s}: ${t}`)}return s}static async _post(t,e,r){return new Promise((function(o,s){const n=new XMLHttpRequest;n.open("POST",t),r.forEach((t=>{n.setRequestHeader(...t)})),n.onload=function(){this.status>=200&&this.status<300?o(n.response):s({status:this.status,statusText:n.statusText})},n.onerror=function(){s({status:this.status,statusText:n.statusText})},n.send(e)}))}}.post_to_api(r,o,s);chrome.storage.sync.get({url_history:{}},(function(t){var e=t.url_history;console.log(a),e.hasOwnProperty(window.location.toString())||(e[window.location.toString()]=a);var r=0;for(const[t,o]of Object.entries(e))r+=o;var o=r/Object.keys(e).length;chrome.storage.sync.set({url_history:e}),chrome.storage.sync.set({activeScore:e[window.location.toString()]}),chrome.storage.sync.set({averageScore:o})}))}()})()})();