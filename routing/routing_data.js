import { HomePage } from "/pages/home_page.js";
import { AdminHomePage } from "/pages/admin/home_page.js";
import { AdminPage} from "/pages/admin/admin_page.js";
import { LoginPage } from "/pages/login_page.js";


export const routing_data = [
    {
        path:"/",
        page: () => HomePage()
    },
    {
        path:"/admin",
        // page: () => AdminPage()
        page: () => {
            window.check_session_for_admin_page()
            AdminHomePage()
        }
    },
    {
        path:"/login",
        page: () => {
            window.check_session_for_login_page()
            LoginPage()
        }
    }




]