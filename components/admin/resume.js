export function Resume(data) {
    const skillItems = data.content.map(skill => `
        <li class="col">
            <form onsubmit="update_skill(event)" class="d-flex justify-content-between align-items-center mb-2 w-100">
                <div class="d-flex gap-2 align-items-center" style="width: 70%;">
                    <input class="bg-transparent text-white" type="hidden" name="id" value="${skill.id}" />
                    <input class="bg-transparent text-white" type="text" name="icon" value="${skill.icon}"/>
                    <input class="bg-transparent text-white" type="text" name="text" value="${skill.text}"/>
                </div>
                <div class="d-flex gap-1 justify-content-end align-items-center" style="width: 30%;">
                    <button class="bg-transparent"><i  class="cursor-pointer fs-6 fa-solid fa-check"></i></button>
                    <i onclick="delete_skill(${skill.id})" class="text-danger cursor-pointer fs-6 fa-solid fa-trash-can"></i>
                </div>
            </form>
        </li>
    `).join(''); 
    

    return `
        <div class="row row-cols-1 mb-3 px-3">
            <form onsubmit="update_tech_header(event)" class="d-flex justify-content-between align-items-center mb-2 w-100">
                <input type="hidden" name="id" value="${data.id}" /> 
                <input type="text" name="name" class="w-100 m-0 p-1 bg-transparent text-primary" value="${data.header}" />
                <button class="btn btn-primary btn-sm me-3">Save</button>
                <div onclick="delete_tech_header(${data.id})" class="btn btn-danger btn-sm ">Delete</div>
            </form>
            <hr class="w-100"/>
            ${skillItems}   
            <li class="col">
                <form onsubmit="create_skill(event, ${data.id})" class="d-flex justify-content-between align-items-center mb-2 w-100">
                    <div class="d-flex gap-2 align-items-center" style="width: 85%;">
                        <input class="w-50" type="text" name="icon" value=""/>
                        <input class="w-50" type="text" name="text" value=""/>
                    </div>
                    <div class="d-flex gap-1 justify-content-end align-items-center" style="width: 15%;">
                        <button class="bg-transparent"><i  class="cursor-pointer fs-6 fa-solid fa-plus"></i></button>
                    </div>
                </form>
            </li>
        </div>
    `
}
