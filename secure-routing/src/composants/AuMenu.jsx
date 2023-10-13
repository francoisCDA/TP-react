import { useNavigate, Outlet } from "react-router-dom"
import { useState } from "react";
import { ctxPanier } from "../context/panier";

const AuMenu = () => {

    const netscape = useNavigate();

    const [panierClient,setPanierClient] = useState([]);

    return (
        <>
            <header style={{display:  "flex"}}>
                <button type="button" onClick={() => netscape('/')}>Acceuil</button>
                <button type="button" onClick={() => netscape("/panier")}>Panier</button>
                <button type="button" onClick={() => netscape("/admin")}>Admin</button>
                
            </header>
            <main>
                <ctxPanier.Provider value={[panierClient,setPanierClient]}>
                 <Outlet></Outlet>
                 </ctxPanier.Provider>
            </main>
        
        </>
    )
}

export default AuMenu

