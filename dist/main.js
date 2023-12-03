(()=>{"use strict";var e={d:(t,n)=>{for(var l in n)e.o(n,l)&&!e.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:n[l]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{c:()=>y,U:()=>$});class t{constructor(e,t,n){this.id=e,this.title=t,this.tasks=n}}function n(){return Math.floor(1e8*Math.random())}let l,a,d,c,o,i,r,s,u,p,m,h,y,k=document.querySelector(".projects");function C(){l.outerHTML=""}function f(){let e=!1,a=!1,d=n(),c=l.querySelector("input").value,o=new t(d,c,[]);a=S(o.title),a&&(e=!0,y.push(o),localStorage.setItem("allProjects",JSON.stringify(y))),e&&E(o),C()}function E(e){let t=k.querySelector("ul"),n=document.createElement("li");n.classList.add("project"),n.innerText=e.title,n.setAttribute("id",e.title);let l=document.createElement("span");l.classList.add("number-of-tasks"),l.innerText="         "+e.tasks.length,n.appendChild(l),t.appendChild(n),k.appendChild(t)}function S(e){let t=!1,n="",l=function(e){let t=!1;return y.map((n=>{n.title.toLowerCase()==e.toLowerCase()&&(t=!0)})),t}(e);l&&(n="Project with that name already exists.");let a=e.length<1;a&&(n="Project name can't be empty.");let d=e.length>=25;d&&(n="Project name is too long.");let c=function(e){let t="all tasks"==e.toLowerCase();return t=t||"today"==e.toLowerCase(),t=t||"this week"==e.toLowerCase(),t}(e);return c&&(n="Project name can't be the same as the main option name."),document.querySelector(".error-message").innerText=n,t=0==l,t=t&&0==a,t=t&&0==d,t=t&&0==c,t}y||(y=[]);class b{constructor(e,t,n,l,a){this.id=e,this.title=t,this.date=l,this.description=n,this.priority=a}}function g(){const e=new Date;let t=e.getFullYear(),n=e.getMonth()+1,l=e.getDate();return n<10&&(n="0"+n),l<10&&(l="0"+l),t.toString()+"-"+n.toString()+"-"+l.toString()}function v(e,t){const n=document.createElement("div");n.classList.add("modal-window");const l=document.createElement("div");l.classList.add("modal-top");let a=document.createElement("h3");"add"==e?a.innerText="Add New Task":"update"==e&&(a.innerText="Update Task");let d=document.createElement("span");d.classList.add("close-modal"),d.innerText="&times;  ",l.appendChild(a),l.appendChild(d);let c=document.createElement("div");c.classList.add("container-task-info");let o=document.createElement("form"),i=document.createElement("span");i.innerText="*";let r=document.createElement("div");r.classList.add("container-input");let s=document.createElement("label");s.innerText="Title",s.appendChild(i);let u=document.createElement("input");u.classList.add("task-name"),"update"==e&&(u.value=t.title);let p=document.createElement("span");p.classList.add("error-message"),p.appendChild(i),r.appendChild(s),r.appendChild(u),r.appendChild(p);let m=document.createElement("div");m.classList.add("container-input");let h=document.createElement("label");h.innerText="Date",h.appendChild(i);let k=document.createElement("input");if(k.type="date",k.classList.add("task-date"),"update"==e)k.value=t.date;else if("add"==e){let e=g();k.value=e}let C=document.createElement("span");C.classList.add("error-message"),C.appendChild(i),m.appendChild(h),m.appendChild(k),m.appendChild(C);let f=document.createElement("div");f.classList.add("container-input");let E=document.createElement("label");E.innerText="Description",E.appendChild(i);let S=document.createElement("textarea");S.classList.add("task-description"),"update"==e&&(S.value=t.description);let b=document.createElement("span");b.classList.add("error-message"),b.appendChild(i),f.appendChild(E),f.appendChild(S),f.appendChild(b);let v=document.createElement("div");v.classList.add("container-input");let T=document.createElement("label");T.innerText="Priority",T.appendChild(i);let j=document.createElement("select");j.classList.add("task-priority");let w=document.createElement("option");w.innerText="Low",w.setAttribute("value","low"),w.setAttribute("selected","selected");let A=document.createElement("option");A.innerText="Medium",A.setAttribute("value","medium");let P=document.createElement("option");P.innerText="High",P.setAttribute("value","high"),j.appendChild(w),j.appendChild(A),j.appendChild(P),"update"==e&&(j.value=t.priority);let D=document.createElement("span");D.classList.add("error-message"),D.appendChild(i),v.appendChild(T),v.appendChild(j),v.appendChild(D);let O=document.createElement("button");O.setAttribute("type","submit"),"add"==e?(O.innerText="Add task",O.addEventListener("click",N)):"update"==e&&(O.innerText="Update task",O.addEventListener("click",(function(e){e.preventDefault(),function(e){let t=document.querySelector("input.task-name").value,n=document.querySelector("input.task-date").value,l=document.querySelector("textarea.task-description").value,a=document.querySelector("select.task-priority").value;e.title=t,e.date=n,e.description=l,e.priority=a;let d=!1;d=x(e),d&&(localStorage.setItem("allProjects",JSON.stringify(y)),q())}(t)})));let I=document.createElement("button");return I.innerText="Cancel",I.setAttribute("type","button"),I.addEventListener("click",L),o.appendChild(r),o.appendChild(m),o.appendChild(f),o.appendChild(v),o.appendChild(O),o.appendChild(I),c.appendChild(o),n.appendChild(l),n.appendChild(c),n}function L(){document.querySelector(".modal-window").remove()}function q(){let e=document.querySelector(".project-name").textContent,t=document.querySelector(`[id="${e}" ]`);t.addEventListener("click",J),t.click()}function x(e){let t=!0,n="";return e.title.length<1&&(n="Task name can't be empty."),e.title.length>30&&(n="Task name can't be longer than 30 characters."),e.description.length>300&&(n="Task description can't be longer than 300 characters."),t=""==n,t||alert(n),t}function T(){return a=[],y.forEach((e=>{e.tasks.forEach((e=>{a.push(e)}))})),a}function j(){let e=T();document.querySelector(".all-tasks-number-of-tasks").textContent=e.length}function w(){let e=[],t=g();return a.forEach((n=>{n.date==t&&e.push(n)})),e}function A(){let e=w();document.querySelector(".today-tasks-number-of-tasks").textContent=e.length}function P(){let e=[],t=g(),n=function(){const e=new Date;let t=new Date(e.getTime()-6048e5),n=t.getFullYear(),l=t.getMonth()+1,a=t.getDate();return l<10&&(l="0"+l),a<10&&(a="0"+a),t=n.toString()+"-"+l.toString()+"-"+a.toString(),t}();return a.forEach((l=>{l.date<=t&&l.date>=n&&e.push(l)})),e}function D(){let e=P();document.querySelector(".this-week-tasks-number-of-tasks").textContent=e.length}function O(e,t){let n=document.querySelector(`[id="${d.title}" ]`).querySelector(".number-of-tasks");return n.textContent=t,"increase"==e?$++:"decrease"==e&&$--,j(),A(),D(),n}function N(e){e.preventDefault();let t=n(),l=document.querySelector("input.task-name").value,a=document.querySelector("input.task-date").value,c=document.querySelector("textarea.task-description").value,o=document.querySelector("select.task-priority").value,i=document.querySelector(".tasks-container").querySelector(".tasks-list"),r=!1,s=!1,u=new b(t,l,c,a,o);s=x(u),s&&(r=!0,d.tasks.push(u),O("increase",d.tasks.length)),r&&(L(),i.appendChild(I(u)),localStorage.setItem("allProjects",JSON.stringify(y)))}function I(e){let t=document.createElement("div");t.classList.add("task");let n=document.createElement("span");n.classList.add("task-date"),n.innerText=e.date;let l=document.createElement("h4");l.classList.add("task-title"),l.innerText=e.title;let a=document.createElement("span");a.classList.add("task-description"),a.innerText=e.description;let d=document.createElement("div");d.classList.add("tasks-btns");let c=document.createElement("button");c.classList.add("btn-edit-task"),c.innerText="pen",c.addEventListener("click",(function(){!function(e){document.querySelector(".tasks-container").appendChild(v("update",e))}(e)}));let o=document.createElement("button");return o.classList.add("btn-delete-task"),o.innerText="trash-can",o.addEventListener("click",(function(){!function(e){for(let t=0;t<y.length;t++){let n=y[t].tasks;for(let l=0;l<n.length;l++){let a=n[l];e.id==a.id&&(y[t].tasks.splice(l,1),localStorage.setItem("allProjects",JSON.stringify(y)),O("decrease",y[t].tasks.length))}}q()}(e)})),d.appendChild(c),d.appendChild(o),t.appendChild(n),t.appendChild(l),t.appendChild(a),t.appendChild(d),t}function J(){let e;if("none"!=document.querySelector(".project-name").style.display){switch(c=this.id,c){case"All tasks":e=T();break;case"Today":e=w();break;case"This week":e=P();break;default:e=function(e){let t=y.find((t=>t.title==e));return d=t,t.tasks}(c)}document.querySelector(".tasks-list").innerHTML="",function(e,t){let n=document.querySelector(".tasks-container"),l=n.querySelector(".project-name"),a=n.querySelector(".tasks-list");l.innerText=e,t.forEach((e=>{a.appendChild(I(e))}));let d=document.querySelector(".btn-add-task"),c=document.querySelector(".btn-edit-project"),o=document.querySelector(".btn-delete-project");"All tasks"==e||"Today"==e||"This week"==e?(d.style.display="none",c.style.display="none",o.style.display="none"):(d.style.display="block",c.style.display="block",o.style.display="block")}(c,e)}}function M(){let e=!1,t=!1,n=document.querySelector(".project-name-input-edit").value,l=document.querySelector(`[id="${d.title}" ]`),a=l.querySelector(".number-of-tasks");e=S(n),e&&(t=!0,d.title=n,l.id=n,l.textContent=n,a.textContent="         "+String(d.tasks.length),l.textContent=l.textContent+a.textContent,localStorage.setItem("allProjects",JSON.stringify(y))),H(t)}function H(e){1==e&&(s.textContent=r.value),s.style.display="block",r.style.display="none",o.style.display="block",i.style.display="block",u.style.display="none",p.style.display="none"}function U(){for(let e=0;e<y.length;e++){let t=y[e];d.id==t.id&&(y.splice(e,1),localStorage.setItem("allProjects",JSON.stringify(y)),location.reload())}}function Y(){m.style.display="none"}y||(y=[]);let $=0;localStorage.getItem("allProjects")&&(y=localStorage.getItem("allProjects"),y=JSON.parse(y),y.forEach((e=>{E(e)}))),j(),A(),D();let F=document.querySelectorAll(".menu-options > li"),z=F[0];F.forEach((e=>{e.addEventListener("click",J)})),z.click(),document.querySelector(".btn-addProject").addEventListener("click",(function(){null==document.querySelector(".new-project-container")&&k.appendChild(function(){l=document.createElement("div"),l.classList.add("new-project-container");let e=document.createElement("input");e.setAttribute("maxLength",25);let t=document.createElement("button");t.innerText="Add project",t.addEventListener("click",f);let n=document.createElement("button");return n.innerText="Cancel",n.addEventListener("click",C),l.appendChild(e),l.appendChild(t),l.appendChild(n),l}())})),document.querySelector(".btn-edit-project").addEventListener("click",(function(){!function(){o=document.querySelector(".btn-edit-project"),i=document.querySelector(".btn-delete-project"),o.style.display="none",i.style.display="none";let e=document.querySelector(".project-title-btns");r=document.querySelector(".project-name-input-edit"),s=document.querySelector(".project-name"),r.style.display="block",r.value=s.textContent,s.style.display="none",u=document.createElement("button"),u.textContent="Done",p=document.createElement("button"),p.textContent="Cancel",u.addEventListener("click",M),p.addEventListener("click",(function(){H(!1)})),e.appendChild(u),e.appendChild(p)}()})),document.querySelector(".btn-delete-project").addEventListener("click",(function(){!function(){let e=document.querySelector(".tasks-container");m=document.createElement("div"),m.classList.add("confirmation-modal"),h=document.createElement("div"),h.classList.add("confirmation-container");let t=document.createElement("span");t.textContent="Are you sure that you want to delete the whole project?";let n=document.createElement("button");n.textContent="Yes",n.addEventListener("click",U);let l=document.createElement("button");l.textContent="No",l.addEventListener("click",Y),h.appendChild(t),h.appendChild(n),h.appendChild(l),m.appendChild(h),e.insertAdjacentElement("beforebegin",m)}()})),document.querySelector(".btn-add-task").addEventListener("click",(function(){document.querySelector(".tasks-container").appendChild(v("add",null))}))})();