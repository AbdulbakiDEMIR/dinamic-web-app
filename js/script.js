
export function initScrollReveal() {
    const sr = ScrollReveal({ reset: false });

    sr.reveal('.animate-top1', { origin: "top", distance: "200px", duration: 1000 });
    sr.reveal('.animate-top2', { origin: "top", distance: "200px", duration: 1000, delay: 100 });
    sr.reveal('.animate-top3', { origin: "top", distance: "200px", duration: 1000, delay: 200 });
    sr.reveal('.animate-top4', { origin: "top", distance: "200px", duration: 1000, delay: 300 });
    sr.reveal('.animate-top5', { origin: "top", distance: "200px", duration: 1000, delay: 400 });
    sr.reveal('.animate-bottom', { origin: "bottom", distance: "200px", duration: 1000 });
    sr.reveal('.animate-left1', { origin: "left", distance: "200px", duration: 1000 });
    sr.reveal('.animate-left2', { origin: "left", distance: "200px", duration: 1000, delay: 100 });
    sr.reveal('.animate-left3', { origin: "left", distance: "200px", duration: 1000, delay: 200 });
    sr.reveal('.animate-left4', { origin: "left", distance: "200px", duration: 1000, delay: 300 });
    sr.reveal('.animate-right', { origin: "right", distance: "100px", duration: 1000 });
}



function burgerButtonActive() {
    var burger_line1 = document.getElementById("burger-button-line1");
    var burger_line2 = document.getElementById("burger-button-line2");
    var burger_line3 = document.getElementById("burger-button-line3");
    var burger_ul = document.querySelector("nav");

    burger_line1.classList.toggle("burger-button-line1-active");
    burger_line2.classList.toggle("burger-button-line2-active");
    burger_line3.classList.toggle("burger-button-line3-active");
    burger_ul.classList.toggle("nav-active")
}


window.addEventListener('scroll', function () {
    var navbar = document.querySelector('nav');
    if (navbar) {  // navbar öğesinin olup olmadığını kontrol et
        if (window.scrollY > document.documentElement.clientHeight / 2) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});


window.scrollToSection = function (event) {
    event.preventDefault();
    const href = event.target.getAttribute("href");
    const sectionId = href.substring(1);
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
};


function changeUrl(url) {
    window.location.pathname = url;
}

window.getParams = function (paramsName) {
    const search = window.location.search; // "?id=12"

    const params = new URLSearchParams(search);
    const params_value = params.get(paramsName);

    return params_value;
};


window.inputPasswordIcon = function (id) {
    icon = document.getElementById("icon" + id);
    input = document.getElementById(id);
    if (input.type == "text") {
        input.type = "password"
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        input.type = "text"
        icon.classList.add("fa-eye");
        icon.classList.remove("fa-eye-slash");
    }
}

window.previewImage = function (event, id) {
    const file = event.target.files[0]; // Seçilen ilk dosya
    id = id.id;
    if (file) {
        const previewContainer = document.querySelector('#' + id + 'PreviewContainer img');
        previewContainer.src = URL.createObjectURL(file); // Dosyanın geçici URL'sini al

    }
}

window.image_adapter_submit = function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const image_name = formData.get("image_create_name_input");
    const image_file = formData.get("image_create_input");


    fetch("/php/upload_image.php", {
        method: "POST",
        body: formData
    })
        .then(response => response.text())
        .then(data => {
        })
        .catch(error => {
            console.error("Yükleme sırasında hata oluştu:", error);
        });
}





window.image_adapter_value = function (target, value, chance, type) {
    var image_input = document.getElementById(target);
    image_input.value = value;
    var admin_personal_image = document.getElementById(chance);
    if (type === "img") {
        admin_personal_image.src = value;
    } else if (type === "text") {
        admin_personal_image.value = value;
    } 
}


window.personal_data_submit = function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch("/php/upload_personal_info.php", {
        method: "POST",
        body: formData
    })
        .then(response => response.text())
        .then(data => {
        })
        .catch(error => {
            console.error("Yükleme sırasında hata oluştu:", error);
        });
}

