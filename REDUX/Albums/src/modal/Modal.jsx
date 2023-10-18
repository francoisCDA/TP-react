import styles from "./modal.module.css"

const Modal = (props) => {
    return ( 
        <div className={styles.modal}>
            <div className={styles.innerModal}>
                <div><button type="button" onClick={props.cbFermer}>X</button></div>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
 
export default Modal;