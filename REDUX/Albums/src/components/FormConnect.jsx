import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axioSignIn, axiosSignUp, setAuthMode } from "../auth/authSlice";

import Button from '@mui/material/Button';
import { TextField, Box } from "@mui/material";

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

        //console.dir(credential);

        if (typeConnect =="signIn") {
            dispatch(axioSignIn(credential))
        } else {
            dispatch(axiosSignUp(credential))
        }
        
        dispatch(setAuthMode(''));
    }



    return ( 
        <>

            <form>
{/*                 <div className="grpForm">
                    <label htmlFor="email">Courriel</label>
                    <input type="email" id="email" name="email" ref={refemail} />
                </div>
                <div className="grpForm">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" id="password" name="password" ref={refpasswd} />
                </div>
                <button type="button" onClick={sign}>{typeConnect == "signIn" ? "Se connecter" : "Créer un compte"}</button> */}


                <Box sx={{display: 'Flex', justifyContent: 'center', mb: '2em'}} >
                    <TextField id="email" label="Email" variant="outlined" autoComplete="email" required inputRef={refemail} />
                    <TextField id="password" type="password" autoComplete="current-password" label="Mot de Passe" variant="outlined" required inputRef={refpasswd} />

                    <Button variant="contained" color="primary" type="button" onClick={sign}>{typeConnect == "signIn" ? "Se connecter" : "Créer un compte"}</Button>
                </Box>

            </form>
        

            <Box>
                <Button sx={{display: 'block', m: "auto"}} variant="contained" color="secondary" type="button" onClick={ () => dispatch(setAuthMode( typeConnect == "signIn" ? "signUp" : "signIn")) }>{typeConnect == "signIn" ? "Créer un compte" : "Vous avez un compte"}</Button>
            </Box>

        </>


    );
}
 
export default FormConnect;
