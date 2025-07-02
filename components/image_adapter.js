import { FastPage, FastPageLabel } from "/components/fast_page.js";
import { TextInput } from "/components/input/input.js"
import {imagesData} from "/img/images.js"

export function ImageAdapter(name,chance,type) { 

    const create_image = FastPage(`
        <form 
            id="${name}_form" 
            class="d-flex justify-content-center align-items-center flex-column"
             onsubmit="image_adapter_submit(event)"
        >
            ${TextInput("text","image_create_name_input", "mb-2","Resim Adı")}
            ${TextInput("file","image_create_input", "mb-2 mx-auto w-50","")}
            <div class="w-100 d-flex mx-auto">
                <button class="w-50 mx-auto btn btn-dark">Resim Ekle</button>
            </div>
        </form>
        
    `,"create_image", "col-4", "Resim Yükle");
    const create_image_label = FastPageLabel("create_image",`
        <div class="col cursor-pointer">
            <div class="ratio ratio-1x1 bg-white">
                <div class="w-100 h-100 d-flex align-items-center justify-content-center flex-column">
                    <i class="fa-solid fa-plus fs-1"></i>
                    <p class="text-center m-0" style="1rem">Yeni Resim Ekle</p>
                </div>
            </div>
            <p class="text-center fw-light text-no-wrap" style="font-size:0.9rem">Buraya Tıkla Buraya Tıkla Buraya Tıkla Buraya Tıkla Buraya Tıkla Buraya Tıkla </p>
        </div>
    `)
    function images(path,name,chance,type) {
        return `
        <div class="col cursor-pointer" onclick="image_adapter_value('image_adapter_input','${path}','${chance}','${type}')">
            <div class="ratio ratio-1x1 bg-white">
                <img src="${path}" class="w-100 h-100" style="object-fit:cover;">
            </div>
            <p class="text-center fw-light text-no-wrap" style="font-size:0.9rem">${name}</p>
        </div>
    `
    }
    function show_images(chance,type) {
        var image = "";
        // Örnek: Tüm resim yollarını yazdır
        imagesData.forEach(item => {
            image = image + images(item.path,item.name,chance,type);

        });

        return image;
    }
    
    const FastPage1 = FastPage(`
        <div  class="row row-cols-6">
            ${create_image_label}
            ${show_images(chance,type)}
            ${create_image}
        </div>
        `,name, "col-8", "Resim")
    
    

    return `
        ${FastPage1}
    `
    

}

export function ImageAdapterLabel(name,content) {
    return `
        ${FastPageLabel(name,content)}
    `
}