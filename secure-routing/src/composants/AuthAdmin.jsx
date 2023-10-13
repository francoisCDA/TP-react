import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"


const AuthAdmin = () => {

    const netscape = useNavigate();

    const [indice,setIndice] = useState(false);

    const reflogin = useRef();
    const refpassword = useRef();


    const login = "RogerAdmin" ;
    const paswd = "var_variable:any=true" ;


    const confirm = (adminmode = false) => {
        if (adminmode) {
            localStorage.setItem("TP-store_AdminConnected","vrai");
            netscape("/admin");
        } else {
            netscape("/accesinterdit");
        }
    }

    const donneindice = () => {
        if (indice) { setIndice(false) } else { setIndice(true) } 
    }

    const testId = () => {
        
        if ( reflogin.current.value == login  && refpassword.current.value == paswd ) { 
            confirm(true) 
        } else {
            confirm();
        }
    }


    return (
        <>
            <h1>Connexion</h1>

            <form action="#">

                <div className="grpForm">
                        <label htmlFor="login">Login</label>
                        <input type="text" id="login" name="login" ref={reflogin} />
                </div>
                <div className="grpForm">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" ref={refpassword} />
                </div>
                
                <div>
                    <button type="button" onClick={testId}>Log In</button>
                    <button type="button" onClick={donneindice}>{ !indice ? "Indice" : "Cacher indice" }</button>
                </div>

            </form>

            
            {indice && <div><p>identifiant : <em>{login}</em></p><p>mot de passe : <em>{paswd}</em></p></div> }
            

        </>
    )
}

export default AuthAdmin