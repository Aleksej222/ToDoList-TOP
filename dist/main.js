(()=>{"use strict";var e={d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{c:()=>c});class t{constructor(e,t,n){this.id=e,this.title=t,this.tasks=n}}function n(){return Math.floor(1e8*Math.random())}let a,l,d,c,i=document.querySelector(".projects");function r(){a.outerHTML=""}function s(){let e=!1,l=!1,d=n(),i=a.querySelector("input").value,s=new t(d,i,[]);l=function(e){let t=!1,n="",a=function(e){let t=!1;return c.map((n=>{n.title.toLowerCase()==e.toLowerCase()&&(t=!0)})),t}(e.title);a&&(n="Project with that name already exists.");let l=e.title.length<1;l&&(n="Project name can't be empty.");let d=function(e){return e.length>=25}(e.title);return d&&(n="Project name is too long."),document.querySelector(".error-message").innerText=n,t=0==a,t=t&&0==l,t=t&&0==d,t}(s),l&&(e=!0,c.push(s),localStorage.setItem("allProjects",JSON.stringify(c))),e&&o(s),r()}function o(e){let t=i.querySelector("ul"),n=document.createElement("li");n.classList.add("project"),n.innerText=e.title,n.setAttribute("id",e.title);let a=document.createElement("span");a.classList.add(".number-of-tasks"),n.appendChild(a),t.appendChild(n),i.appendChild(t)}c||(c=[]);class p{constructor(e,t,n,a,l){this.id=e,this.title=t,this.date=a,this.description=n,this.priority=l}}function u(e){e.preventDefault();let t=n(),a=document.querySelector("input.task-name").value,d=document.querySelector("input.task-date").value,i=document.querySelector("textarea.task-description").value,r=document.querySelector("select.task-priority").value,s=document.querySelector(".tasks-container").querySelector(".tasks-list"),o=!1,u=!1,h=new p(t,a,i,d,r);u=function(e){let t=!0,n="";return e.title.length<1&&(n="Task name can't be empty."),e.title.length>15&&(n="Task name can't be longer than 15 characters."),e.description.length>15&&(n="Task description can't be longer than 150 characters."),t=""==n,t}(h),console.log(l),u&&(o=!0,l.tasks.push(h)),o&&(s.appendChild(m(h)),localStorage.setItem("allProjects",JSON.stringify(c)))}function m(e){let t=document.createElement("div");t.classList.add("task");let n=document.createElement("span");n.classList.add("task-date"),n.innerText=e.date;let a=document.createElement("h4");a.classList.add("task-title"),a.innerText=e.title;let l=document.createElement("span");l.classList.add("task-description"),l.innerText=e.description;let d=document.createElement("div");d.classList.add("tasks-btns");let c=document.createElement("button");c.classList.add("edit-task"),c.innerText="pen";let i=document.createElement("button");return i.classList.add("delete-task"),i.innerText="trash-can",d.appendChild(c),d.appendChild(i),t.appendChild(n),t.appendChild(a),t.appendChild(l),t.appendChild(d),t}function h(){let e;if(d=this.id,document.querySelector(".project-name").innerText!==d){switch(d){case"All tasks":e=function(){let e=[];return c.forEach((t=>{t.tasks.forEach((t=>{e.push(t)}))})),e}();break;case"Today":case"This week":e=void 0;break;default:e=function(e){let t=c.find((t=>t.title==e));return l=t,t.tasks}(d)}document.querySelector(".tasks-list").innerHTML="",function(e,t){let n=document.querySelector(".tasks-container"),a=n.querySelector(".project-name"),l=n.querySelector(".tasks-list");a.innerText=e,t.forEach((e=>{l.appendChild(m(e))})),document.querySelector(".btn-add-task").style.display="All tasks"==e||"Today"==e||"This week"==e?"none":"block"}(d,e)}}c||(c=[]),localStorage.getItem("allProjects")&&(c=localStorage.getItem("allProjects"),c=JSON.parse(c),c.forEach((e=>{o(e)})));let C=document.querySelectorAll(".menu-options > li"),E=C[0];C.forEach((e=>{e.addEventListener("click",h)})),E.click(),document.querySelector(".btn-addProject").addEventListener("click",(function(){null==document.querySelector(".new-project-container")&&i.appendChild(function(){a=document.createElement("div"),a.classList.add("new-project-container");let e=document.createElement("input");e.setAttribute("maxLength",25);let t=document.createElement("button");t.innerText="Add project",t.addEventListener("click",s);let n=document.createElement("button");return n.innerText="Cancel",n.addEventListener("click",r),a.appendChild(e),a.appendChild(t),a.appendChild(n),a}())})),document.querySelector(".btn-add-task").addEventListener("click",(function(){document.querySelector(".tasks-container").appendChild(function(){const e=document.createElement("div");e.classList.add("modal-window");const t=document.createElement("div");t.classList.add("modal-content");const n=document.createElement("div");n.classList.add("container-modal");const a=document.createElement("div");a.classList.add("modal-top");let l=document.createElement("h3");l.innerText="Add New Task";let d=document.createElement("span");d.classList.add("close-modal"),d.innerText="&times;  ",a.appendChild(l),a.appendChild(d);let c=document.createElement("div");c.classList.add("container-task-info");let i=document.createElement("form"),r=document.createElement("span");r.innerText="*";let s=document.createElement("div");s.classList.add("container-input");let o=document.createElement("label");o.innerText="Title",o.appendChild(r);let p=document.createElement("input");p.classList.add("task-name");let m=document.createElement("span");m.classList.add("error-message"),m.appendChild(r),s.appendChild(o),s.appendChild(p),s.appendChild(m);let h=document.createElement("div");h.classList.add("container-input");let C=document.createElement("label");C.innerText="Date",C.appendChild(r);let E=document.createElement("input");E.type="date",E.classList.add("task-date");let k=function(){const e=new Date;let t=e.getFullYear(),n=e.getMonth()+1,a=e.getDate();n<10&&(n="0"+n),a<10&&(a="0"+a);return t.toString()+"-"+n.toString()+"-"+a.toString()}();E.value=k;let L=document.createElement("span");L.classList.add("error-message"),L.appendChild(r),h.appendChild(C),h.appendChild(E),h.appendChild(L);let y=document.createElement("div");y.classList.add("container-input");let f=document.createElement("label");f.innerText="Description",f.appendChild(r);let T=document.createElement("textarea");T.classList.add("task-description");let b=document.createElement("span");b.classList.add("error-message"),b.appendChild(r),y.appendChild(f),y.appendChild(T),y.appendChild(b);let g=document.createElement("div");g.classList.add("container-input");let v=document.createElement("label");v.innerText="Priority",v.appendChild(r);let S=document.createElement("select");S.classList.add("task-priority");let x=document.createElement("option");x.innerText="Low",x.setAttribute("value","low"),x.setAttribute("selected","selected");let q=document.createElement("option");q.innerText="Medium",q.setAttribute("value","medium");let j=document.createElement("option");j.innerText="High",j.setAttribute("value","high"),S.appendChild(x),S.appendChild(q),S.appendChild(j);let w=document.createElement("span");w.classList.add("error-message"),w.appendChild(r),g.appendChild(v),g.appendChild(S),g.appendChild(w);let A=document.createElement("button");return A.innerText="Add task",A.setAttribute("type","submit"),A.addEventListener("click",u),i.appendChild(s),i.appendChild(h),i.appendChild(y),i.appendChild(g),i.appendChild(A),c.appendChild(i),n.appendChild(a),n.appendChild(c),t.appendChild(n),e.appendChild(t),e}())}))})();