import { FastPage } from "/components/fast_page.js";
import { ImageAdapter, ImageAdapterLabel } from "/components/image_adapter.js";
import { TextInput } from "/components/input/input.js";

export function AdminPage() { 
    const image_adapter=ImageAdapter("image_adapter"); 


    document.getElementById('app').innerHTML = `
        ${ImageAdapterLabel("image_adapter","Buraya Tıkla", "col-8")}
        ${image_adapter}
    `;

}