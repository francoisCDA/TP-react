const Chronos = ({lstChronos}) => {

    const rmkList () => {
        let ret = [] ;
        for (let i = 0 ; i < lstChronos[0].lenght ; i++ )
    }


    return (
        <div className="listeChrono">
        {(rmkList()).map( chrono => <div><span>{chrono}</span></div>)}
        </div>
    )


}

export default Chronos