import createHomepageContent from "./modules/homepage";
import createMenuPage from "./modules/menu";
import createFooter from "./modules/footer";

import createContact from "./modules/contact";

import "./components/style.scss";
import "./components/contact.scss";
import "./components/menu.scss";
import "./components/homepage.scss";

let content = document.getElementById("content");

content.append()

function loadContent(mainpage = "Home") {
    content.innerHTML = "";
    content.append(createHeader());

    

    switch (mainpage) {
        case "Home":
            content.append(createHomepageContent());
            break;
        
        case "Menu":
            content.append(createMenuPage());
            break;
        
        case "Contact":
            content.append(createContact());
            break;    
    }

    content.append(createFooter());
}

function createHeader() {
    let header = document.createElement("header");
  
    let title = document.createElement("h1");
    title.classList.add("title");
    
    let ul__nav_link = document.createElement("ul");
    ul__nav_link.classList.add("ul__nav");
  
    header.appendChild(title);
    header.appendChild(ul__nav_link);
  
    // CREATE
  
    let home = document.createElement("li");
    let menu = document.createElement("li");
    let contact = document.createElement("li");
  
    // TEXTCONTENT
  
    title.textContent = "Narayan Dai ko Mitho Jhol Momo";
    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";
  
    // APPEND
  
    ul__nav_link.appendChild(home);
    ul__nav_link.appendChild(menu);
    ul__nav_link.appendChild(contact);
  
    home.addEventListener("click", () => {
        loadContent("Home");
      });
    
    contact.addEventListener("click", () => {
    loadContent("Contact");
    });
    
    menu.addEventListener("click", () => {
    loadContent("Menu");
    });
  
    return header;
  }


loadContent();


