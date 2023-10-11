import { useRouteError } from "react-router-dom"


const ErrorPage = () => {
    const error = useRouteError()
    return(
        <>
        <h1>Sortie de Route {error.status}</h1>
        <p>{error.data}</p>
        </>
    )
}

export default ErrorPage