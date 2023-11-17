import styles from "./modal.module.css"
import { Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const Modal = (props) => {
    return ( 
        <div className={styles.modal}>
            <div className={styles.innerModal}>
                <div><Button sx={{display: 'block', ml: 'auto'}} variant="text" color="error" type="button" onClick={props.cbFermer}><CloseIcon/></Button></div>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
 
export default Modal;