import { createBrowserRouter } from "react-router-dom";
import AuMenu from "../src/composants/AuMenu";
import Home from "../src/composants/Home";
import Panier from "../src/composants/Panier";
import Gendarmerie from "../src/composants/Gendarmerie";
import FormAdmin from "../src/composants/FormAdmin";
import AuthAdmin from "../src/composants/AuthAdmin";
import AcceRefuse from "../src/composants/AcceRefuse";
import ArticleDetails from "../src/composants/ArticleDetails";
import ArticleAdmin from "../src/composants/ArticleAdmin";

const maRoute = createBrowserRouter([
    
    {
        path: "/",
        element: <AuMenu />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/article/:id",
                element: <ArticleDetails />,
            },
            {
                path: "/panier",
                element: <Panier />,
            },
            {
                path: "/admin",
                element: <Gendarmerie><FormAdmin/></Gendarmerie>,
            },
            {
                path: "/admin/article/:id",
                element: <Gendarmerie><ArticleAdmin /></Gendarmerie>,
            },
            { 
                path: "/vospapiers",
                element: <AuthAdmin />,
            },
            {
                path: "/accesinterdit",
                element: <AcceRefuse />,
            }
        ]
    }

])

export default maRoute;
