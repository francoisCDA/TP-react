import { createBrowserRouter } from "react-router-dom";
import Menu from "./components/menu";
import ErrorPage from "./components/errorPage";
import Accueil from "./components/accueil";
import Project from "./components/projets";
import ContactForm from "./components/contactForm";
import About from "./components/about";

const intineraires = createBrowserRouter([
    {path: '/',
    element: <Menu />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: "/",
            element: <Accueil />
        },
        {
            path: "/projets",
            element: <Project />
        },        
        {
            path: "/contacts",
            element: <ContactForm />
        },
        {
            path: "/apropos",
            element: <About/>

        }
    ]
}
])

export default intineraires