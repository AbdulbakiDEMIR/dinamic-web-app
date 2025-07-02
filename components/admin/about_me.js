import { DateContent } from "/components/admin/date_content.js";
import { Resume } from "/components/admin/resume.js"; 
import { FastPage } from "/components/fast_page.js";
import { TextInput } from "/components/input/input.js"


export function AboutMe(tech, experience){
    var dateContentItems = ""
    var resumes = ""

    dateContentItems = experience.map(data => `
        ${DateContent(data)}
    `).join('');

    resumes = tech.map(data => `
        ${Resume(data)}
    `).join('');
    return `
        <section id="aboutMe">
            <div class="container-xxl">
                <div class="row">
                    ${FastPage(`
                        <form onsubmit="work_update(event)">
                            <input type="hidden" id="work_update_id" name="id"/>   
                            ${TextInput("text","work_company_name_update_input", "mb-2 mx-auto ","Company Name")}
                            ${TextInput("text","work_company_date_update_input", "mb-2 mx-auto ","Company Date")}
                            ${TextInput("text","work_company_mission_update_input", "mb-2 mx-auto ","Company Mission")}
                            ${TextInput("textarea","work_company_explanation_update_input", "mb-2 mx-autd ","Company Description")}
                            <button class="btn btn-dark">Güncelle</button>
                        </form>
                    `,"work_update","text-dark W-50","Work Update")}
                    ${FastPage(`
                        <form onsubmit="edu_update(event)">
                            <input type="hidden" id="edu_update_id" name="id"/>   
                            ${TextInput("text","edu_university_update_input", "mb-2 mx-auto ","Education Name")}
                            ${TextInput("text","edu_date_update_input", "mb-2 mx-auto ","Education Date")}
                            ${TextInput("text","edu_department_update_input", "mb-2 mx-auto ","Education Department")}
                            ${TextInput("text","edu_class_name_update_input", "mb-2 mx-autd ","Education Class")}
                            ${TextInput("text","edu_note_update_input", "mb-2 mx-autd ","Education Note")}
                            <button class="btn btn-dark">Güncelle</button>
                        </form>
                    `,"edu_update","text-dark W-50","Edu Update")}
                    ${FastPage(`
                        <form onsubmit="work_create(event)">
                            ${TextInput("text","work_company_name_create_input", "mb-2 mx-auto ","Company Name")}
                            ${TextInput("text","work_company_date_create_input", "mb-2 mx-auto ","Company Date")}
                            ${TextInput("text","work_company_mission_create_input", "mb-2 mx-auto ","Company Mission")}
                            ${TextInput("textarea","work_company_explanation_create_input", "mb-2 mx-autd ","Company Description")}
                            <button class="btn btn-dark">Kaydet</button>
                        </form>
                    `,"work_create","text-dark W-50","Work Create")}
                    <div class="col-12 col-xl-8 mx-auto">
                        <h2 class="animate-top2">Hakkımda</h2>
                        <div class="row row-cols-1 row-cols-md-2">
                            <div class="col">
                                ${dateContentItems}
                            </div>
                            <div class="col">
                                <div class="col mb-4">
                                    <h3 class="animate-bottom mb-4">İlgilenilen Alanlar</h3>
                                        <ul class="animate-left1 d-flex gap-3 flex-column shadow-1 rounded-3 py-3">
                                            <li>Web Programlama</li>
                                            <li>Makine Öğrenmesi</li>
                                            <li>Data Analizi</li>
                                        </ul>
                                </div>
                                <div class="col">
                                    <h3 class="animate-bottom mb-4">İlgilenilen Teknolojiler</h3>
                                    <ul class="animate-left2 aboutMe-list gap-3 d-flex flex-column shadow-1 rounded-3 p-3">
                                        <h5>Create New Hader</h5>
                                        <form onsubmit="create_tech_header(event)" class="d-flex justify-content-between align-items-center mb-2 w-100">
                                            <input type="text" name="name" class="w-50 p-1" value="" />
                                            <button class="btn btn-primary btn-sm me-3">Create</button>
                                        </form>
                                        <hr/>
                                        ${resumes}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
};
