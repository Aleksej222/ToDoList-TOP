(()=>{"use strict";var e={d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{c:()=>c,U:()=>w});class t{constructor(e,t,n){this.id=e,this.title=t,this.tasks=n}}function n(){return Math.floor(1e8*Math.random())}let a,l,d,r,c,i=document.querySelector(".projects");function o(){a.outerHTML=""}function s(){let e=!1,l=!1,d=n(),r=a.querySelector("input").value,i=new t(d,r,[]);l=function(e){let t=!1,n="",a=function(e){let t=!1;return c.map((n=>{n.title.toLowerCase()==e.toLowerCase()&&(t=!0)})),t}(e.title);a&&(n="Project with that name already exists.");let l=e.title.length<1;l&&(n="Project name can't be empty.");let d=function(e){return e.length>=25}(e.title);return d&&(n="Project name is too long."),document.querySelector(".error-message").innerText=n,t=0==a,t=t&&0==l,t=t&&0==d,t}(i),l&&(e=!0,c.push(i),localStorage.setItem("allProjects",JSON.stringify(c))),e&&u(i),o()}function u(e){let t=i.querySelector("ul"),n=document.createElement("li");n.classList.add("project"),n.innerText=e.title,n.setAttribute("id",e.title);let a=document.createElement("span");a.classList.add("number-of-tasks"),a.innerText="         "+e.tasks.length,n.appendChild(a),t.appendChild(n),i.appendChild(t)}c||(c=[]);class p{constructor(e,t,n,a,l){this.id=e,this.title=t,this.date=a,this.description=n,this.priority=l}}function m(){const e=new Date;let t=e.getFullYear(),n=e.getMonth()+1,a=e.getDate();return n<10&&(n="0"+n),a<10&&(a="0"+a),t.toString()+"-"+n.toString()+"-"+a.toString()}function h(e,t){const n=document.createElement("div");n.classList.add("modal-window");const a=document.createElement("div");a.classList.add("modal-top");let l=document.createElement("h3");"add"==e?l.innerText="Add New Task":"update"==e&&(l.innerText="Update Task");let d=document.createElement("span");d.classList.add("close-modal"),d.innerText="&times;  ",a.appendChild(l),a.appendChild(d);let r=document.createElement("div");r.classList.add("container-task-info");let i=document.createElement("form"),o=document.createElement("span");o.innerText="*";let s=document.createElement("div");s.classList.add("container-input");let u=document.createElement("label");u.innerText="Title",u.appendChild(o);let p=document.createElement("input");p.classList.add("task-name"),"update"==e&&(p.value=t.title);let h=document.createElement("span");h.classList.add("error-message"),h.appendChild(o),s.appendChild(u),s.appendChild(p),s.appendChild(h);let E=document.createElement("div");E.classList.add("container-input");let y=document.createElement("label");y.innerText="Date",y.appendChild(o);let S=document.createElement("input");if(S.type="date",S.classList.add("task-date"),"update"==e)S.value=t.date;else if("add"==e){let e=m();S.value=e}let g=document.createElement("span");g.classList.add("error-message"),g.appendChild(o),E.appendChild(y),E.appendChild(S),E.appendChild(g);let v=document.createElement("div");v.classList.add("container-input");let L=document.createElement("label");L.innerText="Description",L.appendChild(o);let b=document.createElement("textarea");b.classList.add("task-description"),"update"==e&&(b.value=t.description);let x=document.createElement("span");x.classList.add("error-message"),x.appendChild(o),v.appendChild(L),v.appendChild(b),v.appendChild(x);let q=document.createElement("div");q.classList.add("container-input");let w=document.createElement("label");w.innerText="Priority",w.appendChild(o);let j=document.createElement("select");j.classList.add("task-priority");let A=document.createElement("option");A.innerText="Low",A.setAttribute("value","low"),A.setAttribute("selected","selected");let P=document.createElement("option");P.innerText="Medium",P.setAttribute("value","medium");let D=document.createElement("option");D.innerText="High",D.setAttribute("value","high"),j.appendChild(A),j.appendChild(P),j.appendChild(D),"update"==e&&(j.value=t.priority);let O=document.createElement("span");O.classList.add("error-message"),O.appendChild(o),q.appendChild(w),q.appendChild(j),q.appendChild(O);let M=document.createElement("button");M.setAttribute("type","submit"),"add"==e?(M.innerText="Add task",M.addEventListener("click",T)):"update"==e&&(M.innerText="Update task",M.addEventListener("click",(function(e){e.preventDefault(),function(e){let t=document.querySelector("input.task-name").value,n=document.querySelector("input.task-date").value,a=document.querySelector("textarea.task-description").value,l=document.querySelector("select.task-priority").value;e.title=t,e.date=n,e.description=a,e.priority=l;let d=!1;d=C(e),d&&(localStorage.setItem("allProjects",JSON.stringify(c)),f())}(t)})));let I=document.createElement("button");return I.innerText="Cancel",I.setAttribute("type","button"),I.addEventListener("click",k),i.appendChild(s),i.appendChild(E),i.appendChild(v),i.appendChild(q),i.appendChild(M),i.appendChild(I),r.appendChild(i),n.appendChild(a),n.appendChild(r),n}function k(){document.querySelector(".modal-window").remove()}function f(){let e=document.querySelector(".project-name").textContent,t=document.querySelector(`[id="${e}" ]`);t.addEventListener("click",q),t.click()}function C(e){let t=!0,n="";return e.title.length<1&&(n="Task name can't be empty."),e.title.length>30&&(n="Task name can't be longer than 30 characters."),e.description.length>300&&(n="Task description can't be longer than 300 characters."),t=""==n,t||alert(n),t}function E(){return l=[],c.forEach((e=>{e.tasks.forEach((e=>{l.push(e)}))})),l}function y(){let e=E();document.querySelector(".all-tasks-number-of-tasks").textContent=e.length}function S(){let e=[],t=m();return l.forEach((n=>{n.date==t&&e.push(n)})),e}function g(){let e=S();document.querySelector(".today-tasks-number-of-tasks").textContent=e.length}function v(){let e=[],t=m(),n=function(){const e=new Date;let t=new Date(e.getTime()-6048e5),n=t.getFullYear(),a=t.getMonth()+1,l=t.getDate();return a<10&&(a="0"+a),l<10&&(l="0"+l),t=n.toString()+"-"+a.toString()+"-"+l.toString(),t}();return l.forEach((a=>{a.date<=t&&a.date>=n&&e.push(a)})),e}function L(){let e=v();document.querySelector(".this-week-tasks-number-of-tasks").textContent=e.length}function b(e,t){let n=document.querySelector(`[id="${d.title}" ]`).querySelector(".number-of-tasks");return n.textContent=t,"increase"==e?w++:"decrease"==e&&w--,y(),g(),L(),n}function T(e){e.preventDefault();let t=n(),a=document.querySelector("input.task-name").value,l=document.querySelector("input.task-date").value,r=document.querySelector("textarea.task-description").value,i=document.querySelector("select.task-priority").value,o=document.querySelector(".tasks-container").querySelector(".tasks-list"),s=!1,u=!1,m=new p(t,a,r,l,i);u=C(m),u&&(s=!0,d.tasks.push(m),b("increase",d.tasks.length)),s&&(k(),o.appendChild(x(m)),localStorage.setItem("allProjects",JSON.stringify(c)))}function x(e){let t=document.createElement("div");t.classList.add("task");let n=document.createElement("span");n.classList.add("task-date"),n.innerText=e.date;let a=document.createElement("h4");a.classList.add("task-title"),a.innerText=e.title;let l=document.createElement("span");l.classList.add("task-description"),l.innerText=e.description;let d=document.createElement("div");d.classList.add("tasks-btns");let r=document.createElement("button");r.classList.add("btn-edit-task"),r.innerText="pen",r.addEventListener("click",(function(){!function(e){document.querySelector(".tasks-container").appendChild(h("update",e))}(e)}));let i=document.createElement("button");return i.classList.add("btn-delete-task"),i.innerText="trash-can",i.addEventListener("click",(function(){!function(e){for(let t=0;t<c.length;t++){let n=c[t].tasks;for(let a=0;a<n.length;a++){let l=n[a];e.id==l.id&&(c[t].tasks.splice(a,1),localStorage.setItem("allProjects",JSON.stringify(c)),b("decrease",c[t].tasks.length))}}f()}(e)})),d.appendChild(r),d.appendChild(i),t.appendChild(n),t.appendChild(a),t.appendChild(l),t.appendChild(d),t}function q(){let e;switch(r=this.id,r){case"All tasks":e=E();break;case"Today":e=S();break;case"This week":e=v();break;default:e=function(e){let t=c.find((t=>t.title==e));return d=t,t.tasks}(r)}document.querySelector(".tasks-list").innerHTML="",function(e,t){let n=document.querySelector(".tasks-container"),a=n.querySelector(".project-name"),l=n.querySelector(".tasks-list");a.innerText=e,t.forEach((e=>{l.appendChild(x(e))})),document.querySelector(".btn-add-task").style.display="All tasks"==e||"Today"==e||"This week"==e?"none":"block"}(r,e)}c||(c=[]);let w=0;localStorage.getItem("allProjects")&&(c=localStorage.getItem("allProjects"),c=JSON.parse(c),c.forEach((e=>{u(e)}))),y(),g(),L();let j=document.querySelectorAll(".menu-options > li"),A=j[0];j.forEach((e=>{e.addEventListener("click",q)})),A.click(),document.querySelector(".btn-addProject").addEventListener("click",(function(){null==document.querySelector(".new-project-container")&&i.appendChild(function(){a=document.createElement("div"),a.classList.add("new-project-container");let e=document.createElement("input");e.setAttribute("maxLength",25);let t=document.createElement("button");t.innerText="Add project",t.addEventListener("click",s);let n=document.createElement("button");return n.innerText="Cancel",n.addEventListener("click",o),a.appendChild(e),a.appendChild(t),a.appendChild(n),a}())})),document.querySelector(".btn-edit-project").addEventListener("click",(function(){})),document.querySelector(".btn-add-task").addEventListener("click",(function(){document.querySelector(".tasks-container").appendChild(h("add",null))}))})();