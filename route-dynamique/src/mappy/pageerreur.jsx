import { useRouteError } from "react-router-dom";

const PageErreur = () => {

    const erreur = useRouteError()
    return (
        <>
        <h1>sortie de route</h1>
        <h3>Erreur {erreur.status}</h3>
        <h3>{console.data};</h3>
        </>

    )
}

export default PageErreur