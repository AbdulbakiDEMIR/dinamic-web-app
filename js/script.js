window.scrollToSection = function (event) {
    event.preventDefault();
    const href = event.target.getAttribute("href");
    const sectionId = href.substring(1);
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
};


window.getParams = function (paramsName) {
    const search = window.location.search; 

    const params = new URLSearchParams(search);
    const params_value = params.get(paramsName);

    return params_value;
};
