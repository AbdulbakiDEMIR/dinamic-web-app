export function Resume(data) {
    const skillItems = data.content.map(skill => `
        <li class="col">
            <i class="${skill.icon}"></i>
            ${skill.text}
        </li>
    `).join(''); 
    return `
        <div class="row row-cols-2 mb-3 px-3">
            <h6 class="w-100 mb-3">${data.header}</h6>
            <hr class="w-100"/>
            ${skillItems}
        </div>
    `
}
