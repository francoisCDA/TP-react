export default class Film {
    static cmpt = 0 ;
    constructor(titre,annee,pays,genre,real,url) {
        this.id = ++Film.cmpt;
        this.titre = titre ;
        this.annee = annee ;
        this.pays = pays ;
        this.genre = genre ;
        this.real = real ;
        this.url = url ;
    }
}