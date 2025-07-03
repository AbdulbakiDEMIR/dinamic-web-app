import { HomePage } from "../pages/home_page.js";
import { AboutPage } from "../pages/about_page.js";

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