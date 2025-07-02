import { Navbar } from "/components/navbar.js";
import { HomeSection } from "/components/home_section.js";
import { HomeIcons } from "/components/home_icons.js"; 
import { AboutMe } from "/components/about_me.js";
import { Projects } from "/components/projects.js";
import { Blogs } from "/components/blogs.js";
import { Certificates } from "/components/certificates.js";
import { initScrollReveal } from "/js/script.js";

export async function HomePage() {
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
                ${Certificates()}
            `;
            
            initScrollReveal();
            $(document).ready(function(){
                $('.owl-carousel').owlCarousel({
                    loop: true,
                    margin: 10,
                    nav: true,
                    dots: true,
                    responsive: {
                         0: {
                        items: 1 // Mobil: 1 item göster
                        },
                        1024: {
                        items: 1 // Masaüstü: 1 item göster
                        },
                        1920: {
                        items: 2 // Daha büyük ekranlar: 2 item
                        }
                    }
                });
            });
        }
    } catch (error) {
        console.error("Veri çekilirken hata oluştu:", error);
    }
    
    
}
