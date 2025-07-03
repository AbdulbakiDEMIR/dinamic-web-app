import {config, pageQueryParameterKey } from "../config.js"
import { renderApp } from "../routing/routing.js";


window.changePage = function (newPage) {
    if(newPage===""){
        history.pushState(null, "", config.basePath);
    }
    else{
        history.pushState(null, "", config.basePath+"?"+pageQueryParameterKey+"="+newPage); // URL'yi değiştir
    }
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


