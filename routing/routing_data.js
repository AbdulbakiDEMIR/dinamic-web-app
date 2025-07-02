import { HomePage } from "../pages/home_page.js";
import { AboutPage } from "../pages/about_page.js";
// import { NotFoundPage } from "/pages/404_page_not_found.js";

export const routing_data = [
    {
        path:null,
        page: () => HomePage()
    },
    {
        path: "about",
        page: () => AboutPage()
    }
]