import { renderApp } from "./routing/routing.js";

// Uygulamayı başlatma fonksiyonu
export function App() {
    // İlk yüklemede renderApp'i çağır
    renderApp();
    // URL değişikliklerini dinle
    window.addEventListener("popstate", renderApp);
}

App()
