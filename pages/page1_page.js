import { PageComponent1 } from "../components/page1.js";

export function Page1() {
    document.getElementById('app').innerHTML = `
        ${PageComponent1()}
    `;
}
