(()=>{"use strict";var e={d:(t,n)=>{for(var l in n)e.o(n,l)&&!e.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:n[l]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}};e.d({},{c:()=>f});var t={};e.r(t),e.d(t,{c:()=>f});class n{constructor(e,t,n){this.id=e,this.title=t,this.tasks=n}}function l(){return Math.floor(1e8*Math.random())}let a,d,o,c,i,r,s,u,p,m,h,y,k,f,C=document.querySelector(".projects");function E(){a.outerHTML=""}function S(){let e=!1,t=!1,d=l(),o=a.querySelector("input").value,c=new n(d,o,[]);t=g(c.title),t&&(e=!0,f.push(c),localStorage.setItem("allProjects",JSON.stringify(f))),e&&(b(c),location.reload()),E()}function b(e){let t=C.querySelector("ul"),n=document.createElement("li");n.classList.add("project"),n.innerText=e.title,n.setAttribute("id",e.title);let l=document.createElement("span");l.classList.add("number-of-tasks"),l.innerText="         "+e.tasks.length,n.appendChild(l),t.appendChild(n),C.appendChild(t)}function g(e){let t=!1,n="",l=function(e){let t=!1;return f.map((n=>{n.title.toLowerCase()==e.toLowerCase()&&(t=!0)})),t}(e);l&&(n="Project with that name already exists.");let a=e.length<1;a&&(n="Project name can't be empty.");let d=e.length>=25;d&&(n="Project name is too long.");let o=function(e){let t="all tasks"==e.toLowerCase();return t=t||"today"==e.toLowerCase(),t=t||"this week"==e.toLowerCase(),t}(e);return o&&(n="Project name can't be the same as the main option name."),document.querySelector(".error-message").innerText=n,t=0==l,t=t&&0==a,t=t&&0==d,t=t&&0==o,t}f||(f=[]);class v{constructor(e,t,n,l,a){this.id=e,this.title=t,this.date=l,this.description=n,this.priority=a}}function L(){const e=new Date;let t=e.getFullYear(),n=e.getMonth()+1,l=e.getDate();return n<10&&(n="0"+n),l<10&&(l="0"+l),t.toString()+"-"+n.toString()+"-"+l.toString()}function q(e,t){d=document.createElement("div"),d.classList.add("confirmation-modal");let n=document.createElement("div");n.classList.add("confirmation-container"),n.classList.add("modal-window");const l=document.createElement("div");l.classList.add("modal-top");let a=document.createElement("h3");"add"==e?a.innerText="Add New Task":"update"==e&&(a.innerText="Update Task");let o=document.createElement("span");o.classList.add("close-modal"),o.innerText="&times;  ",l.appendChild(a),l.appendChild(o);let c=document.createElement("div");c.classList.add("container-task-info");let i=document.createElement("form"),r=document.createElement("span");r.innerText="*";let s=document.createElement("div");s.classList.add("container-input");let u=document.createElement("label");u.innerText="Title",u.appendChild(r);let p=document.createElement("input");p.classList.add("task-name"),"update"==e&&(p.value=t.title);let m=document.createElement("span");m.classList.add("error-message"),m.appendChild(r),s.appendChild(u),s.appendChild(p),s.appendChild(m);let h=document.createElement("div");h.classList.add("container-input");let y=document.createElement("label");y.innerText="Date",y.appendChild(r);let k=document.createElement("input");if(k.type="date",k.classList.add("task-date"),"update"==e)k.value=t.date;else if("add"==e){let e=L();k.value=e}let C=document.createElement("span");C.classList.add("error-message"),C.appendChild(r),h.appendChild(y),h.appendChild(k),h.appendChild(C);let E=document.createElement("div");E.classList.add("container-input");let S=document.createElement("label");S.innerText="Description",S.appendChild(r);let b=document.createElement("textarea");b.classList.add("task-description"),"update"==e&&(b.value=t.description);let g=document.createElement("span");g.classList.add("error-message"),g.appendChild(r),E.appendChild(S),E.appendChild(b),E.appendChild(g);let v=document.createElement("div");v.classList.add("container-input");let q=document.createElement("label");q.innerText="Priority",q.appendChild(r);let w=document.createElement("select");w.classList.add("task-priority");let P=document.createElement("option");P.innerText="Low",P.setAttribute("value","low"),P.setAttribute("selected","selected");let A=document.createElement("option");A.innerText="Medium",A.setAttribute("value","medium");let O=document.createElement("option");O.innerText="High",O.setAttribute("value","high"),w.appendChild(P),w.appendChild(A),w.appendChild(O),"update"==e&&(w.value=t.priority);let D=document.createElement("span");D.classList.add("error-message"),D.appendChild(r),v.appendChild(q),v.appendChild(w),v.appendChild(D);let N=document.createElement("button");N.setAttribute("type","submit"),"add"==e?(N.innerText="Add task",N.addEventListener("click",I)):"update"==e&&(N.innerText="Update task",N.addEventListener("click",(function(e){e.preventDefault(),function(e){let t=document.querySelector("input.task-name").value,n=document.querySelector("input.task-date").value,l=document.querySelector("textarea.task-description").value,a=document.querySelector("select.task-priority").value;e.title=t,e.date=n,e.description=l,e.priority=a;let d=!1;d=j(e),d&&(localStorage.setItem("allProjects",JSON.stringify(f)),T())}(t)})));let M=document.createElement("button");return M.innerText="Cancel",M.setAttribute("type","button"),M.addEventListener("click",x),i.appendChild(s),i.appendChild(h),i.appendChild(E),i.appendChild(v),i.appendChild(N),i.appendChild(M),c.appendChild(i),n.appendChild(l),n.appendChild(c),d.appendChild(n),d}function x(){document.querySelector(".modal-window").remove(),d.style.display="none"}function T(){let e=document.querySelector(".project-name").textContent,t=document.querySelector(`[id="${e}" ]`);t.addEventListener("click",H),t.click()}function j(e){let t=!0,n="";return e.title.length<1&&(n="Task name can't be empty."),e.title.length>30&&(n="Task name can't be longer than 30 characters."),e.description.length>300&&(n="Task description can't be longer than 300 characters."),t=""==n,t||alert(n),t}function w(){return o=[],f.forEach((e=>{e.tasks.forEach((e=>{o.push(e)}))})),o}function P(){let e=w();document.querySelector(".all-tasks-number-of-tasks").textContent=e.length}function A(){let e=[],t=L();return o.forEach((n=>{n.date==t&&e.push(n)})),e}function O(){let e=A();document.querySelector(".today-tasks-number-of-tasks").textContent=e.length}function D(){let e=[],t=L(),n=function(){const e=new Date;let t=new Date(e.getTime()-6048e5),n=t.getFullYear(),l=t.getMonth()+1,a=t.getDate();return l<10&&(l="0"+l),a<10&&(a="0"+a),t=n.toString()+"-"+l.toString()+"-"+a.toString(),t}();return o.forEach((l=>{l.date<=t&&l.date>=n&&e.push(l)})),e}function N(){let e=D();document.querySelector(".this-week-tasks-number-of-tasks").textContent=e.length}function M(e,n){let l=document.querySelector(`[id="${c.title}" ]`).querySelector(".number-of-tasks");return l.textContent=n,"increase"==e?t.totalNumberOfTasks++:"decrease"==e&&t.totalNumberOfTasks--,P(),O(),N(),l}function I(e){e.preventDefault();let t=l(),n=document.querySelector("input.task-name").value,a=document.querySelector("input.task-date").value,d=document.querySelector("textarea.task-description").value,o=document.querySelector("select.task-priority").value,i=document.querySelector(".tasks-container").querySelector(".tasks-list"),r=!1,s=!1,u=new v(t,n,d,a,o);s=j(u),s&&(r=!0,c.tasks.push(u),M("increase",c.tasks.length)),r&&(x(),i.appendChild(J(u)),localStorage.setItem("allProjects",JSON.stringify(f)))}function J(e){let t=document.createElement("div");t.classList.add("task");let n=document.createElement("span");n.classList.add("task-date"),n.innerText=e.date;let l=document.createElement("h4");l.classList.add("task-title"),l.innerText=e.title;let a=document.createElement("span");a.classList.add("task-description"),a.innerText=e.description;let d=document.createElement("div");d.classList.add("tasks-btns");let o=document.createElement("button");o.classList.add("btn-edit-task"),o.innerText="pen",o.addEventListener("click",(function(){!function(e){document.querySelector(".tasks-container").appendChild(q("update",e))}(e)}));let i=document.createElement("button");return i.classList.add("btn-delete-task"),i.innerText="trash-can",i.addEventListener("click",(function(){!function(e){for(let t=0;t<f.length;t++){let n=f[t].tasks;for(let l=0;l<n.length;l++){let a=n[l];e.id==a.id&&(f[t].tasks.splice(l,1),c=f[t],M("decrease",f[t].tasks.length))}}T()}(e)})),d.appendChild(o),d.appendChild(i),t.appendChild(n),t.appendChild(l),t.appendChild(a),t.appendChild(d),t}function H(){let e;if("none"!=document.querySelector(".project-name").style.display){switch(i=this.id,i){case"All tasks":e=w();break;case"Today":e=A();break;case"This week":e=D();break;default:e=function(e){let t=f.find((t=>t.title==e));return c=t,t.tasks}(i)}document.querySelector(".tasks-list").innerHTML="",function(e,t){let n=document.querySelector(".tasks-container"),l=n.querySelector(".project-name"),a=n.querySelector(".tasks-list");l.innerText=e,t.forEach((e=>{a.appendChild(J(e))}));let d=document.querySelector(".btn-add-task"),o=document.querySelector(".btn-edit-project"),c=document.querySelector(".btn-delete-project");"All tasks"==e||"Today"==e||"This week"==e?(d.style.display="none",o.style.display="none",c.style.display="none"):(d.style.display="block",o.style.display="block",c.style.display="block")}(i,e)}}function Y(){let e=!1,t=!1,n=document.querySelector(".project-name-input-edit").value,l=document.querySelector(`[id="${c.title}" ]`),a=l.querySelector(".number-of-tasks");e=g(n),e&&(t=!0,c.title=n,l.id=n,l.textContent=n,a.textContent="         "+String(c.tasks.length),l.textContent=l.textContent+a.textContent,localStorage.setItem("allProjects",JSON.stringify(f))),$(t)}function $(e){1==e&&(p.textContent=u.value),p.style.display="block",u.style.display="none",r.style.display="block",s.style.display="block",m.style.display="none",h.style.display="none"}function F(){for(let e=0;e<f.length;e++){let t=f[e];c.id==t.id&&(f.splice(e,1),localStorage.setItem("allProjects",JSON.stringify(f)),location.reload())}}function U(){y.style.display="none"}f||(f=[]),localStorage.getItem("allProjects")&&(f=localStorage.getItem("allProjects"),f=JSON.parse(f),f.forEach((e=>{b(e)}))),P(),O(),N();let _=document.querySelectorAll(".menu-options > li"),z=_[0];_.forEach((e=>{e.addEventListener("click",H)})),z.click(),document.querySelector(".btn-addProject").addEventListener("click",(function(){null==document.querySelector(".new-project-container")&&C.appendChild(function(){a=document.createElement("div"),a.classList.add("new-project-container");let e=document.createElement("input");e.setAttribute("maxLength",25);let t=document.createElement("button");t.innerText="Add project",t.addEventListener("click",S);let n=document.createElement("button");return n.innerText="Cancel",n.addEventListener("click",E),a.appendChild(e),a.appendChild(t),a.appendChild(n),a}())})),document.querySelector(".btn-edit-project").addEventListener("click",(function(){!function(){r=document.querySelector(".btn-edit-project"),s=document.querySelector(".btn-delete-project"),r.style.display="none",s.style.display="none";let e=document.querySelector(".project-title-btns");u=document.querySelector(".project-name-input-edit"),p=document.querySelector(".project-name"),u.style.display="block",u.value=p.textContent,p.style.display="none",m=document.createElement("button"),m.textContent="Done",h=document.createElement("button"),h.textContent="Cancel",m.addEventListener("click",Y),h.addEventListener("click",(function(){$(!1)})),e.appendChild(m),e.appendChild(h)}()})),document.querySelector(".btn-delete-project").addEventListener("click",(function(){!function(){let e=document.querySelector(".tasks-container");y=document.createElement("div"),y.classList.add("confirmation-modal"),k=document.createElement("div"),k.classList.add("confirmation-container");let t=document.createElement("span");t.textContent="Are you sure that you want to delete the whole project?";let n=document.createElement("button");n.textContent="Yes",n.addEventListener("click",F);let l=document.createElement("button");l.textContent="No",l.addEventListener("click",U),k.appendChild(t),k.appendChild(n),k.appendChild(l),y.appendChild(k),e.insertAdjacentElement("beforebegin",y)}()})),document.querySelector(".btn-add-task").addEventListener("click",(function(){document.querySelector(".tasks-container").appendChild(q("add",null))}))})();