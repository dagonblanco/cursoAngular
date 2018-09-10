var Player = /** @class */ (function () {
    function Player(name, surname, tag) {
        this.ratio = 0;
        this.name = name;
        this.surname = surname;
        this.tag = tag;
        // Ratio vale 0 por inicialización
    }
    Player.prototype.increaseRatio = function () {
        this.ratio++;
    };
    return Player;
}());
var player1 = new Player('John', 'Smith', 666);
// Constructor breve
var Raider = /** @class */ (function () {
    function Raider(name, age, numberOfRaids, ratio) {
        this.name = name;
        this.age = age;
        this.numberOfRaids = numberOfRaids;
        this.ratio = ratio;
        this.ratio = ratio ? ratio : 0; // Valor por defecto para propiedades opcionales
    }
    Raider.prototype.doRaid = function () {
        this.numberOfRaids++;
    };
    return Raider;
}());
var raiderOfTheLostArk = new Raider("Indiana", 40, 3, 100);
var Customer = /** @class */ (function () {
    function Customer(address, idNumber) {
        this.address = address;
        this.idNumber = idNumber;
    }
    return Customer;
}());
