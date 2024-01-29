import Home from "../pages/Home"
import AboutUs from "@/pages/AboutUs";
import Contact from "../pages/Contact"
import Clicker from "@/pages/Clicker";

interface RouteItem {
    path: string
    element: React.JSX.Element
    label: string
}

export const routes: Array<RouteItem> = [
    {
        path: "/",
        element: <Home />,
        label: "Homepage",
    },

    {
        path:"/about-us",
        element: <AboutUs/>,
        label: "AboutUs",
    },

    {
        path: "/contact",
        element: <Contact/>,
        label: "Contact"
    },

    {
        path: "/clicker",
        element: <Clicker/>,
        label: "Clicker"
    }
]