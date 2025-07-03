import { Page1 } from "../pages/page1_page.js";
import { Page2 } from "../pages/page2_page.js";

export const routing_data = [
    {
        path:null,
        page: () => Page1()
    },
    {
        path: "page2",
        page: () => Page2()
    }
]