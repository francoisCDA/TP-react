import { useEffect, useState } from "react";
import mesStyles from './exoUseEffect.module.css';

const ExoUseEffect = (props) => {

    const [nbA,setNbA] = useState(0);
    const [nbB,setNbB] = useState(0);
    const [result, setResult] = useState('');

    useEffect( () => {
        if (nbA * nbB == props.atrouver) {
            setResult(`Vous avez trouvé une combinaison gagnante ${nbA} x ${nbB} = ${nbA*nbB} !`)
        } else if (nbA * nbB < props.atrouver) {
            setResult(`Le nombre recherché est plus grand que ${nbA*nbB}`)
        } else (
            setResult(`Le nombre recherché est plus petit que ${nbA*nbB}`)
        )
    }, [nbA,nbB])
    
        const updInputA = (event) => {
            setNbA(event.target.value)
        }
    
        const updInputB = (event) => {
            setNbB(event.target.value)
        }
    


    return (

        <div className={mesStyles.container}>
            <div>
                <label htmlFor="nbA"></label>
                <input type="number" name="nbA" id="nbA" onChange={updInputA} />
                <label htmlFor="nbB"></label>
                <input type="number" name="nbB" id="nbB" onChange={updInputB} />
            </div>
            <div>
                {result}
            </div>        

        </div>
        

    );


}


export default ExoUseEffect ;
