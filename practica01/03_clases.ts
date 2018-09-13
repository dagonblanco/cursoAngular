class Player {
    public name: string;
    public surname: string;
    tag: number; // public por defecto
    public ratio: number = 0;

    constructor(name: string, surname: string, tag: number) {
        this.name = name;
        this.surname = surname;
        this.tag = tag;
        // Ratio vale 0 por inicialización
    }

    increaseRatio(): void {
        this.ratio++;
    }
}

let player1 = new Player('John', 'Smith', 666);

// Constructor breve
class Raider {
    constructor(public name: string, public age: number, public numberOfRaids: number, public ratio?: number) { // Genera propiedad, constructor y código de asignación automáticamente
        this.ratio = ratio ? ratio : 0; // Valor por defecto para propiedades opcionales
    }

    doRaid(): void {
        this.numberOfRaids++;
    }
}

let raiderOfTheLostArk = new Raider("Indiana", 40, 3, 100);

// Clases e interfaces

interface MasterData {
    address: string;
    idNumber: string;
}

class Customer implements MasterData {

    constructor(public address:string,public idNumber:string){}
}