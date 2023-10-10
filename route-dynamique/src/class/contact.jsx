class Contact {
    constructor(prenom, nom, courriel, telephone) {
        this.prenom = prenom ;
        this.nom = nom ;
        this.courriel = courriel;
        this.telephone = telephone;
        this.id = Date.parse(new Date());
    }
}

export default Contact