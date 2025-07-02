import { FastPageLabel } from "/components/fast_page.js";

export function DateContent(data){
    var experienceItems = ""
    if(data.type == 0){
        
        var i = 0;
        experienceItems = data.contents.map(info => `
            ${DateContentBoxWork(i++, info)}
        `).join(''); 

        experienceItems = ` 
        <div class="w-100 ">
            <div class="date-content-box text-center" style="--value:-1">
                ${FastPageLabel("work_create",`
                    <p>Yeni Deneyim Ekle</p>
                    <i class="fa-solid fs-1 fa-plus cursor-pointer" 
                    onclick="set_work_create_component()"></i>
                `)}
            </div>
        </div>
        ` + experienceItems;

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
                <div class="date-content-box-date rounded-pill text-center" style="min-width: 9rem;">${data.date}</div>
                <div class="ms-auto d-flex gap-3">
                    <i onclick="work_delete(${data.id})" class="fa-solid fa-trash cursor-pointer"></i>
                    ${FastPageLabel("work_update",`
                        <i class="fa-solid fa-pen cursor-pointer" 
                        onclick="set_work_update_component('${data.id}','${data.company}','${data.date}','${data.mission}','${data.explanation}')"></i>
                    `)}
                </div>     
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
            <div class="date-content-box-date rounded-pill text-center" style="min-width: 9rem;">${data.date}</div>
             <div class="ms-auto d-flex gap-3">
                <i class="fa-solid fa-trash cursor-pointer"></i>
                ${FastPageLabel("edu_update",`
                    <i class="fa-solid fa-pen cursor-pointer" 
                    onclick="set_edu_update_component('${data.id}','${data.university}','${data.date}','${data.department}','${data.class}',' ${data.note}')"></i>
                `)}
            </div>  
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