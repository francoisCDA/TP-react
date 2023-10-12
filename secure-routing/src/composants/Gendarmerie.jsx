import { Navigate } from "react-router-dom"

const Gendarmerie = (props) => {

    let auth = localStorage.getItem("TP-store_AdminConnected");

    if (auth == "vrai") {
        return (
            <>
                {props.children}
            </>
        )
    } else {
        return <Navigate to={"/vospapiers"} />
    }

}

export default Gendarmerie