window.work_update = function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch("/php/work_update.php", {
        method: "POST",
        body: formData
    })
        .then(response => response.text())
        .then(data => {
            changeUrl(window.location.pathname)
        })
        .catch(error => {
            console.error("Yükleme sırasında hata oluştu:", error);
        });
}

window.set_work_update_component = function (id, name, date, mission, explanation) {
    document.getElementById("work_update_id").value = id;
    document.getElementById("work_company_name_update_input").value = name;
    document.getElementById("work_company_date_update_input").value = date;
    document.getElementById("work_company_mission_update_input").value = mission;
    document.getElementById("work_company_explanation_update_input").value = explanation;
}


window.work_create = function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch("/php/work_create.php", {
        method: "POST",
        body: formData
    })
        .then(response => response.text())
        .then(data => {
            changeUrl(window.location.pathname)
        })
        .catch(error => {
            console.error("Yükleme sırasında hata oluştu:", error);
        });
}

window.set_work_create_component = function () {
    document.getElementById("work_company_name_create_input").value = "";
    document.getElementById("work_company_date_create_input").value = "";
    document.getElementById("work_company_mission_create_input").value = "";
    document.getElementById("work_company_explanation_create_input").value = "";
}

window.work_delete = function (id) {
    const formData = new FormData();
    formData.append("delete_id", id);

    fetch("/php/work_delete.php", {
        method: "POST",
        body: formData
    })
        .then(response => response.text())
        .then(data => {
            changeUrl(window.location.pathname)
        })
        .catch(error => {
            console.error("Yükleme sırasında hata oluştu:", error);
        });
}

window.update_tech_header = function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch("/php/tech_header_update.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        changeUrl(window.location.pathname)
    })
    .catch(error => {
        console.error("Yükleme sırasında hata oluştu:", error);
    });
   
}     
window.delete_tech_header = function (id) {
    const formData = new FormData();
    formData.append("delete_id", id);
    fetch("/php/tech_header_delete.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        changeUrl(window.location.pathname)
    })
    .catch(error => {
        console.error("Yükleme sırasında hata oluştu:", error);
    });
}  
window.create_tech_header = function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch("/php/tech_header_create.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        changeUrl(window.location.pathname)
    })
    .catch(error => {
        console.error("Yükleme sırasında hata oluştu:", error);
    });
}                        

window.update_skill = function (event,id) {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch("/php/skill_update.php", {
        method: "POST",
        body: formData
    })
        .then(response => response.text())
        .then(data => {
            changeUrl(window.location.pathname)
        })
        .catch(error => {
            console.error("Yükleme sırasında hata oluştu:", error);
        });
}
window.create_skill = function (event,header_id) {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("header_id", header_id);
    fetch("/php/skill_create.php", {
        method: "POST",
        body: formData
    })
        .then(response => response.text())
        .then(data => {
            changeUrl(window.location.pathname)
        })
        .catch(error => {
            console.error("Yükleme sırasında hata oluştu:", error);
        });
    
}


window.delete_skill = function (id) {
    const formData = new FormData();
    formData.append("delete_id", id);
    fetch("/php/skill_delete.php", {
        method: "POST",
        body: formData
    })
        .then(response => response.text())
        .then(data => {
            changeUrl(window.location.pathname)
        })
        .catch(error => {
            console.error("Yükleme sırasında hata oluştu:", error);
        });
    

}

window.edu_update = function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch("/php/edu_update.php", {
        method: "POST",
        body: formData
    })
        .then(response => response.text())
        .then(data => {
            changeUrl(window.location.pathname)
        })
        .catch(error => {
            console.error("Yükleme sırasında hata oluştu:", error);
        });
}




window.set_edu_update_component = function (id, university, date, department, class_name, note) {
    document.getElementById("edu_update_id").value = id;
    document.getElementById("edu_university_update_input").value = university;
    document.getElementById("edu_date_update_input").value = date;
    document.getElementById("edu_department_update_input").value = department;
    document.getElementById("edu_class_name_update_input").value = class_name;
    document.getElementById("edu_note_update_input").value = note;
}



window.project_create = function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    fetch("/php/project_create.php", {
        method: "POST",
        body: formData
    })
        .then(response => response.text())
        .then(data => {
            changeUrl(window.location.pathname)
        })
        .catch(error => {
            console.error("Yükleme sırasında hata oluştu:", error);
        });
}

