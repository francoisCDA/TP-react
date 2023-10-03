const Grille = (props) => {

    const mkLigne = () => {
        
        let ret = ['première ligne'] ;

        for (let i = 0 ; i < props.nbLignes ; i++) {
            ret.push('ligne d essai ' + i);
        }

        console.dir(ret)
        return ret;

    }

    return (
        <>
                {(mkLigne()).map( (ligne,i) => <div key={i}>{ligne}</div>)}
        </>
    )

}

export default Grille