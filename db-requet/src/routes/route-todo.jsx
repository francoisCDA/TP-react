import { createBrowserRouter } from "react-router-dom";

import AppToDo from "../exoToDo/AppToDo";
import ErrorPage from "./ErrorPage";

const viamichelin = createBrowserRouter([
    {
        path: "/",
        element: <AppToDo/>,
        errorElement: <ErrorPage />
    },
    {
        path: "/edit/:idedit",
        element: <AppToDo/>,
        errorElement: <ErrorPage />
    }
])

export default viamichelin