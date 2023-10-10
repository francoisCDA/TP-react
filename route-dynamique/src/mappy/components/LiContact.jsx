import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

const LiContact = ({contact}) => {

    const netscape = useNavigate() ;

    const linkEdit = () => {
       
        netscape(`/contacts/edit/${contact.id}?mode=edit`)
    }

    const linkSuppr = () => {
        netscape(`/contacts/delete/${contact.id}?mode=delete`)
    }

    useEffect( () => {
        console.log(contact);
    }, [])

    return (
        <li>
          <span>{contact.prenom} {contact.nom} {contact.couriel} {contact.telephone} {`${contact.id}`} </span>
          <button type="button" onClick={linkEdit}>edit</button>
          <button type="button" onClick={linkSuppr}>suppr</button> 
        </li>
    )
}


export default LiContact
