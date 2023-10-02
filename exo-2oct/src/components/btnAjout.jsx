import { useState } from "react";

const BtnAjout = (props) => {

    const [monTxt,setMonTxt] = useState([]);
    const [inputValue,setInputValue] = useState(-3);

    const randomNum = () => {
        if (inputValue == 0) {
            setMonTxt(monTxt.filter(val => val > 0))
        } else {
            setMonTxt([...monTxt, inputValue<0 ? inputValue : Math.round(Math.random()*1000)])
        }
    }

    const chInputValue = (event) =>  {
        setInputValue(event.target.value)
    }
    
    return (
        <>

        <input type="number" value={inputValue} onChange={chInputValue} />
        <button onClick={randomNum}>Click me</button>

        {monTxt.map( (txt,i) => <div><span key={i}>{txt}</span><hr/></div> )}
        
        </>
    )
}

export default BtnAjout;