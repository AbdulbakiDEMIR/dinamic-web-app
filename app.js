import { renderApp } from "./routing/routing.js";
import config from "./config.js"


function changeUrl(newPath) {
    history.pushState(null, "", config.basePath+newPath); // URL'yi değiştir
    renderApp(); // URL değiştikten sonra hemen render et
}
window.changeUrl = changeUrl;

// Uygulamayı başlatma fonksiyonu
export function App() {
    // İlk yüklemede renderApp'i çağır
    renderApp();
    // URL değişikliklerini dinle
    window.addEventListener("popstate", renderApp);
}

App()
