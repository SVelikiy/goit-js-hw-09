import"./assets/modulepreload-polyfill-3cfb730f.js";let t={email:"",message:""};const e=JSON.parse(localStorage.getItem("feedback-form-state"));function c(){if(e)t=e,l.value=e.email,o.value=e.message;else return}const a=document.querySelector(".feedback-form"),l=document.querySelector("input"),o=document.querySelector("textarea");a.addEventListener("input",n);a.addEventListener("submit",s);function n(){t={email:l.value,message:o.value},localStorage.setItem("feedback-form-state",JSON.stringify(t))}function s(r){if(r.preventDefault(),!localStorage.getItem("feedback-form-state"))return alert("Fill please all fields");console.log(localStorage.getItem("feedback-form-state")),localStorage.clear(),a.reset()}c();
//# sourceMappingURL=commonHelpers2.js.map
