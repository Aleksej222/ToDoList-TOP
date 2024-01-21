(()=>{"use strict";var e={d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}};e.d({},{c:()=>y});var t={};e.r(t),e.d(t,{c:()=>y});class n{constructor(e,t,n){this.id=e,this.title=t,this.tasks=n}}function a(){return Math.floor(1e8*Math.random())}let l,d,i,c,o,s,r,u,m,p,h,y,f=document.querySelector(".projects");function k(){l.outerHTML=""}function C(){let e=!1,t=!1,d=a(),i=l.querySelector("input").value,c=new n(d,i,[]);t=E(c.title),t&&(e=!0,y.push(c),localStorage.setItem("allProjects",JSON.stringify(y))),e&&(L(c),location.reload(),k())}function L(e){let t=f.querySelector("ul"),n=document.createElement("li");n.classList.add("project"),n.innerText=e.title,n.setAttribute("id",e.title);let a=document.createElement("span");a.classList.add("number-of-tasks"),a.innerText="         "+e.tasks.length,n.appendChild(a),t.appendChild(n),f.appendChild(t)}function E(e){let t=!1,n=document.querySelector(".error-message"),a="",l=function(e){let t=!1;return y.map((n=>{n.title.toLowerCase()==e.toLowerCase()&&(t=!0)})),t}(e);l&&(a="Project with that name already exists.");let d=e.length<1;d&&(a="Project name can't be empty.");let i=e.length>=25;i&&(a="Project name is too long.");let c=function(e){let t="all tasks"==e.toLowerCase();return t=t||"today"==e.toLowerCase(),t=t||"this week"==e.toLowerCase(),t}(e);return c&&(a="Project name can't be the same as the main option name."),n.innerText=a,t=0==l,t=t&&0==d,t=t&&0==i,t=t&&0==c,t}y||(y=[]);class b{constructor(e,t,n,a,l){this.id=e,this.title=t,this.date=a,this.description=n,this.priority=l}}function S(){const e=new Date;let t=e.getFullYear(),n=e.getMonth()+1,a=e.getDate();return n<10&&(n="0"+n),a<10&&(a="0"+a),t.toString()+"-"+n.toString()+"-"+a.toString()}function v(e,t){d=document.createElement("div"),d.classList.add("confirmation-modal");let n=document.createElement("div");n.classList.add("confirmation-container"),n.classList.add("modal-window");const a=document.createElement("div");a.classList.add("modal-top");let l=document.createElement("h3");"add"==e?l.innerText="Add New Task":"update"==e&&(l.innerText="Update Task"),a.appendChild(l);let i=document.createElement("div");i.classList.add("container-task-info");let c=document.createElement("form"),o=document.createElement("div");o.classList.add("container-input");let s=document.createElement("label");s.innerText="Title";let r=document.createElement("input");r.classList.add("input-field"),r.classList.add("task-name"),"update"==e&&(r.value=t.title),o.appendChild(s),o.appendChild(r);let u=document.createElement("div");u.classList.add("container-input");let m=document.createElement("label");m.innerText="Date";let p=document.createElement("input");if(p.type="date",p.classList.add("input-field"),p.classList.add("task-date"),"update"==e)p.value=t.date;else if("add"==e){let e=S();p.value=e}u.appendChild(m),u.appendChild(p);let h=document.createElement("div");h.classList.add("container-input");let f=document.createElement("label");f.innerText="Description";let k=document.createElement("textarea");k.classList.add("task-description"),"update"==e&&(k.value=t.description),h.appendChild(f),h.appendChild(k);let C=document.createElement("div");C.classList.add("container-input");let L=document.createElement("label");L.innerText="Priority";let E=document.createElement("select");E.classList.add("task-priority");let b=document.createElement("option");b.innerText="Low",b.setAttribute("value","low"),b.setAttribute("selected","selected");let v=document.createElement("option");v.innerText="Medium",v.setAttribute("value","medium");let j=document.createElement("option");j.innerText="High",j.setAttribute("value","high"),E.appendChild(b),E.appendChild(v),E.appendChild(j),"update"==e&&(E.value=t.priority),C.appendChild(L),C.appendChild(E);let w=document.createElement("span");w.classList.add("error-task-validation-message"),w.textContent="";let A=document.createElement("div");A.classList.add("container-buttons");let P=document.createElement("button");P.classList.add("btn"),P.classList.add("btn-modal"),P.setAttribute("type","submit"),"add"==e?(P.innerText="Add task",P.addEventListener("click",I)):"update"==e&&(P.innerText="Update task",P.addEventListener("click",(function(e){e.preventDefault(),function(e){let t=document.querySelector("input.task-name").value,n=document.querySelector("input.task-date").value,a=document.querySelector("textarea.task-description").value,l=document.querySelector("select.task-priority").value;e.title=t,e.date=n,e.description=a,e.priority=l;let d=!1;d=q(e),d&&(localStorage.setItem("allProjects",JSON.stringify(y)),x(),T(l,e.id))}(t)})));let O=document.createElement("button");return O.innerText="Cancel",O.classList.add("btn"),O.classList.add("btn-modal"),O.setAttribute("type","button"),O.addEventListener("click",g),A.appendChild(P),A.appendChild(O),c.appendChild(o),c.appendChild(u),c.appendChild(h),c.appendChild(C),c.appendChild(w),c.appendChild(A),i.appendChild(c),n.appendChild(a),n.appendChild(i),d.appendChild(n),d}function g(){document.querySelector(".modal-window").remove(),d.style.display="none"}function x(){let e=document.querySelector(".project-name").textContent,t=document.querySelector(`[id="${e}" ]`);t.addEventListener("click",$),t.click()}function q(e){let t=!0,n=document.querySelector(".error-task-validation-message"),a="";return e.title.length<1&&(a="Task name can't be empty."),e.title.length>30&&(a="Task name can't be longer than 30 characters."),e.description.length>300&&(a="Task description can't be longer than 300 characters."),t=""==a,n.textContent=t?"":a,t}function T(e,t){let n,a=document.querySelector(`.task[id="${t}"]`);switch(e){case"low":n="task-priority-low";break;case"medium":n="task-priority-medium";break;case"high":n="task-priority-high"}a.classList.add(n)}function j(){return i=[],y.forEach((e=>{e.tasks.forEach((e=>{i.push(e)}))})),i}function w(){let e=j();document.querySelector(".all-tasks-number-of-tasks").textContent=e.length}function A(){let e=[],t=S();return i.forEach((n=>{n.date==t&&e.push(n)})),e}function P(){let e=A();document.querySelector(".today-tasks-number-of-tasks").textContent=e.length}function O(){let e=[],t=S(),n=function(){const e=new Date;let t=new Date(e.getTime()-6048e5),n=t.getFullYear(),a=t.getMonth()+1,l=t.getDate();return a<10&&(a="0"+a),l<10&&(l="0"+l),t=n.toString()+"-"+a.toString()+"-"+l.toString(),t}();return i.forEach((a=>{a.date<=t&&a.date>=n&&e.push(a)})),e}function N(){let e=O();document.querySelector(".this-week-tasks-number-of-tasks").textContent=e.length}function D(e,n){let a=document.querySelector(`[id="${c.title}" ]`).querySelector(".number-of-tasks");return a.textContent=n,"increase"==e?t.totalNumberOfTasks++:"decrease"==e&&t.totalNumberOfTasks--,w(),P(),N(),a}function M(e){for(let t=0;t<y.length;t++){let n=y[t].tasks;for(let a=0;a<n.length;a++){let l=n[a];e.id==l.id&&(y[t].tasks.splice(a,1),localStorage.setItem("allProjects",JSON.stringify(y)),c=y[t],D("decrease",y[t].tasks.length))}}x()}function I(e){e.preventDefault();let t=a(),n=document.querySelector("input.task-name").value,l=document.querySelector("input.task-date").value,d=document.querySelector("textarea.task-description").value,i=document.querySelector("select.task-priority").value,o=document.querySelector(".tasks-container").querySelector(".tasks-list"),s=!1,r=!1,u=new b(t,n,d,l,i);r=q(u),r&&(s=!0,c.tasks.push(u),D("increase",c.tasks.length)),s&&(g(),o.appendChild(J(u)),localStorage.setItem("allProjects",JSON.stringify(y)),T(u.priority,u.id))}function J(e){let t=document.createElement("div");t.classList.add("task"),t.setAttribute("id",e.id);let n=document.createElement("div");n.classList.add("task-content");let a=document.createElement("span");a.classList.add("task-date"),a.innerText=e.date;let l=document.createElement("span");l.classList.add("task-title"),l.innerText=e.title;let d=document.createElement("span");d.classList.add("task-description"),d.innerText=e.description;let i=document.createElement("div");i.classList.add("task-btns");let c=document.createElement("i");c.classList.add("btn-done-task"),c.classList.add("fa"),c.classList.add("fa-check"),c.addEventListener("click",(function(){M(e)}));let o=document.createElement("i");o.classList.add("btn-edit-task"),o.classList.add("fa"),o.classList.add("fa-edit"),o.addEventListener("click",(function(){!function(e){document.querySelector(".tasks-container").appendChild(v("update",e))}(e)}));let s=document.createElement("i");return s.classList.add("btn-delete-task"),s.classList.add("fa"),s.classList.add("fa-trash"),s.addEventListener("click",(function(){M(e)})),i.appendChild(c),i.appendChild(o),i.appendChild(s),n.appendChild(a),n.appendChild(l),n.appendChild(d),t.appendChild(n),t.appendChild(i),t}function $(){let e;if("none"!=document.querySelector(".project-name").style.display){switch(o=this.id,o){case"All tasks":e=j();break;case"Today":e=A();break;case"This week":e=O();break;default:e=function(e){let t=y.find((t=>t.title==e));return c=t,t.tasks}(o)}document.querySelector(".tasks-list").innerHTML="",function(e,t){let n=document.querySelector(".tasks-container"),a=n.querySelector(".project-name"),l=n.querySelector(".tasks-list");a.innerText=e,t.forEach((e=>{l.appendChild(J(e)),T(e.priority,e.id)}));let d=document.querySelector(".btn-add-task"),i=document.querySelector(".btn-edit-project"),c=document.querySelector(".btn-delete-project");"All tasks"==e||"Today"==e||"This week"==e?(d.style.display="none",i.style.display="none",c.style.display="none"):(d.style.display="block",i.style.display="block",c.style.display="block")}(o,e)}}function H(){let e=!1,t=!1,n=document.querySelector(".project-name-input-edit").value,a=document.querySelector(`[id="${c.title}" ]`),l=a.querySelector(".number-of-tasks");e=E(n),e&&(t=!0,c.title=n,a.id=n,a.textContent=n,l.textContent="         "+String(c.tasks.length),a.textContent=a.textContent+l.textContent,localStorage.setItem("allProjects",JSON.stringify(y)),U()),1==t&&(r.textContent=s.value),r.style.display="block"}function U(){u.style.display="none"}function Y(){for(let e=0;e<y.length;e++){let t=y[e];c.id==t.id&&(y.splice(e,1),localStorage.setItem("allProjects",JSON.stringify(y)),location.reload())}}function F(){p.style.display="none"}y||(y=[]),localStorage.getItem("allProjects")&&(y=localStorage.getItem("allProjects"),y=JSON.parse(y),y.forEach((e=>{L(e)}))),w(),P(),N();let _=document.querySelectorAll(".menu-options > li"),z=_[0];_.forEach((e=>{e.addEventListener("click",$)})),z.click(),document.querySelector(".btn-addProject").addEventListener("click",(function(){null==document.querySelector(".new-project-container")&&f.appendChild(function(){l=document.createElement("div"),l.classList.add("new-project-container");let e=document.createElement("input");e.classList.add("input-field"),e.setAttribute("maxLength",25);let t=document.createElement("span");t.classList.add("error-message"),t.innerText="";let n=document.createElement("button");n.classList.add("btn"),n.innerText="Add project",n.addEventListener("click",C);let a=document.createElement("button");return a.classList.add("btn"),a.innerText="Cancel",a.addEventListener("click",k),l.appendChild(e),l.appendChild(t),l.appendChild(n),l.appendChild(a),l}())})),document.querySelector(".btn-edit-project").addEventListener("click",(function(){!function(){let e=document.querySelector(".tasks-container");u=document.createElement("div"),u.classList.add("confirmation-modal"),m=document.createElement("div"),m.classList.add("confirmation-container");let t=document.createElement("h2");t.textContent="Edit project name",s=document.createElement("input"),s.classList.add("input-field"),s.classList.add("project-name-input-edit"),s.setAttribute("type","text"),r=document.querySelector(".project-name"),s.value=r.textContent;let n=document.createElement("span");n.classList.add("error-message"),n.innerText="";let a=document.createElement("div");a.classList.add("confirmation-buttons-container");let l=document.createElement("button");l.classList.add("btn"),l.textContent="Update",l.addEventListener("click",H);let d=document.createElement("button");d.classList.add("btn"),d.textContent="Cancel",d.addEventListener("click",U),a.appendChild(l),a.appendChild(d),m.appendChild(t),m.appendChild(s),m.appendChild(n),m.appendChild(a),u.appendChild(m),e.insertAdjacentElement("beforebegin",u)}()})),document.querySelector(".btn-delete-project").addEventListener("click",(function(){!function(){let e=document.querySelector(".tasks-container");p=document.createElement("div"),p.classList.add("confirmation-modal"),h=document.createElement("div"),h.classList.add("confirmation-container");let t=document.createElement("span");t.classList.add("delete-confirmation-text"),t.textContent="Are you sure that you want to delete the whole project?";let n=document.createElement("div");n.classList.add("confirmation-buttons-container");let a=document.createElement("button");a.classList.add("btn"),a.textContent="Yes",a.addEventListener("click",Y);let l=document.createElement("button");l.classList.add("btn"),l.textContent="Cancel",l.addEventListener("click",F),n.appendChild(a),n.appendChild(l),h.appendChild(t),h.appendChild(n),p.appendChild(h),e.insertAdjacentElement("beforebegin",p)}()})),document.querySelector(".btn-add-task").addEventListener("click",(function(){document.querySelector(".tasks-container").appendChild(v("add",null))}))})();