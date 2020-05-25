export class Icon { //Classe per modificare la scala delle icone usando tutti i parametri che vuole il json dell'icona.
    public scaledSize:ScaledSize;
    constructor(public url: string, size: number){
        this.scaledSize = new ScaledSize(size,size);
    }

    setSize(size: number) { //imposta il size
        this.scaledSize = new ScaledSize(size,size);
    }
}

export class ScaledSize { // definisce h e w della icona
    constructor(
    public width:  number,
    public height: number){}
}
