import { useNavigate, Outlet } from "react-router-dom"


const AuMenu = () => {

    const netscape = useNavigate();


    return (
        <>
            <header style={{display:  "flex"}}>
                <button type="button" onClick={() => netscape('/')}>Accueil</button>
                <button type="button" onClick={() => netscape("/panier")}>Panier</button>
                <button type="button" onClick={() => netscape("/admin")}>Admin</button>
                
            </header>
            <main>
               
                 <Outlet></Outlet>
                 
            </main>
        
        </>
    )
}

export default AuMenu

