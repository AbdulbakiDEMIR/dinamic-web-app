import { HomePage } from "/pages/home_page.js";
import { NotFoundPage } from "/pages/404_page_not_found.js";

export const routing_data = [
    {
        path:"/",
        page: () => HomePage()
    },
    {
        path: "/about",
        page: () => HomePage()
    }
]