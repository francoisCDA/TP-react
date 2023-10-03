import { useState } from "react"

const FizzBuzz = (props) => {

    const [nbFizzBuzz, setNbFizzBuzz] = useState('FizzBuzz');
    const [compt, setCompt] = useState(0);
    
    let nb = compt;

    const fizzbuzz = (n) => {

        if (n%3 == 0 && n%5 == 0) {return 'FizzBuzz'}
        if (n%3 == 0) {return 'Fizz'}
        if (n%5 == 0) {return 'Buzz'}
        return n ;
        
    }

    const incr = () => {
        if (nb<props.max) {nb++} ;
        setCompt(nb)
        setNbFizzBuzz(fizzbuzz(compt));
    }
    
    const decr = () => {
        if (nb>0) {nb--} ;
        setCompt(nb)
        setNbFizzBuzz(fizzbuzz(compt));
    }

    return (
        <>
            <button type="button" onClick={decr}> - </button>
            <input type="text" value={nbFizzBuzz} />
            <button type="button" onClick={incr}> + </button>
            <hr />
        </>

    )

}

export default FizzBuzz