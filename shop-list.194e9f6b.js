const t={charityOrganizations:document.querySelector(".support"),bookCategoriesList:document.querySelector(".book-categories-list"),booksPopularCategoris:document.querySelector(".popular-books"),mainPage:document.querySelector(".main-content")},{charityOrganizations:o,bookCategoriesList:n,booksPopularCategoris:e,mainPage:i}=t;!function(t){const n=t.reduce(((t,{title:o,url:n},e)=>{let i=e+1;return t.push(`<li>\n            <span class="counter">${i.toString().padStart(2,"0")}</span>\n            <a class="charity-link" href="${n}" target="_blank">\n              <img\n                class="charity-icon"\n                src="./images/image ${i}.png"\n                alt="${o}"\n              />\n            </a>\n          </li>`),t}),[]);o.innerHTML=n.join(" ")}([{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:null},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:null},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:null},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:null},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:null},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:null},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:null},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:null},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:null}]);!async function(t){await fetch(t).then((t=>{if(!t.ok)throw new Error(t.status);return t.json()})).then((t=>{console.dir(t),function(t){const o=t.map((({list_name:t})=>`<li>\n          <span class="counter">${t}</span>\n                    </li>`));n.innerHTML=o.join(" ")}(t)})).catch((t=>{console.dir(t)}))}("https://books-backend.p.goit.global/books/category-list ");!async function(t){await fetch(t).then((t=>{if(!t.ok)throw new Error(t.status);return t.json()})).then((t=>{console.dir(t),function(t){const o=t.map((({books:t,list_name:o})=>`  <div class="popular-books-sections">\n            <h3 class="popular-books-heder">${o}</h3>\n            <ul class="popular-books-list">\n                      ${t.map((({author:t,book_image:o,title:n})=>` <li>\n                    <img class="popular-book-icon" src="${o}" alt="${n}" width = 180px />\n                    <h4 class="popular-book-title">${n}</h4>\n                    <span class="popular-book-author">${t}</span>\n                  </li>`))}\n            </ul>\n            <button type="submit" class="popular-books-btn">SEE MORE</button>\n          </div>`));e.innerHTML=o.join(" ")}(t)})).catch((t=>{console.dir(t)}))}("https://books-backend.p.goit.global/books/top-books ");async function a(t,o){await fetch(`${t}${o}`).then((t=>{if(!t.ok)throw new Error(t.status);return t.json()})).then((t=>{console.dir(t),function(t,o){i.firstElementChild.textContent=`${o}`;const n=t.map((({author:t,book_image:o,title:n})=>` <li>\n                    <img class="popular-book-icon" src="${o}" alt="${n}" width = 180px />\n                    <h4 class="popular-book-title">${n}</h4>\n                    <span class="popular-book-author">${t}</span>\n                  </li>`));e.innerHTML=n.join(" "),e.classList.replace("popular-books","groop-book-page")}(t,o)})).catch((t=>{console.dir(t)}))}n.addEventListener("click",(function(t){const o=t.target.textContent;a("https://books-backend.p.goit.global/books/category?category=",o)}));
//# sourceMappingURL=shop-list.194e9f6b.js.map
