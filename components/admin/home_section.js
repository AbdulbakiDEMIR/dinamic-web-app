import { ImageAdapter, ImageAdapterLabel } from "/components/image_adapter.js";



export function HomeSection(data) {
    const image_adapter=ImageAdapter("admin_image_adapter","admin_personal_image","img"); 
    
    return `
        ${image_adapter}

        <section id="home" >
            <form onsubmit="personal_data_submit(event)">
                <div class="container-lg row">
                    <input type="hidden" id="image_adapter_input" name="image_adapter_input" value="${data["img_path"]}"/>
                    <div class="col-11  col-md-6  home-desc">
                        <input type="text" id="admin_hi" name="admin_hi" value="${data["header"]}"  class="animate-left1"/>
                        <input type="text" id="admin_name" name="admin_name" value="${data["name"]}" class="animate-left2"/>
                        <p class="animate-left3">
                            <textarea id="admin_description" name="admin_description">${data["description"]}</textarea>
                        </p>
                        <button class="btn btn-dark">Güncelle</button>
                    </div>
                    <div class="col-11 col-md-5 ratio1-1 mask-img animate-bottom">
                        ${ImageAdapterLabel("admin_image_adapter",`
                             <img src="${data["img_path"]}" id="admin_personal_image" class="animate-left4" style="width: 100%;height: 100%;" alt="">                
                            `, "col-8")}
                        <p   class="d-none"></p>
                    </div>
                </div>
            </form>
        </section> 
        `;
}