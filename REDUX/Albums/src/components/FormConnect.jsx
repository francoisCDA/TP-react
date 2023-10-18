import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axioSignIn, axiosSignUp, setAuthMode } from "../auth/authSlice";


const FormConnect = () => {

    const typeConnect = useSelector( state => state.auth.authMode);

    const dispatch = useDispatch();

    const refemail = useRef();
    const refpasswd = useRef();

    const sign = () => {
        const credential = { 
            email: refemail.current.value,
            password: refpasswd.current.value
        }

        if (typeConnect =="signIn") {
            dispatch(axioSignIn(credential))
        } else {
            dispatch(axiosSignUp(credential))
        }

    }



    return ( 
        <>
            <div>
                <button type="button" onClick={ dispatch(setAuthMode( typeConnect == "signIn" ? "signUp" : "signIn")) }>{typeConnect == "signIn" ? "Créer un compte" : "S'identifier"}</button>
            </div>
            <form>
                <div className="grpForm">
                    <label htmlFor="email">Courriel</label>
                    <input type="email" id="email" name="email" ref={refemail} />
                </div>
                <div className="grpForm">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" id="password" name="password" ref={refpasswd} />
                </div>
                <button type="button" onClick={sign}>{typeConnect == "signIn" ? "Se connecter" : "Créer un compte"}</button>
            </form>
        
        </>


    );
}
 
export default FormConnect;