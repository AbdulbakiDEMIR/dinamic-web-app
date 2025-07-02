import { About } from "/components/about.js";

export function AboutPage() {
    document.getElementById('app').innerHTML = `
        ${About()}
    `;
}
