(()=>{"use strict";document.querySelector(".tasks-container"),document.querySelector(".btn-addProject").addEventListener("click",(function(){document.querySelector(".projects").appendChild(function(){let e=document.createElement("div"),t=document.createElement("input"),n=document.createElement("button");n.innerText="Add project";let c=document.createElement("button");return c.innerText="Cancel",e.appendChild(t),e.appendChild(n),e.appendChild(c),e}())}))})();