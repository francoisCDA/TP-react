import { Box, Flex, Heading } from "@radix-ui/themes";
import { NavLink, Outlet } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <Box>
                <Flex justify="center" gap="3" >
                    <Heading as="h3">Menu du site</Heading>
                    <NavLink to="/">Acceuil</NavLink>
                    <NavLink to="/projets">Projets</NavLink>
                    <NavLink to="/contacts">Contactez-moi</NavLink>
                    <NavLink to="/apropos">A propos</NavLink>
                </Flex>
            </Box>
            <Outlet />
        </>
    )
}

export default Menu