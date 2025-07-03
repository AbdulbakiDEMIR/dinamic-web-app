import config from "../config.js"
import { renderApp } from "../routing/routing.js";




window.changeUrl = function (newPath) {

    history.pushState(null, "", config.basePath+newPath); // URL'yi değiştir
    renderApp(); // URL değiştikten sonra hemen render et
}

window.scrollToSection = function (event) { 
    event.preventDefault();
    const href = event.target.getAttribute("href");
    const sectionId = href.substring(1);
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    } 
};
window.changeTitle = function (title){
    document.title = title;
}


