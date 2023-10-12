import { useNavigate } from "react-router-dom"


const AuthAdmin = () => {

    const netscape = useNavigate();

    const confirm = (adminmode = false) => {
        console.log(adminmode);
        if (adminmode) {
            localStorage.setItem("TP-store_AdminConnected","vrai");
            netscape("/admin");
        } else {
            netscape("/accesinterdit");
        }
    }

    return (
        <>
            <h1>Êtes vous un vrai administrateur ? </h1>

            <div>
                <button type="button" onClick={() => confirm(true)}>Oui</button>
                <button type="button" onClick={() => confirm()}>Non</button>
                <button type="button" onClick={() => confirm()}>Ne sais pas</button>
            </div>
        </>
    )
}

export default AuthAdmin