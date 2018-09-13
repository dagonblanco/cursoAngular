// Tipos de datos primitivos
// String 
var saludo;
saludo = 'Hola Mundo';
// Number
var cantidad;
cantidad = 9.5;
// Boolean
var isHappy;
isHappy = false;
// Arrays
var claves;
var valores;
claves = ['alpha', 'bravo'];
// Any (elimina inferencia de tipos en asignación inicial)
var income = 'No asignado';
income = 50;
// Enum
var Header;
(function (Header) {
    Header[Header["id"] = 0] = "id";
    Header[Header["version"] = 1] = "version";
    Header[Header["channel"] = 2] = "channel";
})(Header || (Header = {}));
;
var header = Header.id;
// Enum con valores
var TallaUK;
(function (TallaUK) {
    TallaUK[TallaUK["uk5"] = 42] = "uk5";
    TallaUK[TallaUK["uk4"] = 40] = "uk4";
})(TallaUK || (TallaUK = {}));
;
var talla = TallaUK.uk4;
// Void
function procesarSaludo() {
    // return 'Error de compilación';
}
// Undefined
var indefinida = null;
// Tipado de objetos
var jugador1;
jugador1 = { name: 'Pepe', edad: 40 };
var jugador2;
var ean;
ean = 40;
ean = 'XX';
var razaToby = 'Chihuahua';
// Tipado en funciones
function suma(a, b) {
    // No complia: return 'Sumado';
    return a + b;
}
// Parámetros opcionales
function multiplica(a, b, mensaje) {
    var resultado = a + b;
    return mensaje ? mensaje + resultado : "Multiplicacion result\u00F3 " + resultado;
}
// Tipos genéricos (definición en tiempo de ejecución)
function devuelveResultado(a) {
    return a;
}
var b = devuelveResultado('Aprobado');
var c = devuelveResultado(5);