window.set_project_create_component = function () {
    document.getElementById("project_name_create_input").value = "";
    document.getElementById("project_date_create_input").value = "";
    document.getElementById("project_img_create_input").value = "";
    document.getElementById("project_description_create_input").value = "";
    document.getElementById("project_github_create_input").value = "";
}


window.project_update = function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch("/php/project_update.php", {
        method: "POST",
        body: formData
    })
        .then(response => response.text())
        .then(data => {
            changeUrl(window.location.pathname)
        })
        .catch(error => {
            console.error("Yükleme sırasında hata oluştu:", error);
        });
}

window.set_project_update_component = function (id, name, date, img, description, github) {
    document.getElementById("project_id_update_input").value = id;
    document.getElementById("project_name_update_input").value = name;
    document.getElementById("project_date_update_input").value = date;
    document.getElementById("project_img_update_input").value = img;
    document.getElementById("project_description_update_input").value = description;
    document.getElementById("project_github_update_input").value = github;
}

window.project_delete = function (id) {
    const formData = new FormData();
    formData.append("id", id);
    fetch("/php/project_delete.php", {
        method: "POST",
        body: formData
    })
        .then(response => response.text())
        .then(data => {
            changeUrl(window.location.pathname)
        })
        .catch(error => {
            console.error("Yükleme sırasında hata oluştu:", error);
        });
}





window.blog_create = function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    fetch("/php/blog_create.php", {
        method: "POST",
        body: formData
    })
        .then(response => response.text())
        .then(data => {
            changeUrl(window.location.pathname)
        })
        .catch(error => {
            console.error("Yükleme sırasında hata oluştu:", error);
        });
}

window.set_blog_create_component = function () {
    document.getElementById("blog_name_create_input").value = "";
    document.getElementById("blog_date_create_input").value = "";
    document.getElementById("blog_img_create_input").value = "";
    document.getElementById("blog_description_create_input").value = "";
    document.getElementById("blog_github_create_input").value = "";
}


window.blog_update = function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch("/php/blog_update.php", {
        method: "POST",
        body: formData
    })
        .then(response => response.text())
        .then(data => {
            changeUrl(window.location.pathname)
        })
        .catch(error => {
            console.error("Yükleme sırasında hata oluştu:", error);
        });
}

window.set_blog_update_component = function (id, name, date, img, description, github) {
    document.getElementById("blog_id_update_input").value = id;
    document.getElementById("blog_name_update_input").value = name;
    document.getElementById("blog_date_update_input").value = date;
    document.getElementById("blog_img_update_input").value = img;
    document.getElementById("blog_description_update_input").value = description;
    document.getElementById("blog_github_update_input").value = github;
}

window.blog_delete = function (id) {
    const formData = new FormData();
    formData.append("id", id);
    fetch("/php/blog_delete.php", {
        method: "POST",
        body: formData
    })
        .then(response => response.text())
        .then(data => {
            changeUrl(window.location.pathname)
        })
        .catch(error => {
            console.error("Yükleme sırasında hata oluştu:", error);
        });
}




window.login = function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch("/php/admin_login.php", {
        method: "POST",
        body: formData
    })
        .then(response => {
            return response.text().then(data => {
            return { status: response.status, body: data };
        });
        })
        .then(({ status, body }) => {
            if (status === 200) {
                // Giriş başarılı
                window.check_session_for_login_page()
            } else {
                // Giriş başarısız
                alert("Giriş başarısız. Lütfen tekrar deneyin.");
            }
        })
        .catch(error => {
            console.error("Giriş sırasında hata oluştu:", error);
        });
}
window.check_session_for_login_page = function() {
    fetch('/php/admin_check_session.php')
    .then(res => res.json())
    .then(data => {
        if (data.logged_in) {
            changeUrl("/admin");
        }
    });
}
window.check_session_for_admin_page = function() {
    fetch('/php/admin_check_session.php')
    .then(res => res.json())
    .then(data => {
        if (!data.logged_in) {
            changeUrl("/login");
        }
    });
}

window.logout = function () {
    fetch('/php/admin_logout.php')
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            changeUrl("/login");
        }
    });
}