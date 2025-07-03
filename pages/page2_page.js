import { PageComponent2 } from "../components/page2.js";

export function Page2() {
    document.getElementById('app').innerHTML = `
        ${PageComponent2()}
    `;
}
