export default class Tache {
    static cmpt = 0 ;
    constructor(tache,deadline,statut) {
        this.id = ++Tache.cmpt ;
        this.tache = tache ;
        this.deadline = deadline ;
        this.statut = statut ;
    }
}