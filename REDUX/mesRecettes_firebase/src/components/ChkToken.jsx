import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ChkToken = (props) => { 

    const user = useSelector(state => state.auth.user) ;

    if (user) {

        try {
            const reponse = await fetch(`${BASE_DB_URL}/ingredientSlice.json?auth=${user.idToken}`), {
                methode: "GET",
                // ???
            }
        }

        return (
            <>
                {props.children}
            </>
        )
    } else {
        return  <Navigate to={'/inconnu'} /> 
    }
}

export default ChkToken
