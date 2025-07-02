import { FastPage, FastPageLabel } from "/components/fast_page.js";
import { ImageAdapter, ImageAdapterLabel } from "/components/image_adapter.js";
import { TextInput } from "/components/input/input.js"

export function Blogs(blogs){
    var blogsContent = ""
    
    blogsContent = blogs.map(data => `
        ${MainContent(data)}
    `).join('');

    const image_adapter2=ImageAdapter("blogs_create_image_adapter","blog_img_create_input","text"); 
    const image_adapter3=ImageAdapter("blogs_update_image_adapter","blog_img_update_input","text"); 

    return `
        ${image_adapter2}
        ${image_adapter3}
        <section id="blogs">
            <div class="container-xxl">
                <div class="row">

                    ${FastPage(`
                        <form onsubmit="blog_create(event)">
                            ${TextInput("text","blog_name_create_input", "mb-2 mx-auto ","Blog Name")}
                            ${TextInput("text","blog_date_create_input", "mb-2 mx-auto ","Blog Date")}
                            <div class="d-flex flex-row align-items-center">
                                <div class="w-100 me-2 mx-auto">
                                    ${TextInput("text","blog_img_create_input", "mb-2 mx-auto ","Blog İmage")}
                                </div>
                                ${ImageAdapterLabel("blogs_create_image_adapter",`
                                    <i class="fa-solid fa-image mt-3 fs-3"></i>
                                `)}
                            </div>
                            
                            ${TextInput("textarea","blog_description_create_input", "mb-2 mx-auto ","Blog Description")}
                            ${TextInput("text","blog_github_create_input", "mb-2 mx-auto ","Blog GitHub Link")}
                            <button class="btn btn-dark">Kaydet</button>
                        </form>
                    `,"blog_create","text-dark W-50","Blog Create")}

                    ${FastPage(`
                        <form onsubmit="blog_update(event)">
                            <input type="hidden" id="blog_id_update_input" name="blog_id_update_input">
                            ${TextInput("text","blog_name_update_input", "mb-2 mx-auto ","Blog Name")}
                            ${TextInput("text","blog_date_update_input", "mb-2 mx-auto ","Blog Date")}
                            <div class="d-flex flex-row align-items-center">
                                <div class="w-100 me-2 mx-auto">
                                    ${TextInput("text","blog_img_update_input", "mb-2 mx-auto ","Blog İmage")}
                                </div>
                                ${ImageAdapterLabel("blogs_update_image_adapter",`
                                    <i class="fa-solid fa-image mt-3 fs-3"></i>
                                `)}
                            </div>
                            
                            ${TextInput("textarea","blog_description_update_input", "mb-2 mx-auto ","Blog Description")}
                            ${TextInput("text","blog_github_update_input", "mb-2 mx-auto ","Blog GitHub Link")}
                            <button class="btn btn-dark">Kaydet</button>
                        </form>
                    `,"blog_update","text-dark W-50","Blog Update")}



                    <div class="col-12 col-lg-8 mx-auto">
                        <h2 class="animate-top2">Bloglar</h2>
                        <div class="row row-cols-md-3 row-cols-2">

                            <div class="col p-2 animate-top1" >
                                <div class="card text-bg-dark shadow-1 border-0 h-100">
                                    ${FastPageLabel("blog_create",`
                                        <div class="card-body d-flex align-items-center justify-content-center flex-column h-100" onclick="set_blog_create_component()">
                                            <h3>New Blog</h3>
                                            <i class="fa-solid fa-plus fs-1"></i>
                                        </div>
                                    `,"h-100")}
                                </div>    
                            </div>

           


                            ${blogsContent}
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
                    ${FastPageLabel("blog_update",`
                        <i class="fa-solid fa-pen cursor-pointer bg-black bg-opacity-25 rounded-circle p-2 fs-6" 
                        onclick="set_blog_update_component('${data.id}', '${data.header}', '${data.date}', '${data.img}', '${data.explanation.replace(/"/g, '&quot;')}', '${data.link}')"></i>
                    `)}
                    <i class="fa-solid fa-trash cursor-pointer text-danger bg-black bg-opacity-25 rounded-circle p-2 fs-6" 
                    onclick="blog_delete('${data.id}')"></i>
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