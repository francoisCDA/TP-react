const Pions = ({colorCodes}) => {


    return (
        <>
            {colorCodes.map((couleur,i) => <div key={i} style={{backgroundColor: couleur}}>{couleur}</div>)}
        </>
    )
}

export default Pions