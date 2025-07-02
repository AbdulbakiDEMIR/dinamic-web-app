import { routing_data } from "/routing/routing_data.js";
import { NotFoundPage } from "/pages/404_page_not_found.js";

export function renderApp() {
    const url = window.location.pathname; // Yeni URL'yi al
    const route = routing_data.find(route => route.path === url);

    if (route) {
        route.page(); // İlgili sayfa fonksiyonunu çağırır
    } else {
        // Eğer eşleşme yoksa bir 404 sayfası gösterebilirsiniz
        NotFoundPage()
    }

}