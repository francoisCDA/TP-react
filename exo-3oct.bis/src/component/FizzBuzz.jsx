import { useState } from "react"

const FizzBuzz = (props) => {

    // const [nbFizzBuzz, setNbFizzBuzz] = useState('FizzBuzz');
    // const [compt, setCompt] = useState(0);
    
    const [varFizzBuzz, setVarFizzBuzz] = useState({
        compt : 0 ,
        aff: "FizzBuzz"
    })


    let nb = varFizzBuzz.compt;

    const fizzbuzz = (n) => {
        console.log(n);
        if (n%15 == 0) {return 'FizzBuzz'}
        if (n%3 == 0) {return 'Fizz'}
        if (n%5 == 0) {return 'Buzz'}
        return n ;
        
    }

    const incr = () => {
        if (nb<props.max) {nb++} ;
        setVarFizzBuzz({compt: nb, aff:fizzbuzz(nb)});
    }
    
    const decr = () => {
        if (nb>0) {nb--} ;
        setVarFizzBuzz({compt: nb, aff:fizzbuzz(nb)});
    }

    const updValue = (event) => {
        setVarFizzBuzz({...varFizzBuzz,aff: event.target.value})
    }

    const validValue = (event) => {
        if (event.key == 'Enter' ) {
            if (Number(event.target.value)) {
                let nb2 = Number(event.target.value)
                setVarFizzBuzz({compt: nb2, aff:fizzbuzz(nb2)});
            }
        }
    }

    return (
        <>
            <button type="button" onClick={decr}> - </button>
            <input type="text" onChange={updValue} onKeyUp={validValue} value={varFizzBuzz.aff} />
            <button type="button" onClick={incr}> + </button>
            <hr />
        </>

    )

}

export default FizzBuzz