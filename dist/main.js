(()=>{"use strict";var e={d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{c:()=>i});class t{constructor(e,t,n){this.id=e,this.title=t,this.tasks=n}}function n(){return Math.floor(1e8*Math.random())}let a,l,d,c,i,r=document.querySelector(".projects");function s(){a.outerHTML=""}function o(){let e=!1,l=!1,d=n(),c=a.querySelector("input").value,r=new t(d,c,[]);l=function(e){let t=!1,n="",a=function(e){let t=!1;return i.map((n=>{n.title.toLowerCase()==e.toLowerCase()&&(t=!0)})),t}(e.title);a&&(n="Project with that name already exists.");let l=e.title.length<1;l&&(n="Project name can't be empty.");let d=function(e){return e.length>=25}(e.title);return d&&(n="Project name is too long."),document.querySelector(".error-message").innerText=n,t=0==a,t=t&&0==l,t=t&&0==d,t}(r),l&&(e=!0,i.push(r),localStorage.setItem("allProjects",JSON.stringify(i))),e&&u(r),s()}function u(e){let t=r.querySelector("ul"),n=document.createElement("li");n.classList.add("project"),n.innerText=e.title,n.setAttribute("id",e.title);let a=document.createElement("span");a.classList.add(".number-of-tasks"),n.appendChild(a),t.appendChild(n),r.appendChild(t)}i||(i=[]);class p{constructor(e,t,n,a,l){this.id=e,this.title=t,this.date=a,this.description=n,this.priority=l}}function m(){const e=new Date;let t=e.getFullYear(),n=e.getMonth()+1,a=e.getDate();return n<10&&(n="0"+n),a<10&&(a="0"+a),t.toString()+"-"+n.toString()+"-"+a.toString()}function h(e){e.preventDefault();let t=n(),a=document.querySelector("input.task-name").value,d=document.querySelector("input.task-date").value,c=document.querySelector("textarea.task-description").value,r=document.querySelector("select.task-priority").value,s=document.querySelector(".tasks-container").querySelector(".tasks-list"),o=!1,u=!1,m=new p(t,a,c,d,r);u=function(e){let t=!0,n="";return e.title.length<1&&(n="Task name can't be empty."),e.title.length>15&&(n="Task name can't be longer than 15 characters."),e.description.length>300&&(n="Task description can't be longer than 300 characters."),t=""==n,t}(m),console.log(l),u&&(o=!0,l.tasks.push(m)),o&&(s.appendChild(E(m)),localStorage.setItem("allProjects",JSON.stringify(i)))}function E(e){let t=document.createElement("div");t.classList.add("task");let n=document.createElement("span");n.classList.add("task-date"),n.innerText=e.date;let a=document.createElement("h4");a.classList.add("task-title"),a.innerText=e.title;let l=document.createElement("span");l.classList.add("task-description"),l.innerText=e.description;let d=document.createElement("div");d.classList.add("tasks-btns");let c=document.createElement("button");c.classList.add("edit-task"),c.innerText="pen";let i=document.createElement("button");return i.classList.add("delete-task"),i.innerText="trash-can",d.appendChild(c),d.appendChild(i),t.appendChild(n),t.appendChild(a),t.appendChild(l),t.appendChild(d),t}function C(){let e;if(d=this.id,document.querySelector(".project-name").innerText!==d){switch(d){case"All tasks":c=[],i.forEach((e=>{e.tasks.forEach((e=>{c.push(e)}))})),e=c;break;case"Today":e=function(){let e=[],t=m();return c.forEach((n=>{n.date==t&&e.push(n)})),e}();break;case"This week":e=function(){let e=[],t=m(),n=function(){const e=new Date;let t=new Date(e.getTime()-6048e5),n=e.getFullYear(),a=e.getMonth()+1,l=e.getDate();return a<10&&(a="0"+a),l<10&&(l="0"+l),t=n.toString()+"-"+a.toString()+"-"+l.toString(),t}();return c.forEach((a=>{a.date>=n&&a.date<=t&&e.push(a)})),e}();break;default:e=function(e){let t=i.find((t=>t.title==e));return l=t,t.tasks}(d)}document.querySelector(".tasks-list").innerHTML="",function(e,t){let n=document.querySelector(".tasks-container"),a=n.querySelector(".project-name"),l=n.querySelector(".tasks-list");a.innerText=e,t.forEach((e=>{l.appendChild(E(e))})),document.querySelector(".btn-add-task").style.display="All tasks"==e||"Today"==e||"This week"==e?"none":"block"}(d,e)}}i||(i=[]),localStorage.getItem("allProjects")&&(i=localStorage.getItem("allProjects"),i=JSON.parse(i),i.forEach((e=>{u(e)})));let k=document.querySelectorAll(".menu-options > li"),f=k[0];k.forEach((e=>{e.addEventListener("click",C)})),f.click(),document.querySelector(".btn-addProject").addEventListener("click",(function(){null==document.querySelector(".new-project-container")&&r.appendChild(function(){a=document.createElement("div"),a.classList.add("new-project-container");let e=document.createElement("input");e.setAttribute("maxLength",25);let t=document.createElement("button");t.innerText="Add project",t.addEventListener("click",o);let n=document.createElement("button");return n.innerText="Cancel",n.addEventListener("click",s),a.appendChild(e),a.appendChild(t),a.appendChild(n),a}())})),document.querySelector(".btn-add-task").addEventListener("click",(function(){document.querySelector(".tasks-container").appendChild(function(){const e=document.createElement("div");e.classList.add("modal-window");const t=document.createElement("div");t.classList.add("modal-content");const n=document.createElement("div");n.classList.add("container-modal");const a=document.createElement("div");a.classList.add("modal-top");let l=document.createElement("h3");l.innerText="Add New Task";let d=document.createElement("span");d.classList.add("close-modal"),d.innerText="&times;  ",a.appendChild(l),a.appendChild(d);let c=document.createElement("div");c.classList.add("container-task-info");let i=document.createElement("form"),r=document.createElement("span");r.innerText="*";let s=document.createElement("div");s.classList.add("container-input");let o=document.createElement("label");o.innerText="Title",o.appendChild(r);let u=document.createElement("input");u.classList.add("task-name");let p=document.createElement("span");p.classList.add("error-message"),p.appendChild(r),s.appendChild(o),s.appendChild(u),s.appendChild(p);let E=document.createElement("div");E.classList.add("container-input");let C=document.createElement("label");C.innerText="Date",C.appendChild(r);let k=document.createElement("input");k.type="date",k.classList.add("task-date");let f=m();k.value=f;let L=document.createElement("span");L.classList.add("error-message"),L.appendChild(r),E.appendChild(C),E.appendChild(k),E.appendChild(L);let g=document.createElement("div");g.classList.add("container-input");let y=document.createElement("label");y.innerText="Description",y.appendChild(r);let S=document.createElement("textarea");S.classList.add("task-description");let T=document.createElement("span");T.classList.add("error-message"),T.appendChild(r),g.appendChild(y),g.appendChild(S),g.appendChild(T);let b=document.createElement("div");b.classList.add("container-input");let v=document.createElement("label");v.innerText="Priority",v.appendChild(r);let x=document.createElement("select");x.classList.add("task-priority");let q=document.createElement("option");q.innerText="Low",q.setAttribute("value","low"),q.setAttribute("selected","selected");let w=document.createElement("option");w.innerText="Medium",w.setAttribute("value","medium");let j=document.createElement("option");j.innerText="High",j.setAttribute("value","high"),x.appendChild(q),x.appendChild(w),x.appendChild(j);let A=document.createElement("span");A.classList.add("error-message"),A.appendChild(r),b.appendChild(v),b.appendChild(x),b.appendChild(A);let P=document.createElement("button");return P.innerText="Add task",P.setAttribute("type","submit"),P.addEventListener("click",h),i.appendChild(s),i.appendChild(E),i.appendChild(g),i.appendChild(b),i.appendChild(P),c.appendChild(i),n.appendChild(a),n.appendChild(c),t.appendChild(n),e.appendChild(t),e}())}))})();