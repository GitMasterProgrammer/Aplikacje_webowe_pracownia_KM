import Homepage from "../pages/Homepage"
import About from "../pages/About"
import Contact from "../pages/Contact"

interface RouteItem {
    path: string
    element: React.JSX.Element
    exact?: boolean
    label: string
}

export const routes: Array<RouteItem> = [
    {
        path: "/",
        element: <Homepage />,
        label: "Homepage",
        exact: true
    },

    {
        path:"/about",
        element: <About/>,
        label: "About",
    },

    {
        path: "/contact",
        element: <Contact/>,
        label: "Contact"
    }
]