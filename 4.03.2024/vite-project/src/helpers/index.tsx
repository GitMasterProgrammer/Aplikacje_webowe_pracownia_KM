import Homepage from "../pages/Homepage"
import About from "../pages/About"
import AddPost from "../pages/AddPost"
import AddCategory from "../pages/AddCategory"
import GetPosts from "../pages/GetPosts"

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
        path: "/add-post",
        element: <AddPost/>,
        label: "Add post"
    },

    {
        path: "/add-category",
        element: <AddCategory/>,
        label: "Add category"
    },

    {
        path: "/get-posts",
        element: <GetPosts />,
        label: "Get all posts"
    }
]