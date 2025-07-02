import { data } from "/data/nav_data.js";

export function Navbar() {
    const navItems = data.map(nav => `
        <li class="${nav.animate}">
            <a href="${nav.href}" onclick="scrollToSection(event)">${nav.header}</a>
        </li>

    `).join('');


    return `
        <div id="nav-element">
            <div class="container-xxl">
                <i class="fa-solid fa-arrow-right-from-bracket bg-danger" id="logout" onclick="logout()"></i>
                <ul class="nav-list">
                    ${navItems}
                </ul>
            </div>
        </div>`;
                    // <li class="animate-top3"><a onclick="changeUrl('/home')">Projeler</a></li>

}
