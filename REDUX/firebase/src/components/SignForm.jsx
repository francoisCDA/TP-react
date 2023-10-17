import { useDispatch, useSelector } from "react-redux"
import { setAuthMode } from "./auth/authSlice";
import { useRef } from "react";
import { SIGN_IN_URL, SIGN_UP_URL } from "../firebaseConfig";

const SignForm = () => {
    const authMode = useSelector(state => state.auth.authMode);
    const dispatch = useDispatch();

    const refEmail = useRef();
    const refPasswd = useRef();
    
    const submitFormHandler = async (event) => {
        event.preventDefault();

        const email = refEmail.current.value;
        const password = refPasswd.current.value;

        const credentials = {
            email,
            password,
            returnSecureToken: true
        }

        const URL = authMode === "Sign In" ? SIGN_IN_URL : SIGN_UP_URL

        try {
            const response = await fetch(URL,{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(credentials)
            })

            if (!response.ok) {
                throw new Error("Something went wrong during the " + authMode)
            }

            const data = await response.json()
            console.log(data);

        } catch(error) {
            console.error(error.message);
        }

    }

    return (
        <>
            <h3>{authMode}</h3>
            <hr />
            <form onSubmit={submitFormHandler}>
                <div>
                    <label htmlFor="email">Email :</label>
                    <input ref={refEmail} type="email" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="password">Password :</label>
                    <input ref={refPasswd} type="password" name="password" id="password" />
                </div>
                <button>{authMode}</button>
            </form>
                <button onClick={() => dispatch(setAuthMode(authMode === "Sign Up" ? "Sign In" : "Sign Up"))}>{authMode === "Sign Up" ? "Sign In" : "Sign Up"}</button>
        </>
    )
}

export default SignForm