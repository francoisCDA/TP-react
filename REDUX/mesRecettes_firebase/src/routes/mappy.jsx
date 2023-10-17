import { createBrowserRouter } from "react-router-dom";
import ChkToken from "../components/ChkToken";
import Connexion from "../components/Connexion";
import LstRecettes from "../components/LstRecettes";
import AcceRefuse from "../components/AcceRefuse";
import FormRecettes from "../components/FormRecettes";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Connexion />
    },
    {
        path: "/lesRecettes",
        element: <ChkToken><LstRecettes /></ChkToken>
    },
    {
        path: "/AddRecettes",
        element: <ChkToken><FormRecettes /></ChkToken>
    },
    {
        path: "/EditRecettes/:id",
        element: <ChkToken><FormRecettes /></ChkToken>
    },
    {
        path: "/inconnu",
        element: <AcceRefuse />
    }
])

export default routes;