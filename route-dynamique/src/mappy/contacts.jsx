import { useNavigate } from "react-router-dom"
import CtxContacts from "../context/ctxContacts";
import { useContext } from "react";
import LiContact from "./components/LiContact";


const ContactsList = () => {

    const [lstContacts,_] = useContext(CtxContacts);

    const netscape = useNavigate()

    const addContact = () => {
        netscape("/contacts/add");
    }

    
    return (
        <>
            <h3>Liste de Contact <button type="button" onClick={addContact}>Add</button></h3>
            <hr />
            <ul>
                { lstContacts.length > 0 && lstContacts.map( (contact,i) => <LiContact key={i} contact={contact} /> ) }
            </ul>
        </>
    )
}

export default ContactsList