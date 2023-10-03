const Pions = (props) => {

    const colorCodes = [
        '#FF0000',  // Rouge
        '#FFFF00',  // Jaune
        '#008000',  // Vert
        '#0000FF',  // Bleu
        '#FFA500',  // Orange
        '#800000',  // Marron
      
        '#800080',  // Violet
        '#FFC0CB',  // Rose
        '#00FFFF',  // Cyan
        '#008080',  // Teal
        '#FFFFFF',  // Blanc
        '#000000'   // Noir
    ];


    return (
        <>
            {colorCodes.slice(0,props.nbCouleurs).map((couleur,i) => <div key={i} style={{backgroundColor: couleur}}>{couleur}</div>)}
        </>
    )
}

export default Pions