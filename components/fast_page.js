export function FastPage(content="",name="",class_name="",header=""){

    return`
        <div style="z-index:4" class="fast-page-body">
            <div class="fast-page-content  ${class_name}">
                <input class="d-none" type="checkbox" id="${"FastPage"+name}" name="close">
                <h6  class="position-absolute " style="top:15px; left:15px">
                    ${header}
                </h6>
                <label for="${"FastPage"+name}" class="position-absolute cursor-pointer" style="top:15px; right:15px">
                    <i class="fa-solid fa-x"></i>
                </label>
                <hr>
                <div class="px-4 py-2 fast-page-content-2">
                    ${content}
                </div>
            </div>
        </div>

    `
}

export function FastPageLabel(name,content, class_name="") {
    return `
        <label for="${"FastPage"+name}" class="${class_name}">${content}</label>
    `
}