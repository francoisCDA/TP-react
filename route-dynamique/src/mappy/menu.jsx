import { NavLink, Outlet } from "react-router-dom"
import CtxContacts from '../context/ctxContacts'
import { useEffect, useState } from "react"
 
const Menu = () => {


    const [lstContacts,setLstContacts] = useState([]);


    useEffect( () => {
       // console.dir(lstContacts);
    }, [lstContacts])

    return (
        <div>
            <header>
                <h1>Routing dynamique</h1>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/contacts">Contacts</NavLink>
            </header>

            <main>
            <CtxContacts.Provider value={[lstContacts,setLstContacts]}>
                <Outlet />
            </CtxContacts.Provider>
            </main>

            <footer>
                <p>pied de page</p>
            </footer>

        </div>
    )
}

export default Menu