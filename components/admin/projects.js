import { FastPage, FastPageLabel } from "/components/fast_page.js";
import { ImageAdapter, ImageAdapterLabel } from "/components/image_adapter.js";
import { TextInput } from "/components/input/input.js"

export function Projects(projects){
    var projectsContent = ""
    
    projectsContent = projects.map(data => `
        ${MainContent(data)}
    `).join('');

    const image_adapter2=ImageAdapter("projects_create_image_adapter","project_img_create_input","text"); 
    const image_adapter3=ImageAdapter("projects_update_image_adapter","project_img_update_input","text"); 

    return `
        ${image_adapter2}
        ${image_adapter3}
        <section id="projects">
            <div class="container-xxl">
                <div class="row">

                    ${FastPage(`
                        <form onsubmit="project_create(event)">
                            ${TextInput("text","project_name_create_input", "mb-2 mx-auto ","Project Name")}
                            ${TextInput("text","project_date_create_input", "mb-2 mx-auto ","Project Date")}
                            <div class="d-flex flex-row align-items-center">
                                <div class="w-100 me-2 mx-auto">
                                    ${TextInput("text","project_img_create_input", "mb-2 mx-auto ","Project İmage")}
                                </div>
                                ${ImageAdapterLabel("projects_create_image_adapter",`
                                    <i class="fa-solid fa-image mt-3 fs-3"></i>
                                `)}
                            </div>
                            
                            ${TextInput("textarea","project_description_create_input", "mb-2 mx-auto ","Project Description")}
                            ${TextInput("text","project_github_create_input", "mb-2 mx-auto ","Project GitHub Link")}
                            <button class="btn btn-dark">Kaydet</button>
                        </form>
                    `,"project_create","text-dark W-50","Project Create")}

                    ${FastPage(`
                        <form onsubmit="project_update(event)">
                            <input type="hidden" id="project_id_update_input" name="project_id_update_input">
                            ${TextInput("text","project_name_update_input", "mb-2 mx-auto ","Project Name")}
                            ${TextInput("text","project_date_update_input", "mb-2 mx-auto ","Project Date")}
                            <div class="d-flex flex-row align-items-center">
                                <div class="w-100 me-2 mx-auto">
                                    ${TextInput("text","project_img_update_input", "mb-2 mx-auto ","Project İmage")}
                                </div>
                                ${ImageAdapterLabel("projects_update_image_adapter",`
                                    <i class="fa-solid fa-image mt-3 fs-3"></i>
                                `)}
                            </div>
                            
                            ${TextInput("textarea","project_description_update_input", "mb-2 mx-auto ","Project Description")}
                            ${TextInput("text","project_github_update_input", "mb-2 mx-auto ","Project GitHub Link")}
                            <button class="btn btn-dark">Kaydet</button>
                        </form>
                    `,"project_update","text-dark W-50","Project Update")}



                    <div class="col-12 col-lg-8 mx-auto">
                        <h2 class="animate-top2">Projeler</h2>
                        <div class="row row-cols-md-3 row-cols-2">

                            <div class="col p-2 animate-top1" >
                                <div class="card text-bg-dark shadow-1 border-0 h-100">
                                    ${FastPageLabel("project_create",`
                                        <div class="card-body d-flex align-items-center justify-content-center flex-column h-100" onclick="set_project_create_component()">
                                            <h3>New Project</h3>
                                            <i class="fa-solid fa-plus fs-1"></i>
                                        </div>
                                    `,"h-100")}
                                </div>    
                            </div>

           


                            ${projectsContent}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
};



function MainContent(data) {

    return `
        <div class="col p-2 animate-top1">
            <div class="card text-bg-dark shadow-1 border-0 h-100">
                <div class="position-absolute top-0 end-0 p-2" style="z-index: 1;">
                    ${FastPageLabel("project_update",`
                        <i class="fa-solid fa-pen cursor-pointer bg-black bg-opacity-25 rounded-circle p-2 fs-6" 
                        onclick="set_project_update_component('${data.id}', '${data.header}', '${data.date}', '${data.img}', '${data.explanation.replace(/"/g, '&quot;')}', '${data.link}')"></i>
                    `)}
                    <i class="fa-solid fa-trash cursor-pointer text-danger bg-black bg-opacity-25 rounded-circle p-2 fs-6" 
                    onclick="project_delete('${data.id}')"></i>
                </div>
                <div class="card-image ratio ratio-1x1">
                    <img src="${data.img}" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                    <h5 class="card-title">
                        ${data.header}
                    </h5>
                    <p class="card-text">
                        ${data.explanation}
                    </p>
                </div>
                <div class="card-bottom">
                    <span>
                        <i class="fa-regular fa-calendar me-1"></i>
                        ${data.date}
                    </span>
                    <a href="${data.link}" target="_blank" class="rounded-pill">
                        <i class="fa-brands fa-github me-1"></i>
                        İncele
                    </a>
                </div>
            </div>    
        </div>
    `
}