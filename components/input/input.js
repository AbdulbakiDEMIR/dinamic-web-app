export function TextInput(type="", id="",class_name="",label=""){
    var text_label;
    if(label!="" || label!="undefined"){
        text_label = `<label>${label}</label>`
    }


    if(type=="text"){
        return`
            ${text_label}
            <div class="${class_name}">
                <input id="${id}" name="${id}" class="form-control" type="${type}">
            </div>
        `
    }
    if(type=="textarea"){
        return`
            ${text_label}
            <div class="${class_name}">
                <textarea id="${id}" name="${id}" class="form-control" type="${type}"></textarea>
            </div>
        `
    }
    else if(type=="password"){
        return`
            ${text_label}
            <div class="${class_name}">
                <div class="d-flex align-items-center position-relative">
                    <input id="${id}"  class="form-control pe-5" type="${type}"> 
                    <i id="${"icon"+id}" onclick="inputPasswordIcon('${id}')" class="fa-solid fa-eye-slash position-absolute" style="right:10px"></i>  
                </div>
                <p id="${"warn"+id}" class="text-danger text-center d-none" style="font-size:0.7rem">Merhebe</p>
            </div>
        `
    }
    else if(type=="file"){
        return`
            ${text_label}
            <div class="${class_name}">
                <input id="${id}" name="${id}" class="d-none" type="${type}" onchange="previewImage(event,${id})" accept="image/*">
                <label for="${id}" id="${id+"PreviewContainer"}" class="ratio ratio-1x1">
                    <img src="/img/ResimYukle.png" style="object-fit:contain;">
                    <!-- Resim önizlemesi burada gösterilecek -->
                </label>    
            </div>
        `
    }

}