export default class Chrono {
    constructor(nom, duree) {
        this.nom = nom.value ;
        this.duree = duree.value ;
        this.tempsRestant = duree.value ;
        this.interval = setInterval(this.ticTac,1000);
    }

    ticTac() {
        console.dir(this.nom.value);
        console.dir(this.tempsRestant);
        this.tempsRestant -= 1 ;
    }

}

/// c'était pas une bonne idée mais ça fait des trucs rigolos