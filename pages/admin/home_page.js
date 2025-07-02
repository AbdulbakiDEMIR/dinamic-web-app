import { Navbar } from "/components/admin/navbar.js";
import { HomeSection } from "/components/admin/home_section.js";
import { HomeIcons } from "/components/admin/home_icons.js"; 
import { AboutMe } from "/components/admin/about_me.js";
import { Projects } from "/components/admin/projects.js";
import { Blogs } from "/components/admin/blogs.js";


export async function AdminHomePage() {
    try {
        const response = await fetch('/php/get_about_me.php');
        const data = await response.json();

        if (data.error) {
            console.error("Hata:", data.error);
        } else {
            document.getElementById('app').innerHTML = `
                ${HomeSection(data["personal_info"])}
                ${Navbar()}
                ${AboutMe(data["tech"], data["experience"])}
                ${HomeIcons()}
                ${Projects(data["projects"])}
                ${Blogs(data["blogs"])}
            `;
        }
    } catch (error) {
        console.error("Veri çekilirken hata oluştu:", error);
    }

}
