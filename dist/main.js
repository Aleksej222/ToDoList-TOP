(()=>{"use strict";var e={d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{c:()=>a});class t{constructor(e,t){this.title=e,this.tasks=t}}let n,a,r=document.querySelector(".projects");function l(){n.outerHTML=""}function c(){let e=!1,r=!1,c=n.querySelector("input").value,o=new t(c,[]);r=function(e){let t=!1,n="",r=function(e){let t=!1;return a.map((n=>{n.title.toLowerCase()==e.toLowerCase()&&(t=!0)})),t}(e.title);r&&(n="Project with that name already exists.");let l=e.title.length<1;l&&(n="Project name can't be empty.");let c=function(e){return e.length>=25}(e.title);return c&&(n="Project name is too long."),document.querySelector(".error-message").innerText=n,t=0==r,t=t&&0==l,t=t&&0==c,t}(o),r&&(e=!0,a.push(o),localStorage.setItem("allProjects",JSON.stringify(a))),e&&i(o),l()}function i(e){let t=r.querySelector("ul"),n=document.createElement("li");n.classList.add("project"),n.innerText=e.title,n.setAttribute("id",e.title);let a=document.createElement("span");a.classList.add(".number-of-tasks"),n.appendChild(a),t.appendChild(n),r.appendChild(t)}function o(){let e,t=this.id;if(document.querySelector(".project-name").innerText!==t){switch(t){case"All tasks":e=function(){let e=[];return a.forEach((t=>{t.tasks.forEach((t=>{e.push(t)}))})),e}();break;case"Today":case"This week":e=void 0;break;default:e=function(e){return a.find((t=>t.title==e)).tasks}(t)}document.querySelector(".tasks-list").innerHTML="",function(e,t){let n=document.querySelector(".tasks-container"),a=n.querySelector(".project-name"),r=n.querySelector(".tasks-list");a.innerText=e,t.forEach((e=>{r.appendChild(function(e){let t=document.createElement("div");t.classList.add("task");let n=document.createElement("span");n.classList.add("task-date"),n.innerText=e.date;let a=document.createElement("h4");a.classList.add("task-title"),a.innerText=e.title;let r=document.createElement("span");r.classList.add("task-description"),r.innerText=e.description;let l=document.createElement("div");l.classList.add("tasks-btns");let c=document.createElement("button");c.classList.add("edit-task"),c.innerText="pen";let i=document.createElement("button");return i.classList.add("delete-task"),i.innerText="trash-can",l.appendChild(c),l.appendChild(i),t.appendChild(n),t.appendChild(a),t.appendChild(r),t.appendChild(l),t}(e))}))}(t,e)}}a||(a=[]),a||(a=[]),localStorage.getItem("allProjects")&&(a=localStorage.getItem("allProjects"),a=JSON.parse(a),a.forEach((e=>{i(e)})));let d=document.querySelectorAll(".menu-options > li");d[0],d.forEach((e=>{e.addEventListener("click",o)})),document.querySelector(".btn-addProject").addEventListener("click",(function(){null==document.querySelector(".new-project-container")&&r.appendChild(function(){n=document.createElement("div"),n.classList.add("new-project-container");let e=document.createElement("input");e.setAttribute("maxLength",25);let t=document.createElement("button");t.innerText="Add project",t.addEventListener("click",c);let a=document.createElement("button");return a.innerText="Cancel",a.addEventListener("click",l),n.appendChild(e),n.appendChild(t),n.appendChild(a),n}())}))})();