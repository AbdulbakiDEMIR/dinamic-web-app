import { DateContent } from "/components/date_content.js";
import { Resume } from "/components/resume.js"; 

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
