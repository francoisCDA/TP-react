import { useContext, useEffect, useRef } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import CtxContacts from "../context/ctxContacts";
import Contact from "../class/contact";


const FormContact = () => {

    const { id } = useParams();

    const [lstContacts,setLstContacts] = useContext(CtxContacts);

    const [paraOpt] = useSearchParams() ;

    const mode = paraOpt.get('mode') ?? "add" ;

    const refFirst = useRef();
    const refLast = useRef();
    const refMail = useRef();
    const refTel = useRef();
    const refButton = useRef();



    const addContact = () => {
        if (mode == "add") { 
            setLstContacts(prev => [...prev, (new Contact(refFirst.current.value,refLast.current.value,refMail.current.value,refTel.current.value))]);
        } else {
            if (mode == "edit") {
                let newLstContact = [...lstContacts] ;
                
                //const cible = newLstContact.findIndex(ctct => ctct.id == id) ;
                const cible = newLstContact.findIndex(ctct => ctct.id == 1696943734735 ) ;
                console.log('id : ',id)
                console.log('cible : ',cible);
                newLstContact[cible] = new Contact(refFirst.current.value,refLast.current.value,refMail.current.value,refTel.current.value) ;
                setLstContacts(newLstContact);
            }

            if ( mode ==  "delete" ) {
                let newLstContact = lstContacts.filter( ctct => ctct.id != id) ;
                setLstContacts(newLstContact);
            }
        }
    }

    useEffect (()=> {
        refButton.current.innerText = mode ?? "add" ;

        console.log(mode)
        if (mode != "add" && lstContacts.length > 0) {
           // console.log(mode)
            const contactTmp = lstContacts.find( (contact) => contact.id = id )
           // console.dir(contactTmp);
            refFirst.current.value = contactTmp.prenom ;
            refLast.current.value = contactTmp.nom ;
            refMail.current.value = contactTmp.courriel ;
            refTel.current.value = contactTmp.telephone ;
        }
    }, [id])

    useEffect ( () => {
        console.dir(lstContacts);
    }, [lstContacts])

    return (
        <form action="">
            <div className="grpForm">
                <label htmlFor="first"></label>
                <input ref={refFirst} type="text" id="first" name="first" />
            </div>
            <div className="grpForm">
                <label htmlFor="last"></label>
                <input ref={refLast} type="text" id="last" name="last" />
            </div>
            <div className="grpForm">
                <label htmlFor="courriel"></label>
                <input ref={refMail} type="mail" id="courriel" name="courriel" />
            </div>
            <div className="grpForm">
                <label htmlFor="numtel"></label>
                <input ref={refTel} type="text" id="numtel" name="numtel" />
            </div>
            <button ref={refButton} type="button" onClick={addContact} ></button>
        </form>
    )

}

export default FormContact