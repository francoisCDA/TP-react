import { useContext, useRef } from "react"
import CtxContacts from "../context/ctxContacts";
import Contact from "../class/contact";


const FormContact = () => {

    const [_,setLstContacts] = useContext(CtxContacts);

    const refFirst = useRef();
    const refLast = useRef();
    const refMail = useRef();
    const refTel = useRef();

    const addContact = () => {
        setLstContacts(prev => [...prev, (new Contact(refFirst.current.value,refLast.current.value,refMail.current.value,refTel.current.value))]);
    }


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
            <button type="button" onClick={addContact} ></button>
        </form>
    )

}

export default FormContact