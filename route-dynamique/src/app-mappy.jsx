import { createBrowserRouter } from "react-router-dom";
import Menu from "./mappy/menu";
import PageErreur from "./mappy/pageerreur";
import Acceuil from "./mappy/accueil";
import ContactsList from "./mappy/contacts";
import FormContact from "./mappy/formContact";



const Mappy = createBrowserRouter([
    {
        path : "/",
        element : <Menu />,
        errorElement : <PageErreur />,
        children : [
            {path : "/",
            element: <Acceuil /> },
            {path : "/contacts",
            element : <ContactsList />},
            {path : "/contacts/add",
            element : <FormContact />},
            {path : "/contacts/edit/:id",
            element : <FormContact />},
            {path : "/contacts/delete/:id",
            element : <FormContact />},
        ] 
    },
])

export default Mappy