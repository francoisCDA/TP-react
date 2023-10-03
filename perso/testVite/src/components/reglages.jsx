const Reglages = ({setting}) => {


    const changsetting = () => {
        setting({
            nbEssais: 7,
            lgSequence: 5,
            nbCouleurs: 12
        })
    }


    return(
        <>
            <button onClick={changsetting} type="button"> change setting</button>
        </>
    )
}

export default Reglages