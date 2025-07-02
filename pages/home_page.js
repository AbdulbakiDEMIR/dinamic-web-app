import { HomeSection } from "../components/home_section.js";

export function HomePage() {
    document.getElementById('app').innerHTML = `
        ${HomeSection()}
    `;
}
