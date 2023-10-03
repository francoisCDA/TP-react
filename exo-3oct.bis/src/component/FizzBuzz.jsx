import { useState } from "react"

const FizzBuzz = (props) => {

    const [nbFizzBuzz, setNbFizzBuzz] = useState('0');
    const [compt, setCompt] = useState(0);
    
    let nb = compt;

    const fizzbuzz = (n) => {

        if (n < 1) {return 0}
        if (n > Number(props.max) ) {return Number(props.max)}
        if (n%3 == 0 && n%5 == 0) {return 'FizzBuzz'}
        if (n%3 == 0) {return 'Fizz'}
        if (n%5 == 0) {return 'Buzz'}
        return n ;
        
    }

    const incr = () => {
        nb++;
        setCompt(nb)
        setNbFizzBuzz(fizzbuzz(compt));
    }
    
    const decr = () => {
        nb-- ;
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