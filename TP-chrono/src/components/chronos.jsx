import Chronometre from "./chronometre"

const Chronos = ({lstChronos, rmCh}) => {

    const rm = (ind) => {
        console.log('key : ', ind);
        rmCh(ind);
    }

    return (
        <div className="listeChrono">
            {lstChronos.map( (chrono) => <div key={chrono.id}><span>nom : {chrono.nom}</span>, <span>temps: {chrono.duree}</span> <Chronometre temps={chrono.duree} rm={rm} ind={chrono.id}/> </div>)}
        </div>
    )

}

export default Chronos