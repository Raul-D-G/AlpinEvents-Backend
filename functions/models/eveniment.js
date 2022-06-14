class Eveniment {
  constructor(
    id,
    nume,
    organizator,
    nrPersoane,
    data,
    idMeniu,
    avans,
    pret,
    plata,
    uid,
    image
  ) {
    this.id = id;
    this.nume = nume;
    this.organizator = organizator;
    this.nrPersoane = nrPersoane;
    this.data = data;
    this.idMeniu = idMeniu;
    this.avans = avans;
    this.pret = pret;
    this.plata = plata;
    this.uid = uid;
    this.image = image;
  }
}

module.exports = Eveniment;
