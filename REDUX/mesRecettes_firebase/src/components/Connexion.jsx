import { useRef } from "react"
import { useDispatch } from "react-redux";
import { SIGN_IN_URL, SIGN_UP_URL } from "../firebaseConfig";
import { setUser } from "../auth/authSlice";
import { useNavigate } from "react-router-dom";

const Connexion = () => {

    const dispatch = useDispatch();

    const netscape = useNavigate();

    const refmail = useRef();
    const refpasswd =useRef();


    const signUp = async () => {
        const email = refmail.current.value;
        const password = refpasswd.current.value;

        const credentials = {
            email,
            password,
            returnSecureToken: true
        }

        const URL = SIGN_UP_URL ;

        try {
            const response = await fetch(URL,{
                method:'POST',
                header: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(credentials)
            })

            if (!response.ok) {
                throw new Error("Problème Connexion.jsx signUp")
            }

            const data = await response.json()
            console.log(data);

            localStorage.setItem("TP_recette_token",data.idToken);
            dispatch(setUser(data))
        } catch(error) {
            console.error(error.message);
        }

        netscape('/lesRecettes');

    }


    const singIn = async () => {

        const email = refmail.current.value;
        const password = refpasswd.current.value;

        const credentials = {
            email,
            password,
            returnSecureToken: true
        }

        const URL = SIGN_IN_URL

        try {
            const response = await fetch(URL,{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(credentials)
            })

            if (!response.ok) {
                throw new Error("Problème avec le SingIn")
            }

            const data = await response.json()
            console.log(data);

            localStorage.setItem("TP_recette_token",data.idToken)
            dispatch(setUser(data))

        } catch(error) {
            console.error(error.message);
        }

        netscape('/lesRecettes')

    }


    return (
        <>
            <h3>Indentification</h3>
            <form action="#">
                <div>
                    <label htmlFor="email">Email : </label>
                    <input type="email" name="email" id="email" ref={refmail}/>
                </div>
                <div>
                    <label htmlFor="passwd">Mot de passe :</label>
                    <input type="password" name="passwd" id="passwd" ref={refpasswd}/>
                </div>
                <div>
                    <button type="button" onClick={signUp}>Créer un compte</button>
                    <button type="button" onClick={singIn}>Se connecter</button>
                </div>
            </form>
        </>
    )
}

export default Connexion