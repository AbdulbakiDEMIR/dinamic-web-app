export function DateContent(data){
    var experienceItems = ""
    if(data.type == 0){
        var i = 0;
        experienceItems = data.contents.map(info => `
            ${DateContentBoxWork(i++, info)}
        `).join(''); 
    }else{
        var i = 0;
        experienceItems = data.contents.map(info => `
            ${DateContentBoxEducation(i++, info)}
        `).join(''); 
    }
    return `
        <div class="col mb-4">
            <div class="date-content-header animate-bottom">
                <i class="${data.icon}"></i>
                <h3>${data.header}</h3>
            </div>
            <div class="date-content">
                <div class="date-content-line animate-right"></div>
                ${experienceItems}
            </div>
        </div>
    `
}

function DateContentBoxWork(index, data){
    return `
        <div class="date-content-box" style="--value:${index}">
            <div class="date-content-box-header">
                <h6 class="m-0">${data.company}</h6>    
                <div class="date-content-box-date rounded-pill">${data.date}</div>
            </div>
            <hr class="mb-0"/>   
            <ul class="p-0">
                <li class="mb-3">Görev: ${data.mission}</li>
                <li>Açıklama:
                    ${data.explanation}
                </li>
            </ul>
        </div>
    `
}

function DateContentBoxEducation(index, data){
    return `
    <div class="date-content-box" style="--value:${index}">
        <div class="date-content-box-header">
            <h6 class="m-0">${data.university}</h6>    
            <div class="date-content-box-date rounded-pill">${data.date}</div>
        </div>
        <hr class="mb-0"/>   
        <ul class="p-0">
            <li>Bölüm: ${data.department}</li>
            <li>Sınıf: ${data.class} </li>
            <li>Not: ${data.note}</li>
        </ul>
    </div>
    `
}