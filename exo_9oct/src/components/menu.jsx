import { NavLink, Outlet } from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <header>
                <h1>Menu du site</h1>
                <NavLink to="/">Acceuil</NavLink>
                <NavLink to="/projets">Projets</NavLink>
                <NavLink to="/contacts">Contactez-moi</NavLink>
                <NavLink to="/apropos">A propos</NavLink>
            </header>
            <Outlet />
        </div>
    )
}

export default Menu