import { useRef } from "react"

const FormUseRef = ({send}) => {
    
    const refInputUsername = useRef();
    const refInputPassword = useRef();

    

    const sendLocal = () => {
        console.log(refInputUsername.current.value);
        send([refInputUsername.current.value,refInputPassword.current.value])
    }

    return (
        <form action="">
            <label htmlFor="username">Nom d'utilisateur</label>
            <input type="text" ref={refInputUsername} name="username" id="username" />
            <label htmlFor="password">Nom d'utilisateur</label>
            <input type="text" ref={refInputPassword} name="password" id="password" />
            <button type="button" onClick={sendLocal} >envoyer</button>
        </form>
                                  //onClick={send([refInputUsername.current.value,refInputPassword.current.value])}
    )
}

export default FormUseRef