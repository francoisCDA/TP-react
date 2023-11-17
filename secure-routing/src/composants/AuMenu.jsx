import { useNavigate, Outlet } from "react-router-dom"


const AuMenu = () => {

    const netscape = useNavigate();

<<<<<<< HEAD

    return (
=======
     return (
>>>>>>> 6d44f0f5a14f061fe7fab15581449d4f7a87a901
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

