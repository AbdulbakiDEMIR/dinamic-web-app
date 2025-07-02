import { Login } from "/components/login/login.js";

export function LoginPage() {
    document.getElementById('app').innerHTML = `
        <section id="login" class="d-flex justify-content-center align-items-center vh-100"> 
            ${Login()}
        </section>
    `;
    
    
}