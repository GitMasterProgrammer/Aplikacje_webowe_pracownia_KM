import Homepage from "../pages/Homepage"
import About from "../pages/About"


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
    }
]